import { useEffect } from "react"

export const useStorage = ({ key, data, initialData = data }) => {
  const getStorageData = () => {
    const rawData = window.localStorage.getItem(key)
    return (rawData && JSON.parse(rawData)) || initialData
  }

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(data))
  }, [ key, data ])

  return [ getStorageData ]
}
