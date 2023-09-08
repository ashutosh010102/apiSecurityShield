/* eslint-disable @next/next/no-img-element */
import React from 'react'

type Props = {
    imagePath: string,
    lang:string
}

function Language({imagePath,lang}: Props) {
  return (
    <p className="flex items-center text-sm md:text-xl font-semibold">
      <span className="mr-2">
        <img
          src={`/Images/${imagePath}.avif`}
          alt="logo"
          className=" h-9 w-9 md:h-12 md:w-12 rounded-full"
        />
      </span>
      {lang}
    </p>
  );
}

export default Language