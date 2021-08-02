import React from "react"
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router'

import Home from '../pages/Home'
import App from '../App'
import Profile from '../pages/Profile'
import Chats from '../pages/Chats'
import Chat from '../components/Chat'
import NoChats from '../components/NoChats'

export default function Routes(props) {
  return (
    // <BrowserRouter>
    <>
      {/* <header className="app__header header">
        <ul className="header__list">
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
      </header> */}
      <Switch>
        
        <Route
          exact
          path="/"
          render={() =>
            <Home
              chats={props.chats}
              onCurrentChatChange={props.onCurrentChatChange}
              currentChat={props.currentChat}
            />
          }
        />
 
        <Route path="/profile" component={Profile} />

        <Route exact path="/chats" render={() => 
          <Chats
            chats={props.chats}
            onCurrentChatChange={props.onCurrentChatChange}
            currentChat={props.currentChat}
            getIsChatExists={props.getIsChatExists}
          />
        } />
 
        <Route path="/chats/:chatId" render={() =>
          <Chat
            chats={props.chats}
            onCurrentChatChange={props.onCurrentChatChange}
            currentChat={props.currentChat}
            getIsChatExists={props.getIsChatExists}
          />
        }/>

        <Route path="/nochat" component={NoChats} />

        <Route>
          <h3>Page not found</h3>
        </Route>
 
      </Switch>
    </>
    // </BrowserRouter>
  );
}
