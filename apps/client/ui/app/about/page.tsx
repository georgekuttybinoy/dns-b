"use client";
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';


export default function Home() {
  return (
    <div className="text-white">
      <Head>
        <title>Emma</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>



      <main className="flex flex-col items-center justify-center h-screen text-center">
        <div className="mt-12">
          <img
            src="images/photo copy.png"
            alt="Background Image"
            className="mx-auto"
            width={"2085px"}
            height={"1021px"}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
      
      


      


       <div className="absolute top-[21px] left-[168px] w-[127px] h-[53px] flex items-center justify-center rounded-md"
      style={{
        background: "linear-gradient(244.91deg, #D4FFEC 15.94%, #57F2CC 48.55%, #4596FB 84.06%)",
        WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
      }}>
        <a
          className="text-[48px] font-normal leading-[52.8px] text-center"
          style={{
            fontFamily: "'Rounded Mplus 1c', sans-serif",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
        </a>
        <h1 className="text-6xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 underline" style={{ fontFamily: 'Roboto, sans-serif' }}>
        emma
      </h1>
    </div> 





    <div
      className="absolute top-[42px] left-[788px] w-[46px] h-[24px] flex items-center justify-center"
      style={{ opacity: 1 }}  // Maintains visibility
    >
      <Link
        href="/"
        className="text-[18px] font-normal leading-[24px] text-left "
        style={{
          fontFamily: "'Rounded Mplus 1c', sans-serif",
          color: "white",  // Text color set to white
          background: "transparent",  // Transparent background
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        Home
      </Link>
    </div>
    


    <div
      className="absolute top-[42px] left-[1201px] w-[68px] h-[24px] flex items-center justify-center"
      style={{ opacity: 1 }}  // Maintains visibility
    >
      <Link
        href="/"
        className="text-[18px] font-normal leading-[24px] text-left "
        style={{
          fontFamily: "'Rounded Mplus 1c', sans-serif",
          color: "white",  // Text color set to white
          background: "transparent",  // Transparent background
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        Contact
      </Link>
    </div>



    <div
      className="absolute top-[42px] left-[872px] w-[74px] h-[24px] flex items-center justify-center"
      style={{ opacity: 1 }}  // Maintains visibility
    >
      <Link
        href="/"
        className="text-[18px] font-normal leading-[24px] text-left "
        style={{
          fontFamily: "'Rounded Mplus 1c', sans-serif",
          color: "white",  // Text color set to white
          background: "transparent",  // Transparent background
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        Features
      </Link>
    </div>



    <div
      className="absolute top-[42px] left-[979px] w-[94px] h-[24px] flex items-center justify-center"
      style={{ opacity: 1 }}  // Maintains visibility
    >
      <Link
        href="/"
        className="text-[18px] font-normal leading-[24px] text-left "
        style={{
          fontFamily: "'Rounded Mplus 1c', sans-serif",
          color: "white",  // Text color set to white
          background: "transparent",  // Transparent background
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        Screenshot
      </Link>
    </div>




    <div
      className="absolute top-[42px] left-[1109px] w-[60px] h-[24px] flex items-center justify-center"
      style={{ opacity: 1 }}  // Maintains visibility
    >
      <Link
        href="/"
        className="text-[18px] font-normal leading-[24px] text-left "
        style={{
          fontFamily: "'Rounded Mplus 1c', sans-serif",
          color: "white",  // Text color set to white
          background: "transparent",  // Transparent background
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        Pricing
      </Link>
    </div>




    
      <div className="overflow-hidden">
        <h1 className="slider-text whitespace-nowrap">
          Accelerate your growth through hyper-qualified leads
        </h1>
      </div>
      <style jsx>{`
        @keyframes slide {
          0% { opacity: 0; transform: translateX(-100%); }
          10% { opacity: 1; transform: translateX(0); }
          90% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(100%); }
        }
        .slider-text {
          animation: slide 10s infinite;
          width: 930px;
          height: 106px;
          opacity: 0;
          font-family: 'Rounded Mplus 1c', sans-serif;
          font-size: 38px;
          font-weight: 400;
          line-height: 52.8px;
          text-align: center;
          text-underline-position: from-font;
          text-decoration-skip-ink: none;
          background: linear-gradient(244.91deg, #D4FFEC 15.94%, #57F2CC 48.55%, #4596FB 84.06%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    
    </div>



      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-4xl font-bold">Welcome to My Page</h1>
        <p className="text-lg mt-4">This is a sample text on the background.</p>
        <a href="/about" className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Learn More
        </a>
      </div> */}
      
      </main> 


    </div>



  );
}