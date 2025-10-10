const GameHeader = () => {
  return (
    <div className='flex h-12 items-center justify-between'>
      <div className='flex h-8 gap-2'>
        <img src='./icons/icon-x.svg' width={32} height={32} />
        <img src='./icons/icon-o.svg' width={32} height={32} />
      </div>
      <div className='flex h-12 w-34 -translate-x-3 items-center justify-center gap-3 rounded-xl bg-[#1f3641] p-2 shadow-[inset_0_-4px_0_#10212a]'>
        <img src='./icons/icon-x-grey.svg' width={20} height={20} />
        <span className='font-extrabold text-[#A8BFC9]'>TURN</span>
      </div>
      <button className='flex h-12 w-12 items-center justify-center rounded-xl bg-[#a8bfc9] shadow-[inset_0_-4px_0_#6b8997]'>
        <img src='./icons/icon-restart.svg' width={20} height={20} />
      </button>
    </div>
  )
}

export default GameHeader
