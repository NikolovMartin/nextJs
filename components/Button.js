function Button({onClick, text, className}) {
  return <button className={`button ${className}`} onClick={onClick}>
    {text}
  </button>
}

export default Button