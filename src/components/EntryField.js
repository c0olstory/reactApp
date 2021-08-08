import React from 'react'

import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import SendIcon from '@material-ui/icons/Send'
import IconButton from '@material-ui/core/IconButton'



const EntryField = (props) => {
  const {
    onSubmit,
    label = 'Сообщение',
    placeholder = 'Введите сообщение',
  } = props
  const inputRef = React.useRef(null)

  const [inputValue, setInputValue] = React.useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleMessageSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(inputValue)
      setInputValue('')
      setTimeout(() => inputRef.current?.focus(), 200) //
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
        innerRef={inputRef}
        value={inputValue}
        label={label}
        placeholder={placeholder}
        onChange={handleChange}
        variant="outlined"
      />
      <IconButton
        type="submit"
        variant="contained"
        tabIndex={-1}
        title="Отправить"
        color="primary"
        className="app__button btn"
      >
        <SendIcon />
      </IconButton>
    </form>
  )
}

export default EntryField