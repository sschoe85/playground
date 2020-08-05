import "./global.css"
import { createToggleButton } from "./components/toggleButton.js";
import { createTitle } from "./components/title.js";
import Asteroids from './steroids.jpg';

const title = createTitle();
const toggleButton = createToggleButton();
const asteroids = new Image();
asteroids.src = Asteroids;

document.body.append(title);
document.body.append(toggleButton);
document.body.append(asteroids);
