/* eslint-disable @next/next/no-img-element */
export default function Home() {

  return (
    <>
      <br /><br /><br />

      <br /><br /><br />
      <div className="flex flex-wrap ml-7 gap-x-2">
        <div className="w-96">
          <img className="w-96 h-96" src="shirt.jpg" alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"> <a href="shirt">Shirt</a></div>
            <p className="text-gray-700 text-base">
               medium and it made by <br /> Nalon itsm Kashmir
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Shirt</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Shirt</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Shirt</span>
          </div>
        </div>
        <div className="">
          <img className="w-96 h-96" src="pent.jpg" alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"> <a href="pent">Pent</a></div>
            <p className="text-gray-700 text-base">
               by <br /> Nalon its import 
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Shirt</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Shirt</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Shirt</span>
          </div>
        </div>
        <div className="">
          <img className="w-96 h-96" src="shoes.jpg" alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"> <a href="shoes">Shoes</a></div>
            <p className="text-gray-700 text-base">
              My  made by <br /> Nalon Kashmir
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Shirt</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Shirt</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Shirt</span>
          </div>
        </div>
      </div>
    </>
  )
}


export const shirt = () => {
  document.write("medium and it made by \n Nalon itsm Kashmir");
};
export const pent = () => {
  document.write("by \n Nalon its import");
};
export const shoes = () => {
  document.write("My  made by \n Nalon Kashmir");
};