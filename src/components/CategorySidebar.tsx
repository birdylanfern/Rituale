import React, { useEffect } from 'react';
import { Heart, X } from 'lucide-react';
import { RitualTheme, LiturgyCategory } from '../types/liturgy';
import { CATEGORY_CHIPS } from '../data/categories';

interface Props {
  open: boolean;
  onClose: () => void;
  theme: RitualTheme;
  selectedCategory: LiturgyCategory;
  onSelectCategory: (c: LiturgyCategory) => void;
  /** How many rites sit under each entry */
  counts: Record<LiturgyCategory, number>;
}

/**
 * The category list. Slides in from the left over the page and can be hidden again by the
 * button in its corner, by tapping the dimmed page, or with Esc.
 * The outer layer is the same width as the page frame, so on a wide screen the drawer stays
 * beside the content instead of at the far edge of the window.
 */
export const CategorySidebar: React.FC<Props> = ({
  open,
  onClose,
  theme,
  selectedCategory,
  onSelectCategory,
  counts,
}) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const dark = theme === 'dark';

  return (
    <div
      className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-2xl z-40 overflow-hidden pointer-events-none"
      aria-hidden={!open}
      // `inert` keeps the hidden drawer's buttons out of the tab order
      inert={!open}
    >
      {/* Dimmed page behind the drawer */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 transition-opacity duration-200 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0'
        }`}
      />

      <nav
        id="category-sidebar"
        aria-label="Categories"
        className={`absolute inset-y-0 left-0 w-64 max-w-[80%] flex flex-col border-r shadow-2xl transition-transform duration-200 ease-out pointer-events-auto ${
          open ? 'translate-x-0' : '-translate-x-full'
        } ${dark ? 'bg-[#181513] border-[#2b2520] text-[#f3ede2]' : 'bg-[#f1e7d6] border-[#dfd3bc] text-[#241e17]'}`}
      >
        <div
          className={`flex items-center justify-between pl-4 pr-2 pt-[max(0.75rem,env(safe-area-inset-top))] pb-2.5 border-b ${
            dark ? 'border-[#2b2520]' : 'border-[#dfd3bc]'
          }`}
        >
          <span
            className={`font-bold text-sm tracking-widest uppercase ${dark ? 'text-[#e26945]' : 'text-[#7a1818]'}`}
          >
            Categories
          </span>
          <button
            onClick={onClose}
            className={`p-1.5 rounded-full transition-colors ${
              dark ? 'text-stone-300 hover:bg-stone-800' : 'text-[#7a1818] hover:bg-black/5'
            }`}
            aria-label="Hide categories"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto py-2 px-2 space-y-0.5">
          {CATEGORY_CHIPS.map((c) => {
            const isSelected = selectedCategory === c.id;
            return (
              <li key={c.id}>
                <button
                  onClick={() => {
                    onSelectCategory(c.id);
                    onClose();
                  }}
                  aria-current={isSelected ? 'true' : undefined}
                  className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-left transition-colors ${
                    isSelected
                      ? dark
                        ? 'bg-[#ea580c] text-white font-bold'
                        : 'bg-[#7a1818] text-white font-bold'
                      : dark
                      ? 'text-stone-300 hover:bg-[#25201b]'
                      : 'text-stone-800 hover:bg-[#e6d9c0]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {c.id === 'favourites' && <Heart className="w-4 h-4 shrink-0" />}
                    {c.label}
                  </span>
                  <span className={`text-sm tabular-nums ${isSelected ? 'text-white/80' : 'text-stone-500'}`}>
                    {counts[c.id]}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
