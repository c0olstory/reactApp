import React from "react"
import { Switch, Route } from 'react-router'

import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Chats from '../pages/Chats'
import Chat from '../components/Chat'
import NoChats from '../components/NoChats'

export default function Routes(props) {
  return (
    <>
      <Switch>
        
        <Route
          exact
          path="/"
          render={() =>
            <Home />
          }
        />
 
        <Route path="/profile" component={Profile} />

        <Route exact path="/chats" render={() => 
          <Chats
            // chats={props.chats}
            onCurrentChatChange={props.onCurrentChatChange}
            currentChat={props.currentChat}
            // onAddChat={props.onAddChat}
            // onRemoveChat={props.onRemoveChat}
          />
        } />
 
        <Route path="/chats/:chatId" render={() =>
          <Chat
            // chats={props.chats}
            onCurrentChatChange={props.onCurrentChatChange}
            currentChat={props.currentChat}
          />
        }/>

        <Route path="/nochat" component={NoChats} />

        <Route>
          <h3>Page not found</h3>
        </Route>
 
      </Switch>
    </>
  )
}
