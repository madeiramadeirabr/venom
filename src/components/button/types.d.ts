
export type TButtonModifiers = 'button--is-primary' | 'button--is-secondary' | 'button--is-success' | 'button--is-danger' | 'button--is-warning'

export type TButtonSize = 'extra-small' | 'small' | 'default' | 'large' | 'extra-large'

export type TButtonProps = {
  modifier: TButtonModifiers
  id: string
  children: any
  disabled?: boolean
  icon?: string
  block?: boolean
  loading?: boolean
  size?: TButtonSize
}