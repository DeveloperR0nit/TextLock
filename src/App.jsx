import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeadingTextSection from "./components/HeadingTextSec";
import TextBox from "./components/TextBox";
import CopiedMsg from "./components/CopiedMsg";
export default function App() {
  // State Values
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  // Static Values
  const chars =
    " zxcvbnm,./asdfghjkl;'qwertyuiop[]1234567890-=ZXCVBNM<>?ASDFGHJKL:\"QWERTYUIOP{}|!@#$%^&*()_+";
  const charsArr = chars.split("");
  const encryptedArr = [
    "L",
    "F",
    ";",
    "-",
    "[",
    "s",
    "B",
    ",",
    ">",
    "X",
    "8",
    "S",
    "7",
    "E",
    "]",
    "y",
    "=",
    "}",
    "3",
    "W",
    "O",
    "g",
    "Q",
    "M",
    "(",
    "6",
    "P",
    "4",
    "k",
    "r",
    "%",
    "H",
    "t",
    "i",
    "+",
    "T",
    "<",
    "A",
    ".",
    "d",
    "5",
    "N",
    "p",
    "!",
    "/",
    "0",
    "l",
    "j",
    "'",
    "c",
    "D",
    "{",
    "|",
    "#",
    "U",
    ")",
    "?",
    "n",
    "Z",
    "G",
    "Y",
    "^",
    "&",
    "m",
    "_",
    "I",
    " ",
    "w",
    '"',
    "a",
    "v",
    "h",
    "f",
    "2",
    "C",
    "*",
    "q",
    "b",
    "J",
    "x",
    "R",
    "K",
    "9",
    "u",
    "e",
    "@",
    ":",
    "o",
    "$",
    "z",
    "1",
    "V",
  ];
  function updateInput(event) {
    const { value } = event.currentTarget;
    setInputValue(value);
    setOutputValue(encrypt(value));
  }
  function updateOutput(event) {
    const { value } = event.currentTarget;
    setOutputValue(value);
    setInputValue(decrypt(value));
  }
  function encrypt(val) {
    const valArr = val.split("");
    return valArr
      .map((letter) => encryptedArr[charsArr.indexOf(letter)])
      .join("");
  }
  function decrypt(val) {
    const valArr = val.split("");
    return valArr
      .map((letter) => charsArr[encryptedArr.indexOf(letter)])
      .join("");
  }
  function copyText(val) {
    navigator.clipboard.writeText(val);
    showCopiedPopup();
  }
  function showCopiedPopup() {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }
  function clearBtn() {
    setInputValue("");
    setOutputValue("");
  }
  /*
  Random chars generation logic :
  
  const chars =
    " zxcvbnm,./asdfghjkl;'qwertyuiop[]1234567890-=ZXCVBNM<>?ASDFGHJKL:\"QWERTYUIOP{}|!@#$%^&*()_+";
  const charsArr = chars.split("");
  const encryptedArr = [];
  while (charsArr.length > 0) {
    const randomNo = Math.floor(Math.random() * charsArr.length);
    encryptedArr.push(charsArr[randomNo]);
    charsArr.splice(randomNo, 1);
  }
  console.log(encryptedArr);
  */
  return (
    <div className="container">
      <Header />
      <main>
        <HeadingTextSection />
        <section className="io-sec">
          <TextBox
            text="Text Message"
            placeholderText="Type or paste text to encrypt...
Decrypted Message will also appear here..."
            btn="Clear"
            type="input"
            value={inputValue}
            onChange={updateInput}
            copyBtn={() => copyText(inputValue)}
            clearBtn={clearBtn}
          />
          <TextBox
            text="Encrypted Message"
            placeholderText="Encrypted Message will appear here...
Type or paste text to decrypt..."
            btn="Copy"
            type="output"
            value={outputValue}
            onChange={updateOutput}
            copyBtn={() => copyText(outputValue)}
            clearBtn={clearBtn}
          />
        </section>
      </main>
      <CopiedMsg copied={isCopied} />
    </div>
  );
}
