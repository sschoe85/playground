import { createElement } from "../utils/elements";
import { getNumber } from "./number";

export function quote(){
    getNumber();
    const apiText = createElement("p", {
        innerHTML: data, 
    });
    document.body.append(apiText);
}