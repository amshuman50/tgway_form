// import React, { useEffect } from "react";
// import apple from "../Assets/apple.png";
// import maize from "../Assets/maize.png";
// import potato from "../Assets/potato.png";
// import wheat from "../Assets/wheat.png";
// import "flowbite";

// const Carousal = () => {
//     useEffect(() => {
//         import("flowbite").then((module) => {
//             if (module.default && module.default.initCarousels) {
//                 module.default.initCarousels();
//             }
//         });
//     }, []);

//     const images = [apple, maize, potato, wheat];

//     return (
//         <div style={{display:"flex",justifyContent:"center"}}>
//             <div style={{ width: "50%" }}>
//                 <div id="default-carousel" className="relative w-full" data-carousel="slide">
//                     {/* Carousel wrapper */}
//                     <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
//                         {images.map((img, index) => (
//                             <div
//                                 key={index}
//                                 className="absolute inset-0 transition-opacity duration-700 ease-in-out"
//                                 data-carousel-item={index === 0 ? "active" : ""}
//                             >
//                                 <img src={img} className="w-full h-full object-contain" alt={`Slide ${index + 1}`} />
//                             </div>
//                         ))}
//                     </div>

//                     {/* Slider indicators */}
//                     <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
//                         {images.map((_, index) => (
//                             <button
//                                 key={index}
//                                 type="button"
//                                 className="w-3 h-3 rounded-full bg-gray-300"
//                                 data-carousel-slide-to={index}
//                             />
//                         ))}
//                     </div>

//                     {/* Previous and Next Buttons */}
//                     <button type="button" className="absolute top-1/2 left-2 transform -translate-y-1/2 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-white/30 hover:bg-white/50" data-carousel-prev>
//                         <svg className="w-5 h-5 text-white" viewBox="0 0 6 10">
//                             <path stroke="currentColor" strokeWidth={2} d="M5 1 1 5l4 4" />
//                         </svg>
//                     </button>
//                     <button type="button" className="absolute top-1/2 right-2 transform -translate-y-1/2 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-white/30 hover:bg-white/50" data-carousel-next>
//                         <svg className="w-5 h-5 text-white" viewBox="0 0 6 10">
//                             <path stroke="currentColor" strokeWidth={2} d="m1 9 4-4-4-4" />
//                         </svg>
//                     </button>
//                 </div>
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
import video from "../Assets/video.MP4";
import "flowbite";
import "./carousal.css";

const Carousal = () => {
    return (
        <>
            <div>
                <video
                    className="video-background"
                    src={video}  // Replace with your video path
                    autoPlay
                    loop
                    muted
                    playsInline
                // width="100%"


                />
            </div>
        </>
    );
};

export default Carousal;