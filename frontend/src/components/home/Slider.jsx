// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const images = [
//   "https://i.pinimg.com/1200x/af/e7/b9/afe7b90735c6b1726de086ad669056f8.jpg",
//   "https://i.pinimg.com/1200x/e7/b8/73/e7b873a4153e015c460ec576a1b8a688.jpg",
//   "https://i.pinimg.com/736x/dd/dd/2f/dddd2f3deaf6832cb1c09a88c6c80c2e.jpg",
//   "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
// ];

// const Slider = () => {
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
//   const prevSlide = () =>
//     setIndex((prev) => (prev - 1 + images.length) % images.length);

//   // Auto slide every 4 seconds (resets on manual change)
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       nextSlide();
//     }, 4000);
//     return () => clearTimeout(timer);
//   }, [index]);

//   return (
//     <div className="flex justify-center items-center w-full py-10 bg-gray-50">
//       <div className="relative w-full max-w-7xl overflow-hidden rounded-2xl shadow-lg">
//         {/* Image Transition */}
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={images[index]}
//             src={images[index]}
//             alt="slider"
//             className="w-full h-[400px] object-cover"
//             // initial={{ opacity: 0, scale: 1.05 }}
//             // animate={{ opacity: 1, scale: 1 }}
//             // exit={{ opacity: 0, scale: 1.05 }}
//             // transition={{ duration: 0.8 }}
//           />
//         </AnimatePresence>

//         {/* Left Button */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
//         >
//           <ChevronLeft size={28} />
//         </button>

//         {/* Right Button */}
//         <button
//           onClick={nextSlide}
//           className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
//         >
//           <ChevronRight size={28} />
//         </button>

//         {/* Dots */}
//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
//           {images.map((_, i) => (
//             <div
//               key={i}
//               onClick={() => setIndex(i)}
//               className={`w-3 h-3 rounded-full cursor-pointer ${
//                 i === index ? "bg-white" : "bg-white/50"
//               }`}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;
