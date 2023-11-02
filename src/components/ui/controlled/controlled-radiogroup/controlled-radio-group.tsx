import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui/radioGroup'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<RadioGroupProps, 'id' | 'onValueChange' | 'value'>
export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  name,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, ...field },
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return (
    <RadioGroup
      {...rest}
      {...field}
      errorMessage={error?.message}
      id={name}
      onValueChange={onChange}
    />
  )
}
