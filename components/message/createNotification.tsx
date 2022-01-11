import React from 'react'
import ReactDOM from 'react-dom'
import { NoticeProps } from './type'
import { Notification } from './notification'

function createNotification() {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const ref = React.createRef<Notification>()
  ReactDOM.render(<Notification ref={ref} />, div)

  return {
    addNotice(notice: NoticeProps) {
      return ref.current!.addNotice(notice)
    },
    addNoticeHadContainer(notice: NoticeProps) {
      return ref.current!.addNotice(notice)
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(div)
      document.body.removeChild(div)
    },
  }
}

export default createNotification()
