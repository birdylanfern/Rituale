import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'blessing-7-rosary',
  titleEnglish: 'Blessing of the Rosary',
  titleLatin: 'Formula Brevior Benedicendi Coronam Sacratissimi Rosarii B.V.M.',
  category: 'blessings',
  blessingGroup: 'objects',
  categoryLabel: 'Titulus V: Benedictionale',
  tags: ['rosary', 'our lady', 'mary', 'chaplet', 'dominican'],
  lines: [
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Ad laudem et glóriam Deíparæ Vírginis Maríæ, in memóriam mysteriórum vitæ, mortis et resurrectiónis ejúsdem Dómini nostri Jesu Christi bene ✠ dicátur et sancti ✠ ficétur hæc sacratíssimi Rosárii coróna: in nómine Patris, et Fílii, ✠ et Spíritus Sancti. ℟. Amen.', textEnglish: 'To the praise and glory of the Virgin Mary, Mother of God, in memory of the mysteries of the life, death, and resurrection of our Lord Jesus Christ, may this chaplet of the most holy Rosary be blessed ✠ and made holy; in the name of the Father, and of the Son ✠, and of the Holy Spirit. ℟. Amen.' }
  ]
};

export default ritual;
