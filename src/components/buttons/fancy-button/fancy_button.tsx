import { PropFunction, component$ } from "@builder.io/qwik";
import "./fancy_button.css";
import { Class } from "../../util";

interface IFancyButton extends Class {
  text: string;
  onButtonClick$?: PropFunction;
}

export const FancyButton = component$((props: IFancyButton) => {

  return (
    <div class="fancy-button" onClick$={props.onButtonClick$}>
      <button class={props.class}>{props.text}</button>
    </div>
  );
});
