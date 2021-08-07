import React from 'react'
import PropTypes from 'prop-types'


function Message(props) {
  return <div className="message">
    <p className="message__author">{props.author}</p>
    <p className="message__text">{props.text}</p>
   </div>
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Message