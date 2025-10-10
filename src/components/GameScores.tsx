const GameScores = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex w-32 flex-col items-center rounded-xl bg-[#F2B137] px-5 py-1 shadow-[inset_0_-4px_0_#C48524]'>
        <p>O (YOU)</p>
        <span className='text-xl font-semibold'>0</span>
      </div>
      <div className='flex w-32 flex-col items-center rounded-xl bg-[#a8bfc9] px-5 py-1 shadow-[inset_0_-4px_0_#6b8997]'>
        <p>TIES</p>
        <span className='text-xl font-semibold'>0</span>
      </div>
      <div className='flex w-32 flex-col items-center rounded-xl bg-[#31C3BD] px-5 py-1 shadow-[inset_0_-4px_0_#1E8E89]'>
        <p>X (AI)</p>
        <span className='text-xl font-semibold'>0</span>
      </div>
    </div>
  )
}

export default GameScores
