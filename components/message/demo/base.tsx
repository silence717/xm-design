import React from 'react'
import { Button, message } from 'xm-design'

export default function MessageDemo() {
  const handleSuccessClick = () => {
    message.success('this is success message', 1000000)
  }
  const handleErrorClick = () => {
    message.error('this is error message')
  }
  const handleInfoClick = () => {
    message.info('this is info message')
  }
  const handleWarningClick = () => {
    message.warning('this is warning message')
  }
  const handleDangerClick = () => {
    message.danger('this is danger message')
  }

  return (
    <div className="flex gap-2">
      <Button type={'primary'} onClick={handleSuccessClick}>
        success
      </Button>
      <Button type={'danger'} onClick={handleErrorClick}>
        error
      </Button>
      <Button onClick={handleInfoClick}>info</Button>
      <Button onClick={handleWarningClick}>warning</Button>
      <Button onClick={handleDangerClick}>danger</Button>
    </div>
  )
}
