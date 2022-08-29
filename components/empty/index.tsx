import React from 'react'
import Image from 'next/image'
import image from "../../assets/images/image.png"


const Empty = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full border  ">
      <Image src={image.src} width="287" height="287" alt="" />
    </div>
  );
}

export default Empty