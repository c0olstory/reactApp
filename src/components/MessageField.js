import React, { useMemo } from 'react'
import Message from './Message'
import EntryField from './EntryField'
import { AUTHORS } from './constants'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage, sendMessageToBot } from "../store/actions/messages"
import { useParams } from 'react-router'
import { profileNameSelector } from '../store/selectors/profile'
import { getMessageList } from '../store/selectors/messages'

const MessageField = (props) => {
  // const [messageList, setMessageList] = React.useState([])
  const { chatId } = useParams()

  // const messageList = useSelector((state) => state.messages[chatId] || [])
  
  const getMessageChat = useMemo(() => getMessageList(chatId), [chatId]);
  const messageList = useSelector(getMessageChat);
  
  // const profileName = useSelector(state => state.profile.name)
  const profileName = useSelector(profileNameSelector)

  
  const dispatch = useDispatch()

  const handleMessageSubmit = (newMessage) => {
    // dispatch(addMessage(chatId, { id: `message${Date.now()}`, author: AUTHORS.Me, text: newMessage }))
    dispatch(sendMessageToBot(chatId, { 
      id: `message${Date.now()}`,
      author: AUTHORS.Me,
      text: newMessage 
    }))

  }


  return (
    <>
      <div className="app__message">
        {/* {messageList.length ? ( */}
          {messageList.map((message) => (
            <Message
              key={message.id}
              text={message.text}
              author={message.author === AUTHORS.Me ? profileName : message.author} />
          ))}
        {/* ) : null} */}
      </div>
      <EntryField onSubmit={handleMessageSubmit} />
    </>
  )
}

export default MessageField