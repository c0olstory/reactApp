import React from 'react'
import { Redirect } from 'react-router-dom'
import { AUTHORS } from './constants'
import { useParams } from 'react-router'
import Message from './Message'
import EntryField from './EntryField'

import ChatItem from '../components/ChatItem'
import UsersChats from '../components/UsersChats'

const Chat = (props) => {
  const { getIsChatExists, chats, onCurrentChatChange, currentChat } = props
  const { chatId } = useParams()

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

  const isChatExists = React.useMemo(() => getIsChatExists(chatId), [getIsChatExists, chatId])

  if (!isChatExists) {
    return <Redirect to="/chats" />
  }

  return (
    // <>
    //   <div className="app__message">
    //     {/* {messageList.length ? ( */}
    //       {messageList.map((message, index) => (
    //         <Message
    //           key={index}
    //           text={message.text}
    //           author={message.author} />
    //       ))}
    //     {/* ) : null} */}
    //   </div>
    //   <EntryField onSubmit={handleMessageSubmit} />
    // </>
    <div className="app">
      <div className="app__content">
        <div className="app__sidebar">
          <UsersChats
            chats={chats}
            onCurrentChatChange={onCurrentChatChange}
            currentChat={currentChat}
          />
        </div>
        <div className="app__main">
          <ChatItem />
        </div>
      </div>
    </div>
  )

}

 export default Chat