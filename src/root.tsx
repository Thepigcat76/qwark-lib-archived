import { FancyButton } from "./components/fancy_button/fancy_button";
import { Counter } from "./components/counter/counter";
import { ImageButton } from "./components/image_button/image_button";
import "./style.css";


export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwark Test</title>
      </head>
      <body>
        <ImageButton img_src="src/assets/logo.jpeg" imgClass="sus-button" img_h={100} img_w={100} />
        <Counter />
        <div>
          <FancyButton class="amogus" test={"lolool"}></FancyButton>
        </div>
      </body>
    </>
  );
};
