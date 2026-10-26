import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'blessing-2-ashes',
  titleEnglish: 'Distribution of Ashes',
  titleLatin: 'Ad imponendos Cineres',
  category: 'blessings',
  blessingGroup: 'general',
  categoryLabel: 'Titulus V: Benedictionale',
  tags: ['ashes', 'ash wednesday', 'lent', 'dust', 'penance'],
  lines: [
    { isRubric: true, textLatin: 'Sacerdos imponit cineres super capita fidelium, dicens:', textEnglish: 'The priest imposes ashes upon the heads of the faithful, saying:' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', isSacramental: true, textLatin: 'Meménto, homo, quia pulvis es, et in púlverem revertéris.', textEnglish: 'Remember, man, that you are dust and to dust you will return.' }
  ]
};

export default ritual;
