'use client'
import Count from '@/components/common/Count';
import React from 'react';
import { RiTeamLine } from "react-icons/ri";
import { GoTrophy } from "react-icons/go";
import { TbUserStar } from "react-icons/tb";
import { GoChecklist } from "react-icons/go";
import { useInView } from 'react-intersection-observer';

interface DataType {
  id: number;
  icon: string | JSX.Element;
  counter_number: number;
  title: string;
}[]

const counter_data: DataType[] = [
  {
    id: 1,
    icon: <RiTeamLine size={80} color='#FFD700' />,
    counter_number: 70,
    title: "Team Members",
  },
  {
    id: 2,
    icon: <GoTrophy size={80} color='#FFD700'/>,
    counter_number: 4,
    title: "Winning Awards",
  },
  {
    id: 3,
    icon: <GoChecklist size={80} color='#FFD700'/>,
    counter_number: 230,
    title: "Complete Project",
  },
  {
    id: 4,
    icon: <TbUserStar size={80} color='#FFD700' />,
    counter_number: 180,
    title: "Client Reviews",
  },
]
const CounterAreaHomeOne = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  return (
    <div ref={ref}>
      <section className={inView?"zoom-ins counter-area tp-counter-overlay pb-140 p-relative":"zoom-outs counter-area tp-counter-overlay pb-140 p-relative"}>
        <div className="tp-counter-bg" style={{ backgroundImage: `url(/assets/img/counter/counter-bg-1.jpg)` }}></div>
        <div className="container">
          <div className="row">
            {counter_data.map((item, i) =>
              <div key={i} className={inView?"slide-in-rights col-lg-3 col-md-3":'col-lg-3 col-md-3'}>
                <div className="tp-counter-item text-center mb-30">
                  <div className="tp-counter-item-icon">
                    {item.icon}
                  </div>
                  <div className="tp-counter-item-content">
                    <h3 className="tp-counter-item-count  yuu2">
                      <span data-purecounter-duration="1" data-purecounter-end="3480"
                        className="purecounter"><Count number={item.counter_number} add_style={true} /></span>
                    </h3>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            )} 
          </div>
        </div>
      </section>
    </div>
  );
};

export default CounterAreaHomeOne;