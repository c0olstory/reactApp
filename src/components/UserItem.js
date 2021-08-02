import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router'

const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
  },
}));

function UserItem(props) {
  const classes = useStyles();
  const { onCurrentChatChange, currentChat } = props

  // const [currentChat, setCurrentChat] = React.useState(props.chats[0])
  // const handleChangeChat = (chat) => setCurrentChat(chat)

  const history = useHistory()

  const handleChatLink = chat => {
    onCurrentChatChange(chat)
    history.push(`/chats/${currentChat.id}`)
  }

  return (
      <ListItem
        alignItems="flex-start"
        button
        selected={props.id === currentChat.id}
        // onClick={() => onCurrentChatChange(props.chat)}
        onClick={() => handleChatLink(props.chat)}
      >
        <ListItemAvatar>
          <Avatar alt={props.name} src={props.img} /> {/* Почему не подгружаются картинки, не понимаю */}
        </ListItemAvatar>
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
  );
}

UserItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}

export default UserItem