import { component$ } from "@builder.io/qwik";
import "./image_button.css";
import { Class } from "../util";

interface IImageButton extends Class {
  imgClass?: string
  alt?: string | null;
  borderRadius?: number
  onClick?: string;
  img_src: string;
  img_w: number;
  img_h: number;
}

export const ImageButton = component$((props: IImageButton) => {
  if (props.alt != null){
    return (
      <div class="image-button">
        <button class={props.class}>
          <img
            width={props.img_w}
            height={props.img_h}
            alt={props.alt}
            src={props.img_src}
            class="image-button"
          />
        </button>
      </div>
    );
  } else {
    return (
      <div class="image-button">
        <button class={props.class}>
          <img
            width={props.img_w}
            height={props.img_h}
            alt={props.img_src}
            src={props.img_src}
          />
        </button>
      </div>
    );
  }
});
