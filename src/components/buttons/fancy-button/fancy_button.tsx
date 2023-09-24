import { PropFunction, component$ } from "@builder.io/qwik";
import "./fancy_button.css";
import { IClass } from "../../util";

interface IFancyButton extends IClass {
  text: string;
  onButtonClick$?: PropFunction;
}

export const FancyButton = component$((props: IFancyButton) => {

  return (
    <div class="fancy-button">
      <button class={props.class} onClick$={props.onButtonClick$}>{props.text}</button>
    </div>
  );
});
