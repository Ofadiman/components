type StringifyValue = string | number | object | null

type StringifyArray = (StringifyValue | StringifyArray)[]

export interface StringifyProps {
  className?: string
  indentBy?: number
  value: StringifyValue | StringifyArray
}
