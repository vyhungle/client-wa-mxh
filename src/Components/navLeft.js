import React from 'react';

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import PostAddIcon from '@material-ui/icons/PostAdd';
import MessageIcon from '@material-ui/icons/Message';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import { Link } from 'react-router-dom';

export default function navLeft() {
 

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" className="menu-left__title"> 
          MENU
        </ListSubheader>
      }
      className='menu-left'
    >
     <Link to="/login">
      <ListItem button as={Link} to="/asdaddxad" >
        <ListItemIcon className='menu-left__icon'>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      </Link>
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
