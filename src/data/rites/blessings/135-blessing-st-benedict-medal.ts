import { RitualItem } from '../../../types/liturgy';

// Not in the 1954 Collectio Rituum. This is the "Benedictio Numismatum Sancti Benedicti" from the
// Propria Ordinis Sancti Benedicti (cf. Rituale Romanum, 1906 ed.), Latin as transcribed on christusregnat.com;
// the English is a new translation of that Latin. Typos in the online transcription were corrected
// (Patre, in conspéctu, immaculáti, numismáta). The Our Father rubric is given as it stands in that source.
const ritual: RitualItem = {
  id: 'blessing-st-benedict-medal',
  titleEnglish: 'Blessing of the Medal of Saint Benedict',
  titleLatin: 'Benedictio Numismatum Sancti Benedicti (Propria Ordinis Sancti Benedicti)',
  category: 'blessings',
  blessingGroup: 'objects',
  categoryLabel: 'Titulus V: Benedictionale',
  tags: ['st benedict', 'saint benedict', 'medal', 'cross', 'crucifix', 'rosary', 'exorcism', 'protection', 'benedictine'],
  lines: [
    { isRubric: true, textLatin: 'Sacerdos benedicturus numismata sancti Benedicti, dicit:', textEnglish: 'The priest who is to bless the medals of Saint Benedict says:' },
    { textLatin: '℣. Adjutórium nostrum ✠ in nómine Dómini.', textEnglish: '℣. Our help ✠ is in the name of the Lord.' },
    { textLatin: '℟. Qui fecit cælum et terram.', textEnglish: '℟. Who made heaven and earth.' },
    { isHeading: true, textLatin: 'Exorcismus', textEnglish: 'Exorcism' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Exorcízo vos, numísmata, {{[}}cruces cum numismátibus et rosária cum crúcibus numísmata cohibéntibus{{]}} per Deum ✠ Patrem omnipoténtem, qui fecit cælum et terram, mare et ómnia, quæ in eis sunt. Omnis virtus adversárii, omnis exércitus diáboli, et omnis incúrsus, omne phantásma sátanæ, eradicáre et effugáre, ab his numismátibus: ut fiant ómnibus qui eis usúri sunt, salus mentis et córporis: in nómine Pa ✠ tris omnipoténtis, et Jesu ✠ Christi Fílii ejus Dómini nostri, et Spíritus ✠ Sancti Parácliti, et in caritáte ejúsdem Dómini nostri Jesu Christi: Qui ventúrus est judicáre vivos et mórtuos, et sǽculum per ignem. ℟. Amen.', textEnglish: 'I exorcise you, medals, {{[}}crosses with medals, and rosaries with crosses containing medals{{]}} by God ✠ the Father almighty, Who made heaven and earth, the sea and all that is in them. May every power of the adversary, the whole army of the devil, every assault and every phantasm of Satan be uprooted and put to flight from these medals: that to all who shall use them they may be health of mind and body: in the name of the Father ✠ almighty, and of Jesus ✠ Christ His Son, our Lord, and of the Holy ✠ Spirit the Paraclete, and in the love of the same Lord Jesus Christ: Who shall come to judge the living and the dead, and the world by fire. ℟. Amen.' },
    { textLatin: '℣. Kýrie, eléison.', textEnglish: '℣. Lord, have mercy.' },
    { textLatin: '℟. Kýrie, eléison.', textEnglish: '℟. Lord, have mercy.' },
    { textLatin: '℣. Christe, eléison.', textEnglish: '℣. Christ, have mercy.' },
    { textLatin: '℟. Christe, eléison.', textEnglish: '℟. Christ, have mercy.' },
    { textLatin: '℣. Kýrie, eléison.', textEnglish: '℣. Lord, have mercy.' },
    { textLatin: '℟. Kýrie, eléison.', textEnglish: '℟. Lord, have mercy.' },
    { isRubric: true, textLatin: 'Sacerdos Orationem Dominicam secrete usque ad versum: “debitoribus nostris” dicit.', textEnglish: 'The priest says the Lord’s Prayer silently, up to the verse: “as we forgive those who trespass against us.”' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Pater noster, qui es in cælis, sanctificétur nomen tuum. Advéniat Regnum tuum. Fiat volúntas tua, sicut in cælo et in terra. Panem nostrum quotidiánum da nobis hódie. Et dimítte nobis débita nostra, sicut et nos dimíttimus debitóribus nostris.', textEnglish: 'Our Father, Who art in heaven, hallowed be Thy name. Thy kingdom come. Thy will be done on earth as it is in heaven. Give us this day our daily bread. And forgive us our trespasses, as we forgive those who trespass against us.' },
    { textLatin: '℣. Et ne nos indúcas in tentatiónem.', textEnglish: '℣. And lead us not into temptation.' },
    { textLatin: '℟. Sed líbera nos a malo.', textEnglish: '℟. But deliver us from evil.' },
    { textLatin: '℣. Salvos fac servos tuos.', textEnglish: '℣. Save Thy servants.' },
    { textLatin: '℟. Deus meus, sperántes in te.', textEnglish: '℟. Who trust in Thee, O my God.' },
    { textLatin: '℣. Esto nobis, Dómine, turris fortitúdinis.', textEnglish: '℣. Be unto us, O Lord, a tower of strength.' },
    { textLatin: '℟. A fácie inimíci.', textEnglish: '℟. From the face of the enemy.' },
    { textLatin: '℣. Dóminus virtútem pópulo suo dabit.', textEnglish: '℣. The Lord will give strength to His people.' },
    { textLatin: '℟. Dóminus benedícet pópulum suum in pace.', textEnglish: '℟. The Lord will bless His people with peace.' },
    { textLatin: '℣. Mitte nobis, Dómine, auxílium de sancto.', textEnglish: '℣. Send us help, O Lord, from the sanctuary.' },
    { textLatin: '℟. Et de Sion tuére nos.', textEnglish: '℟. And from Sion defend us.' },
    { textLatin: '℣. Dómine, exáudi oratiónem meam.', textEnglish: '℣. O Lord, hear my prayer.' },
    { textLatin: '℟. Et clamor meus ad te véniat.', textEnglish: '℟. And let my cry come unto Thee.' },
    { textLatin: '℣. Dóminus vobíscum.', textEnglish: '℣. The Lord be with you.' },
    { textLatin: '℟. Et cum spíritu tuo.', textEnglish: '℟. And with your spirit.' },
    { isHeading: true, textLatin: 'Oratio', textEnglish: 'Prayer' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Orémus. Deus omnípotens, bonórum ómnium largítor, súpplices te rogámus, ut per intercessiónem Sancti Benedícti, his sacris numismátibus, lítteris ac charactéribus a te designátis, tuam bene ✠ dictiónem infúndas: ut omnes, qui ea gestáverint ac bonis opéribus inténti fúerint, sanitátem mentis et córporis, et grátiam sanctificatiónis, atque indulgéntias {{(}}nobis{{)}} concéssas cónsequi mereántur; omnésque diáboli insídias et fraudes, per auxílium misericórdiæ tuæ, effúgere váleant, et in conspéctu tuo sancti et immaculáti appáreant. Per Dóminum nostrum Jesum Christum Fílium tuum: Qui tecum vivit et regnat in unitáte ejúsdem Spíritus Sancti Deus per ómnia sǽcula sæculórum. ℟. Amen.', textEnglish: 'Let us pray. Almighty God, bountiful giver of all good things, we humbly beseech Thee that, through the intercession of Saint Benedict, Thou wouldst pour out Thy blessing ✠ upon these sacred medals, with the letters and characters designated by Thee: that all who wear them and strive to perform good works may deserve to obtain health of mind and body, the grace of sanctification, and the indulgences granted {{(}}to us{{)}}; and by the help of Thy mercy may be able to escape all the snares and deceits of the devil, and appear holy and spotless in Thy sight. Through our Lord Jesus Christ, Thy Son, Who liveth and reigneth with Thee in the unity of the same Holy Spirit, God, for ever and ever. ℟. Amen.' },
    { isHeading: true, textLatin: 'Oratio', textEnglish: 'Prayer' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Orémus. Dómine Jesu Christe, qui voluísti pro totíus mundi redemptióne de Vírgine nasci, circumcídi, a Judǽis reprobári, Judæ ósculo tradi, vínculis alligári, spinis coronári, clavis perforári, inter latrónes crucifígi, láncea vulnerári, et tándem in Cruce mori: per hanc tuam sanctíssimam passiónem humíliter exóro; ut omnes diabólicas insídias et fraudes expéllas ab eo, qui nomen sanctum tuum, his lítteris ac charactéribus a te designátis, devóte invocáverit, et eum ad salútis portum perdúcere dignéris: Qui vivis et regnas cum Deo Patre in unitáte Spíritus Sancti Deus per ómnia sǽcula sæculórum. ℟. Amen.', textEnglish: 'Let us pray. O Lord Jesus Christ, Who for the redemption of the whole world didst will to be born of a Virgin, to be circumcised, to be rejected by the Jews, betrayed by the kiss of Judas, bound with chains, crowned with thorns, pierced with nails, crucified between thieves, wounded by a lance, and at last to die on the Cross: by this Thy most holy Passion I humbly beseech Thee that Thou wouldst drive out all the snares and deceits of the devil from him who devoutly invokes Thy holy name by these letters and characters designated by Thee, and deign to lead him to the haven of salvation: Who livest and reignest with God the Father in the unity of the Holy Spirit, God, for ever and ever. ℟. Amen.' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Pax et benedíctio Dei omnipoténtis, Patris et Fílii ✠ et Spíritus Sancti, descéndat super numísmata {{[}}crúces cum numismátibus et rosária cum crúcibus numísmata cohibéntibus{{]}}, et ea {{(}}eos{{)}} gestántes, et máneat semper. ℟. Amen.', textEnglish: 'May the peace and blessing of almighty God, the Father, and of the Son ✠ and of the Holy Spirit, descend upon these medals {{[}}crosses with medals, and rosaries with crosses containing medals{{]}} and upon those who wear them, and remain forever. ℟. Amen.' },
    { isRubric: true, textLatin: 'Deinde Sacerdos aspergit numismata (cruces cum numismatibus et rosaria cum crucibus numismata cohibentibus).', textEnglish: 'Then the priest sprinkles the medals (the crosses with medals, and the rosaries with crosses containing medals).' }
  ]
};

export default ritual;
