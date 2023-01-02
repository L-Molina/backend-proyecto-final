import { Link } from 'react-router-dom'
import './ChatButton.css'

const ChatBtn = () => {
  return (
    <button className="chatBtn">
      <Link to="/chat">Chat</Link>
    </button>
  )
}

export default ChatBtn