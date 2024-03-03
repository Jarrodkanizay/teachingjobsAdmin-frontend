import React from 'react'
import ReactDom from 'react-dom'
import { Routes, Route, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';


const OVERLAY_STYLES = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'WHITE',
  zIndex: 1000,
  minHeight: '100vh',
  maxHeight: '10000px', // Set a very large value for maxHeight
  // overflowY: 'auto', // Enable vertical scrolling


}
const TOP_STYLES = {
  position: 'FIXED',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: 'WHITE',
  zIndex: 1000,
}

const Scroll2Top = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

export default function Modal({ open, children, onClose }) {
  if (!open) return null
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} >
        <div className='flex flex-col gap-2'>
        <button className=" w-full text-left font-bold px-3 py-2 text-lg bg-white"  onClick={onClose}>&lt; Back</button>
          {children}
        </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}
