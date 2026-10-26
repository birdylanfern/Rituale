import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'blessing-candles',
  titleEnglish: 'Blessing of Candles',
  titleLatin: 'Benedictio Candelarum',
  category: 'blessings',
  blessingGroup: 'objects',
  categoryLabel: 'Titulus V: Benedictionale',
  tags: ['candles', 'wax', 'light', 'flame', 'blessing', 'devotional'],
  lines: [
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Adjutórium nostrum in nómine Dómini.', textEnglish: 'Our help is in the name of the Lord.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Qui fecit cælum et terram.', textEnglish: 'Who made heaven and earth.' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Dóminus vobíscum.', textEnglish: 'The Lord be with you.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Et cum spíritu tuo.', textEnglish: 'And with your spirit.' },
    { isHeading: true, textLatin: 'Orátio', textEnglish: 'Prayer' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Orémus. Dómine Jesu Christe, Fíli Dei vivi, béne ✠ dic candélas istas supplicatiónibus nostris: infúnde eis, Dómine, per virtútem sanctæ Crucis, benedictiónem cæléstem, qui eas ad repelléndas ténebras humáno géneri tribuísti; talémque benedictiónem signáculo sanctæ Crucis accípiant, ut quibuscúmque locis accénsæ vel pósitæ fúerint, discédant príncipes tenebrárum, et contremíscant, ac fúgiant cum terróribus suis ab habitatiónibus illis, nec áudeant ámplius turbáre aut molestáre serviéntes tibi omnipoténti Deo: Qui vivis et regnas cum Deo Patre in unitáte Spíritus Sancti Deus, per ómnia sǽcula sæculórum. ℟. Amen.', textEnglish: 'Let us pray. Lord Jesus Christ, Son of the living God, bless ✠ these candles at our supplication: pour out upon them, O Lord, through the power of the holy Cross, Thy heavenly blessing, Who hast given them to mankind to dispel darkness. May they receive such a blessing through the sign of the holy Cross, that in whatever places they may be lighted or placed, the princes of darkness may depart, and tremble, and flee in terror from those dwellings, nor dare further to trouble or molest those who serve Thee, almighty God: Who livest and reignest with God the Father in the unity of the Holy Spirit, God, world without end. ℟. Amen.' },
    { isRubric: true, textLatin: 'Et aspergantur aqua benedicta.', textEnglish: 'And they are sprinkled with holy water.' }
  ]
};

export default ritual;
