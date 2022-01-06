export type SIZE = 'xs' | 'sm' | 'base' | 'medium' | 'lg' | 'xl'

export interface AvatarProps {
  name: string
  size?: SIZE
  img?: string
  className?: string
  onClick?(): void
}
