import { FancyButton } from "./components/buttons/fancy-button/fancy_button";
import { ImageButton } from "./components/buttons/image-button/image_button";
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
          img_src="src/assets/logo.jpeg"
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
      </body>{" "}
    </>
  );
};
