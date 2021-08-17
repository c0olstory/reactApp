import React from "react"
import { Switch, Route, Redirect } from 'react-router'

import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Chats from '../pages/Chats'
import Chat from '../components/Chat'
import NoChats from '../components/NoChats'
import News from '../pages/News'
import Login from '../pages/Login'
import Registration from '../pages/Registration'
import { useSelector } from "react-redux"

const PrivateRoute = (props) => {
  const isAuthed = useSelector(state => state.profile.isAuthed)
  return isAuthed ? <Route {...props} /> : <Redirect to="/login" />
}

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
 
        <PrivateRoute path="/profile" component={Profile} />

        <PrivateRoute exact path="/chats" render={() => 
          <Chats />
        } />
 
        <PrivateRoute path="/chats/:chatId" render={() =>
          <Chat />
        }/>
        
        <Route path="/login" render={() =>
          <Login />
        }/>

        <Route path="/registration" render={() =>
          <Registration />
        }/>

        <Route path="/news" component={News} />

        <Route path="/nochat" component={NoChats} />

        <Route>
          <h3>Page not found</h3>
        </Route>
 
      </Switch>
    </>
  )
}
