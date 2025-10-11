type GameScoresProps = {
  scores: {
    X: number
    Draw: number
    O: number
  }
}

const GameScores: React.FC<GameScoresProps> = ({ scores }) => {
  return (
    <div className='flex justify-between'>
      <div className='flex w-24 flex-col items-center rounded-xl bg-[#31C3BD] px-5 py-1 shadow-[inset_0_-4px_0_#1E8E89] md:w-32'>
        <p>X (YOU)</p>
        <span className='text-xl font-semibold'>{scores['X']}</span>
      </div>
      <div className='flex w-24 flex-col items-center rounded-xl bg-[#a8bfc9] px-5 py-1 shadow-[inset_0_-4px_0_#6b8997] md:w-32'>
        <p>Draw</p>
        <span className='text-xl font-semibold'>{scores['Draw']}</span>
      </div>
      <div className='flex w-24 flex-col items-center rounded-xl bg-[#F2B137] px-5 py-1 shadow-[inset_0_-4px_0_#C48524] md:w-32'>
        <p>O (AI)</p>
        <span className='text-xl font-semibold'>{scores['O']}</span>
      </div>
    </div>
  )
}

export default GameScores
