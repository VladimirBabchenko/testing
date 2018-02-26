import welcome from "./welcome.js";
import name from"./name";
let newName = name("Vova");

welcome("home", newName);

export {welcome};