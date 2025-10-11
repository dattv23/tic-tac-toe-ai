import { useEffect, useState } from 'react'
import GameBoard from './GameBoard'
import GameHeader from './GameHeader'
import GameScores from './GameScores'
import calculateWinner from '@/utils/calculateWinner'
import { getBestMove } from '@/utils/ai'

const initScores = {
  X: 0,
  Draw: 0,
  O: 0
}

const GameScene: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [mode, setMode] = useState<string>('easy')
  const [showModeMenu, setShowModeMenu] = useState<boolean>(false)
  const [isXTurn, setIsXTurn] = useState<boolean>(true)
  const [winner, setWinner] = useState<string | null>(null)
  const [scores, setScores] = useState(initScores)

  useEffect(() => {
    if (!isXTurn) {
      let move = -1
      if (mode == 'Hard') {
        move = getBestMove(board) as number
      } else {
        const remainSquares = []
        for (let i = 0; i < board.length; i++) {
          if (!board[i]) {
            remainSquares.push(i)
          }
        }
        move = remainSquares[Math.floor(Math.random() * remainSquares.length)]
      }
      setBoard((prev) => {
        const newBoard = [...prev]
        newBoard[move] = 'O'
        return newBoard
      })
      setIsXTurn(!isXTurn)
    }
  }, [isXTurn, board, mode])

  useEffect(() => {
    const w = calculateWinner(board)
    if (!w) return

    setWinner(w)
    setScores((prevScores) => {
      if (w === 'X') return { ...prevScores, X: prevScores.X + 1 }
      if (w === 'O') return { ...prevScores, O: prevScores.O + 1 }
      if (w === 'Draw') return { ...prevScores, Draw: prevScores.Draw + 1 }
      return prevScores
    })
  }, [board])

  const handleClick = (index: number) => {
    console.log(winner)

    if (board[index] || winner) return
    board[index] = isXTurn ? 'X' : 'O'
    const newBoard = [...board]
    setBoard(newBoard)
    setIsXTurn(!isXTurn)
  }

  const handleRestart = () => {
    setIsXTurn(true)
    setWinner(null)
    setBoard(Array(9).fill(null))
  }

  const handleSelectMode = (mode: string) => {
    setMode(mode)
    setShowModeMenu(false)
    // setScores(initScores)
    handleRestart()
  }

  const handleChangeShowModeMenu = (value: boolean) => {
    setShowModeMenu(value)
  }

  return (
    <div className='mx-auto my-0 flex h-screen max-w-lg items-center justify-center px-6 py-0'>
      <div className='w-full'>
        <GameHeader
          isXTurn={isXTurn}
          winner={winner}
          mode={mode}
          showModeMenu={showModeMenu}
          restart={handleRestart}
          selectMode={handleSelectMode}
          onChangeShowModeMenu={handleChangeShowModeMenu}
        />
        <GameBoard board={board} onClick={handleClick} />
        <GameScores scores={scores} />
      </div>
    </div>
  )
}

export default GameScene
