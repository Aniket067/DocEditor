import Image from 'next/image'
import React from 'react'

const DeleteLoader = () => {
  return (
    <div className='loader'>
        <Image src="/assets/icons/loader.svg"
        alt='loader'
        width={30}
        height={30}
        className='animate-spin'
        />
        
    </div>
  )
}

export default DeleteLoader