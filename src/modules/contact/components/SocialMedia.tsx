import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <>
      <section>
        <p className="form-title">Find me on</p>
        <div className="flex flex-wrap gap-3 mt-4">
          <Link
            href="https://github.com/IndraaLesmana"
            className="flex w-full items-center justify-center space-x-2 rounded-lg px-4 py-2 text-white shadow-lg md:w-max bg-gray-800"
          >
            <FaGithub />
            <span className="text-sm">Github</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/muhamad-indra-lesmana-68baa7291/"
            className="flex w-full items-center justify-center space-x-2 rounded-lg px-4 py-2 text-white shadow-lg md:w-max bg-blue-600"
          >
            <FaLinkedinIn />
            <span className="text-sm">Linkedin</span>
          </Link>
          <Link
            href="https://www.instagram.com/_ndraa25/"
            className="flex w-full items-center justify-center space-x-2 rounded-lg px-4 py-2 text-white shadow-lg md:w-max bg-pink-600"
          >
            <FaInstagram />
            <span className="text-sm">Instagram</span>
          </Link>
        </div>
      </section>
      <div
        className="border-t border-gray-300 dark:border-neutral-700 my-6"
        data-testid="breakline"
      ></div>
    </>
  );
};

export default SocialMedia;
