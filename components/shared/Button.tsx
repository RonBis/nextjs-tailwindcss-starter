interface props {
  text: string
  style?: {
    shadow: boolean
  }
  onClick?: () => void
}

export default function Button({
  text,
  style = { shadow: false },
  onClick = () => {},
}: props) {
  return (
    <button
      className={`ml-auto rounded-full bg-purple-800 px-3 py-1 text-white duration-200 hover:scale-105 ${
        style.shadow ? `shadow-lg shadow-purple-500` : ``
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
