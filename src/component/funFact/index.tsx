import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';
import PatternImg2 from "../../assets/img/funFact/patternImg2.jpg";
import { ReactComponent as HappyCustomersIcon } from "../../assets/funFact/HappyCustomers.svg";
import { ReactComponent as FinishedProjectsIcon } from "../../assets/funFact/FinishedProjects.svg";
import { ReactComponent as CoffeeCupIcon } from "../../assets/funFact/CoffeeCup.svg";
import { ReactComponent as WorkingHoursIcon } from "../../assets/funFact/WorkingHours.svg";

export const funFacts = [
    {
      factIcon: <HappyCustomersIcon className="w-[3.125rem] fill-accent"></HappyCustomersIcon>,
      factCount: 35000,
      factCap: "Happy Customers",
    },
    {
      factIcon: <FinishedProjectsIcon className="w-[3.125rem] fill-accent"></FinishedProjectsIcon>,
      factCount: 15250,
      factCap: "Finished Projects",
    },
    {
      factIcon: <CoffeeCupIcon className="w-[3.125rem] fill-accent"></CoffeeCupIcon>,
      factCount: 927,
      factCap: "Coffee Cups",
    },
    {
      factIcon: <WorkingHoursIcon className="w-[3.125rem] fill-accent"></WorkingHoursIcon>,
      factCount: 52300,
      factCap: "Working Hours",
    },
  ];
  
const FunFacts = () => {
  const [counterOn, setCounterOn] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    onChange: (inView) => setCounterOn(inView),
  });
  return (
    <section className="funFactsWrap py-20 md:py-24 relative w-full">
      <div className="container mx-auto max-w-screen-xl">
        <div ref={ref} className="funFactBoxes relative w-full">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {funFacts.map(
              (item, index) =>
                index < 4 && (
                  <div
                    className="factBox text-center flex flex-col items-center justify-center p-5 w-full relative z-10 min-h-[11rem] sm:min-h-[15rem]"
                    key={index}
                  >
                    <div
                      className="expBoxBg before:absolute before:inset-0 before:bg-gray-500 before:rounded-lg before:opacity-70 before:z-10 bg-blend-multiply absolute rounded-lg inset-0 bg-no-repeat bg-center bg-cover z-[-1]"
                      style={{ backgroundImage: `url(${PatternImg2})` }}
                    ></div>
                    <span>{item.factIcon}</span>
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={item.factCount}
                        duration={4}
                        className="font-Poppins font-bold text-accent2 text-2xl md:text-3xl lg:text-4xl leading-none mt-3"
                      />
                    )}
                    <h5 className="text-desc2 font-NunitoSans font-bold text-lg md:text-xl leading-none mt-3">
                      {item.factCap}
                    </h5>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
