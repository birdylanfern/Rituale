import { RitualItem } from '../../../types/liturgy';

// Not in the 1954 Collectio Rituum, which prints only the short form. This is the Dominican "Benedictio
// Rosariorum Longior" (proper to the Order of Preachers; before 1964 the blessing of rosaries was reserved to
// Dominican priests), as given in Latin by Fr. Augustine Thompson, O.P. (New Liturgical Movement, 12 Oct 2008),
// with the English based on the translation prepared by the Irish Dominican Sisters, put into the "Thou/Thy"
// style used in the rest of the book. Obvious typos in the online Latin were corrected (potestáte, propter,
// visíbili, sǽculo, vobíscum).
const ritual: RitualItem = {
  id: 'blessing-7-rosary-long',
  titleEnglish: 'Blessing of Rosaries (Longer Form)',
  titleLatin: 'Benedictio Rosariorum Longior (Propria Ordinis Prædicatorum)',
  category: 'blessings',
  blessingGroup: 'objects',
  categoryLabel: 'Titulus V: Benedictionale',
  tags: ['rosary', 'rosaries', 'our lady', 'mary', 'chaplet', 'dominican', 'beads', 'confraternity', 'longer form'],
  lines: [
    { isRubric: true, textLatin: 'Sacerdos stolam albam deferens, dicit:', textEnglish: 'The priest, wearing a white stole, says:' },
    { textLatin: '℣. Adjutórium nostrum in nómine Dómini.', textEnglish: '℣. Our help is in the name of the Lord.' },
    { textLatin: '℟. Qui fecit cælum et terram.', textEnglish: '℟. Who made heaven and earth.' },
    { textLatin: '℣. Dóminus vobíscum.', textEnglish: '℣. The Lord be with you.' },
    { textLatin: '℟. Et cum spíritu tuo.', textEnglish: '℟. And with your spirit.' },
    { isHeading: true, textLatin: 'Oratio', textEnglish: 'Prayer' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Orémus. Omnípotens et miséricors Deus, qui propter exímiam caritátem tuam qua dilexísti nos, Fílium tuum unigénitum, Dóminum nostrum Jesum Christum de cælis in terram descéndere, et de beatíssimæ Vírginis Maríæ Dóminæ nostræ útero sacratíssimo, Angelo nuntiánte, carnem suscípere, crucémque ac mortem subíre, et tértia die glorióse a mórtuis resúrgere voluísti, ut nos eríperes de potestáte diáboli: obsecrámus imménsam cleméntiam tuam ut hæc signa {{(}}{{vel}} hoc signum{{)}} Rosárii in honórem et laudem ejúsdem Genetrícis Fílii tui ab Ecclésia tua fidéli dicáta {{(}}{{vel}} dicátum{{)}} bene ✠ dícas et sanctí ✠ fices, eísque {{(}}{{vel}} eíque{{)}} tantam infúndas virtútem Spíritus ✠ Sancti, ut quicúmque horum quódlibet {{(}}{{vel}} hoc{{)}} secum portáverit, atque in domo sua revérenter tenúerit, et in eis {{(}}{{vel}} eo{{)}} ad te, secúndum hujus sanctæ Societátis institúta, divína contemplándo mystéria, devóte oráverit, salúbri et perseveránti devotióne abúndet, sitque consors et párticeps ómnium gratiárum, privilegiórum et indulgentiárum, quæ eídem Societáti per Sanctam Sedem Apostólicam concéssa fuérunt, ab omni hoste visíbili et invisíbili semper et ubíque in hoc sǽculo liberétur, et in éxitu suo ab ipsa beatíssima Vírgine María Dei Genetríce tibi plenus bonis opéribus præsentári mereátur. Per eúndem Dóminum nostrum Jesum Christum Fílium tuum, qui tecum vivit et regnat in unitáte ejúsdem Spíritus Sancti Deus, per ómnia sǽcula sæculórum. ℟. Amen.', textEnglish: 'Let us pray. Almighty and merciful God, on account of Thy very great love for us, Thou didst will that Thine only-begotten Son, our Lord Jesus Christ, should come down from heaven to earth, and at the angel’s message take flesh in the most sacred womb of Our Lady, the most blessed Virgin Mary, submit to death on the cross, and rise gloriously from the dead on the third day, in order to deliver us from the power of the devil. We humbly beg Thee, in Thy boundless goodness, to bless ✠ and to sanctify ✠ these rosaries, which Thy faithful Church has consecrated to the honor and praise of the Mother of Thy Son. Let them be endowed with such power of the Holy Spirit ✠ that whoever carries one on his person or reverently keeps one in his home, or devoutly prays to Thee while meditating on the divine mysteries, according to the rules of this holy Society, may abound in wholesome and persevering devotion, and may fully share in all the graces, privileges and indulgences which the Holy See has granted to this Society. May he always and everywhere in this world be shielded from every enemy, visible and invisible, and at his death deserve to be presented to Thee, full of good works, by the most blessed Virgin Mary herself, Mother of God. Through the same Lord Jesus Christ, Thy Son, Who liveth and reigneth with Thee in the unity of the same Holy Spirit, God, for ever and ever. ℟. Amen.' },
    { isRubric: true, textLatin: 'Aspergantur aqua benedicta.', textEnglish: 'Let them be sprinkled with holy water.' }
  ]
};

export default ritual;
