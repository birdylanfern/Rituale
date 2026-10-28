import { RitualItem } from '../types/liturgy';

/**
 * Every rite, blessing and appendix item lives in its own file under ./rites/.
 * This module just collects them, so adding or editing a rite never means
 * touching this file — see src/data/rites/README.md.
 *
 * Order in the list = alphabetical order of the file NAME (folders are ignored),
 * which is why files start with a number: 010-…, 020-…, and so on.
 */
const modules = import.meta.glob<RitualItem>('./rites/**/*.ts', {
  eager: true,
  import: 'default',
});

const baseName = (path: string) => path.slice(path.lastIndexOf('/') + 1);

const rawList: RitualItem[] = Object.entries(modules)
  .sort(([a], [b]) => baseName(a).localeCompare(baseName(b)))
  .map(([, ritual]) => ritual);

const uniqueRituals: RitualItem[] = [];
const seen = new Set<string>();
for (const r of rawList) {
  if (seen.has(r.id)) {
    if (import.meta.env.DEV) {
      console.warn(`[rites] Duplicate rite id: "${r.id}" (ignored duplicate)`);
    }
  } else {
    seen.add(r.id);
    uniqueRituals.push(r);
  }
}

export const RITUALS_LIST: RitualItem[] = uniqueRituals;
