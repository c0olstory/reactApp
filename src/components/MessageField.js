import React from 'react'
import Message from './Message'
import EntryField from './EntryField'
import { AUTHORS } from './constants'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from "../store/actions/messages"
import { useParams } from 'react-router'


const MessageField = (props) => {
  // const [messageList, setMessageList] = React.useState([])
  const { chatId } = useParams()

  const messageList = useSelector((state) => state.messages[chatId] || [])
  const dispatch = useDispatch()


  const handleMessageSubmit = (newMessage) => {
    dispatch(addMessage(chatId, { id: `message${Date.now()}`, author: AUTHORS.Me, text: newMessage }))
  }


  return (
    <>
      <div className="app__message">
        {/* {messageList.length ? ( */}
          {messageList.map((message) => (
            <Message
              key={message.id}
              text={message.text}
              author={message.author} />
          ))}
        {/* ) : null} */}
      </div>
      <EntryField onSubmit={handleMessageSubmit} />
    </>
  )
}

export default MessageField