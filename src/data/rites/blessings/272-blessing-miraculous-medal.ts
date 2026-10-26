import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'blessing-miraculous-medal',
  titleEnglish: 'Blessing and Investiture with the Miraculous Medal',
  titleLatin: 'Benedictio et Impositio Sacri Numismatis B.M.V. Immaculatæ',
  category: 'blessings',
  blessingGroup: 'objects',
  categoryLabel: 'Titulus V: Benedictionale',
  tags: ['miraculous medal', 'medal', 'mary', 'our lady', 'immaculate conception', 'investiture', 'catherine laboure'],
  lines: [
    { isRubric: true, textLatin: 'Sacerdos superpelliceo et stola alba indutus dicit:', textEnglish: 'The priest, vested in surplice and white stole, says:' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Adjutórium nostrum in nómine Dómini.', textEnglish: 'Our help is in the name of the Lord.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Qui fecit cælum et terram.', textEnglish: 'Who made heaven and earth.' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Dóminus vobíscum.', textEnglish: 'The Lord be with you.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Et cum spíritu tuo.', textEnglish: 'And with your spirit.' },
    { isHeading: true, textLatin: 'Benedíctio Numísmatis', textEnglish: 'Blessing of the Medal' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Orémus. Omnípotens et miséricors Deus, qui per tot apparitiónes in terra Immaculátæ Vírginis Maríæ mirácula júgiter ad salútem animárum patráre dignátus es: bene ✠ dícere dignéris hoc numísma, ut quicúmque id devóte gestáverint ac reveríti fúerint, ejúsdem Maríæ Immaculátæ patrocínium séntiant, et misericórdiam a te cónsequantur. Per Christum Dóminum nostrum. ℟. Amen.', textEnglish: 'Let us pray. Almighty and merciful God, Who by the many apparitions on earth of the Immaculate Virgin Mary wert pleased to work miracles continually for the salvation of souls: deign to bless ✠ this medal, so that all who devoutly wear and revere it may feel the protection of Mary Immaculate and obtain mercy from Thee. Through Christ our Lord. ℟. Amen.' },
    { isRubric: true, textLatin: 'Deinde sacerdos aspergit numisma aqua benedicta.', textEnglish: 'Then the priest sprinkles the medal with holy water.' },
    { isHeading: true, textLatin: 'Impósitio Numísmatis', textEnglish: 'Imposition of the Medal' },
    { isRubric: true, textLatin: 'Postea imponit illud collo personæ, dicens:', textEnglish: 'Afterwards he places it around the neck of the person, saying:' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', isSacramental: true, textLatin: 'Áccipe hoc sacrum numísma, gere cum fide, ac débitâ devotióne tracta: ut te prótegat ac deféndat sancta et Immaculáta Cæli Regína; et cum sit júgiter ad nova benefícia prodigénda paráta, ímpetret tibi in sua misericórdia quidquid a Deo humíliter petíeris, ut et in vita et in morte in ejus matérno sinu pacífice quiéscas. ℟. Amen.', textEnglish: 'Receive this holy medal, wear it with faith, and treat it with due devotion: that the holy and Immaculate Queen of Heaven may protect and defend you; and since she is ever ready to bestow new favors, may she in her mercy obtain for you whatever you humbly ask of God, that both in life and in death you may rest peacefully in her motherly embrace. ℟. Amen.' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Kýrie, eléison. Christe, eléison. Kýrie, eléison.', textEnglish: 'Lord, have mercy. Christ, have mercy. Lord, have mercy.' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Pater noster {{(secreto usque ad:)}}', textEnglish: 'Our Father {{(silently until:)}}' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Et ne nos indúcas in tentatiónem.', textEnglish: 'And lead us not into temptation.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Sed líbera nos a malo.', textEnglish: 'But deliver us from evil.' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Regína sine labe origináli concépta.', textEnglish: 'Queen conceived without original sin.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Ora pro nobis qui ad te confúgimus.', textEnglish: 'Pray for us who have recourse to thee.' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Dómine, exáudi oratiónem meam.', textEnglish: 'O Lord, hear my prayer.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Et clamor meus ad te véniat.', textEnglish: 'And let my cry come unto Thee.' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Dóminus vobíscum.', textEnglish: 'The Lord be with you.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Et cum spíritu tuo.', textEnglish: 'And with your spirit.' },
    { isHeading: true, textLatin: 'Orátio Conclúsiva', textEnglish: 'Closing Prayer' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Orémus. Dómine Jesu Christe, qui voluísti ut Beatíssima Virgo María, Mater tua, ab orígine ipsa sine labe concépta, innúmeris miráculis clarésceret: præsta, quǽsumus; ut cujus patrocínium júgiter quǽrimus, gáudia ætérna cónsequi mereámur: Qui vivis et regnas in sǽcula sæculórum. ℟. Amen.', textEnglish: 'Let us pray. Lord Jesus Christ, Who didst will that the most Blessed Virgin Mary, Thy Mother, conceived without stain from her very origin, should shine forth with countless miracles: grant, we beseech Thee, that we who continually seek her protection may deserve to attain eternal joys: Who livest and reignest forever and ever. ℟. Amen.' }
  ]
};

export default ritual;
