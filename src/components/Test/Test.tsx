'use client'

import { useState } from 'react'

export default function Test() {
  const [count, setCount] = useState(0)
  return (
    <button
      className="bg-white p-2 text-black font-bold m-auto block rounded-md"
      onClick={() => {
        setCount(count + 1)
        console.log(`clicked ${count + 1} times`)
      }}
    >
      {'Clicked ' + count + ' times'}
    </button>
  )
}
