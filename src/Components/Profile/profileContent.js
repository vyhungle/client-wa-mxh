import React from 'react'
import Infor from "./infor";
import Button from "@material-ui/core/Button";
import Products from "./products";
import Posts from "./posts";
function ProfileContent({username}) {
    const [tab, setTab] = React.useState(0);
    const handlePostTab = () => {
      setTab(0);
    };
    const handleProductTab = () => {
      setTab(1);
    };
    return (
        <div className="profile">
        <Infor username={username} />
        <div className="profile__content">
          <div className="profile__content--nav">
            <Button onClick={() => handlePostTab()}>profile</Button>
            <Button onClick={() => handleProductTab()}>products</Button>
          </div>
          {tab === 0 ? (
            <Posts username={username} />
          ) : (
            <Products />
          )}
        </div>
      </div>
    )
}

export default ProfileContent
