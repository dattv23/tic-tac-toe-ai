import OIcon from './icons/OIcon'
import XIcon from './icons/XIcon'

type SquareProps = {
  value: string | null
  onClick: () => void
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button
      className='flex h-24 w-24 items-center justify-center rounded-xl bg-[#1f3641] p-2 shadow-[inset_0_-4px_0_#10212a] md:h-32 md:w-32'
      onClick={onClick}
    >
      {value && (value == 'X' ? <XIcon /> : <OIcon />)}
    </button>
  )
}

export default Square
