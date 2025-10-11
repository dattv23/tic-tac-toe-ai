type GameHeaderProps = {
  isXTurn: boolean
  winner: string | null
  mode: string
  showModeMenu: boolean
  selectMode: (mode: string) => void
  restart: () => void
  onChangeShowModeMenu: (value: boolean) => void
}

const GameHeader: React.FC<GameHeaderProps> = ({
  isXTurn,
  mode,
  winner,
  showModeMenu,
  restart,
  selectMode,
  onChangeShowModeMenu
}) => {
  return (
    <div className='mb-4 py-2'>
      <div className='flex h-12 items-center justify-between'>
        <div className='flex h-8 gap-2'>
          <img src='./icons/icon-x.svg' width={32} height={32} />
          <img src='./icons/icon-o.svg' width={32} height={32} />
        </div>
        <div className='flex h-12 w-34 -translate-x-3 items-center justify-center gap-3 rounded-xl bg-[#1f3641] p-2 shadow-[inset_0_-4px_0_#10212a]'>
          {isXTurn ? (
            <img src='./icons/icon-x-grey.svg' width={20} height={20} />
          ) : (
            <img src='./icons/icon-o-grey.svg' width={20} height={20} />
          )}
          <span className='font-extrabold text-[#A8BFC9]'>TURN</span>
        </div>
        <button
          className='flex h-12 w-12 items-center justify-center rounded-xl bg-[#a8bfc9] shadow-[inset_0_-4px_0_#6b8997] hover:cursor-pointer'
          onClick={restart}
        >
          <img src='./icons/icon-restart.svg' width={20} height={20} />
        </button>
      </div>
      <div className='relative flex flex-col items-center justify-between gap-2 md:flex-row'>
        <div className='relative top-0 z-10 mt-2 w-42 text-center font-extrabold text-white md:text-left'>
          <button
            className='w-fit rounded-lg bg-[#1f3641] px-4 py-2 text-sm shadow-[inset_0_-4px_0_#10212a] hover:cursor-pointer hover:bg-[#243f4c]'
            onClick={() => onChangeShowModeMenu(!showModeMenu)}
          >
            Mode: {mode}
          </button>

          {showModeMenu && (
            <div className='absolute top-0 -right-24 space-y-2 rounded-xl bg-[#1f3641] p-2 shadow-[inset_0_-4px_#10212a,inset_-4px_0_#10212a]'>
              {['Easy', 'Hard'].map((m) => (
                <button
                  key={m}
                  onClick={() => selectMode(m)}
                  className={`w-full rounded-lg px-3 py-2 text-left text-sm hover:cursor-pointer ${
                    m === mode ? 'bg-[#31C3BD] text-[#1f3641]' : 'hover:bg-[#243f4c]'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className='static z-0 h-8 w-full pt-1 text-center font-extrabold text-[#A8BFC9] md:absolute'>
          {winner == 'Draw' && <span>ROUND DRAW!</span>}
          {winner == 'X' && <span>YOU WON!</span>}
          {winner == 'O' && <span>OH NO, YOU LOST...</span>}
        </div>
      </div>
    </div>
  )
}

export default GameHeader
