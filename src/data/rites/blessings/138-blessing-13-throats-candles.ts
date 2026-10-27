import { RitualItem } from '../../../types/liturgy';

// Collectio Rituum 1954, no. 13 (book pp. 150–152). The book prints "prærogatívum" (sic) for "hanc prærogatívam";
// corrected here.
const ritual: RitualItem = {
  id: 'blessing-13-throats-candles',
  titleEnglish: 'Blessing of Candles & Throats (St. Blaise, Feb. 3)',
  titleLatin: 'Benedictio Candelarum et Gutturum in Festo S. Blasii',
  category: 'blessings',
  blessingGroup: 'general',
  categoryLabel: 'Titulus V: Benedictionale',
  tags: ['st blaise', 'saint blaise', 'blaise', 'throat', 'throats', 'candles', 'february 3', 'healing', 'sore throat', 'candlemas'],
  lines: [
    { textLatin: '℣. Adjutórium nostrum in nómine Dómini.', textEnglish: '℣. Our help is in the name of the Lord.' },
    { textLatin: '℟. Qui fecit cælum et terram.', textEnglish: '℟. Who made heaven and earth.' },
    { textLatin: '℣. Dóminus vobíscum.', textEnglish: '℣. The Lord be with you.' },
    { textLatin: '℟. Et cum spíritu tuo.', textEnglish: '℟. And with your spirit.' },
    { isHeading: true, textLatin: 'Oratio', textEnglish: 'Prayer' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Orémus. Omnípotens et mitíssime Deus, qui ómnium mundi rerum diversitátes solo Verbo creásti, et ad hóminum reformatiónem illud idem Verbum, per quod facta sunt ómnia, incarnári voluísti: qui magnus es et imménsus, terríbilis atque laudábilis, ac faciens mirabília: pro cujus fídei confessióne gloriósus Martyr et Pontifex Blásius, diversórum tormentórum génera non pavéscens, martýrii pálmam felíciter est adéptus: quíque eídem, inter céteras grátias, hanc prærogatívam contulísti ut quoscúmque gútturis morbos tua virtúte curáret: majestátem tuam supplíciter exorámus, ut non inspéctu reátus nostri, sed ejus placátus méritis et précibus, hanc cérae creatúram bene ✠ dícere ac sancti ✠ ficáre tua venerábili pietáte dignéris, tuam grátiam infundéndo; ut omnes, quorum colla per eam ex bona fide tácta fúerint, a quocúmque gútturis morbo ipsíus passiónis méritis liberéntur, et in Ecclésia sancta tua sani et hilares tibi gratiárum referant actiónes, laudéntque nomen tuum gloriósum, quod est benedíctum in sǽcula sæculórum. Per Dóminum nostrum Jesum Christum, Fílium tuum, qui tecum vivit et regnat in unitáte Spíritus Sancti, Deus, per ómnia sǽcula sæculórum. ℟. Amen.', textEnglish: 'Let us pray. O God most powerful and most kind, Who didst create all the different things in the world by the Word alone, and Whose will it was that this Word by Which all things were made should become incarnate for the remaking of mankind; Thou Who art great and limitless, worthy of reverence and praise, the worker of wonders; for Whose sake the glorious Martyr and Bishop, St. Blaise, joyfully gained the palm of martyrdom, never shrinking from any kind of torture in confessing his faith in Thee; Thou Who didst give to him, amongst other gifts, the prerogative of curing by Thy power every ailment of men’s throats; humbly we beg Thee in Thy majesty not to look upon our guilt, but, pleased by his merits and prayers, in Thine awe-inspiring kindness, to bless ✠ this wax created by Thee and to sanctify ✠ it, pouring into it Thy grace; so that all who in good faith shall have their throats touched by this wax may be freed from every ailment of their throats through the merit of his suffering, and, in good health and spirits, may give thanks to Thee in Thy holy Church and praise Thy glorious name, which is blessed for ever and ever. Through our Lord, Jesus Christ, Thy Son, Who with Thee lives and reigns, in the unity of the Holy Spirit, God, world without end. ℟. Amen.' },
    { isHeading: true, textLatin: 'Benedíctio Gútturum', textEnglish: 'Blessing of Throats' },
    { isRubric: true, textLatin: 'Sacerdos duos cereos hac oratione benedictos, in modum crucis aptatos, apponit sub mento singulorum qui benedicendi sunt, ipsis ante altare genuflectentibus, dicens:', textEnglish: 'The priest holds two candles blessed with this prayer, arranged in the form of a cross, under the chin of each person who is to be blessed, as they kneel before the altar, saying:' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Per intercessiónem sancti Blásii, Epíscopi et Mártyris, líberet te Deus a malo gútturis et a quólibet álio malo. In nómine Patris, et Fílii ✠ et Spíritus Sancti. ℟. Amen.', textEnglish: 'Through the intercession of Saint Blaise, Bishop and Martyr, may God deliver you from ailments of the throat, and from every other evil; in the name of the Father, and of the Son ✠ and of the Holy Spirit. ℟. Amen.' }
  ]
};

export default ritual;
