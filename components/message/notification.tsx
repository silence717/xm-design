import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { messagePrefix } from '../../constants/prefix'
import Icon from '../Icon'
import { NoticeType, NoticeProps, NotificationState } from './type'

import './index.less'

interface NotificationProps {}

export class Notification extends Component<NotificationProps, NotificationState> {
  animationTime: number

  constructor(props: NotificationProps) {
    super(props)
    this.animationTime = 300
    this.state = { notices: [] }
    this.removeNotice = this.removeNotice.bind(this)
  }

  getNoticeKey() {
    const { notices } = this.state
    return `notice-${notices.length}`
  }

  addNotice(notice: NoticeProps) {
    const { notices } = this.state
    for (let item of notices) {
      if (item.key) {
        this.removeNotice(item.key)
      }
    }
    notice.key = this.getNoticeKey()
    // TODO: Can there are multiple messgae at the same time
    this.setState({ notices: [notice] })
    if (notice.duration > 0) {
      setTimeout(() => {
        this.removeNotice(notice.key!)
      }, notice.duration)
    }
    return () => {
      this.removeNotice(notice.key!)
    }
  }

  removeNotice(key: string) {
    const { notices } = this.state
    this.setState({
      notices: notices.filter((notice) => {
        if (notice.key === key) {
          if (notice.onClose) {
            setTimeout(notice.onClose, this.animationTime)
          }
          return false
        }
        return true
      }),
    })
  }

  renderMessageContent(notice: NoticeProps, positionClass: string) {
    const iconType = notice.type === NoticeType.success ? 'success' : 'warning'
    return (
      <div
        key={notice.key}
        style={{ animationDuration: `${this.animationTime}ms` }}
        className={`${messagePrefix} ${positionClass} ${[notice.type]}`}
      >
        <Icon type={iconType} />
        <span className="ml-8">{notice.content}</span>
      </div>
    )
  }

  render() {
    const { notices } = this.state
    return (
      <>
        {notices.map((notice) => (
          <React.Fragment key={notice.key}>
            {notice.getContainer
              ? ReactDOM.createPortal(this.renderMessageContent(notice, 'absolute'), notice.getContainer!(), notice.key)
              : this.renderMessageContent(notice, 'fixed')}
          </React.Fragment>
        ))}
      </>
    )
  }
}
