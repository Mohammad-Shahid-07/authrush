import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-slate-200 border-t border-t-[#393149] mt-5 p-5 flex justify-between items-center">
      <p>&copy; {currentYear} Auth Rush. All rights reserved.</p>
      <div>
        <Link href="https://twitter.com/mohammad_s36921">
          <Image
            src={"/assets/icons/x.svg"}
            alt="X logo"
            width={20}
            height={50}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
