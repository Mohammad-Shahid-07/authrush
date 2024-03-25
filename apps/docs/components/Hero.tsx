import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[70vw]   text-center m-auto mt-28 ">
      <h1 className="text-white h1-bold text-center">
        Transform Your Authentication Process with Auth Rush
      </h1>

      <p className="text-[#8F8D94] text-[12px] mt-8 ">
        Auth Rush is an all-in-one solution for your authentication needs. It
        provides a simple and secure way to authenticate your users.
      </p>
      <div className="flex justify-center mt-16">
        <div className="btn h-fit w-full text-center flex items-center justify-center hover:scale-105 transition">
          <Link
            href={"/docs"}
            className="font-extrabold   p-3 text-center max-sm:text-sm  text-xl"
          >
            Documentation
          </Link>
        </div>
        {/* <Link href={""} className="flex gap-2 font-extrabold text-xl transition px-32 p-3 btn hover:scale-105">
          Github
        </Link> */}
      </div>
    </div>
  );
};

export default Hero;
