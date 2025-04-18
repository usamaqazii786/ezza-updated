import React from 'react';
import CountUp from 'react-countup';

interface DataType {
  id: number;
  icon: string;
  counter_number: string | number;
  title: string;
}

const counter_data: DataType[] = [
  {
    id: 1,
    icon: "flaticon-project-management",
    counter_number: "230+",
    title: "Project Completed",
  },
  {
    id: 2,
    icon: "flaticon-consultant",
    counter_number: "180+",
    title: "Of customers worldwide",
  },
  {
    id: 3,
    icon: "flaticon-healthcare",
    counter_number: 6,
    title: "Countries with active client base",
  },
  {
    id: 4,
    icon: "flaticon-solution-1",
    counter_number: 4.5,
    title: "Customer rating",
  },
];

const CounterAreaHomeThree: React.FC = () => {
  return (
    <section className="counter-area tp-counter-3-bg mt-40" style={{ backgroundImage: `url(/assets/img/counter/counter-3-bg-1.jpg)` }}>
      <div className="container">
        <div className="row">
          {counter_data.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6">
              <div className="tp-counter-3-item text-center pb-50">
                <div className="tp-counter-3-item-icon">
                  <div className="tp-counter-3-item-icon-border">
                    <i className={item.icon}></i>
                  </div>
                </div>
                <div className="tp-counter-3-item-content">
                  <h3 className="tp-counter-3-item-count">
                    {typeof item.counter_number === 'string' && item.counter_number.includes('+') ? (
                      <CountUp start={0} suffix='+' end={parseInt(item.counter_number)} duration={2} />
                    ) : (
                      <span>{item.counter_number}</span>
                    )}
                  </h3>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterAreaHomeThree;
