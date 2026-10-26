import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'blessing-23-scapular',
  titleEnglish: 'Blessing & Clothing with the Brown Scapular (Short Form)',
  titleLatin: 'Formula Brevior Benedicendi et Imponendi Scapulare B.M.V. de Monte Carmelo',
  category: 'blessings',
  blessingGroup: 'objects',
  categoryLabel: 'Titulus V: Benedictionale',
  tags: ['scapular', 'mount carmel', 'carmel', 'our lady', 'brown scapular', 'confraternity', 'habit'],
  lines: [
    { isRubric: true, textLatin: 'Si plures simul recipiendi sint, mutetur numerus. Si Habitus solummodo benedicendus sit, tunc Benedictio incipit ab Ostende, et concluditur cum oratione Domine Jesu Christe.', textEnglish: 'If several are to be received at once, let the number be changed. If the Habit only is to be blessed, then the blessing begins with Show us, and ends with the prayer Lord Jesus Christ.' },
    { isRubric: true, textLatin: 'Persona recipienda ad Habitum genuflexa, Sacerdos, superpelliceo et stola albi coloris aut saltem stola alba indutus, dicat:', textEnglish: 'The person to be received into the Habit kneeling, the priest, vested in surplice and a stole of white color, or at least a white stole, says:' },
    { textLatin: '℣. Osténde nobis, Dómine, misericórdiam tuam.', textEnglish: '℣. Show us, O Lord, Thy mercy.' },
    { textLatin: '℟. Et salutáre tuum da nobis.', textEnglish: '℟. And grant us Thy salvation.' },
    { textLatin: '℣. Dómine, exáudi oratiónem meam.', textEnglish: '℣. O Lord, hear my prayer.' },
    { textLatin: '℟. Et clamor meus ad te véniat.', textEnglish: '℟. And let my cry come unto Thee.' },
    { textLatin: '℣. Dóminus vobíscum.', textEnglish: '℣. The Lord be with you.' },
    { textLatin: '℟. Et cum spíritu tuo.', textEnglish: '℟. And with your spirit.' },
    { isHeading: true, textLatin: 'Oratio', textEnglish: 'Prayer' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Orémus. Dómine Jesu Christe, humáni géneris Salvátor, hunc hábitum, quem propter tuum tuǽque Genitrícis Vírginis Maríæ de Monte Carmélo amórem servus tuus{{/}}ancílla tua devóte est delatárus{{/}}-a, déxtera tua sanctí ✠ fica: ut, eádem Genitríce tua intercedénte, ab hoste malígno defénsus{{/}}-a in tua grátia usque ad mortem persevéret: Qui vivis et regnas in sǽcula sæculórum. ℟. Amen.', textEnglish: 'Let us pray. O Lord Jesus Christ, Saviour of mankind, by Thy right hand sanctify ✠ this scapular which Thy servant will devoutly wear for the love of Thee and of Thy Mother, the Blessed Virgin Mary of Mt. Carmel; so that, by her intercession, he{{/}}she may be protected from the wickedness of the enemy and persevere in Thy grace until death; Who livest and reignest for ever and ever. ℟. Amen.' },
    { isRubric: true, textLatin: 'Deinde aspergat Habitum aqua benedicta, et postea illum imponat personæ vel personis (cuilibet separatim), dicens:', textEnglish: 'Then he sprinkles the Habit with holy water, and afterwards places it on the person or persons (each one separately), saying:' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', isSacramental: true, textLatin: 'Áccipe{{/}}Accípite hunc hábitum benedíctum, precans{{/}}precántes sanctíssimam Vírginem ut ejus méritis illum pérferas{{/}}perferátis sine mácula, et te{{/}}vos ab omni adversitáte deféndat atque ad vitam perdúcat ætérnam. ℟. Amen.', textEnglish: 'Receive this blessed scapular and ask the most holy Virgin that, by her merits, it may be worn with no stain of sin, and may protect you from all harm and bring you into everlasting life. ℟. Amen.' },
    { isRubric: true, textLatin: 'Postea subjungat:', textEnglish: 'Afterwards he adds:' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Ego, ex potestáte mihi concéssa, recípio te{{/}}vos ad participatiónem ómnium bonórum spirituálium, quæ, cooperánte misericórdia Jesu Christi, a Religiósis de Monte Carmélo peragúntur. In nómine Patris, et Fílii, ✠ et Spíritus Sancti. ℟. Amen.', textEnglish: 'By the power granted to me, I admit you to a share in all the spiritual works performed, with the merciful help of Jesus Christ, by the Religious of Mount Carmel; in the name of the Father, and of the Son, ✠ and of the Holy Spirit. ℟. Amen.' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Bene ✠ dicat te{{/}}vos Cónditor cæli et terræ, Deus omnípotens, qui te{{/}}vos cooptáre dignátus est in Confraternitátem beátæ Maríæ Vírginis de Monte Carmélo: quam exorámus ut in hora óbitus tui{{/}}vestri cónterat caput serpéntis antíqui, atque palmam et corónam sempitérnæ hereditátis tandem consequáris{{/}}consequámini. Per Christum, Dóminum nostrum. ℟. Amen.', textEnglish: 'May almighty God, Creator of heaven and earth, bless ✠ you whom He has been pleased to receive into the Confraternity of the Blessed Virgin Mary of Mount Carmel. We beg her to crush the head of the ancient serpent in the hour of your death, and, in the end, to obtain for you the palm and the crown of your everlasting inheritance. Through Christ our Lord. ℟. Amen.' },
    { isRubric: true, textLatin: 'Aspergatur persona aqua benedicta.', textEnglish: 'Let the person be sprinkled with holy water.' }
  ]
};

export default ritual;
