// Based on: https://stackoverflow.com/a/34425083
import { useEffect } from "react"

const useScripts = urls => {
  const addedScripts = []
  useEffect(() => {
    if (urls) {
      urls.forEach((url, index) => {
        const script = document.createElement("script")

        script.id = `injectedScript${index}`
        script.src = url
        script.async = true

        console.log("adding script", urls)
        document.body.appendChild(script)
        addedScripts.push(script)
      })
    }
    return () => {
      addedScripts.forEach(script => document.body.removeChild(script))
    }
  }, [urls])
}

export default useScripts
