import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const Count = () => {
  const countersRef = useRef([]);
  countersRef.current = [];

  const counters = [
    { endValue: 2245341, label: "Members", image: "/images/counter_1.png" },
    { endValue: 46328, label: "Clubs", image: "/images/counter_2.png" },
    {
      endValue: 828867,
      label: "Event Bookings",
      image: "/images/counter_3.png",
    },
    { endValue: 1926436, label: "Payments", image: "/images/counter_4.png" },
  ];

  const addToRefs = (el) => {
    if (el && !countersRef.current.includes(el)) {
      countersRef.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const endValue = parseInt(counter.dataset.endValue, 10);
            gsap.to(counter, {
              duration: 2,
              innerText: endValue,
              roundProps: "innerText",
              ease: "none",
              onUpdate: function () {
                counter.innerHTML = parseInt(
                  counter.innerText
                ).toLocaleString();
              },
            });
            observer.unobserve(counter);
          }
        });
      },
      { threshold: 0.5 }
    );

    countersRef.current.forEach((counter) => {
      observer.observe(counter);
    });

    return () => {
      countersRef.current.forEach((counter) => {
        observer.unobserve(counter);
      });
    };
  }, []);

  return (
    <div className="bg-[#F5F7FA] mt-10 py-6 md:py-0 md:mt-0">
      <div className="flex flex-col md:flex-row items-center justify-between sm:px-0 mx-20 md:px-10 lg:px-20">
        <div>
          <div>
            <div className="text-2xl font-semibold text-center sm:text-start">Helping a local</div>
            <div className="text-[#4CAF4F] text-2xl font-semibold text-center sm:text-start">
              business reinvent itself
            </div>
          </div>
          <p className="text-[#717171] text-center sm:text-start">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8">
          {counters.map((counter, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image
                src={counter.image}
                width={40}
                height={40}
                alt={`${counter.label} Logo`}
              />
              <div>
                <p
                  ref={addToRefs}
                  data-end-value={counter.endValue}
                  className="text-2xl font-bold text-gray-800"
                >
                  0
                </p>
                <p className="text-lg text-gray-600">{counter.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Count;
