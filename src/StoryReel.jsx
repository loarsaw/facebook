import React from "react";
import "./StoryReel.css";
import Story from "./Story";
function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrFeXs30OBhbWbVDzErJVtw04S9juOg3Cdg&usqp=CAU"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/EasterJM2021.jpg/135px-EasterJM2021.jpg"
        title="Ryan"
      />

      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrFeXs30OBhbWbVDzErJVtw04S9juOg3Cdg&usqp=CAU"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Jason_Hrncir.png/180px-Jason_Hrncir.png"
        title="Kate"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrFeXs30OBhbWbVDzErJVtw04S9juOg3Cdg&usqp=CAU"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/UA-DrCantwell-22.jpg/180px-UA-DrCantwell-22.jpg"
        title="Shina"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrFeXs30OBhbWbVDzErJVtw04S9juOg3Cdg&usqp=CAU"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Ho_Bich_Tram.jpg/180px-Ho_Bich_Tram.jpg"
        title="Ryan"
      />
    </div>
  );
}

export default StoryReel;
