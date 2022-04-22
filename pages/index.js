import { useState } from 'react'
import Button from '../components/Button'
import Popup from '../components/Popup'
import Wrapper from '../components/Wrapper'
import fetchSomething from '../services/fetchSomething'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [isVisible, setIsVisible] = useState(null)
  const [isSuccessful, setIsSuccessful] = useState(false)
  const popupText = isSuccessful
    ? 'PopUp is here'
    : 'Sorry, something went wrong!'

  const handleFetch = () => {
    fetchSomething()
      .then((res) => {
        console.log('res', res)
        setIsVisible(res.isPopUpVisible)
        setIsSuccessful(res.isSuccessful)
      })
      .catch(err => {
        console.log('errr', err)
      })
  }

  const handleClockClick = () => {
    setIsVisible(false)
  }

  return (
    <Wrapper>
      <Button onClick={() => handleFetch()} text={'Click me'} className='button' />
      <Popup isVisible={isVisible} text={popupText} className='button-popup' handleClose={handleClockClick}/>
    </Wrapper>
  )
}
