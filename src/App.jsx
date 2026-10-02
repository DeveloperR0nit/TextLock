import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeadingTextSection from "./components/HeadingTextSec";
import TextBox from "./components/TextBox";
import CopiedMsg from "./components/CopiedMsg";
export default function App() {
  // State Values
  const [inputValue, setInputValue] = useState("");
  const [isEncrypt, setIsEncrypt] = useState(true);
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
  }
  function encrypt() {
    const valArr = inputValue.split("");
    return valArr
      .map((letter) => encryptedArr[charsArr.indexOf(letter)])
      .join("");
  }
  function decrypt() {
    const valArr = inputValue.split("");
    return valArr
      .map((letter) => charsArr[encryptedArr.indexOf(letter)])
      .join("");
  }
  function copyText() {
    if (isEncrypt) {
      navigator.clipboard.writeText(encrypt());
    } else {
      navigator.clipboard.writeText(decrypt());
    }
    showCopiedPopup()
  }
  function showCopiedPopup() {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }
  // random chars generation logic
  /*
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
            text="Input Text"
            btnLogo={
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.48333 7L7 5.48333L8.51667 7L9.33333 6.18333L7.81667 4.66667L9.33333 3.15L8.51667 2.33333L7 3.85L5.48333 2.33333L4.66667 3.15L6.18333 4.66667L4.66667 6.18333L5.48333 7ZM4.08333 9.33333C3.89861 9.33333 3.72361 9.29201 3.55833 9.20938C3.39306 9.12674 3.25694 9.0125 3.15 8.86667L0 4.66667L3.15 0.466667C3.25694 0.320833 3.39306 0.206597 3.55833 0.123958C3.72361 0.0413194 3.89861 0 4.08333 0H10.5C10.8208 0 11.0955 0.114236 11.324 0.342708C11.5524 0.571181 11.6667 0.845833 11.6667 1.16667V8.16667C11.6667 8.4875 11.5524 8.76215 11.324 8.99063C11.0955 9.2191 10.8208 9.33333 10.5 9.33333H4.08333ZM1.45833 4.66667L4.08333 8.16667H10.5V1.16667H4.08333L1.45833 4.66667Z"
                  fill="#BBCABF"
                />
              </svg>
            }
            placeholderText="Type or paste text to encrypt or decrypt..."
            btn="Clear"
            type="input"
            readOnly={false}
            value={inputValue}
            onChange={updateInput}
            clearBtn={() => setInputValue("")}
          />
          <div className="buttons">
            <button
              type="button"
              className={`encrypt ${isEncrypt ? "active" : null}`}
              onClick={() => setIsEncrypt(true)}
            >
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66667 17.5C1.20833 17.5 0.815972 17.3368 0.489583 17.0104C0.163194 16.684 0 16.2917 0 15.8333V7.5C0 7.04167 0.163194 6.64931 0.489583 6.32292C0.815972 5.99653 1.20833 5.83333 1.66667 5.83333H2.5V4.16667C2.5 3.01389 2.90625 2.03125 3.71875 1.21875C4.53125 0.40625 5.51389 0 6.66667 0C7.81944 0 8.80208 0.40625 9.61458 1.21875C10.4271 2.03125 10.8333 3.01389 10.8333 4.16667V5.83333H11.6667C12.125 5.83333 12.5174 5.99653 12.8438 6.32292C13.1701 6.64931 13.3333 7.04167 13.3333 7.5V15.8333C13.3333 16.2917 13.1701 16.684 12.8438 17.0104C12.5174 17.3368 12.125 17.5 11.6667 17.5H1.66667ZM1.66667 15.8333H11.6667V7.5H1.66667V15.8333ZM6.66667 13.3333C7.125 13.3333 7.51736 13.1701 7.84375 12.8438C8.17014 12.5174 8.33333 12.125 8.33333 11.6667C8.33333 11.2083 8.17014 10.816 7.84375 10.4896C7.51736 10.1632 7.125 10 6.66667 10C6.20833 10 5.81597 10.1632 5.48958 10.4896C5.16319 10.816 5 11.2083 5 11.6667C5 12.125 5.16319 12.5174 5.48958 12.8438C5.81597 13.1701 6.20833 13.3333 6.66667 13.3333ZM4.16667 5.83333H9.16667V4.16667C9.16667 3.47222 8.92361 2.88194 8.4375 2.39583C7.95139 1.90972 7.36111 1.66667 6.66667 1.66667C5.97222 1.66667 5.38194 1.90972 4.89583 2.39583C4.40972 2.88194 4.16667 3.47222 4.16667 4.16667V5.83333ZM1.66667 15.8333V7.5V15.8333Z"
                  fill="#003824"
                />
              </svg>
              Encrypt
            </button>
            <button
              type="button"
              className={`decrypt ${!isEncrypt ? "active" : null}`}
              onClick={() => setIsEncrypt(false)}
            >
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66667 5.83333H9.16667V4.16667C9.16667 3.47222 8.92361 2.88194 8.4375 2.39583C7.95139 1.90972 7.36111 1.66667 6.66667 1.66667C5.97222 1.66667 5.38194 1.90972 4.89583 2.39583C4.40972 2.88194 4.16667 3.47222 4.16667 4.16667H2.5C2.5 3.01389 2.90625 2.03125 3.71875 1.21875C4.53125 0.40625 5.51389 0 6.66667 0C7.81944 0 8.80208 0.40625 9.61458 1.21875C10.4271 2.03125 10.8333 3.01389 10.8333 4.16667V5.83333H11.6667C12.125 5.83333 12.5174 5.99653 12.8438 6.32292C13.1701 6.64931 13.3333 7.04167 13.3333 7.5V15.8333C13.3333 16.2917 13.1701 16.684 12.8438 17.0104C12.5174 17.3368 12.125 17.5 11.6667 17.5H1.66667C1.20833 17.5 0.815972 17.3368 0.489583 17.0104C0.163194 16.684 0 16.2917 0 15.8333V7.5C0 7.04167 0.163194 6.64931 0.489583 6.32292C0.815972 5.99653 1.20833 5.83333 1.66667 5.83333ZM1.66667 15.8333H11.6667V7.5H1.66667V15.8333ZM6.66667 13.3333C7.125 13.3333 7.51736 13.1701 7.84375 12.8438C8.17014 12.5174 8.33333 12.125 8.33333 11.6667C8.33333 11.2083 8.17014 10.816 7.84375 10.4896C7.51736 10.1632 7.125 10 6.66667 10C6.20833 10 5.81597 10.1632 5.48958 10.4896C5.16319 10.816 5 11.2083 5 11.6667C5 12.125 5.16319 12.5174 5.48958 12.8438C5.81597 13.1701 6.20833 13.3333 6.66667 13.3333ZM1.66667 15.8333V7.5V15.8333Z"
                  fill="#4CD7F6"
                />
              </svg>
              Decrypt
            </button>
          </div>
          <TextBox
            text="Output Result"
            btnLogo={
              <svg
                width="11"
                height="13"
                viewBox="0 0 11 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 10C3.40625 10 3.11198 9.8776 2.86719 9.63281C2.6224 9.38802 2.5 9.09375 2.5 8.75V1.25C2.5 0.90625 2.6224 0.611979 2.86719 0.367188C3.11198 0.122396 3.40625 0 3.75 0H9.375C9.71875 0 10.013 0.122396 10.2578 0.367188C10.5026 0.611979 10.625 0.90625 10.625 1.25V8.75C10.625 9.09375 10.5026 9.38802 10.2578 9.63281C10.013 9.8776 9.71875 10 9.375 10H3.75ZM3.75 8.75H9.375V1.25H3.75V8.75ZM1.25 12.5C0.90625 12.5 0.611979 12.3776 0.367188 12.1328C0.122396 11.888 0 11.5938 0 11.25V2.5H1.25V11.25H8.125V12.5H1.25ZM3.75 8.75V1.25V8.75Z"
                  fill="#003824"
                />
              </svg>
            }
            placeholderText="Result will appear here..."
            btn="Copy"
            type="output"
            readOnly={true}
            encrypt={encrypt}
            decrypt={decrypt}
            isEncrypt={isEncrypt}
            copyBtn={copyText}
          />
        </section>
      </main>
      <CopiedMsg copied={isCopied}/>
    </div>
  );
}
