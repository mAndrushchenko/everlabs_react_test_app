export const saveToLocalStorage = ({ key, data }) => {
  try {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(data))
    }
  } catch (error) {
    console.log(error)
  }
}

export const loadFromLocalStorage = ({ key, initialValue }) => {
  if (typeof window === "undefined") {
    return initialValue
  }
  try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  } catch (error) {
    return initialValue
  }
}
