import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components/ui/checkbox'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'checked' | 'onCheckedChange'>
export const ControlledCheckbox = <T extends FieldValues>({ control, name, ...rest }: Props<T>) => {
  const {
    field: { onChange, value, ...field },
  } = useController({
    control,
    name,
  })

  return <Checkbox {...rest} {...field} checked={value} id={name} onCheckedChange={onChange} />
}
