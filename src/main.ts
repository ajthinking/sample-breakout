import { Engine, ImageSource, Loader } from "excalibur";

const zombie = new ImageSource("./zombie1.png");

const game = new Engine({});
const loader = new Loader();
loader.addResource(zombie);
game.start(loader);
