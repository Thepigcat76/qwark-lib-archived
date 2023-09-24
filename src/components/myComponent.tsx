import { component$ } from "@builder.io/qwik";
import { IClass } from "./util";

interface IMyComponent extends IClass{
    test: string
}

export const MyComponent = component$((props: IMyComponent)=> {
    return (
        <div>
            Thepigcat76 loves Airhorn {props.test}
        </div>
    )
})