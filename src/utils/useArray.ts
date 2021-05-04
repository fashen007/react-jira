import { useEffect, useState } from "react"
export const useArray = <T>(persons: T[]) => {
  const [value, setValue] = useState(persons)
  const add = (item: T) => {
    setValue([...value, item])
  }
  const removeIndex = (index: number) => {
    let result = [...value]
    result.splice(index, 1)
    setValue(result)
  }
  const clear = () => {
    setValue([])
  }
  return {
    value,
    setValue,
    add,
    removeIndex,
    clear
  }
}
