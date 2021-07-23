import './App.scss';
import React from 'react'
import { TextField } from '@material-ui/core';
import Message from './social/message'
import ItemsList from './social/list'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


const AUTHORS = {
  Me: 'Me',
  Bot: 'Bot'
}

// function Message(props) {
//   return <div className="message">
//     <p className="message__author">{props.author}</p>
//     <p className="message__text">{props.text}</p>
//    </div>
// }

function App() {
  const [messageList, setMessageList] = React.useState([])
  const [inputValue, setInputValue] = React.useState('')

  const timer = React.useRef(null)

  React.useEffect(() => {
    if (messageList.length && messageList[messageList.length - 1].author !== AUTHORS.Bot) {
      timer.current = setTimeout(() => {
        setMessageList(currentMessageList => ([
          ...currentMessageList,
          { author: AUTHORS.Bot, text: "Сообщение доставлено" },
        ]))
      }, 1500)
    }
  }, [messageList])

  React.useEffect(() => {
    clearTimeout(timer.current)
  }, [])

  const ChangeMessage = (e) => {
    setInputValue(e.target.value)
  }

  const messageSubmit = (e) => {
    e.preventDefault()
    setMessageList(currentMessageList => ([
      ...currentMessageList,
      { author: AUTHORS.Me, text: inputValue },
    ]))
    setInputValue('')
  }

  // const TextField = () => {
  //   TextField.focus()
  // }

  return (
    <div className="app">
      <div className="app__content">
        <div className="app__left">
          <ItemsList />
        </div>
        <div className="app__right">
          <div className="app__message">
            {messageList.map((message, index) => (
              <Message key={index} text={message.text} author={message.author} />
            ))}
          </div>
          <form className="app__form" onSubmit={messageSubmit}>
            <TextField
              // ref={TextField => TextField && TextField.focus()}
              // ref="inputOnFocus"
              className="app__text-field"
              required
              // helperText="Пустое поле ввода"
              // error
              // id="outlined-error-helper-text"
              fullWidth
              // label="Сообщение"
              autoFocus
              value={inputValue}
              placeholder="Введите сообщение"
              onChange={ChangeMessage}
              variant="outlined"
            />
            <Button
              variant="contained"
              color="primary"
              className="app__button"
              // className={classes.button}
              endIcon={<Icon>send</Icon>}
              onClick={ messageSubmit }
            >
            Send
          </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
