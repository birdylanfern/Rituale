import React from 'react';
import { Heart } from 'lucide-react';
import { RitualTheme } from '../types/liturgy';

interface Props {
  isFavourite: boolean;
  onToggle: () => void;
  theme: RitualTheme;
  className?: string;
}

/** The heart that adds a rite to (or removes it from) the Favourites category. */
export const FavouriteButton: React.FC<Props> = ({ isFavourite, onToggle, theme, className = '' }) => {
  const accent = theme === 'dark' ? 'text-[#ea580c]' : 'text-[#7a1818]';
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      aria-pressed={isFavourite}
      aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
      title={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
      className={`p-1.5 rounded-full transition-colors ${
        theme === 'dark' ? 'hover:bg-stone-800' : 'hover:bg-black/5'
      } ${isFavourite ? accent : 'text-stone-500'} ${className}`}
    >
      <Heart className={`w-5 h-5 ${isFavourite ? 'fill-current' : ''}`} />
    </button>
  );
};
