import React, { useDeferredValue, useMemo, useState } from 'react';
import { RitualItem, RitualTheme, LiturgyCategory } from '../types/liturgy';
import { Search, Settings, FileText, Menu, Heart } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { buildSearchIndex, searchRituals, SearchResult } from '../search';
import { BLESSING_GROUPS, CATEGORY_CHIPS } from '../data/categories';
import { CategorySidebar } from './CategorySidebar';
import { FavouriteButton } from './FavouriteButton';

interface Props {
  rituals: RitualItem[];
  onSelectRitual: (r: RitualItem) => void;
  theme: RitualTheme;
  onToggleTheme: () => void;
  onOpenSettings: () => void;
  /** The reading size chosen in Settings; the ritual cards follow it */
  fontSize: number;
  searchQuery: string;
  onSearchQueryChange: (q: string) => void;
  selectedCategory: LiturgyCategory;
  onSelectCategory: (c: LiturgyCategory) => void;
  /** Ids of the rites the reader has liked */
  favourites: string[];
  onToggleFavourite: (id: string) => void;
}

export const RitualListPage: React.FC<Props> = ({
  rituals,
  onSelectRitual,
  theme,
  onToggleTheme,
  onOpenSettings,
  fontSize,
  searchQuery,
  onSearchQueryChange,
  selectedCategory,
  onSelectCategory,
  favourites,
  onToggleFavourite,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const favouriteSet = useMemo(() => new Set(favourites), [favourites]);

  // Built once: accent-folded titles and full text of every rite
  const searchIndex = useMemo(() => buildSearchIndex(rituals), [rituals]);

  // Typing stays instant; the (heavier) text search catches up a moment later
  const deferredQuery = useDeferredValue(searchQuery);
  const results = useMemo(
    () =>
      searchRituals(searchIndex, deferredQuery).filter(
        (r) =>
          selectedCategory === 'all' ||
          (selectedCategory === 'favourites'
            ? favouriteSet.has(r.ritual.id)
            : r.ritual.category === selectedCategory || r.ritual.also?.includes(selectedCategory))
      ),
    [searchIndex, deferredQuery, selectedCategory, favouriteSet]
  );

  // How many rites sit under each sidebar entry (not affected by the search box)
  const counts = useMemo(() => {
    const c: Record<LiturgyCategory, number> = { all: rituals.length, favourites: 0, sacraments: 0, sick_dying: 0, blessings: 0 };
    for (const r of rituals) {
      if (favouriteSet.has(r.id)) c.favourites++;
      c[r.category]++;
      for (const extra of r.also ?? []) if (extra !== r.category) c[extra]++;
    }
    return c;
  }, [rituals, favouriteSet]);
  const categoryLabel = CATEGORY_CHIPS.find((c) => c.id === selectedCategory)?.label ?? '';

  // Section headings in the Blessings view are switched off: blessings are listed in file-name order.
  // To bring the headings back, change `false` to `selectedCategory === 'blessings' && !deferredQuery.trim()`.
  const showBlessingSections = false;
  const sections = useMemo(() => {
    if (!showBlessingSections) return [{ id: 'all', label: '', items: results }];
    const known = new Set(BLESSING_GROUPS.map((g) => g.id as string));
    const groups = BLESSING_GROUPS.map((g) => ({
      id: g.id as string,
      label: g.label,
      items: results.filter((r) => r.ritual.blessingGroup === g.id),
    }));
    // A blessing with no (or an unknown) group is still shown, at the end, never lost
    const other = results.filter((r) => !r.ritual.blessingGroup || !known.has(r.ritual.blessingGroup));
    return [...groups, { id: 'other', label: 'Other', items: other }].filter((g) => g.items.length > 0);
  }, [results, showBlessingSections]);

  const renderCard = ({ ritual: r, inTitle, snippet }: SearchResult) => (
    <div key={r.id} className="relative">
    <button
      onClick={() => onSelectRitual(r)}
      className={`w-full text-left p-3.5 pr-12 rounded-xl border transition-all duration-150 group cursor-pointer block ${
        theme === 'dark'
          ? 'bg-[#1c1815] border-[#2c2621] hover:bg-[#25201b] hover:border-[#423932]'
          : 'bg-[#f7f0e3] border-[#e2d5bd] hover:bg-[#efe4cf] hover:border-[#d0c0a0] shadow-xs'
      }`}
    >
      {r.badge && (
        <span
          className={`inline-block mb-1.5 px-1.5 py-0.5 rounded font-sans font-bold uppercase tracking-wide text-white ${
            theme === 'dark' ? 'bg-[#ea580c]' : 'bg-[#7a1818]'
          }`}
          style={{ fontSize: `${Math.max(10, fontSize * 0.6)}px` }}
        >
          {r.badge}
        </span>
      )}
      <div className="flex items-baseline justify-between gap-2">
        <h2 className="font-bold font-serif leading-snug" style={{ fontSize: `${fontSize}px` }}>
          {r.titleEnglish}
        </h2>
      </div>
      <p
        className={`italic font-serif mt-0.5 ${theme === 'dark' ? 'text-[#e26945]' : 'text-[#963725]'}`}
        style={{ fontSize: `${fontSize * 0.86}px` }}
      >
        {r.titleLatin}
      </p>
      {!inTitle && snippet && (
        <p
          className="mt-1.5 leading-snug line-clamp-2 text-stone-700 dark:text-stone-400"
          style={{ fontSize: `${fontSize * 0.78}px` }}
        >
          {snippet}
        </p>
      )}
    </button>
    <FavouriteButton
      isFavourite={favouriteSet.has(r.id)}
      onToggle={() => onToggleFavourite(r.id)}
      theme={theme}
      className="absolute top-1.5 right-1.5"
    />
    </div>
  );

  return (
    <div
      className={`min-h-screen flex flex-col font-serif select-text transition-colors duration-200 ${
        theme === 'dark'
          ? 'bg-[#141210] text-[#f3ede2]'
          : 'bg-[#f4ede1] text-[#241e17]'
      }`}
    >
      {/* Top Header — stays on screen with the search bar beneath it */}
      <header
        className={`sticky top-0 z-30 border-b ${
          theme === 'dark'
            ? 'bg-[#181513]/95 border-[#2b2520]'
            : 'bg-[#f1e7d6]/95 border-[#dfd3bc] shadow-xs'
        } backdrop-blur-md`}
      >
        <div className="px-4 pt-3.5 pb-2 flex items-center justify-between">
          <div className="w-[72px] flex items-center -ml-1">
            <button
              onClick={() => setIsSidebarOpen((o) => !o)}
              className={`p-1.5 rounded-full transition-colors ${
                theme === 'dark' ? 'text-stone-300 hover:bg-stone-800' : 'text-[#7a1818] hover:bg-black/5'
              }`}
              aria-label={isSidebarOpen ? 'Hide categories' : 'Show categories'}
              aria-expanded={isSidebarOpen}
              aria-controls="category-sidebar"
              title="Categories"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          <h1
            className={`font-serif font-bold text-sm sm:text-base tracking-widest uppercase ${
              theme === 'dark' ? 'text-[#e26945]' : 'text-[#7a1818]'
            }`}
            style={{ fontFamily: 'var(--reading-font)' }}
          >
            THE ROMAN RITUAL
          </h1>

          <div className="w-[72px] flex items-center justify-end gap-1 -mr-1">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              onClick={onOpenSettings}
              className={`p-1.5 rounded-full transition-colors ${
                theme === 'dark'
                  ? 'text-stone-300 hover:bg-stone-800'
                  : 'text-[#7a1818] hover:bg-black/5'
              }`}
              title="Settings"
              aria-label="Open settings"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="px-4 pb-3 max-w-xl mx-auto w-full">
        <div>
          <div
            className={`relative flex items-center rounded-xl border px-3 py-2 transition-colors ${
              theme === 'dark'
                ? 'bg-[#1e1a17] border-[#312a24] focus-within:border-[#e26945]'
                : 'bg-[#ece1cc] border-[#d8cca8] focus-within:border-red-900'
            }`}
          >
            <Search className="w-4 h-4 text-stone-500 mr-2 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchQueryChange(e.target.value)}
              placeholder="Search titles or text…"
              enterKeyHint="search"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              // 16px keeps iPhones from zooming the page when the field is tapped
              style={{ fontSize: '16px' }}
              className="w-full bg-transparent font-serif outline-none placeholder:text-stone-600 placeholder:italic"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchQueryChange('')}
                aria-label="Clear search"
                className="text-xs text-stone-400 hover:text-stone-600 px-1 font-sans"
              >
                ✕
              </button>
            )}
          </div>
        </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 px-4 pt-4 pb-6 max-w-xl mx-auto w-full">
        
        {/* Which category is showing (the sidebar is hidden most of the time) */}
        {selectedCategory !== 'all' && (
          <div
            className="mb-3 flex items-center justify-between font-sans font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400"
            style={{ fontSize: `${Math.max(11, fontSize * 0.62)}px` }}
          >
            <span className="flex items-center gap-1.5">
              {selectedCategory === 'favourites' && <Heart className="w-3.5 h-3.5" />}
              {categoryLabel}
            </span>
            <button
              onClick={() => onSelectCategory('all')}
              className="normal-case tracking-normal font-normal underline underline-offset-2 hover:text-stone-900 dark:hover:text-stone-200"
            >
              Show all
            </button>
          </div>
        )}

        {/* Rituals List Cards */}
        <div className="space-y-2.5">
          {results.length === 0 ? (
            selectedCategory === 'favourites' && !searchQuery.trim() ? (
              <div className="py-12 px-4 text-center text-stone-500 italic" style={{ fontSize: `${fontSize * 0.86}px` }}>
                <Heart className="w-6 h-6 mx-auto mb-2 opacity-60" />
                No favourites yet. Tap the heart on any rite or blessing to keep it here.
              </div>
            ) : (
              <div className="py-12 text-center text-stone-500 italic" style={{ fontSize: `${fontSize * 0.86}px` }}>
                No rituals or blessings found matching "{searchQuery}"
              </div>
            )
          ) : (
            sections.map((section) => (
              <section key={section.id} className="space-y-2.5">
                {section.label && (
                  <h3
                    className="pt-3 first:pt-0 font-sans font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400"
                    style={{ fontSize: `${Math.max(11, fontSize * 0.62)}px` }}
                  >
                    {section.label}
                  </h3>
                )}
                {section.items.map(renderCard)}
              </section>
            ))
          )}
        </div>

        {/* Original 1954 Book Reference Footer */}
        <div
          className="mt-8 pt-4 border-t border-stone-300/40 dark:border-stone-800 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-stone-700 dark:text-stone-400"
          style={{ fontSize: `${Math.max(12, fontSize * 0.7)}px` }}
        >
          <span>Collectio Rituum (1954) · {rituals.length} Rites & Blessings</span>
          <a
            href={`${import.meta.env.BASE_URL}Collectio_Rituum_1954.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline text-stone-600 dark:text-stone-400"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Original PDF</span>
          </a>
        </div>

      </div>
      {/* Category sidebar — hidden until opened with the menu button */}
      <CategorySidebar
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        theme={theme}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
        counts={counts}
      />
    </div>
  );
};
