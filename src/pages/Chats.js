import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { addChat, removeChat } from "../store/actions/chats"
import ChatsList from '../components/ChatsList'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: '36ch',
//     backgroundColor: theme.palette.background.paper,
//   }
// }));

function Chats(props) {
  // const classes = useStyles();
  const { onCurrentChatChange, currentChat } = props
  // const history = useHistory()

  // const chats = useSelector(state => state.chats)

  // const dispatch = useDispatch()

  // const handleChatLink = chat => {
  //   onCurrentChatChange(chat)
  //   history.push(`/chats/${currentChat.id}`)
  // }

  // const handleAddChat = (name) => {
  //   dispatch(addChat(`chat${Date.now()}`, name))
  // }

  // const handleRemoveChat = (chatId) => {
  //   dispatch(removeChat(chatId))
  // }

  return (
    <div className="app">
      <div className="app__content">
        <ChatsList
          onCurrentChatChange={onCurrentChatChange}
          currentChat={currentChat}
        />
      </div>
    </div>
  )
}

export default Chats