import React from "react";
import Head from "next/head";
import Link from "next/link";
import { IoLogoLinkedin, IoLogoGithub, IoLogoWechat } from "react-icons/io5";

const LayoutComponent = ({ children }) => {
  return (
    <>
      <Head>
        <title>Adrian E.</title>
      </Head>
      {/*Navegation TOP*/}
      <nav className="w-full py-3 px-10 flex flex-col sm:flex-row items-center justify-between">
        <Link
          href="#"
          className="text-lg sm:text-2xl text-[#777777] font-bold hover:text-[#fff] transition-colors duration-300 ease-in-out"
        >
          ADRIAN JOSE GONZALES ESPINOLA
        </Link>
        <div className="my-3 block sm:hidden"></div>
        <div className="flex gap-5">
          <Link
            href="mailto:adrianespinolag12@gmail.com?subject=Mail to portfolio"
            className="text-xl sm:text-3xl text-[#777777] font-bold hover:text-[#fff] transition-colors duration-300 ease-in-out"
            title="Email"
          >
            <IoLogoWechat />
          </Link>
          <Link
            href="https://www.linkedin.com/in/adrian-gonzales-espinola"
            target="_blank"
            className="text-xl sm:text-3xl text-[#777777] font-bold hover:text-[#fff] transition-colors duration-300 ease-in-out"
            title="linkedin"
          >
            <IoLogoLinkedin />
          </Link>
          <Link
            href="#"
            className="text-xl sm:text-3xl text-[#777777] font-bold hover:text-[#fff] transition-colors duration-300 ease-in-out"
            title="Github"
          >
            <IoLogoGithub />
          </Link>
        </div>
      </nav>
      <main className="w-[100%] p-5">{children}</main>
      <footer className="text-center text-sm py-7 text-[#777777]">
        &copy; {new Date().getFullYear()} | Adrian J. Gonzales Espinola
      </footer>
    </>
  );
};

export default LayoutComponent;
