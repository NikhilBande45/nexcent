import React from "react";
import Image from "next/image";
const Clients = () => {
  return (
    
    <div className="flex items-center justify-center">
    <div className="flex flex-col gap-1 items-center justify-center mx-4 sm:mx-16 md:mx-32 mt-10">
      <h2 className="font-medium text-xl text-cente dark:text-white">Our Clients</h2>
      <p className="text-[#717171] text-center mb-2">
        We have been working with some Fortune 500+ clients
      </p>

      <div className="grid grid-cols-4 sm:grid-cols-7  items-start container gap-14">
        <Image src="/images/client_1.png" width={50} height={50} />
        <Image src="/images/client_2.png" width={50} height={50} />
        <Image src="/images/client_3.png" width={50} height={50} />
        <Image src="/images/client_4.png" width={50} height={50} />
        <Image src="/images/client_5.png" width={50} height={50} />
        <Image src="/images/client_6.png" width={50} height={50} />
        <Image src="/images/client_7.png" width={50} height={50} />
      </div>
    </div>
    </div>
    

    // <>
    // </>
    
  );
};

export default Clients;
