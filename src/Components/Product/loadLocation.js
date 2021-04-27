import React from "react";
import { useQuery } from "@apollo/react-hooks";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import { GET_LOCATIONS } from "../../Graphql/query";
function LoadLocation() {
  const { data: { getLocations: location } = {} } = useQuery(GET_LOCATIONS);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <List className="menu__listIcon">
      {location &&
        location.map((l, index) => (        
              <Link
                to={`/product/all/${l.zipcode}/0`}
                className="link"
                key={l.id}
              >
                <ListItem
                  button
                  selected={selectedIndex === index}
                  onClick={(event) => handleListItemClick(event, index)}
                >
                  <span>{l.location}</span>
                </ListItem>
              </Link>         
        ))}
    </List>
  );
}

export default LoadLocation;
