// Based on: https://stackoverflow.com/a/34425083
import { useEffect } from "react"

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = url
    script.async = false

    console.log("adding script", url)
    document.body.appendChild(script)

    return () => {
      console.log("removing script", script)
      document.body.removeChild(script)
    }
  }, [url])
};

export default useScript
