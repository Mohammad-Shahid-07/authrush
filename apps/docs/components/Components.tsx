import Image from "next/image";
import React from "react";
import Heading from "./Heading";

const Components = () => {
  return (
    <div>
      <div className="max-lg:p-10 m-auto mt-28">
        <Heading
          heading="Components"
          subheading="With Auth Rush, you can easily integrate the following components into your application. Each component is designed to be simple and secure, providing a seamless experience for your users."
        />
      </div>
      <div className="grid grid-cols-2 gap-16  p-16  max-h-screen mx-auto max-w-screen-xl ">
        <div
          className="col-span-1 grid grid-rows-3 gap-4"
          style={{ gridTemplateRows: "2fr 1fr 1fr" }}
        >
          <div className="border max-h-[700px] max-w-md p-5 border-[#393149] rounded-md">
            <Image
              src="/assets/icons/login.jpg"
              alt="multifactor"
              width={400}
              height={100}
              className="h-full w-full rounded-xl"
            />
          </div>
          <div className="border p-5 max-h-[700px] max-w-md border-[#393149] rounded-md">
            <Image
              src="/assets/icons/email-verified.jpg"
              alt="multifactor"
              width={300}
              height={300}
              className="h-full w-full rounded-xl group-hover:scale-110 transition-transform"
            />
          </div>
          <div className="border p-5 max-h-[700px] max-w-md border-[#393149] rounded-md">
            <Image
              src="/assets/icons/forgot-pass.jpg"
              alt="multifactor"
              width={300}
              height={100}
              className="h-full w-full rounded-xl group-hover:scale-110 transition-transform"
            />
          </div>
        </div>

        <div className="col-span-1 grid grid-cols-1 gap-4">
          <div className="border p-5 max-h-[900px] max-w-md border-[#393149] rounded-md">
            <Image
              src="/assets/icons/sign-up.jpg"
              alt="multifactor"
              width={280}
              height={100}
              className="h-full w-full  rounded-xl"
            />
          </div>
          <div className="border p-5 max-h-[600px] max-w-md border-[#393149] rounded-md">
            <Image
              src="/assets/icons/new-pass.jpg"
              alt="multifactor"
              width={300}
              height={100}
              className="h-full w-full rounded-xl group-hover:scale-110 transition-transform "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;
