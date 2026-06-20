import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="px-5 py-2 bg-primary flex flex-col lg:flex-row gap-5 items-center text-sm">
      <div className="flex text-nowrap flex-wrap justify-center lg:justify-start gap-2 text-secondary-800 font-medium w-full lg:w-1/3 lg:order-1">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About us
        </Link>
        <Link href="/contact-us" className="hover:underline">
          Contact us
        </Link>

        <Link href="/usermanual" className="hover:underline">
          User manual
        </Link>
      </div>
      <div className="w-full lg:w-1/3 flex justify-center order-first lg:order-1">
        <Image
          src="/images/logo-white.png"
          width={180}
          height={85}
          alt="Site logo"
          className="w-[180px]"
        />
      </div>
      <div className="w-full lg:w-1/3 text-center lg:text-right font-medium lg:order-1">{`Copyright ${new Date().getFullYear()}, All rights reserved `}</div>
    </div>
  );
}

export default Footer;
