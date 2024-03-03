import React from 'react'
import ReactDom from 'react-dom'
export default function Modal1({ children }) {
  return ReactDom.createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-999999999" >
      {children}
    </div>,
    document.getElementById('root')
  )
}
