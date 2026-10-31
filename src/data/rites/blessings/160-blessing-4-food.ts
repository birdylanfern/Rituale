import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'blessing-4-food',
  titleEnglish: 'Blessing of Anything to Eat (Food)',
  titleLatin: 'Benedictio ad Quodcumque Comestibile',
  category: 'blessings',
  blessingGroup: 'nature',
  categoryLabel: 'Titulus V: Benedictionale',
  page: 135,
  tags: ['food', 'eating', 'meal', 'bread', 'table'],
  lines: [
    { textLatin: '℣. Adjutórium nostrum in nómine Dómini.', textEnglish: '℣. Our help is in the name of the Lord.' },
    { textLatin: '℟. Qui fecit cælum et terram.', textEnglish: '℟. Who made heaven and earth.' },
    { textLatin: '℣. Dóminus vobíscum.', textEnglish: '℣. The Lord be with you.' },
    { textLatin: '℟. Et cum spíritu tuo.', textEnglish: '℟. And with your spirit.' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Orémus. Béne ✠ dic, Dómine, creatúram istam, N., ut sit remédium salutáre géneri humáno: et præsta per invocatiónem sancti nóminis tui ut quicúmque ex ea súmpserint, córporis sanitátem et ánimæ tutélam percípiant. Per Christum Dóminum nostrum. ℟. Amen.', textEnglish: 'Let us pray. Bless ✠, O Lord, this N., created by Thee, that it may be a health-giving remedy for mankind; and grant through the invocation of Thy holy name that whoever partakes of it may receive health of body and protection of soul. Through Christ our Lord. ℟. Amen.' },
    { isRubric: true, textLatin: 'Et aspergatur aqua benedicta.', textEnglish: 'And let it be sprinkled with holy water.' }
  ]
};

export default ritual;
