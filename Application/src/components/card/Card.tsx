'use client'
import { useState } from 'react'
import styles from './Card.module.scss'
import clsx from 'clsx'

const Card = () => {
  const [expanding, setExpanding] = useState(false)

  const handleClick = () => {
    setExpanding(!expanding)
  }

  return (
    <div
      onClick={handleClick}
      className={clsx({
        [styles.card]: expanding
      })}
    >
      Card
    </div>
  )
}

export default Card
