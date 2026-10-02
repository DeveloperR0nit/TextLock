export default function TextBox(props) {
  function value() {
    if (props.readOnly) {
      if (props.isEncrypt) {
        return props.encrypt();
      } else {
        return props.decrypt();
      }
    } else {
      return props.value;
    }
  }
  return (
    <div className={`${props.type}-text-box text-box`}>
      <div className="top-text">
        {props.text}
        <button
          type="button"
          className={`top-text-btn ${props.btn}-btn`}
          onClick={props.readOnly ? props.copyBtn : props.clearBtn}
        >
          {props.btnLogo}
          {props.btn}
        </button>
      </div>
      <textarea
        name={props.type}
        id={props.type}
        placeholder={props.placeholderText}
        readOnly={props.readOnly}
        value={value()}
        onChange={props.onChange}
      ></textarea>
    </div>
  );
}
