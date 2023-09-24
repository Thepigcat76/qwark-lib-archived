// First we want to tell you that Thepigcat76 loves Airhorn
import { FancyButton } from "./components/buttons/fancy-button/fancy_button";
import { ImageButton } from "./components/buttons/image-button/image_button";
import { MyComponent } from "./components/myComponent";
import "./style.css";

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwark Test</title>
      </head>
      <body>
        <ImageButton
          img_src="src/assets/icon_new.png"
          alt="logo"
          imgClass="sus-button"
          img_h={100}
          img_w={100}
        />
        <FancyButton
          onButtonClick$={() => console.log("sussy")}
          class="amogus"
          text={"lolool"}
        />
        <MyComponent test="and Thepigcat76 missed to commit"/>
      </body>{" "}
    </>
  );
};
