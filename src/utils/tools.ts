export const cleanObject = (obj) => {
  const result = {...obj}
  Object.keys(obj).forEach((key) => {
    if (!result[key] && result[key]!== 0) {
      delete result[key]
    }
  })
  return result
}