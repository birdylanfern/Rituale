import { RitualItem } from '../../../types/liturgy';

// Not in the 1954 Collectio Rituum. Latin is the Benedictio Olei of the older Rituale Romanum (exorcism, then
// the prayer "Dómine Deus omnípotens, cui astat exércitus Angelórum"), which has seven signs of the cross.
// The English is a translation of that Latin in the "Thou/Thy" style used elsewhere.
const ritual: RitualItem = {
  id: 'blessing-oil',
  titleEnglish: 'Blessing of Oil',
  titleLatin: 'Benedictio Olei',
  category: 'blessings',
  blessingGroup: 'objects',
  categoryLabel: 'Titulus V: Benedictionale',
  tags: ['oil', 'olive oil', 'healing', 'exorcism', 'blessing', 'sick', 'protection'],
  lines: [
    { isRubric: true, textLatin: 'Sacerdos, superpelliceo et stola alba indutus, dicit:', textEnglish: 'The priest, vested in surplice and white stole, says:' },
    { textLatin: '℣. Adjutórium nostrum in nómine Dómini.', textEnglish: '℣. Our help is in the name of the Lord.' },
    { textLatin: '℟. Qui fecit cælum et terram.', textEnglish: '℟. Who made heaven and earth.' },
    { isHeading: true, textLatin: 'Exorcismus Ólei', textEnglish: 'Exorcism of the Oil' },
    { latinOnly: true, speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Exorcízo te, creatúra ólei, per Deum ✠ Patrem omnipoténtem, qui fecit cælum et terram, mare, et ómnia, quæ in eis sunt. Omnis virtus adversárii, omnis exércitus diáboli, et omnis incúrsus, omne phantásma sátanæ eradicáre, et effugáre ab hac creatúra ólei, ut fiat ómnibus, qui eo usúri sunt, salus mentis et córporis, in nómine Dei ✠ Patris omnipoténtis, et Jesu ✠ Christi Fílii ejus Dómini nostri, et Spíritus ✠ Sancti Parácliti, et in caritáte ejúsdem Dómini nostri Jesu Christi: qui ventúrus est judicáre vivos et mórtuos, et sǽculum per ignem. ℟. Amen.', textEnglish: 'I exorcise you, creature of oil, by God ✠ the Father almighty, Who made heaven and earth, the sea, and all that is in them. May every power of the adversary, the whole army of the devil, every assault and every phantom of Satan be uprooted and driven away from this creature of oil, so that to all who shall use it, it may be a source of health of mind and body; in the name of God the Father ✠ almighty, and of Jesus ✠ Christ His Son, our Lord, and of the Holy ✠ Spirit the Paraclete, and in the charity of the same Jesus Christ, our Lord: Who shall come to judge the living and the dead and the world by fire. ℟. Amen.' },
    { textLatin: '℣. Dómine, exáudi oratiónem meam.', textEnglish: '℣. O Lord, hear my prayer.' },
    { textLatin: '℟. Et clamor meus ad te véniat.', textEnglish: '℟. And let my cry come unto Thee.' },
    { textLatin: '℣. Dóminus vobíscum.', textEnglish: '℣. The Lord be with you.' },
    { textLatin: '℟. Et cum spíritu tuo.', textEnglish: '℟. And with your spirit.' },
    { isHeading: true, textLatin: 'Orátio', textEnglish: 'Prayer' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Orémus. Dómine Deus omnípotens, cui astat exércitus Angelórum cum tremóre, quorum servítium spirituále cognóscitur: dignáre respícere, bene ✠ dícere, et sancti ✠ ficáre hanc creatúram ólei, quam ex olivárum succo eduxísti, et ex eo infírmos inúngi mandásti, quátenus sanitáte percépta, tibi Deo vivo et vero grátias ágerent: præsta, quǽsumus; ut hi, qui hoc óleo, quod in tuo nómine bene ✠ dícimus, usi fúerint, ab omni languóre, omníque infirmitáte, atque cunctis insídiis inimíci liberéntur, et cunctæ adversitátes separéntur a plasmáte tuo, quod pretióso sánguine Fílii tui redemísti, ut numquam lædátur a morsu antíqui serpéntis. Per eúndem Dóminum nostrum Jesum Christum, Fílium tuum: Qui tecum vivit et regnat in unitáte Spíritus Sancti Deus, per ómnia sǽcula sæculórum. ℟. Amen.', textEnglish: 'Let us pray. O Lord God almighty, before Whom stands the host of angels with trembling, whose spiritual service is well known: deign to look upon, to bless ✠ and sanctify ✠ this creature of oil, which Thou hast brought forth from the fruit of olives, and didst command to be used for the anointing of the sick, so that, having received health, they may give thanks to Thee, the living and true God. Grant, we beseech Thee, that those who use this oil, which we bless ✠ in Thy name, may be delivered from all languor, all infirmity, and all the snares of the enemy; and may all adversities be driven far from Thy handiwork, which Thou hast redeemed with the precious Blood of Thy Son, that it may never be injured by the bite of the ancient serpent. Through the same our Lord Jesus Christ, Thy Son, Who with Thee liveth and reigneth in the unity of the Holy Spirit, God, world without end. ℟. Amen.' },
    { isRubric: true, textLatin: 'Et aspergatur aqua benedicta.', textEnglish: 'And it is sprinkled with holy water.' }
  ]
};

export default ritual;
