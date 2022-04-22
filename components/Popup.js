import Button from "./Button"

function Popup({text, className, isVisible, handleClose}) {
  return ( <>
    {isVisible &&
    <div className={`popup ${className}`}>
      {text}
      <Button onClick={() => handleClose()} text={'X'} className='button-popup' />
    </div>}
    </>
  )
}

export default Popup