import { SIZE } from './type'

export default function getClasses(size: SIZE) {
  // 16px
  let classes = 'w-4 h-4 text-xs'
  switch (size) {
    case 'xs':
      classes = 'w-4 h-4 text-xs'
      break
    case 'sm':
      // 20px
      classes = 'w-5 h-5 text-sm'
      break
    case 'small':
      // 24px
      classes = 'w-6 h-6 text-sm'
      break
    case 'normal':
      // 32px
      classes = 'w-8 h-8 text-lg'
      break
    case 'medium':
      // 40px
      classes = 'w-10 h-10 text-2xl'
      break
    case 'big':
      // 64px
      classes = 'w-16 h-16 text-4xl'
      break
    default:
      break
  }
  return classes
}
