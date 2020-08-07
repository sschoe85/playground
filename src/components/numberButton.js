import { createElement } from "../utils/elements";

export function createNumberButton(number, url){
    const numberButton = createElement("button",{
        className: "numberButton",
        innerHTML: number,
    });
    numberButton.addEventListener("click", ()=>{
        url = url + numberButton.innerHTML;
        console.log(url);
    });
    return numberButton;
}