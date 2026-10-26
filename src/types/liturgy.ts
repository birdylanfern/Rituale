export type RitualTheme = 'parchment' | 'dark';
export type TextLanguage = 'latin' | 'english';
export type RubricsLanguage = 'latin' | 'english';

export interface RitualVariant {
  id: string;
  label: string;
}

/** The categories a rite itself can belong to (set in its file). */
export type RitualCategory = 'sacraments' | 'sick_dying' | 'blessings';

/**
 * Everything the sidebar can show. 'all' is the "show everything" entry; 'favourites' is the
 * reader's own list of liked rites (kept on their device, not set in any rite file).
 */
export type LiturgyCategory = 'all' | 'favourites' | RitualCategory;

/** Section headings shown inside the Blessings view. */
export type BlessingGroup = 'people' | 'home' | 'objects' | 'nature' | 'general';

export interface LineItem {
  speakerLatin?: string;
  speakerEnglish?: string;
  textLatin: string;
  textEnglish: string;
  isRubric?: boolean;
  isHeading?: boolean;
  isSacramental?: boolean;
  /** Said in Latin only (1954 Decree): sacramental forms, exorcisms, anointings, etc. */
  latinOnly?: boolean;
  /** Printed in English only in the book (e.g. optional closing prayer) */
  englishOnly?: boolean;
  /** Footnote printed at the foot of the page (bilingual) */
  isNote?: boolean;
  /**
   * Number shown as a superscript beside "Note". It matches a [^N] marker placed
   * in the text where the note applies, e.g. "…hábitet[^6] in eo." shows hábitet⁶.
   */
  noteNumber?: number;
  number?: number | string;
  variant?: string; // e.g. 'one' or 'many'
}

export interface RitualItem {
  id: string;
  titleEnglish: string;
  titleLatin: string;
  category: RitualCategory;
  categoryLabel?: string;
  /** Also list this rite under these other categories (e.g. a blessing of the sick) */
  also?: RitualCategory[];
  /** For blessings: which section heading it sits under in the Blessings view */
  blessingGroup?: BlessingGroup;
  /** Small label on the home-page card, e.g. 'Emergency' */
  badge?: string;
  variants?: RitualVariant[];
  defaultVariant?: string;
  lines: LineItem[];
  tags?: string[];
}
