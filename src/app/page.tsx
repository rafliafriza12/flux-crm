"use client";

import { FeatureSection } from "@/components";
import { useEffect, useState } from "react";
import PrivateLayout from "./(private)/layout";

export default function HomePage() {
  const fullText = "We're crafting something amazing for you.";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = fullText;

      if (!isDeleting) {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
          setTypingSpeed(100);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentText.substring(0, displayedText.length - 1));
          setTypingSpeed(50);
        } else {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, typingSpeed]);

  return (
    <PrivateLayout>
      {/* <HeroSection /> */}
      <FeatureSection />
      {/* <AboutSection />
      <HowItWorkSection />
      <ProjectSection />
      <InsightsSection />
      <TestimonialsSection />
      <CtaSection /> */}
    </PrivateLayout>
  );
}

// "use client";

// import { MainLayout } from "@/components/templates/MainLayout";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function HomePage() {
//   const fullText = "We're crafting something amazing for you.";
//   const [displayedText, setDisplayedText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [loopNum, setLoopNum] = useState(0);
//   const [typingSpeed, setTypingSpeed] = useState(100);

//   useEffect(() => {
//     const handleTyping = () => {
//       const currentText = fullText;

//       if (!isDeleting) {
//         if (displayedText.length < currentText.length) {
//           setDisplayedText(currentText.substring(0, displayedText.length + 1));
//           setTypingSpeed(100);
//         } else {
//           setTimeout(() => setIsDeleting(true), 2000);
//         }
//       } else {
//         if (displayedText.length > 0) {
//           setDisplayedText(currentText.substring(0, displayedText.length - 1));
//           setTypingSpeed(50);
//         } else {
//           setIsDeleting(false);
//           setLoopNum(loopNum + 1);
//         }
//       }
//     };

//     const timer = setTimeout(handleTyping, typingSpeed);
//     return () => clearTimeout(timer);
//   }, [displayedText, isDeleting, loopNum, typingSpeed]);

//   return (
//     <MainLayout
//       showFooter={false}
//       showHeader={false}
//       className="bg-white px-6 font-parkinsans"
//     >
//       <div className="w-full pb-12 md:pb-0 min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-white via-white to-white ">
//         <Image
//           src={"/images/logoPurpleTransparent.png"}
//           alt="Logo"
//           width={200}
//           height={200}
//           className=""
//         />
//         <h1
//           className={`text-purple-900 text-4xl md:text-2xl lg:text-4xl font-semibold text-center leading-16 min-h-16 items-center justify-center mb-4 md:flex hidden`}
//         >
//           {displayedText}
//           <span className="inline-block w-1 h-12 bg-purple-900 ml-1 animate-pulse"></span>
//         </h1>
//         <h1
//           className={`text-purple-900 text-4xl font-semibold text-center leading-16 mb-4 md:hidden`}
//         >
//           We&apos;re crafting something amazing for you.
//         </h1>
//         <div className="flex flex-col gap-2 justify-center items-center w-full md:w-1/2">
//           <p className={`text-purple-900 text-center font-light mt-2 w-full`}>
//             Our new website is{" "}
//             <span className="font-bold text-yellow-500 animate-pulse">
//               under construction
//             </span>
//             . Stay tuned!
//           </p>
//           <div className="w-full h-px bg-gray-700/10 my-4"></div>
//           <p className="text-purple-900/80 text-center">
//             Got a project in mind?{" "}
//             <span className="font-semibold text-purple-900">
//               Contact us below
//             </span>{" "}
//             and Let&apos;s fly!
//           </p>
//           <div className="w-full flex gap-6 mt-6 justify-center">
//             <Link
//               href="https://www.instagram.com/gutech.dev"
//               target="_blank"
//               className="rounded-full cursor-pointer w-20 h-20 hover:-translate-y-1 duration-200 border-2 border-gray-700/5 py-2 justify-center items-center flex gap-2 backdrop-blur"
//             >
//               <i className="ri-instagram-fill bg-linear-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent text-3xl"></i>
//             </Link>
//             <Link
//               href="https://api.whatsapp.com/send/?phone=6285158600230&text&type=phone_number&app_absent=0"
//               target="_blank"
//               className="rounded-full text-green-600 cursor-pointer w-20 h-20 hover:-translate-y-1 duration-200 border-2 border-gray-700/5 py-2 justify-center items-center flex gap-2 backdrop-blur"
//             >
//               <i className="ri-whatsapp-fill text-3xl"></i>
//             </Link>
//             <Link
//               href="mailto:hello@gutech.dev"
//               target="_blank"
//               className="rounded-full text-blue-600 cursor-pointer w-20 h-20 hover:-translate-y-1 duration-200 border-2 border-gray-700/5 py-2 justify-center items-center flex gap-2 backdrop-blur"
//             >
//               <i className="ri-mail-fill text-3xl"></i>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </MainLayout>
//   );
// }
