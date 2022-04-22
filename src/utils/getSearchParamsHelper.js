export const getSearchParamsHelper = ({ searchParams }) => {
  const params = {}
  for (const [key, value] of searchParams.entries()) {
    params[key] = value
  }

  return params
}
