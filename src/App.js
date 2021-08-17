import './App.scss'
import React from 'react'
import UsersChats from './components/ChatsList'
import ChatItem from './components/MessageField'
import Chat from './components/Chat'
import Router from './router/Router'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import { changeIsAuthed } from './store/actions/profile'
import { profileIsAuthed } from './store/selectors/profile'


function App() {
  
  const dispatch = useDispatch()
  
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('user', {user})

      dispatch(changeIsAuthed(!!user))
    })

  }, [])

  const IsAuthed = useSelector(profileIsAuthed)
  console.log(IsAuthed, ' IsAuthed')

  const handleSignOut = (e) => {
    e.preventDefault()

    firebase.auth().signOut()
  }

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
            <Link to="/news">News</Link>
          </li>
          <li className="header__link">
            <Link to="/profile">Profile</Link>

            <ul class="sub-list">
              <li class="sub-list__sub-item">
                {IsAuthed ? <a href="/" onClick={handleSignOut} class="sub-list__sub-link">Sign out</a> : <Link to="/login" class="sub-list__sub-link">Sing in</Link>}
              </li>
						</ul>

          </li>
        </ul>
      </header>
      <main className="page">
        <Router />
      </main>
      <footer className="footer"></footer>
    </div>
  )
}

export default App;
