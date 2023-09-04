import { component$, $, ClassList } from "@builder.io/qwik";
import "./fancy_button.css";

interface Class {
  class: ClassList;
  test: string;
}

export const FancyButton = component$((props: Class) => {
  const print = $(() =>
    window.open("https://www.youtube.com/watch?v=dsHyUgGMht0")
  );

  return (
    <div class="fancy-button">
      <button onClick$={[print]} class={props.class}>
        {props.test}
      </button>
    </div>
  );
});
