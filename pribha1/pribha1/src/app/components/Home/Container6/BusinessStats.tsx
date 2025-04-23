import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { People, Event, Groups } from "@mui/icons-material";
import ReviewsIcon from "@mui/icons-material/Reviews";

const stats = [
  {
    icon: <People className="text-sky-400" style={{ fontSize: "49px" }} />,
    value: 500,
    label: "Happy Clients",
  },
  {
    icon: <Groups className="text-sky-400" style={{ fontSize: "49px" }} />,
    value: 50,
    label: "Creative Brains",
  },
  {
    icon: <Event className="text-sky-400" style={{ fontSize: "49px" }} />,
    value: 35,
    label: "Content Creator",
  },
  {
    icon: <ReviewsIcon className="text-sky-400" style={{ fontSize: "49px" }} />,
    value: 150,
    label: "Reviews",
  },
];

const BusinessStats = () => {
  const { ref, inView } = useInView({ triggerOnce: false }); // Start animation when in view

  return (
    <section ref={ref} className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Text Section */}
        <div className="text-left max-w-md">
          <h2 className="text-4xl font-bold text-gray-600">
            Helping a local <br />
            <span className="text-sky-400">business reinvent itself</span>
          </h2>
          <p className="text-gray-600 mt-2">
            We reached here with our hard work and dedication
          </p>
        </div>

        {/* Right Stats Section */}
        <div className="grid sm:grid-cols-2 lg:gap-x-20 md:gap-x-10 gap-x-16 gap-y-10 mt-6 md:mt-0 md:mr-5">
          {stats.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              {item.icon}
              <div>
                <h3 className="text-3xl font-semibold text-gray-600">
                  {/* {inView && (
                    <CountUp start={0} end={item.value} duration={3} separator=",">
                      {({ countUpRef }) => (
                        <>
                          <span ref={countUpRef} />
                          +
                        </>
                      )}
                    </CountUp>
                  )} */}
                  {typeof window !== "undefined" && inView && (
                    <CountUp
                      start={0}
                      end={item.value}
                      duration={3}
                      separator=","
                    >
                      {({ countUpRef }) => (
                        <>
                          <span ref={countUpRef} />+
                        </>
                      )}
                    </CountUp>
                  )}
                </h3>
                <p className="text-gray-500">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessStats;
