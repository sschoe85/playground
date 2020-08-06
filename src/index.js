import "./global.css";
import { createToggleButton } from "./components/toggleButton.js";
import { createTitle } from "./components/title.js";
import Asteroids from "./steroids.jpg";
import { createElement } from "./utils/elements";
import { getNumber } from "./api/number";

const title = createTitle();
const toggleButton = createToggleButton();
const fetchButton = createElement("button", {
  innerHTML: "FETCH IT!",
});
const asteroids = new Image();
asteroids.src = Asteroids;

fetchButton.addEventListener("click", async () => {
    getNumber();
  const apiText = createElement("p", {
    innerHTML: data,
  });
  document.body.append(apiText);
  document.body.append(asteroids);
});

document.body.append(title);
document.body.append(toggleButton);
document.body.append(fetchButton);
