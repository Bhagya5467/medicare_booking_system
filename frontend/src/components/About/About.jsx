import React from 'react';
import aboutImg from '../../assets/images/about.png';
import aboutCardImg from '../../assets/images/about-card.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* about img */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[570px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-10 bottom-2 w-[200px] md:w-[300px] right-[10%] md:right-[-2%] lg:right-[-2]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>

          {/* about content */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Good health is a precious thing</h2>
            <p className="text_para">
              Thank you for inspiring us with your unwavering spirit. Your
              positive attitude toward your health is remarkable. Thank you for
              embracing the journey to wellness ...
            </p>
            <p className="text_para mt-[30px]">
              Thank you for taking the time to share your experiences, as it is
              so valuable for other patients to be able to hear at first-hand
              how you have ...
            </p>
            <Link to="/">
              <button className="btn bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] ">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
   
};

export default About;