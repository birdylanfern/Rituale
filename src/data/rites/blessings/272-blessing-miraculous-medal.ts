import { RitualItem } from '../../../types/liturgy';

// Not in the 1954 Collectio Rituum. Text from "Benedictio et Impositio Sacri Numismatis B.M.V. Immaculatæ,
// vulgo Médaille miraculeuse" (proper to the Congregation of the Mission, approved by the S.R.C. 19 April 1895),
// as reprinted in Laudate Dominum Liturgical Editions, with the English set in the style of the other rites.
const ritual: RitualItem = {
  id: 'blessing-miraculous-medal',
  titleEnglish: 'Blessing and Investiture with the Miraculous Medal',
  titleLatin: 'Benedictio et Impositio Sacri Numismatis B.M.V. Immaculatæ',
  category: 'blessings',
  blessingGroup: 'objects',
  categoryLabel: 'Titulus V: Benedictionale',
  tags: ['miraculous medal', 'medal', 'mary', 'our lady', 'immaculate conception', 'investiture', 'catherine laboure', 'vincentian'],
  lines: [
    { isRubric: true, textLatin: 'Sacerdos benedicturus sacrum Numisma Immaculatæ Virginis Mariæ Conceptionis, superpelliceo et stola alba indutus, dicit:', textEnglish: 'The priest who is to bless the sacred medal of the Immaculate Conception, vested in surplice and white stole, says:' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Adjutórium nostrum in nómine Dómini.', textEnglish: 'Our help is in the name of the Lord.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Qui fecit cælum et terram.', textEnglish: 'Who made heaven and earth.' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Dóminus vobíscum.', textEnglish: 'The Lord be with you.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Et cum spíritu tuo.', textEnglish: 'And with your spirit.' },
    { isHeading: true, textLatin: 'Oratio', textEnglish: 'Prayer' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Orémus. Omnípotens et miséricors Deus, qui per multíplices immaculátæ Maríæ Vírginis apparitiónes in terris mirabília júgiter pro animárum salúte operári dignátus es: super hoc numísmatis signum, tuam bene ✠ dictiónem benígnus infúnde; ut pie hoc recoléntes ac devóte gestántes et illíus patrocínium séntiant et tuam misericórdiam consequántur. Per Christum Dóminum nostrum. ℟. Amen.', textEnglish: 'Let us pray. Almighty and merciful God, Who by the many apparitions on earth of the Immaculate Virgin Mary wert pleased to work wonders continually for the salvation of souls: graciously pour out Thy blessing ✠ upon this sign of the medal, that all who piously revere it and devoutly wear it may experience her patronage and obtain Thy mercy. Through Christ our Lord. ℟. Amen.' },
    { isHeading: true, textLatin: 'Impósitio Numísmatis', textEnglish: 'Investiture with the Medal' },
    { isRubric: true, textLatin: 'Deinde Numisma aspergit aqua benedicta, et ipsum postea imponens dicit:', textEnglish: 'Then he sprinkles the medal with holy water, and afterwards presents it, saying:' },
    { isRubric: true, textLatin: 'Pro uno vel una:', textEnglish: 'For one person, man or woman:' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', isSacramental: true, textLatin: 'Accipe sanctum Numísma, gesta fidéliter, et digna veneratióne proséquere: ut piíssima immaculáta cælórum Dómina te prótegat atque deféndat; et pietátis suæ prodígia rénovans, quæ a Deo supplíciter postuláveris, tibi misericórditer ímpetret, ut vivens ac móriens in matérno ejus ampléxu felíciter requiéscas. ℟. Amen.', textEnglish: 'Receive this holy medal; wear it with faith, and treat it with due reverence: that the most loving Immaculate Queen of heaven may protect and defend you; and, renewing the wonders of her kindness, may she mercifully obtain for you whatever you humbly ask of God, that in life and in death you may rest happily in her motherly embrace. ℟. Amen.' },
    { isRubric: true, textLatin: 'Pro pluribus:', textEnglish: 'For several persons:' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', isSacramental: true, textLatin: 'Accípite sanctum Numísma, gesta fidéliter, et digna veneratióne prosequímini: ut piíssima immaculáta cælórum Dómina vos prótegat atque deféndat; et pietátis suæ prodígia rénovans, quæ a Deo supplíciter postuláveritis, vobis misericórditer ímpetret, ut vivéntes ac moriéntes in matérno ejus ampléxu felíciter requiescátis. ℟. Amen.', textEnglish: 'Receive this holy medal; wear it with faith, and treat it with due reverence: that the most loving Immaculate Queen of heaven may protect and defend you; and, renewing the wonders of her kindness, may she mercifully obtain for you whatever you humbly ask of God, that in life and in death you may rest happily in her motherly embrace. ℟. Amen.' },
    { isRubric: true, textLatin: 'Inde prosequitur:', textEnglish: 'Then he continues:' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Kýrie, eléison. Christe, eléison. Kýrie, eléison.', textEnglish: 'Lord, have mercy. Christ, have mercy. Lord, have mercy.' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Pater noster {{(secreto usque ad:)}}', textEnglish: 'Our Father {{(silently until:)}}' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Et ne nos indúcas in tentatiónem.', textEnglish: 'And lead us not into temptation.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Sed líbera nos a malo.', textEnglish: 'But deliver us from evil.' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Regína sine labe origináli concépta.', textEnglish: 'Queen conceived without original sin.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Ora pro nobis.', textEnglish: 'Pray for us.' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Dómine, exáudi oratiónem meam.', textEnglish: 'O Lord, hear my prayer.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Et clamor meus ad te véniat.', textEnglish: 'And let my cry come unto Thee.' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Dóminus vobíscum.', textEnglish: 'The Lord be with you.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Et cum spíritu tuo.', textEnglish: 'And with your spirit.' },
    { isHeading: true, textLatin: 'Oratio', textEnglish: 'Prayer' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Orémus. Dómine Jesu Christe, qui beatíssimam Vírginem Maríam matrem tuam ab orígine immaculátam innúmeris miráculis claréscere voluísti: concéde; ut ejúsdem patrocínium semper implorántes gáudia consequámur ætérna: Qui vivis et regnas in sǽcula sæculórum. ℟. Amen.', textEnglish: 'Let us pray. Lord Jesus Christ, Who didst will that the most Blessed Virgin Mary, Thy Mother, immaculate from her origin, should shine forth with countless miracles: grant that we who ever implore her patronage may attain eternal joys: Who livest and reignest forever and ever. ℟. Amen.' }
  ]
};

export default ritual;
