import './App.scss';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const AUTHORS = {
  Me: 'Me',
  Bot: 'Bot'
}

function Message(props) {
  return <div className="message">
    <p className="message__author">{props.author}</p>
    <p className="message__text">{props.text}</p>
   </div>
}

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

  return (
    <div className="app">
      <div className="app__content">
        <div className="app__message">
          {messageList.map((message, index) => (
            <Message key={index} text={message.text} author={message.author} />
          ))}
        </div>
        <form className="app__form" onSubmit={messageSubmit}>
          <input
            required
            className="app__text-field"
            placeholder="Введите сообщение"
            value={inputValue}
            onChange={ChangeMessage}
          />
          <button className="app__button fas fa-paper-plane"><FontAwesomeIcon icon={faPaperPlane} /></button>
        </form>
      </div>
    </div>
  );
}

export default App;
