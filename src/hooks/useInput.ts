import { useState, useCallback, ChangeEvent } from 'react'

const useInput = (initial: any) => {
  const [input, setInput] = useState(initial)

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInput((input: any) => ({ ...input, [name]: value }))
  }, [])

  const reset = useCallback(() => setInput(initial), [initial])

  return { input, onChange, reset }
}

export default useInput
