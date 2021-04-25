import React from "react";

function Group() {
    function Linkiv(link){       
        var value=link.split('.');
        return value[value.length-1];
    }
  return (
    
    <div>
    {Linkiv("https://res.cloudinary.com/web-img/video/upload/v1616421722/samples/elephants.mp4")==="mp4"?(
        <>
        <video style={{ width: "700px" }} controls>
        <source
          src="https://res.cloudinary.com/web-img/video/upload/v1616421722/samples/elephants.mp4"
          type="video/mp4"
        />
        </video>
        </>
    ):(
        <img src="https://res.cloudinary.com/web-img/image/upload/v1616421715/samples/imagecon-group.jpg"></img>
    )}
   
      
    </div>
  );
}

export default Group;
