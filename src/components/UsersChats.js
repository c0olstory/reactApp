import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import Divider from '@material-ui/core/Divider';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';
import UserItem from './UserItem'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  }
}));

function UsersChats(props) {
  const classes = useStyles();
  const { chats, onCurrentChatChange, currentChat } = props

  // const [chats, setChats] = React.useState([
  //   { id: "chat1", name: 'Remy Sharp', img: './img/avatars/1.jpg' },
  //   { id: "chat2", name: 'Travis Howard', img: '../img/avatars/2.jpg' },
  //   { id: "chat3", name: 'Cindy Baker', img: '../img/avatars/3.jpg' },
  // ])

  return (
    <List className={classes.root} subheader={<p>Список чатов</p>}>
      {chats.map((chat) => (
        <UserItem 
          key={chat.id}
          id={chat.id}
          name={chat.name}
          img={chat.img}
          chats={chats}
          chat={chat}
          onCurrentChatChange={onCurrentChatChange}
          currentChat={currentChat}
          // selected={chat.id === currentChat.id}
          // onClick={() => handleChangeChat(chat)}
        />
      ))}
    </List>
  );
}

export default UsersChats