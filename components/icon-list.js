import React from 'react';
import Image from 'next/image';

export default function IconList(prop) {
  console.log(prop);

  return (
    <div className="image_list_style">
      <Image src={prop.img} alt='Picture of the author' width={26} height={23} />
    </div>
  );
}
