import { RitualItem } from '../../../types/liturgy';

// Collectio Rituum 1954, no. 3 (book pp. 134–135). The blanks in the English (———) stand for the name of the
// thing being blessed.
const ritual: RitualItem = {
  id: 'blessing-3-all-things',
  titleEnglish: 'General Blessing for Things',
  titleLatin: 'Benedictio ad Omnia',
  category: 'blessings',
  blessingGroup: 'general',
  categoryLabel: 'Titulus V: Benedictionale',
  tags: ['general blessing', 'omnia', 'objects', 'all things'],
  lines: [
    { textLatin: '℣. Adjutórium nostrum in nómine Dómini.', textEnglish: '℣. Our help is in the name of the Lord.' },
    { textLatin: '℟. Qui fecit cælum et terram.', textEnglish: '℟. Who made heaven and earth.' },
    { textLatin: '℣. Dóminus vobíscum.', textEnglish: '℣. The Lord be with you.' },
    { textLatin: '℟. Et cum spíritu tuo.', textEnglish: '℟. And with your spirit.' },
    { isHeading: true, textLatin: 'Oratio', textEnglish: 'Prayer' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Orémus. Deus, cujus verbo sanctificántur ómnia, bene ✠ dictiónem tuam effúnde super creatúram istam{{/}}creatúras istas: et præsta ut quisquis ea{{/}}eis secúndum legem et voluntátem tuam cum gratiárum actióne usus fúerit, per invocatiónem sanctíssimi nóminis tui, córporis sanitátem et ánimæ tutélam te auctóre percípiat. Per Christum, Dóminum nostrum. ℟. Amen.', textEnglish: 'Let us pray. O God, by Whose word all things are made holy, pour down Thy blessing ✠ on this ———{{/}}these ——— which Thou hast created, and grant that whoever, giving thanks to Thee, uses it{{/}}them in accordance with Thy law and Thy will may, by calling upon Thy holy name, receive through Thy aid health of body and protection of soul. Through Christ our Lord. ℟. Amen.' },
    { isRubric: true, textLatin: 'Et aspergatur (aspergantur) aqua benedicta.', textEnglish: 'And it is sprinkled (they are sprinkled) with holy water.' }
  ]
};

export default ritual;
