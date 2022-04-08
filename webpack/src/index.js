// import{mult,sum} from "./calc"
// console.log(sum(4,5))
// console.log(mult(4,5))
// const root = document.getElementById("root")
// const h1 = document.createElement("h1")
// h1.textContent ="hello"
// root.append(h1)
import "./index.css"
import img from './logo.jpg'
const h1 = document.createElement("h1");
h1.innerText = "Create  your notes";
const logo = document.createElement("img")
logo.setAttribute("src",img)
h1.classList.add("redtext")
const input = document.createElement("textarea");
const button = document.createElement("button");
button.textContent = "notes";
// button.style.display = "block";
const open = () => {
  const note = document.createElement("p");
  const text = input.value;
  note.innerText = text;
  document.getElementById("root").append(note);
};
button.addEventListener("click", open);
document.getElementById("root").append(logo,h1, input, button);

// $ npm install file-loader --save-dev
// import img from './file.png';

