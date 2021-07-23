import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import Divider from '@material-ui/core/Divider';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';
import ListItemUser from './listItem'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  }
}));

function ItemsList() {
  const classes = useStyles();

  const [users, setUsers] = React.useState([
    { id: 1, name: 'Remy Sharp', img: './img/avatars/1.jpg' },
    { id: 2, name: 'Travis Howard', img: '../img/avatars/2.jpg' },
    { id: 3, name: 'Cindy Baker', img: '../img/avatars/3.jpg' },
  ])

  return (
    <List className={classes.root}>
      {users.map((user) => (
        // console.log(user)
        <ListItemUser key={user.id} name={user.name} img={user.img}/>
      ))}
    </List>
  );
}

export default ItemsList