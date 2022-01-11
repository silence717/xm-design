import { NoticeType } from './type'
import notificationDOM from './createNotification'

export interface ExtendsParams {
  onClose?: () => void
  getContainer?: () => Element
}

let notification: {
  addNotice: Function
}

const message = (
  type: NoticeType,
  content: string,
  duration: number = 2000,
  onClose?: () => void,
  getContainer?: () => Element
) => {
  if (!notification) {
    notification = notificationDOM
  }
  return notification.addNotice({ type, content, duration, onClose, getContainer })
}

export default {
  success(content: string, duration?: number, extendsParams?: ExtendsParams) {
    return message(NoticeType.success, content, duration, extendsParams?.onClose, extendsParams?.getContainer)
  },
  info(content: string, duration?: number, extendsParams?: ExtendsParams) {
    return message(NoticeType.info, content, duration, extendsParams?.onClose, extendsParams?.getContainer)
  },
  warning(content: string, duration?: number, extendsParams?: ExtendsParams) {
    return message(NoticeType.warning, content, duration, extendsParams?.onClose, extendsParams?.getContainer)
  },
  danger(content: string, duration?: number, extendsParams?: ExtendsParams) {
    return message(NoticeType.danger, content, duration, extendsParams?.onClose, extendsParams?.getContainer)
  },
  error(content: string, duration?: number, extendsParams?: ExtendsParams) {
    return message(NoticeType.error, content, duration, extendsParams?.onClose, extendsParams?.getContainer)
  },
}
