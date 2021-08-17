import React from 'react'
import firebase from 'firebase'
import TextField from '@material-ui/core/TextField'

export default function SignUp (props) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  // const [isSigningUp, setIsSigningUp] = React.useState(false)

  const handleChangeEmail = e => setEmail(e.target.value)
  const handleChangePassword = e => setPassword(e.target.value)

  const handleSignUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
    } catch(error) {
      setError(error.message)
    }
  }

  return (
    <div>
      <h1>Registration</h1>
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
      <button className="btn" onClick={handleSignUp}>Sign up</button>
      <p className="error">{error}</p>
    </div>
  )
}