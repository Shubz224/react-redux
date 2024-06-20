import React from 'react'
import {useSelector} from "react-redux"
export const Counter = () => {
  const count = useSelector((state)=>state);
  return (
    <div>
        <h1>
            {count}
        </h1>
    </div>
  )
}
