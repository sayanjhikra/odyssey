import { headerCode, footerCode } from "./module.js";

let main = document.querySelector("main");

// export const header1 = await fetch("/components/header.html")
//   .then((res) => res.text())
//   .then((text) => {
//     return text;
//   })
//   .catch((e) => console.error(e));

// export const footer1 = await fetch("/components/footer.html")
//   .then((res) => res.text())
//   .then((text) => {
//     return text;
//   })
//   .catch((e) => console.error(e));

const header = new DOMParser().parseFromString(headerCode, "text/html"); // convert string to document
const footer = new DOMParser().parseFromString(footerCode, "text/html"); // convert string to document
main.prepend(header.querySelector("section"));
main.append(footer.querySelector("section"));
