import React from 'react'

export enum NoticeType {
  success = 'success',
  info = 'info',
  warning = 'warning',
  danger = 'danger',
  error = 'error',
}

export interface NoticeProps {
  type: NoticeType
  content: string
  duration: number
  onClose: () => void
  getContainer?: () => Element
  key?: string
}

export interface NotificationState {
  notices: NoticeProps[]
  style?: React.CSSProperties
}
