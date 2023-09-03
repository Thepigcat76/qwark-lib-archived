import { component$, $, ClassList } from "@builder.io/qwik";
import "./amogus.css";


interface Class {
  class: ClassList
}

export const Amogus = component$((props: Class) => {
  const print = $(() => window.open("https://www.youtube.com/watch?v=dsHyUgGMht0"));

  return (
    <div class="amogus">
      <button
        onClick$={[
          print,
        ]}
        class={props.class}
      >
        Amogus
      </button>
    </div>
  );
});
