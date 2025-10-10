import GameBoard from './GameBoard'
import GameHeader from './GameHeader'
import GameScores from './GameScores'

const GameScene = () => {
  return (
    <div className='mx-auto my-0 flex h-screen max-w-lg items-center justify-center px-6 py-0'>
      <div className='w-full'>
        <GameHeader />
        <GameBoard />
        <GameScores />
      </div>
    </div>
  )
}

export default GameScene
