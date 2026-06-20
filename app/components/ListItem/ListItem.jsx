import React from 'react'

function ListItem({children, ...otherProps}) {
  return (
    <button className="w-full text-sm lg:text-base text-left px-3 py-2 text-gray border border-transparent hover:border-secondary-500 hover:text-secondary font-semibold rounded-md mb-3 bg-gradient-to-b from-white to-secondary-100 flex gap-3 justify-between" {...otherProps}>{children} <span className='underline'>View</span></button>
  )
}

export default ListItem