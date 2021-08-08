import './App.scss'
import React from 'react'
import UsersChats from './components/ChatsList'
import ChatItem from './components/MessageField'
import Chat from './components/Chat'
import Router from './router/Router'
import { Link } from 'react-router-dom'



function App() {
  // const [chats, setChats] = React.useState([
  //   { id: "chat1", name: 'Remy Sharp', img: './img/avatars/1.jpg' },
  //   { id: "chat2", name: 'Travis Howard', img: '../img/avatars/2.jpg' },
  //   { id: "chat3", name: 'Cindy Baker', img: '../img/avatars/3.jpg' },
  // ])

  const [currentChat, setCurrentChat] = React.useState([0])

  const handleChangeChat = (chat) => setCurrentChat(chat)

  // const handleAddChat = (ChatName) => {
  //   setChats((currentChats) => [
  //     ...currentChats,
  //     { name: ChatName, id: `chat${chats.length + 1}` }
  //   ])
  // }

  // const handleRemoveChat = (chatId) => {
  //   setChats((currentChats) => 
  //     currentChats.filter((chat) => chat.id !== chatId)
  //   )
  // }

  // const handleIsChatExists = React.useCallback((chatId) => {
  //   return Boolean(chats.find((chat) => chat.id === chatId))
  // })



  return (
    <div className="wrapper">
      <header className="app__header header">
        <ul className="header__list container">
          <li className="header__link">
            <Link to="/">Home</Link>
          </li>
          <li className="header__link">
            <Link to="/chats">Chats</Link>
          </li>
          <li className="header__link">
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </header>
      <main className="page">
        <Router
          // chats = {chats}
          currentChat = {currentChat}
          onCurrentChatChange = {handleChangeChat}
          // onAddChat={handleAddChat}
          // onRemoveChat={handleRemoveChat}
        />
      </main>
      <footer className="footer"></footer>
    </div>
  )
  //   <div className="app">
  //     <div className="app__content">
  //       <div className="app__sidebar">
  //         <UsersChats />
  //       </div>
  //       <div className="app__main">
  //         <ChatItem />
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default App;
