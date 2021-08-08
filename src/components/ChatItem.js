import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router'

const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
  },
}));

function ChatItem(props) {
  const classes = useStyles();
  const { onCurrentChatChange, currentChat } = props

  const history = useHistory()

  const handleChatLink = chat => {
    console.log(chat, 'chat')
    onCurrentChatChange(chat)
    history.push(`/chats/${currentChat.id}`)
  }
  return (
      <ListItem
        alignItems="flex-start"
        button
        selected={props.id === currentChat.id}
        onClick={() => handleChatLink(props.chat)}
      >
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
  )
}

ChatItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default ChatItem