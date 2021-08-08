import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import ChatItem from './ChatItem'
import EntryField from './EntryField'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addChat, removeChat } from "../store/actions/chats"
import { chatsSelector } from '../store/selectors/chats'


function ChatsList(props) {
  const { onCurrentChatChange, currentChat,} = props

  const chats = useSelector(chatsSelector)
  // const chats = useSelector(state => state.chats)

  const dispatch = useDispatch()


  const handleAddChat = (name) => {
    // dispatch(addChat(`chat${Object.values(chats).length + 1}`, name))
    dispatch(addChat(`chat${Date.now()}`, name))
  }

  const handleRemoveChat = (chatId) => {
    dispatch(removeChat(chatId))
  }

  return (
    <div>
      <List subheader={<p>Список чатов</p>}>
        {Object.values(chats).map((chat) => (
          <div className="chats__chatitem">
            <ChatItem 
              key={chat.id}
              id={chat.id}
              name={chat.name}
              chats={chats}
              chat={chat}
              onCurrentChatChange={onCurrentChatChange}
              currentChat={currentChat}
            >
            </ChatItem>
            <IconButton
              variant="contained"
              className="btn"
              onClick={() => handleRemoveChat(chat.id)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
      </List>
    <EntryField
      label="Имя чата"
      placeholder="Введите имя чата"
      onSubmit={handleAddChat}
    />
    </div>
  )
}

export default ChatsList