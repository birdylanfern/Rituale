import { RitualItem } from '../../../types/liturgy';

// Not in the 1954 Collectio Rituum. This is the "Benedictio Cerevisiæ" of the older Rituale Romanum (Titulus VIII,
// blessings of things for ordinary use). Several printings read "sanitátem corpus et ánimæ tutélam"; the
// grammatical "córporis" is used here, as in the other blessings in this book. The English is a new translation
// of the Latin, in the "Thou/Thy" style used elsewhere.
const ritual: RitualItem = {
  id: 'blessing-beer',
  titleEnglish: 'Blessing of Beer',
  titleLatin: 'Benedictio Cerevisiæ',
  category: 'blessings',
  blessingGroup: 'nature',
  categoryLabel: 'Titulus V: Benedictionale',
  tags: ['beer', 'ale', 'brewing', 'brewery', 'drink', 'cerevisiae', 'grain', 'wheat'],
  lines: [
    { isRubric: true, textLatin: 'Sacerdos, superpelliceo et stola alba indutus, dicit:', textEnglish: 'The priest, vested in surplice and white stole, says:' },
    { textLatin: '℣. Adjutórium nostrum in nómine Dómini.', textEnglish: '℣. Our help is in the name of the Lord.' },
    { textLatin: '℟. Qui fecit cælum et terram.', textEnglish: '℟. Who made heaven and earth.' },
    { textLatin: '℣. Dóminus vobíscum.', textEnglish: '℣. The Lord be with you.' },
    { textLatin: '℟. Et cum spíritu tuo.', textEnglish: '℟. And with your spirit.' },
    { isHeading: true, textLatin: 'Oratio', textEnglish: 'Prayer' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Orémus. Bene ✠ dic, Dómine, creatúram istam cerevísiæ, quam ex ádipe fruménti prodúcere dignátus es: ut sit remédium salutáre humáno géneri: et præsta per invocatiónem nóminis tui sancti; ut, quicúmque ex ea bibérint, sanitátem córporis et ánimæ tutélam percípiant. Per Christum, Dóminum nostrum. ℟. Amen.', textEnglish: 'Let us pray. Bless ✠, O Lord, this creature, beer, which Thou hast deigned to produce from the fat of the wheat: that it may be a healthful remedy for mankind; and grant, through the invocation of Thy holy name, that whoever shall drink of it may receive health of body and protection of soul. Through Christ our Lord. ℟. Amen.' },
    { isRubric: true, textLatin: 'Et aspergatur aqua benedicta.', textEnglish: 'And it is sprinkled with holy water.' }
  ]
};

export default ritual;
