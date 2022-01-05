export type SIZE = 'xs' | 'sm' | 'small' | 'normal' | 'medium' | 'big'

export interface AvatarProps {
  name?: string | undefined | null
  size?: SIZE
  img?: string
  className?: string
  onClick?(): void
}
