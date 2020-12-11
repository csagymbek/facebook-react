import React from "react";
import "../styles/StoryReel.css";
import Story from "./Story";

export default function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://miro.medium.com/max/2720/1*tiIMRzn2cUHP56Mxy5-EfA.png"
        profileSrc="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/52417163_2494787180596630_8516577143289806848_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=lJSGAFTIP2sAX8Rb_JQ&_nc_ht=scontent-sjc3-1.xx&oh=cf5a11d959554a258cc04c625405daf7&oe=5FF7D17E"
        title="Dan Abramov"
      />
      <Story
        image="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/94138301_10157673224284965_9129321989763235840_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=2nI7MlN9XZMAX-nvWdz&_nc_ht=scontent-sjc3-1.xx&oh=993ad001b123a5897decb29914694f3d&oe=5FF60BEF"
        profileSrc="https://www.seytech.co/images/logo.png"
        title="Seytech"
      />
      <Story
        image="https://images-na.ssl-images-amazon.com/images/I/817kywRJjVL.jpg"
        profileSrc="https://avatars0.githubusercontent.com/u/150330?s=460&u=41aa48771028d34bcf025eefe919bf75fbda77d4&v=4"
        title="	Kyle Simpson"
      />
      <Story
        image="https://blog.appacademy.io/wp-content/uploads/2018/08/IMG_0314-2_3-1.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/7/7e/Appacademylogo.png"
        title="App Academy"
      />
      <Story
        image="https://img.theculturetrip.com/x/smart/wp-content/uploads/2019/04/spain--leoks_shutterstock.jpg"
        profileSrc="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/22528040_1707231549350698_8723918333928722672_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=4tbB4c1tvnsAX_q-GAA&_nc_ht=scontent-sjc3-1.xx&oh=63c56266bd24ec58cee9f2b2aff5da22&oe=5FF62AA7"
        title="Aliyah Kuanysh"
      />
    </div>
  );
}
