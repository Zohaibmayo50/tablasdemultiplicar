import RangePage from '../components/RangePage'

export default function MultiplicationTable31to40() {
  return (
    <RangePage
      rangeStart={31}
      rangeEnd={40}
      nextRangeUrl="/41-50"
      prevRangeUrl="/21-30"
      difficultyLevel="intermediate"
      difficultyColor="from-red-50 to-pink-50"
    />
  )
}
