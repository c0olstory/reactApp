import React from 'react'

import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'



const EntryField = (props) => {
  const { onSubmit } = props
  const [inputValue, setInputValue] = React.useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleMessageSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(inputValue)
      setInputValue('')
    }
  }

  return (
    <form className="app__form" onSubmit={handleMessageSubmit}>
      <TextField
        // ref={TextField => TextField && TextField.focus()}
        // ref="inputOnFocus"
        // helperText="Пустое поле ввода"
        // error
        // id="outlined-error-helper-text"
        // label="Сообщение"
        className="app__text-field"
        required
        fullWidth
        autoFocus
        value={inputValue}
        placeholder="Введите сообщение"
        onChange={handleChange}
        variant="outlined"
      />
      <Button
        variant="contained"
        type="submit"
        color="primary"
        className="app__button"
        // className={classes.button}
        endIcon={<Icon>send</Icon>}
        // onClick={ handleMessageSubmit }
      >
        Send
      </Button>
    </form>
  )
}

export default EntryField