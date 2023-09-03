import { Amogus } from "./components/amogus/amogus";
import { Counter } from "./components/counter/counter";
import { Logo } from "./components/logo/logo";
import "./style.css";


export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwark Test</title>
      </head>
      <body>
        <Logo />
        <Counter />
        <div>
          <Amogus class="amogus" test={"lolool"}></Amogus>
        </div>
      </body>
    </>
  );
};
