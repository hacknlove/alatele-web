import { useEffect } from 'react'

export default function useUpdateCompletion (dispatch, name, object) {
  const values = Object.values(object)

  console.log(values)

  useEffect(() => {
    dispatch({
      type: 'SETCOMPLETION',
      name,
      value: values.length && values.reduce((sum, value) => sum + (value ? 1 : 0), 0) / values.length
    })
  }, values)
}

export function computePercent (completion) {
  const completionValues = Object.values(completion)
  return completionValues.reduce((sum, value) => sum + value, 0) / (completionValues.length || 1)
}
