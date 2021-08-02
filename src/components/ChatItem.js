import React from 'react'
import Message from './Message'
import EntryField from './EntryField'
import { AUTHORS } from './constants'
// const AUTHORS = {
//   Me: 'Me',
//   Bot: 'Bot'
// }

const Chat = (props) => {
  const [messageList, setMessageList] = React.useState([])

  const timer = React.useRef(null)

  React.useEffect(() => {
    if (messageList.length && messageList[messageList.length - 1].author !== AUTHORS.Bot) {
      timer.current = setTimeout(() => {
        setMessageList(currentMessageList => ([
          ...currentMessageList,
          { author: AUTHORS.Bot, text: "Сообщение доставлено" },
        ]))
      }, 1500)
    }
  }, [messageList])

  React.useEffect(() => {
    clearTimeout(timer.current)
  }, [])

  const handleMessageSubmit = (newMessage) => {
    setMessageList(currentMessageList => ([
      ...currentMessageList,
      { author: AUTHORS.Me, text: newMessage },
    ]))
  }

  return (
    <>
      <div className="app__message">
        {/* {messageList.length ? ( */}
          {messageList.map((message, index) => (
            <Message
              key={index}
              text={message.text}
              author={message.author} />
          ))}
        {/* ) : null} */}
      </div>
      <EntryField onSubmit={handleMessageSubmit} />
    </>
  )
}

export default Chat