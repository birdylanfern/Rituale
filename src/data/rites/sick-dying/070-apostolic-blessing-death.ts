import { RitualItem } from '../../../types/liturgy';

// Transcribed from the 1954 Collectio Rituum, "Ritus Benedictionis Apostolicæ cum Indulgentia Plenaria in
// Articulo Mortis" (PDF pp. 77–82, book pp. 59–64). Where the book prints Latin and English side by side
// both are given as printed. The long forms (Dóminus noster…, Per sacrosáncta…, Benedícat te…, Ego,
// facultáte…) are printed in Latin with the English set apart in italics at the foot of the page, so they
// are latinOnly with that English as the grey translation. The rubrics are Latin only in the book; their
// English is a translation. "inpertitur" in the first rubric is as printed.

const ritual: RitualItem = {
  id: 'apostolic-blessing-death',
  titleEnglish: 'Apostolic Blessing at the Hour of Death',
  titleLatin: 'Benedictio Apostolica in Articulo Mortis',
  category: 'sick_dying',
  categoryLabel: 'Care of the Sick & Dying',
  tags: ['apostolic blessing', 'plenary indulgence', 'death', 'articulo mortis'],
  lines: [
    { isHeading: true, textLatin: "Ritus Benedictionis Apostolicæ cum Indulgentia Plenaria in Articulo Mortis", textEnglish: "Rite for the Apostolic Blessing with a Plenary Indulgence for the Hour of Death" },
    { isRubric: true, textLatin: "Quando hujusmodi Benedictio Apostolica pluribus simul infirmis inpertitur, omnia dicuntur semel, singulari tamen numero in pluralem immutato.", textEnglish: "When this Apostolic Blessing is given to several sick persons at once, everything is said once, but with the singular changed to the plural." },

    { isRubric: true, textLatin: "1. Sacerdos, superpelliceo, quantum fieri potest, et stola violacea indutus, ingrediens cubiculum ubi jacet infirmus dicit:", textEnglish: "1. The priest, vested as far as possible in surplice and violet stole, entering the room where the sick person lies, says:" },
    { textLatin: "℣. Pax huic dómui.", textEnglish: "℣. Peace to this house." },
    { textLatin: "℟. Et ómnibus habitántibus in ea.", textEnglish: "℟. And to all who live here." },

    { isRubric: true, textLatin: "2. Deinde ægrotum, circumstantes et cubiculum aspergat aqua benedicta, dicens Antiphonam:", textEnglish: "2. Then he sprinkles the sick person, those present and the room with holy water, saying the antiphon:" },
    { textLatin: "Aspérges me, Dómine, hyssópo, et mundábor: lavábis me, et super nivem dealbábor.", textEnglish: "Sprinkle me, O Lord, with a hyssop, and I shall be purified; wash me, and I shall be whiter than snow." },

    { isRubric: true, textLatin: "3. Quod si ægrotus velit confiteri, audiat illum et absolvat, ut supra notavimus, cap. 1, n. 4.", textEnglish: "3. If the sick person wishes to confess, let him hear and absolve him, as we noted above, chap. 1, n. 4." },
    { isRubric: true, textLatin: "4. Sacerdos ægrotum de hujus Benedictionis efficacia ac virtute, si tempus fuerit, breviter admoneat; tum instruat atque hortetur ut sanctissimum nomen JESU corde saltem invocet, morbi incommoda ac dolores in anteactæ vitæ expiationem libenter perferat, Deoque sese paratum offerat ad ultro acceptandum quidquid ei placuerit et mortem ipsam patienter obeundam in satisfactionem pœnarum quas peccando promeruit.", textEnglish: "4. If there is time, the priest briefly reminds the sick person of the efficacy and power of this Blessing; then he instructs and exhorts him to invoke at least in his heart the most holy name of JESUS, to bear willingly the discomforts and pains of his illness in atonement for his past life, and to offer himself to God, ready freely to accept whatever may please Him, and to undergo death itself patiently in satisfaction for the punishments he has deserved by sinning." },
    { isRubric: true, textLatin: "5. Tum ipsum piis verbis consoletur, in spem erigens fore ut ex divinæ munificentiæ largitate jam pœnarum remissionem et vitam æternam sit consecuturus.", textEnglish: "5. Then let him console him with pious words, raising him to the hope that, out of the generosity of God’s bounty, he will now obtain remission of the punishments and eternal life." },

    { isRubric: true, textLatin: "6. Postea dicat:", textEnglish: "6. Then he says:" },
    { textLatin: "℣. Adjutórium nostrum in nómine Dómini.", textEnglish: "℣. Our help is in the name of the Lord." },
    { textLatin: "℟. Qui fecit cælum et terram.", textEnglish: "℟. Who made heaven and earth." },
    { isRubric: true, textLatin: "Antiphona", textEnglish: "Antiphon" },
    { textLatin: "Ne reminiscáris, Dómine, delícta fámuli tui{{/}}ancíllæ tuæ, neque vindíctam sumas de peccátis ejus.", textEnglish: "Lord, remember not the faults of Thy servant, and do not punish him{{/}}her for his{{/}}her sins." },

    { textLatin: "℣. Kýrie, eléison.", textEnglish: "℣. Lord, have mercy." },
    { textLatin: "℟. Christe, eléison.", textEnglish: "℟. Christ, have mercy." },
    { textLatin: "Kýrie, eléison.", textEnglish: "Lord, have mercy." },
    { textLatin: "℣. Pater noster", textEnglish: "℣. Our Father" },
    { isRubric: true, textLatin: "secreto usque ad", textEnglish: "silently, up to" },
    { textLatin: "℣. Et ne nos indúcas in tentatiónem.", textEnglish: "℣. And lead us not into temptation." },
    { textLatin: "℟. Sed líbera nos a malo.", textEnglish: "℟. But deliver us from evil." },
    { textLatin: "℣. Salvum{{/}}-am fac servum tuum{{/}}ancíllam tuam.", textEnglish: "℣. Grant salvation to Thy servant." },
    { textLatin: "℟. Deus meus, sperántem in te.", textEnglish: "℟. For his{{/}}her hope, O my God, is in Thee." },
    { textLatin: "℣. Dómine, exáudi oratiónem meam.", textEnglish: "℣. O Lord, hear my prayer." },
    { textLatin: "℟. Et clamor meus ad te véniat.", textEnglish: "℟. And let my cry come unto Thee." },
    { textLatin: "℣. Dóminus vobíscum.", textEnglish: "℣. The Lord be with you." },
    { textLatin: "℟. Et cum spíritu tuo.", textEnglish: "℟. And with your spirit." },

    { isRubric: true, textLatin: "Oratio", textEnglish: "Prayer" },
    { textLatin: "Orémus.", textEnglish: "Let us pray." },
    { textLatin: "Clementíssime Deus, Pater misericordiárum et Deus totíus consolatiónis, qui néminem vis perire in te credéntem atque sperántem: secúndum multitúdinem miseratiónum tuárum réspice propítius fámulum tuum, N., quem{{/}}fámulam tuam, N., quam tibi vera fides et spes christiána comméndant. Vísita eum{{/}}eam in salutári tuo, et per Unigéniti tui passiónem et mortem ómnium ei delictórum suórum remissiónem et véniam cleménter indúlge; ut ejus ánima in hora éxitus sui te júdicem propitiátum invéniat et, in sánguine ejúsdem Fílii tui ab omni mácula ablúta, transíre ad vitam mereátur perpétuam. Per eándem Christum, Dóminum nostrum. ℟. Amen.", textEnglish: "O God most kind, the Father of mercies and the God of all consolation, Whose will it is that no one who believes and hopes in Thee should perish; in Thy boundless mercy, look with kindness on Thy servant N., for true faith and Christian hope commend him{{/}}her to Thee. Come to him{{/}}her in Thy saving power, and because of the passion and death of Thy only Son be pleased to grant him{{/}}her remission and pardon of all his{{/}}her sins, so that his{{/}}her soul, when it leaves this life, may find Thee a most favorable Judge and, cleansed from every stain by the Blood of Thy Son, may enter into life everlasting. Through Christ our Lord. ℟. Amen." },

    { isRubric: true, textLatin: "7. Tunc facta, ut supra, confessione generali, Sacerdos dicat:", textEnglish: "7. Then, the general confession having been made as above, the priest says:" },
    { textLatin: "Misereátur tui omnípotens Deus et, dimíssis peccátis tuis, perdúcat te ad vitam ætérnam. ℟. Amen.", textEnglish: "May God Almighty have mercy on you, forgive you your sins, and bring you to life everlasting. ℟. Amen." },
    { textLatin: "Indulgéntiam, absolutiónem, et remissiónem peccatórum tuórum tríbuat tibi omnípotens et miséricors Dóminus. ℟. Amen.", textEnglish: "May the almighty and merciful Lord grant you pardon, absolution, and remission of your sins. ℟. Amen." },

    { isRubric: true, textLatin: "Ac deinde:", textEnglish: "And then:" },
    { textLatin: "Dóminus noster Jesus Christus, Fílius Dei vivi, qui beáto Petro Apóstolo suo dedit potestátem ligándi atque solvéndi, per suam piíssimam misericórdiam recípiat confessiónem tuam et restítuat tibi stolam primam, quam in Baptísmate recepísti. Et ego, facultáte mihi ab Apostólica Sede tribúta, indulgéntiam plenáriam et remissiónem ómnium peccatórum tibi concédo. In nómine Patris, et Fílii, ✠ et Spíritus Sancti. ℟. Amen.", textEnglish: "May our Lord Jesus Christ, the Son of the living God, Who gave to Peter His Apostle the power to bind and to set free, receive, in His most loving mercy, your confession and give back to you that robe of grace which was first given to you in Baptism. And I, by the power given to me by the Apostolic See, grant you a full pardon and the remission of all your sins, in the name of the Father, and of the Son, and of the Holy Spirit. Amen.", latinOnly: true, isSacramental: true },
    { textLatin: "Per sacrosáncta humánæ reparatiónis mystéria remíttat tibi omnípotens Deus omnes præséntis et futúræ vitæ poenas, paradísi portas apériat, et ad gáudia sempitérna perdúcat. ℟. Amen.", textEnglish: "Through the most sacred mysteries of the Redemption of the human race, may almighty God remit all the punishments due to you in this life and in the life to come; may He open to you the gates of heaven, and lead you into everlasting joy. Amen.", latinOnly: true },
    { textLatin: "Benedícat te omnípotens Deus, Pater, et Fílius, ✠ et Spíritus Sanctus. ℟. Amen.", textEnglish: "May almighty God, the Father, the Son, and the Holy Spirit, bless you. Amen.", latinOnly: true },

    { isRubric: true, textLatin: "8. Si vero infirmus sit adeo morti proximus ut neque confessionis generalis faciendæ neque præmissarum precum recitandarum suppetat tempus, statim Sacerdos benedictionem ei impertiatur, dicendo:", textEnglish: "8. But if the sick person is so close to death that there is time neither for the general confession nor for the recitation of the preceding prayers, the priest at once gives him the blessing, saying:" },
    { textLatin: "Ego, facultáte mihi ab Apostólica Sede tribúta, indulgéntiam plenáriam et remissiónem ómnium peccatórum tibi concédo. In nómine Patris, et Fílii, ✠ et Spíritus Sancti. ℟. Amen.", textEnglish: "By the power given to me by the Apostolic See, I grant you a full pardon and the remission of all your sins. In the name of the Father, and of the Son, and of the Holy Spirit. Amen.", latinOnly: true, isSacramental: true },
    { isRubric: true, textLatin: "Per sacrosáncta, etc., ut supra.", textEnglish: "Per sacrosáncta, etc., as above." },
    { isRubric: true, textLatin: "Benedícat te, etc., ut supra.", textEnglish: "Benedícat te, etc., as above." },

    { isRubric: true, textLatin: "In casu vero necessitatis sufficit dicere:", textEnglish: "In a case of necessity it suffices to say:" },
    { textLatin: "Ego, facultáte mihi ab Apostólica Sede tribúta, indulgéntiam plenáriam et remissiónem ómnium peccatórum tibi concédo, et benedíco te. In nómine Patris, et Fílii, ✠ et Spíritus Sancti. ℟. Amen.", textEnglish: "By the power given to me by the Apostolic See, I grant you a full pardon and the remission of all your sins, and I bless you. In the name of the Father, and of the Son, and of the Holy Spirit. Amen.", latinOnly: true, isSacramental: true },
  ],
};

export default ritual;
