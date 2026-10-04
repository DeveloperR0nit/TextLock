export default function TextBox(props) {
  return (
    <div className={`${props.type}-text-box text-box`}>
      <div className="top-text">
        {props.text}
        <div className="buttons">
          <button
            type="button"
            className="top-text-btn clear-btn"
            onClick={props.clearBtn}
          >
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
            Clear
          </button>
          <button
            type="button"
            className="top-text-btn Copy-btn"
            onClick={props.copyBtn}
          >
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
            Copy
          </button>
        </div>
      </div>
      <textarea
        name={props.type}
        id={props.type}
        placeholder={props.placeholderText}
        value={props.value}
        onChange={props.onChange}
      ></textarea>
    </div>
  );
}
