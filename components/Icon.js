import React from 'react'
import Image from 'next/image'

export default function Icon() {
    return (
        <div className="icon-width">
        <Image src='/tv.png' alt='Picture of the author' width={26} height={23} />
     </div>
    )
}
