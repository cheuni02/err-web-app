import Image from 'next/image';
import React from 'react'
import errLogoImg from './public/err-shield.jpeg'

const ERRLogo = () => {
  return (
    <div className="errLogo">
      <Image src="/err-shield.jpeg" alt="errLogo" className="errLogo" width={700} height={10}/>
    </div>
  )
}

export default ERRLogo;