import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import PostAddIcon from '@material-ui/icons/PostAdd';
import MessageIcon from '@material-ui/icons/Message';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

export default function navLeft() {
 

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
     
      className='menu-left'
    >
    
      <ListItem button >
        <ListItemIcon className='menu-left__icon'>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home"/>
      </ListItem>
     
      <ListItem button>
        <ListItemIcon className='menu-left__icon'>
          <PostAddIcon />
        </ListItemIcon>
        <ListItemText primary="Posts" />
      </ListItem>
      <ListItem button>
        <ListItemIcon className='menu-left__icon'>
          <MessageIcon />
        </ListItemIcon>
        <ListItemText primary="Messages" />
      </ListItem>
      <ListItem button>
        <ListItemIcon className='menu-left__icon'>
          <SupervisorAccountIcon />
        </ListItemIcon>
        <ListItemText primary="Friends" />
      </ListItem>
      <ListItem button>
        <ListItemIcon className='menu-left__icon'>
          <MessageIcon />
        </ListItemIcon>
        <ListItemText primary="Messages" />
      </ListItem>
    </List>
  );
}
