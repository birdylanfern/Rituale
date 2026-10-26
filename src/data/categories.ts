import { BlessingGroup, LiturgyCategory } from '../types/liturgy';

/** The entries in the home-page sidebar, in order. */
export const CATEGORY_CHIPS: { id: LiturgyCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'favourites', label: 'Favourites' },
  { id: 'sacraments', label: 'Sacraments' },
  { id: 'sick_dying', label: 'Sick, Dying & Burial' },
  { id: 'blessings', label: 'Blessings' },
];

/** Section headings inside the Blessings view, in the order they appear. */
export const BLESSING_GROUPS: { id: BlessingGroup; label: string }[] = [
  { id: 'people', label: 'People & Family' },
  { id: 'home', label: 'Home & Places' },
  { id: 'objects', label: 'Objects & Devotions' },
  { id: 'nature', label: 'Food, Animals & Fields' },
  { id: 'general', label: 'General & Feast Days' },
];
