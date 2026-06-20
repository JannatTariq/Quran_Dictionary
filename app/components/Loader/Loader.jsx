import React from 'react'
import FadeLoader from "react-spinners/FadeLoader"

function Loader({loading, text = "Loading", ...otherProps}) {
  return loading ? (
    <div className='fixed z-50 top-0 bg-overlay left-0 h-screen w-screen flex items-center justify-center'>
        <FadeLoader
        color={"white"}
        loading={loading}
        aria-label="Loading Spinner"
        data-testid="loader"
        {...otherProps}
      />
    </div>
  ) : null
}

export default Loader