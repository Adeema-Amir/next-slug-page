/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState, useEffect } from 'react';
import { shirt } from '../page';
import { pent } from '../page';
import { shoes } from '../page';

export default function GiveName({ params, searchParams }: {
  params: { name: string },
  searchParams: { id: string },
}) {
  const [number, setNumber] = useState(0);
  const textFromIndexa = `My ${params.name} size in medium and it made by`;
  const textFromIndexb = `Nalon its import form Kashmir`;

  const updateNumber = (newValue: any) => {
    if (newValue >= 1) {
      setNumber(newValue);
    }
  };

  const [displayText, setDisplayText] = useState("Initial Text");
  const generateRandomText = () => {
    const randomTexts = ["88", "120", "140", "200"];
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    return randomTexts[randomIndex];
  };
  useEffect(() => {
    const newText = generateRandomText();
    setDisplayText(newText);
  }, []);
  
  return (
    <div>
      <div className="flex flex-wrap gap-x-2">
        {/* <button></button>
        <button>{`${params.name}()`}</button> */}
        <div>
          <img src={`https://github.com/Adeema-Amir/Css-File-Of-Portfolio-Project/blob/main/${params.name}.jpg?raw=true`} className="w-96 mt-16" alt={params.name} />
        </div>

        <h1 className="mt-20 font-extrabold text-cyan-500 text-4xl h-1">
          MY PORDUCT IS
        </h1>
        <h1 className="mt-20 font-extrabold text-red-500 text-4xl uppercase h-1">{params.name}</h1>
        <br />

        <h1 className="relative bottom-80 mt-4 left-96 ml-3 font-extralight text-blue-500 text-2xl">
          {textFromIndexa}
          <br />
          {textFromIndexb}
        </h1>
        <h1 className="relative bottom-48 right-16 mt-4 ml-3 font-extrabold text-sky-500 text-2xl h-1">
          PKR : {displayText}
        </h1>
        <div className="flex gap-x-2 relative bottom-32 right-32">
          <h1 className="font-bold text-sky-500 text-2xl h-1">
            Quantity : 
          </h1>
          <button onClick={() => updateNumber(number + 1)} className='w-5 h-5 p-4 text-center'>+</button>
          <p>{number}</p>
          <button onClick={() => updateNumber(number - 1)} className='w-5 h-5 p-4 text-center'>-</button>
        </div>
        <div className="flex relative bottom-36 gap-x-2 right-72 mt-20">
          <button className="bg-blue-500 duration-300 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Add To Cart
          </button>
          <button className="bg-blue-500 duration-300 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}
// i am makeing a shoppify website in my cart page i have make a slug page that i can link in my cards and i want to call a text from my main page to my store page   