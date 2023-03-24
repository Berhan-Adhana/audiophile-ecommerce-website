import React from 'react'

const CategoryTitle = ({title}) => {
  return (
    <div className="h-[96px] md:h-[240px] bg-background flex items-center justify-center">
      <h2 className="text-white">{title}</h2>
    </div>
  );
}

export default CategoryTitle