import {useState, useEffect} from 'react'

const DelayRendering = ({ delay, component}) => {

    const [delayed, setDelayed] = useState(false)

    useEffect(() => {
      setTimeout(() => {
        setDelayed(true)
      }, delay)
    }, [])

    return (
      <>
        {delayed ? component : <></>}
      </>
    )
}

export default DelayRendering