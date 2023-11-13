import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Select, SelectProps } from '@/components/ui/select'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<SelectProps, 'onValueChange' | 'value'>
export const ControlledSelect = <T extends FieldValues>({ control, name, ...rest }: Props<T>) => {
  const {
    field: { onChange, ...field },
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return (
    <Select {...rest} {...field} errorMessage={error?.message} id={name} onValueChange={onChange} />
  )
}
