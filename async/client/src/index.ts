import "./style.scss";
import { Api } from "./api";

window.onload = () => {
  const appElement = document.querySelector("body");

  if (!appElement) throw Error("Api root element not found");
  new Api(appElement).start();
};
