import React from 'react'
import firebase from 'firebase'
import TextField from '@material-ui/core/TextField'
import { Link } from 'react-router-dom'

export default function Login (props) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')

  const handleChangeEmail = e => setEmail(e.target.value)
  const handleChangePassword = e => setPassword(e.target.value)
  // const handleClearEmail = e => setEmail('')
  // const handleClearPassword = e => setPassword('')
  const handleLogin = async () => {
    console.log('login', {email, password})
    
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch(error) {
      setError(error.message)
    }
    
  }

  return (
    <div>
      <h1>Login</h1>
      <p>Ещё нет учетной записи? <Link to="/registration">Зарегистрироваться</Link></p>
      <TextField
        placeholder="Email"
        value={email}
        type="email"
        onChange={handleChangeEmail}
      />
      <TextField
        placeholder="Password"
        value={password}
        type="password"
        onChange={handleChangePassword}
      />
      <button className="btn" onClick={handleLogin}>login</button>
      <p className="error">{error}</p>
    </div>
  )
}