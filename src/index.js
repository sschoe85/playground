import "./global.css";
import { createToggleButton } from "./components/toggleButton.js";
import { createTitle } from "./components/title.js";
import Asteroids from "./steroids.jpg";
import { createElement } from "./utils/elements";
import { quote } from "./api/quote";
import { createNumberButton } from "./components/numberButton";

let url = "http://numbersapi.com/"
const title = createTitle();
const toggleButton = createToggleButton();
const fetchButton = createElement("button", {
  innerHTML: "FETCH IT!",
});

const asteroids = new Image();
asteroids.src = Asteroids;

fetchButton.addEventListener("click", async () => {
   quote();
  document.body.append(asteroids);
});

document.body.append(title);
document.body.append(toggleButton);
document.body.append(fetchButton);
for (let i=0; i<10; i++){
  let numberButton = createNumberButton(i, url);
  document.body.append(numberButton);
}