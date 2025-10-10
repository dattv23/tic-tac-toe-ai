import Square from './Square'

const GameBoard = () => {
  return (
    <div className='mt-16 mb-5 flex flex-col gap-2'>
      <div className='flex justify-between'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='flex justify-between'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='flex justify-between'>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  )
}

export default GameBoard
