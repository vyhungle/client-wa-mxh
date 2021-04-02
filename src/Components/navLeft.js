import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ListFriend from "../Components/friendList";

export default function navLeft() {


  return (
    <div>
      <Row>
        <Col xs={2} className="menu">
          <List className="menu__listIcon">
            <ListItem  button>
              <FontAwesomeIcon icon="home"/>
            </ListItem>
            <ListItem button>
            <FontAwesomeIcon icon="newspaper"/>
            </ListItem>
            <ListItem button>
            <FontAwesomeIcon icon="bell"/>
            </ListItem>
            <ListItem button>
            <FontAwesomeIcon icon="comment-dots"/>
            </ListItem>
            <ListItem button>
            <FontAwesomeIcon icon="user-friends"/>
            </ListItem>  
            <ListItem button>   
            <FontAwesomeIcon icon='users'/>
            </ListItem>    
            <ListItem button>
            <FontAwesomeIcon icon="user-cog"/>
            </ListItem>  
            
          </List>
        </Col>
        <Col xs={10} className="member">
         <div className="member__list"> 
            <ListFriend/>
         </div>
        </Col>
      </Row>

    </div>

  );
}
