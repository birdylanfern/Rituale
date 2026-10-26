import { RitualItem } from '../../../types/liturgy';

// Transcribed from the 1954 Collectio Rituum, "Formulæ Brevissimæ" (PDF pp. 4–5; the same two pages are
// reprinted at the back of the book, pp. 282–283). The book prints these in Latin only, with no side-by-side
// English, so every formula is latinOnly (Latin in both modes, as in the Baptism of One Infant) with its
// English kept as the grey "English translation" under it. Headings and rubrics are given in English as well.

const ritual: RitualItem = {
  id: 'formulae-brevissimae',
  titleEnglish: 'Emergency Short Formulas',
  titleLatin: 'Formulæ Brevissimæ',
  category: 'sick_dying',
  badge: 'Emergency',
  categoryLabel: 'Emergency Forms',
  tags: ['emergency', 'short', 'baptism', 'viaticum', 'absolution', 'extreme unction', 'apostolic blessing', 'papal blessing', 'tertiaries', 'articulo mortis'],
  lines: [
    { isHeading: true, textLatin: "Formula Baptismi", textEnglish: "Formula of Baptism" },
    { isRubric: true, textLatin: "Si non habeatur aqua baptismalis et periculum impendeat, Sacerdos utens aqua simplici, ter vel etiam semel infundat aquam super caput baptizandi in modum crucis, dicens:", textEnglish: "If baptismal water is not at hand and danger is imminent, the priest, using plain water, pours it three times, or even once, over the head of the one to be baptized in the form of a cross, saying:" },
    { textLatin: "N., ego te baptízo in nómine Pa ✠ tris, et Fí ✠ lii, et Spíritus ✠ Sancti.", textEnglish: "N., I baptize you in the name of the Father ✠, and of the Son ✠, and of the Holy ✠ Spirit.", latinOnly: true, isSacramental: true },
    { isRubric: true, textLatin: "Si Sacerdos dubitet an infirmus adhuc vivat, dicat:", textEnglish: "If the priest doubts whether the sick person is still alive, he says:" },
    { textLatin: "Si vivis, ego te baptízo in nómine Pa ✠ tris, et Fí ✠ lii, et Spíritus ✠ Sancti.", textEnglish: "If you are alive, I baptize you in the name of the Father ✠, and of the Son ✠, and of the Holy ✠ Spirit.", latinOnly: true, isSacramental: true },

    { isHeading: true, textLatin: "Formula Administrandi Viatici", textEnglish: "Formula for Administering Viaticum" },
    { textLatin: "Accipe, frater{{/}}soror, Viáticum Córporis Dómini nostri Jesu Christi, qui te custódiat ab hoste malígno et perdúcat in vitam ætérnam. Amen.", textEnglish: "Receive, brother{{/}}sister, the Viaticum of the Body of our Lord Jesus Christ, that He may guard you from the wicked enemy and lead you to everlasting life. Amen.", latinOnly: true, isSacramental: true },

    { isHeading: true, textLatin: "Formula Absolutionis Sacramentalis", textEnglish: "Formula of Sacramental Absolution" },
    { textLatin: "Ego te absólvo ab ómnibus censúris et peccátis, in nómine Patris, et Fílii, ✠ et Spíritus Sancti. Amen.", textEnglish: "I absolve you from all censures and sins, in the name of the Father, and of the Son, ✠ and of the Holy Spirit. Amen.", latinOnly: true, isSacramental: true },

    { isHeading: true, textLatin: "Formula Extremæ Unctionis", textEnglish: "Formula of Extreme Unction" },
    { textLatin: "Per istam sanctam Unctió ✠ nem indúlgeat tibi Dóminus quidquid deliquísti. Amen.", textEnglish: "By this holy anoint ✠ ing may the Lord forgive you whatever wrong you have done. Amen.", latinOnly: true, isSacramental: true },
    { isRubric: true, textLatin: "Si Sacerdos dubitet an infirmus adhuc vivat, dicat:", textEnglish: "If the priest doubts whether the sick person is still alive, he says:" },
    { textLatin: "Si vivis, per istam sanctam Unctió ✠ nem indúlgeat tibi Dóminus quidquid deliquísti. Amen.", textEnglish: "If you are alive, by this holy anoint ✠ ing may the Lord forgive you whatever wrong you have done. Amen.", latinOnly: true, isSacramental: true },

    { isHeading: true, textLatin: "Formula Benedictionis Apostolicæ in Articulo Mortis", textEnglish: "Formula of the Apostolic Blessing at the Point of Death" },
    { isRubric: true, textLatin: "Si mors proxime urgeat, dicat:", textEnglish: "If death is close at hand, he says:" },
    { textLatin: "Ego, facultáte mihi ab Apostólica Sede tribúta, indulgéntiam plenáriam et remissiónem ómnium peccatórum tibi concédo. In nómine Patris, et Fílii, ✠ et Spíritus Sancti. ℟. Amen.", textEnglish: "By the faculty granted me by the Apostolic See, I grant you a plenary indulgence and remission of all your sins. In the name of the Father, and of the Son, ✠ and of the Holy Spirit. ℟. Amen.", latinOnly: true, isSacramental: true },
    { textLatin: "Per sacrosáncta humánæ reparatiónis mystéria, remíttat tibi omnípotens Deus omnes præséntis et futúræ vitæ pœnas, paradísi portas apériat, et te ad gáudia sempitérna perdúcat. ℟. Amen.", textEnglish: "Through the most holy mysteries of man’s redemption, may almighty God remit to you all the punishments of this present life and of the life to come, open to you the gates of paradise, and lead you to joys everlasting. ℟. Amen.", latinOnly: true },
    { textLatin: "Benedícat te omnípotens Deus, Pater, et Fílius, ✠ et Spíritus Sanctus. ℟. Amen.", textEnglish: "May almighty God, the Father, and the Son, ✠ and the Holy Spirit, bless you. ℟. Amen.", latinOnly: true },
    { isRubric: true, textLatin: "In casu vero necessitatis sufficit dicere:", textEnglish: "In a case of necessity it suffices to say:" },
    { textLatin: "Ego, facultáte mihi ab Apostólica Sede tribúta, indulgéntiam plenáriam et remissiónem ómnium peccatórum tibi concédo, et benedíco te. In nómine Patris, et Fílii, ✠ et Spíritus Sancti. ℟. Amen.", textEnglish: "By the faculty granted me by the Apostolic See, I grant you a plenary indulgence and remission of all your sins, and I bless you. In the name of the Father, and of the Son, ✠ and of the Holy Spirit. ℟. Amen.", latinOnly: true, isSacramental: true },

    { isHeading: true, textLatin: "Formula Absolutionis Generalis", textEnglish: "Formula of General Absolution" },
    { isRubric: true, textLatin: "impertiendæ Tertiariis sæcularibus in confessionali", textEnglish: "to be imparted to secular Tertiaries in the confessional" },
    { textLatin: "Auctoritáte a Summis Pontifícibus mihi concéssa, plenáriam ómnium peccatórum tuórum indulgéntiam tibi impértior. In nómine Patris, et Fílii, ✠ et Spíritus Sancti. ℟. Amen.", textEnglish: "By the authority granted me by the Supreme Pontiffs, I impart to you a plenary indulgence for all your sins. In the name of the Father, and of the Son, ✠ and of the Holy Spirit. ℟. Amen.", latinOnly: true, isSacramental: true },

    { isHeading: true, textLatin: "Formula Benedictionis Papalis cum indulgentia plenaria in fine contionum (Missionum, Exercitiorum)", textEnglish: "Formula of the Papal Blessing with Plenary Indulgence at the close of sermons (Missions, Retreats)" },
    { isRubric: true, textLatin: "Hæc benedictio fit per unicum signum crucis cum Crucifixo, adhibita formula:", textEnglish: "This blessing is given with a single sign of the cross made with the Crucifix, using the formula:" },
    { textLatin: "Benedíctio Dei omnipoténtis, Patris, et Fílii, ✠ et Spíritus Sancti, descéndat super vos, et máneat semper. ℟. Amen.", textEnglish: "May the blessing of almighty God, the Father, and the Son, ✠ and the Holy Spirit, come down upon you and remain with you always. ℟. Amen.", latinOnly: true },
  ],
};

export default ritual;
