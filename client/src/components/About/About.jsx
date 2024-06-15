import React from "react";

import { Link } from "react-router-dom";

import aboutImg from "../../assets/images/about.png";

function About() {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[100px] xl:gap-0 flex-col lg:flex-row">
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:first-letter:order-1">
            <img src={aboutImg} className="rounded-2xl" alt="" />
          </div>

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Why Choose Us</h2>
            <p className="text__para">
              At <span className="font-bold">DoctorCare</span>, we prioritize
              your health and convenience. Our platform is designed to connect
              you with top healthcare professionals in a few simple clicks. We
              offer flexible scheduling, 24/7 availability, and a wide range of
              specialties to choose from.
            </p>

            <p className="text__para mt-[30px]">
              Our secure and user-friendly interface ensures your personal
              information is always protected. With real-time updates and
              reminders, managing your health has never been easier. Choose
              YourHealthMate, because your health matters to us.
            </p>

            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
