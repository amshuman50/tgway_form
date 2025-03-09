// import React from 'react'
// import apple from '../Assets/apple.png'
// import maize from '../Assets/maize.png'
// import potato from '../Assets/potato.png'
// import wheat from '../Assets/wheat.png'
// import "flowbite";


// const Carousal = () => {
//     return (
//         <div>
//             <div id="default-carousel" className="relative w-full" data-carousel="slide">
//                 {/* Carousel wrapper */}
//                 <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//                     {/* Item 1 */}
//                     <div className=" duration-700 ease-in-out" data-carousel-item="">
//                         <img
//                             // src="/docs/images/carousel/carousel-1.svg"
//                             src={apple}
//                             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                             alt="Apple"
//                         />
//                     </div>
//                     {/* Item 2 */}
//                     <div className=" duration-700 ease-in-out" data-carousel-item="">
//                         <img
//                             src={maize}
//                             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                             alt="Maize"
//                         />
//                     </div>
//                     {/* Item 3 */}
//                     <div className=" duration-700 ease-in-out" data-carousel-item="">
//                         <img
//                             src={potato}
//                             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                             alt="Potato"
//                         />
//                     </div>
//                     {/* Item 4 */}
//                     <div className=" duration-700 ease-in-out" data-carousel-item="">
//                         <img
//                             src={wheat}
//                             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                             alt="Wheat"
//                         />
//                     </div>
//                     {/* Item 5 */}
//                     <div className=" duration-700 ease-in-out" data-carousel-item="">
//                         <img
//                             src={maize}
//                             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                             alt="maize"
//                         />
//                     </div>
//                 </div>
//                 {/* Slider indicators */}
//                 <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//                     <button
//                         type="button"
//                         className="w-3 h-3 rounded-full"
//                         aria-current="true"
//                         aria-label="Slide 1"
//                         data-carousel-slide-to={0}
//                     />
//                     <button
//                         type="button"
//                         className="w-3 h-3 rounded-full"
//                         aria-current="false"
//                         aria-label="Slide 2"
//                         data-carousel-slide-to={1}
//                     />
//                     <button
//                         type="button"
//                         className="w-3 h-3 rounded-full"
//                         aria-current="false"
//                         aria-label="Slide 3"
//                         data-carousel-slide-to={2}
//                     />
//                     <button
//                         type="button"
//                         className="w-3 h-3 rounded-full"
//                         aria-current="false"
//                         aria-label="Slide 4"
//                         data-carousel-slide-to={3}
//                     />
//                     <button
//                         type="button"
//                         className="w-3 h-3 rounded-full"
//                         aria-current="false"
//                         aria-label="Slide 5"
//                         data-carousel-slide-to={4}
//                     />
//                 </div>
//                 {/* Slider controls */}
//                 <button
//                     type="button"
//                     className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//                     data-carousel-prev=""
//                 >
//                     <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                         <svg
//                             className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//                             aria-hidden="true"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 6 10"
//                         >
//                             <path
//                                 stroke="currentColor"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M5 1 1 5l4 4"
//                             />
//                         </svg>
//                         <span className="sr-only">Previous</span>
//                     </span>
//                 </button>
//                 <button
//                     type="button"
//                     className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//                     data-carousel-next=""
//                 >
//                     <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                         <svg
//                             className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//                             aria-hidden="true"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 6 10"
//                         >
//                             <path
//                                 stroke="currentColor"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="m1 9 4-4-4-4"
//                             />
//                         </svg>
//                         <span className="sr-only">Next</span>
//                     </span>
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default Carousal


// import React, { useEffect } from "react";
// import apple from "../Assets/apple.png";
// import maize from "../Assets/maize.png";
// import potato from "../Assets/potato.png";
// import wheat from "../Assets/wheat.png";
// import "flowbite";

// const Carousal = () => {
//     useEffect(() => {
//         import("flowbite").then((module) => {
//             if (module.initCarousels) {
//                 module.initCarousels();
//             }
//         });
//     }, []);

//     return (
//         <div>
//             <div id="default-carousel" className="relative w-full" data-carousel="slide">
//                 {/* Carousel wrapper */}
//                 <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//                     {[apple, maize, potato, wheat].map((img, index) => (
//                         <div key={index} className={`duration-700 ease-in-out ${index === 0 ? "block" : "hidden"}`} data-carousel-item>
//                             <img src={img} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
//                         </div>
//                     ))}
//                 </div>

//                 {/* Slider indicators */}
//                 <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
//                     {[0, 1, 2, 3].map((index) => (
//                         <button key={index} type="button" className="w-3 h-3 rounded-full bg-gray-300" data-carousel-slide-to={index} />
//                     ))}
//                 </div>

//                 {/* Previous and Next Buttons */}
//                 <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" data-carousel-prev>
//                     <span className="w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center">
//                         <svg className="w-4 h-4 text-white" viewBox="0 0 6 10">
//                             <path stroke="currentColor" strokeWidth={2} d="M5 1 1 5l4 4" />
//                         </svg>
//                     </span>
//                 </button>
//                 <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" data-carousel-next>
//                     <span className="w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center">
//                         <svg className="w-4 h-4 text-white" viewBox="0 0 6 10">
//                             <path stroke="currentColor" strokeWidth={2} d="m1 9 4-4-4-4" />
//                         </svg>
//                     </span>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Carousal;



import React, { useEffect } from "react";
import apple from "../Assets/apple.png";
import maize from "../Assets/maize.png";
import potato from "../Assets/potato.png";
import wheat from "../Assets/wheat.png";
import "flowbite";

const Carousal = () => {
    useEffect(() => {
        import("flowbite").then((module) => {
            if (module.default && module.default.initCarousels) {
                module.default.initCarousels();
            }
        });
    }, []);

    const images = [apple, maize, potato, wheat];

    return (
        <div style={{display:"flex",justifyContent:"center"}}>
            <div style={{ width: "50%" }}>
                <div id="default-carousel" className="relative w-full" data-carousel="slide">
                    {/* Carousel wrapper */}
                    <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                                data-carousel-item={index === 0 ? "active" : ""}
                            >
                                <img src={img} className="w-full h-full object-contain" alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                    {/* Slider indicators */}
                    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                className="w-3 h-3 rounded-full bg-gray-300"
                                data-carousel-slide-to={index}
                            />
                        ))}
                    </div>

                    {/* Previous and Next Buttons */}
                    <button type="button" className="absolute top-1/2 left-2 transform -translate-y-1/2 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-white/30 hover:bg-white/50" data-carousel-prev>
                        <svg className="w-5 h-5 text-white" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeWidth={2} d="M5 1 1 5l4 4" />
                        </svg>
                    </button>
                    <button type="button" className="absolute top-1/2 right-2 transform -translate-y-1/2 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-white/30 hover:bg-white/50" data-carousel-next>
                        <svg className="w-5 h-5 text-white" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeWidth={2} d="m1 9 4-4-4-4" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousal;
