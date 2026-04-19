import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar, Navbar } from './Navigation';
import { Newsletter, Footer } from './Footer';
import { motion, useScroll, useTransform } from 'motion/react';


export const Layout = () => {
  const { scrollYProgress } = useScroll();

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ['#ffffff', '#ECFDF5', '#f0fdf4', '#fff7ed', '#faf5ff', '#fef2f2']
  );

  return (
    <motion.div 
      className="min-h-screen flex flex-col overflow-x-hidden transition-colors duration-700"
      style={{ backgroundColor }}
    >
      <TopBar />
      <Navbar />

      <main className="grow w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      <Newsletter />
      <Footer />
    </motion.div>
  );
};
// export const Layout = () => {
//   const { scrollYProgress } = useScroll();
  
//   // Map scroll progress (0 to 1) to a spectrum of background colors
//   // const backgroundColor = useTransform(
//   //   scrollYProgress,
//   //   [0, 0.2, 0.4, 0.6, 0.8, 1],
//   //   [
//   //     '#ffffff', // White (Start)
//   //     '#f0f9ff', // Sky Blue 50
//   //     '#f0fdf4', // Green 50
//   //     '#fff7ed', // Orange 50
//   //     '#faf5ff', // Purple 50
//   //     '#fef2f2'  // Red 50
//   //   ]
//   // );

//   const backgroundColor = useTransform(
//   scrollYProgress,
//   [0, 0.2, 0.4, 0.6, 0.8, 1],
//   [
//     '#ffffff',   // pure white (top)
//     '#ECFDF5',   // very light green
//     '#f0fdf4',   // light green
//     '#fff7ed',   // mid light green
//     '#faf5ff',   // soft green
//     '#fef2f2'    // your brand green (deep end)
//   ]
// );

//   return (
//     <motion.div 
//       className="min-h-screen flex flex-col transition-colors duration-500"
//       style={{ backgroundColor }}
//     >
//       <TopBar />
//       <Navbar />
//       <main className="grow">
//         <Outlet />
//       </main>
//       <Newsletter />
//       <Footer />
//     </motion.div>
//   );
// };
