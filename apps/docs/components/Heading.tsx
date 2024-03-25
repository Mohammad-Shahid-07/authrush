import React from "react";

const Heading = ({
  heading,
  subheading,
}: {
  heading: string;
  subheading: string;
}) => {
  return (
    <div>
      {" "}
      <div className="w-full line3 h-20 mt- rotate-180" />
      <h1 className="text-white font-extrabold text-[64px] text-center">
        {heading}
      </h1>
      <p className="text-[#8F8D94] text-[12px]  px-8 text-center">
        {subheading}
      </p>
      <div className="w-full line3 h-20 mt-5 " />
    </div>
  );
};

export default Heading;
