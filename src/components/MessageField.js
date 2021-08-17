import React, { useMemo } from 'react'
import Message from './Message'
import EntryField from './EntryField'
import { AUTHORS } from './constants'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage, sendMessageToBot, subscribeOnMessagesChangings } from "../store/actions/messages"
import { useParams } from 'react-router'
import { profileNameSelector } from '../store/selectors/profile'
import { getMessageList } from '../store/selectors/messages'
import firebase from 'firebase'

const MessageField = (props) => {
  const { chatId } = useParams()
  
  const dispatch = useDispatch()


  React.useEffect(() => {
    dispatch(subscribeOnMessagesChangings(chatId))
  }, [])
  
  const getMessageChat = useMemo(() => getMessageList(chatId), [chatId]);
  const messageList = useSelector(getMessageChat);
  
  const profileName = useSelector(profileNameSelector)

  

  const handleMessageSubmit = (newMessage) => {
    // firebase.database().ref('messages').child(chatId).push({ 
    //   id: `message${Date.now()}`,
    //   author: AUTHORS.Me,
    //   text: newMessage 
    // })

    dispatch(sendMessageToBot(chatId, { 
      id: `message${Date.now()}`,
      author: AUTHORS.Me,
      text: newMessage 
    }))

  }


  return (
    <>
      <div className="app__message">
        {messageList.map((message) => (
          <Message
            key={message.id}
            text={message.text}
            author={message.author === AUTHORS.Me ? profileName : message.author} />
        ))}
      </div>
      <EntryField onSubmit={handleMessageSubmit} />
    </>
  )
}

export default MessageField