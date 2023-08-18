import React from 'react'
import { useState } from 'react'

function useCounterCustomHook(initialValue) {
    const [count, setCount] = useState(initialValue)

    function increase() {
        setCount(count + 1)
    }

    function decrease() {
        setCount(count - 1)
    }

  return [count, increase, decrease]
}

export default useCounterCustomHook