import { FieldComponent } from '../field-component'

export function State(component: FieldComponent, e: Event): boolean {
  const { getValue, setActive } = component,
    { type } = e

  if (type === 'focus') setActive(true)
  if (type === 'blur') setActive(getValue().length > 0)

  return false
}
