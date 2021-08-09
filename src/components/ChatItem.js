import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router'
// import { getLastMessage } from '../store/selectors/messages'
// import { useSelector } from 'react-redux'


const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
  },
}));

function ChatItem(props) {
  const classes = useStyles();
  const { onCurrentChatChange, currentChat } = props

  // const { chatId } = useParams()

  const history = useHistory()
  // const lastMessage = useSelector(getLastMessage(chatId))

  const handleChatLink = chat => {
    // console.log(chatId, 'lastMessage')
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
          // primary="Brunch this weekend?"
          primary={props.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {/* Ali Connors */}
              </Typography>
              {/* {" — I'll be in your neighborhood doing errands this…"} */}
              {/* {lastMessage} */}
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