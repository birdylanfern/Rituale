import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'blessing-st-benedict-medal',
  titleEnglish: 'Blessing of the Medal of Saint Benedict',
  titleLatin: 'Benedictio Numismatis Sancti Benedicti Abbatis',
  category: 'blessings',
  blessingGroup: 'objects',
  categoryLabel: 'Titulus V: Benedictionale',
  tags: ['st benedict', 'saint benedict', 'medal', 'cross', 'exorcism', 'protection', 'benedictine'],
  lines: [
    { isRubric: true, textLatin: 'Sacerdos stola alba indutus dicit:', textEnglish: 'The priest, wearing a white stole, says:' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Adjutórium nostrum in nómine Dómini.', textEnglish: 'Our help is in the name of the Lord.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Qui fecit cælum et terram.', textEnglish: 'Who made heaven and earth.' },
    { isHeading: true, textLatin: 'Exorcismus Numismátum', textEnglish: 'Exorcism of the Medals' },
    { latinOnly: true, speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Exorcízo vos, numísmata, per Deum ✠ Patrem omnipoténtem, qui fecit cælum et terram, mare et ómnia quæ in eis sunt. Omnis virtus adversárii, omnis exércitus diáboli, et omnis incúrsus, omne phantásma sátanæ, eradicáre et effugáre ab his numismátibus: ut fiant ómnibus, qui eis usúri sunt, salus mentis et córporis: in nómine Pa ✠ tris omnipoténtis, et Jesu ✠ Christi Fílii ejus Dómini nostri, et Spíritus ✠ Sancti Parácliti, et in caritáte ejúsdem Dómini nostri Jesu Christi: qui ventúrus est judicáre vivos et mórtuos, et sǽculum per ignem. ℟. Amen.', textEnglish: 'I exorcise you, medals, by God ✠ the Father almighty, Who made heaven and earth, the sea and all that is in them. May every power of the adversary, the whole army of the devil, every assault, and every delusion of Satan be uprooted and put to flight from these medals: so that to all who shall use them, they may be a source of health of mind and body; in the name of God the Father ✠ almighty, and of Jesus ✠ Christ His Son, our Lord, and of the Holy ✠ Spirit the Paraclete, and in the charity of the same Jesus Christ, our Lord: Who shall come to judge the living and the dead and the world by fire. ℟. Amen.' },
    { isHeading: true, textLatin: 'Orátio', textEnglish: 'Prayer' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Dómine, exáudi oratiónem meam.', textEnglish: 'O Lord, hear my prayer.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Et clamor meus ad te véniat.', textEnglish: 'And let my cry come unto Thee.' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Dóminus vobíscum.', textEnglish: 'The Lord be with you.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Et cum spíritu tuo.', textEnglish: 'And with your spirit.' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Orémus. Deus omnípotens, bonórum ómnium largítor, súpplices te rogámus, ut per intercessiónem sancti Benedícti his sacris numismátibus, lítteris ac charactéribus a te designátis, tuam bene ✠ dictiónem infúndas: ut omnes, qui ea gestáverint ac bonis opéribus inténti fúerint, sanitátem mentis et córporis, et grátiam sanctificatiónis, atque indulgéntias percípere mereántur; omnésque diáboli insídias et fraudes, per auxílium misericórdiæ tuæ, effúgere váleant, et in conspéctu tuo sancti et immaculáti appáreant. Per Christum Dóminum nostrum. ℟. Amen.', textEnglish: 'Let us pray. Almighty God, bountiful giver of all good gifts, we humbly beseech Thee that, through the intercession of Saint Benedict, Thou wouldst pour out Thy blessing ✠ upon these sacred medals, with the letters and characters inscribed by Thee: that all who wear them and strive to perform good works may obtain health of mind and body, the grace of sanctification, and the indulgences granted to us; and through the help of Thy mercy may escape all the snares and deceits of the devil, and appear holy and spotless in Thy sight. Through Christ our Lord. ℟. Amen.' },
    { isRubric: true, textLatin: 'Deinde sacerdos aspergit numismata aqua benedicta.', textEnglish: 'Then the priest sprinkles the medals with holy water.' }
  ]
};

export default ritual;
