export default function CopiedMsg(props) {
  return (
    <div className={`toast ${props.copied ? "show" : null}`} id="toast">
      <div className="toast-icon">
        <i className="fa-solid fa-check"></i>
      </div>
      <div>
        <strong>Success</strong>
        <span id="toastMessage">Text copied successfully</span>
      </div>
    </div>
  );
}
