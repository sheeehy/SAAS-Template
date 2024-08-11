import Spline from "@splinetool/react-spline";
import Navbar from "./Navbar";
import { FaYCombinator } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FaNodeJs, FaBolt, FaGem, FaPython, FaPhp, FaJava } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiElixir } from "react-icons/si";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { BiLogoPhp } from "react-icons/bi";
import { ToggleGroup, ToggleGroupItem } from "../components/ui/toggle-group";
import React, { useState } from "react";
import Image from "next/image";
import MyToggleGroup from "./MyToggleGroup";
import Text from "./text";
import H2Gen from "./h2Gen";
import Time from "./Time";
import { HiBeaker } from "react-icons/hi";
import { PiWebhooksLogoBold } from "react-icons/pi";
import Card from "./Card";
import { BiTrain, BiMailSend, BiBuildings, BiCertification, BiCopyAlt, BiGhost, BiFingerprint, BiAnalyse, BiArchiveOut } from "react-icons/bi";
import Footer from "./Footer";

export default function Home() {
  const contentData = [
    {
      icon: <BiTrain />,
      heading: "Advanced Account Management",
      paragraph: "Streamline your client interactions with tools for managing and organizing accounts, ensuring seamless communication and collaboration.",
    },
    {
      icon: <BiMailSend />,
      heading: "Enhanced Data Analytics",
      paragraph: "Leverage detailed analytics to gain insights into customer behavior, helping you make data-driven decisions and optimize performance.",
    },
    {
      icon: <BiCertification />,
      heading: "Customizable CRM Solutions",
      paragraph: "Tailor your CRM to fit your business needs, integrating with existing tools and enhancing your customer relationship management.",
    },
    {
      icon: <BiCopyAlt />,
      heading: "Scalable Cloud Infrastructure",
      paragraph: "Utilize a scalable and secure cloud infrastructure that grows with your business, ensuring reliability and high performance.",
    },
    {
      icon: <BiGhost />,
      heading: "Automated Workflows",
      paragraph: "Increase efficiency by automating routine tasks, allowing your team to focus on high-impact activities.",
    },
    {
      icon: <BiFingerprint />,
      heading: "Comprehensive Security Monitoring",
      paragraph: "Protect your business with real-time security monitoring and threat detection, ensuring the safety of your data and systems.",
    },
    {
      icon: <BiAnalyse />,
      heading: "AI-Powered Lead Generation",
      paragraph: "Identify and target high-potential leads using AI-driven algorithms that analyze market trends and customer data.",
    },
    {
      icon: <BiArchiveOut />,
      heading: "Integrated API Solutions",
      paragraph: "Easily integrate with other platforms through robust APIs, enhancing your system’s capabilities and connectivity.",
    },
    {
      icon: <BiBuildings />,
      heading: "Enterprise Resource Planning (ERP)",
      paragraph: "Manage and optimize your business processes with a comprehensive ERP system that connects your operations and data.",
    },
  ];

  return (
    <div className="bg-black">
      <main className="bg-black text-white ">
        <Navbar />
        <div className="flex flex-col items-center justify-center relative  select-none">
          <div className="w-[20rem] h-[20rem] bg-white rounded-full filter blur-[170px] absolute mb-[85rem] right-0 transform -translate-x-3/4 -translate-y-3/4 z-0 opacity-30"></div>
          <div className="flex flex-col md:flex-row pt-32 md:pt-4 pb-96 relative items-center justify-center p-4 sm:p-0">
            {" "}
            <div className="flex-1 pr-0 pt-[6rem] mt-12 mr-10">
              <h1 className="text-6xl sm:text-7xl max-w-2xl pb-5 font-[500] mb-2 leading-[1.0]  bg-clip-text text-transparent bg-gradient-to-t from-zinc-400 to-white">
                Empower Your Sales Teams.
              </h1>
              <h2 className="text-xl text-gray-400 max-w-lg mb-2 pb-5">
                {" "}
                The leading platform for seamless integration of sales tools, boosting your team’s efficiency and outreach.
              </h2>
              <div className="flex space-x-4">
                <button className="bg-white text-black px-5 py-3 rounded-full inline-flex items-center font-semibold hover:opacity-80 transition ease-in-out">
                  Get Started <FaAngleRight className="ml-1" />
                </button>
                <button className="bg-black text-gray-300 px-5 py-3 rounded-full inline-flex items-center font-semibold hover:bg-zinc-900 transition ease-in-out">
                  Documentation <FaAngleRight className="ml-1" />
                </button>
              </div>
            </div>
            {/* Right Half */}
            <div className="flex-1 relative  ml-12 hidden md:block  pt-28 ">
              <Spline className="w-full h-full z-10" scene="https://prod.spline.design/TKTeoUF9Cv3AnB9Q/scene.splinecode" />
            </div>
          </div>
          <p className="text-sm inline-flex items-center space-x-2 pt-16 pb-[12rem] text-zinc-500 "></p>
          {/*       <div className="w-10/12 h-12 border-t-[1px] rounded-t-3xl border-zinc-600"></div>  */}
          <div className="card flex justify-center items-center">
            <p className="text-lg text-zinc-400 max-w-sm text-center">Companies of all sizes trust SYRO to boost their most important teams. </p>
          </div>

          <div className="grid grid-cols-6 gap-10  filter invert opacity-90 pb-[14rem]">
            <Image src="/whereby.svg" width={130} height={130} alt="" />
            <Image src="/daily.svg" width={110} height={110} alt="" />
            <Image src="/tandem.svg" width={130} height={130} alt="" className="pt-1" />
            <Image src="/jitsu.svg" width={130} height={130} alt="" />
            <Image src="/appflowy.svg" width={130} height={130} alt="" className="pt-2" />
            <Image src="/okteto.svg" width={130} height={130} alt="" />
            <Image src="/ossc.svg" width={120} height={120} alt="" />
            <Image src="/parker.svg" width={130} height={130} alt="" />
            <Image src="/ping.svg" width={120} height={120} alt="" />
            <Image src="/supabase.svg" width={130} height={130} alt="" />
            <Image src="/tandem.svg" width={130} height={130} alt="" />
            <Image src="/vercel.svg" width={130} height={130} alt="" />
          </div>
          <video className="w-[13%] h-1/4 object-cover filter grayscale" autoPlay loop muted>
            <source src="/3d-control.mp4" type="video/mp4" />
          </video>
          <h2 className="text-5xl sm:text-6xl pt-7 pb-4 font-[400] mb-2  bg-clip-text text-transparent bg-gradient-to-t from-zinc-300 to-white">Integrate this evening</h2>
          <p className="text-lg pt-0 pb-12 text-zinc-400 max-w-3xl text-center ">
            A simple, elegant interface so you can start doing something in minutes. It fits right into your code with SDKs for your favorite programming languages.
          </p>
          <div className="flex flex-col items-center pb-32">
            <MyToggleGroup />
          </div>
        </div>
        <div className="relative">
          <div className="text-5xl sm:text-6xl pt-7 pb-4 font-[400] mb-2 text-left pl-52 bg-clip-text text-transparent bg-gradient-to-t from-zinc-400 to-white">
            <h2>
              First-class <br /> developer experience
            </h2>
            <p className="text-lg pt-6 pb-12 text-zinc-400 max-w-2xl text-left">
              We are a team of engineers who love building tools for creatives. <br></br>Our goal is to create something we have always wished we had.
            </p>
            <div className="flex gap-10 z-20 ">
              <H2Gen />

              <Time />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
        <div className="pb-40 flex justify-center items-center mt-4 gap-[14rem] mr-20">
          <div className="max-w-sm">
            <HiBeaker className="text-2xl mb-4 ml-2" />
            <h2 className="pb-4 text-xl">Test Mode</h2>

            <p className="pb-4 text-zinc-400 text-base ">Simulate events and experiment with our API without the risk of doing something unintended.</p>
            <button className="hover:text-zinc-300 transition duration-100 ease-in-out">Learn more</button>
          </div>
          <div className="max-w-sm">
            <PiWebhooksLogoBold className="text-2xl mb-4 ml-2" />
            <h2 className="pb-4 text-xl">Modular Webhooks</h2>

            <p className="pb-4 text-zinc-400 text-base">Configure and receive real-time notifications directly to your server.</p>
            <button className="hover:text-zinc-300 transition duration-100 ease-in-out">Learn more</button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center relative mb-24 ">
          <video className="w-[13%] h-1/4 object-cover filter grayscale" autoPlay loop muted>
            <source src="/3d-react.mp4" type="video/mp4" />
          </video>

          <h2 className="text-5xl sm:text-6xl pt-7 pb-4 font-[400] mb-2  bg-clip-text text-transparent bg-gradient-to-t from-zinc-300 to-white">
            Fully integrated with your stack.
          </h2>
          <p className="text-lg pt-0 pb-8 text-zinc-400 max-w-xl text-center ">
            Create something without having to deal with layouts and HTML. Powered by React, Tailwind and shadcn/ui.{" "}
          </p>
          <div className=" space-x-4">
            <button className="bg-white text-black px-5 py-3 rounded-full inline-flex items-center font-semibold hover:opacity-80 transition ease-in-out">
              Get Started <FaAngleRight className="ml-1" />
            </button>
            <button className="bg-black text-gray-300 px-5 py-3 rounded-full inline-flex items-center font-semibold hover:bg-zinc-900 transition ease-in-out">
              Check the Docs <FaAngleRight className="ml-1" />
            </button>
          </div>
        </div>
        <div className="card4  "></div>
        <div className="text-5xl sm:text-6xl pt-0 pb-4 font-[400] mb-2 text-left pl-52 bg-clip-text text-transparent bg-gradient-to-t from-zinc-400 to-white">
          <h2>
            Modern features, <br /> effortless integration
          </h2>
        </div>
        <div className=" flex items-center justify-center pr-4 pt-10">
          <div className="grid grid-cols-3 gap-20">
            {contentData.map((content, index) => (
              <div key={index}>
                <Card {...content} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-5xl gap-2 mt-48">
          <h1>Something reimagined.</h1>
          <h1>Available today.</h1>
        </div>
        <div className="flex items-center justify-center pt-6 space-x-4 pb-40">
          <button className="bg-white text-black px-5 py-3 rounded-full inline-flex items-center font-semibold hover:opacity-80 transition ease-in-out">
            Get Started <FaAngleRight className="ml-1" />
          </button>
          <button className="bg-black text-gray-300 px-5 py-3 rounded-full inline-flex items-center font-semibold hover:bg-zinc-900 transition ease-in-out">
            Documentation <FaAngleRight className="ml-1" />
          </button>
        </div>
      </main>
      <div className="card  mt-12 "></div>
      <Footer />
    </div>
  );
}
