import React from "react";

import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";

import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";

import faqImg from "../assets/images/faq-img.png";

import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";

import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";

const Home = () => {
  return (
    <>
      {/* hero section */}

      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[50px] leading-[60px] text-headingColor font-[800]">
                  Your Health, Our Priority : Easy Online Booking
                </h1>
                <p className="text__para">
                  Experience the ease of booking your doctor's appointments
                  anytime, anywhere. Prioritize your health and well-being with
                  our user-friendly app, designed to bring medical
                  consultations, diagnosis, and treatment right to your
                  fingertips.
                </p>
                <button className="btn">Book An Appointment</button>
              </div>

              <div
                className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 
                 lg:gap-[30px]"
              >
                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                   text-headingColor"
                  >
                    20+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellow-400 rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years Of Experience</p>
                </div>

                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                   text-headingColor"
                  >
                    3+
                  </h2>
                  <span className="w-[100px] h-2 bg-purple-300 rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinics</p>
                </div>

                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                   text-headingColor"
                  >
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-blue-400 rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="flex lg:-mt-[150px] gap-[30px] justify-end">
              <div>
                <img className="w-full rounded-lg" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img
                  src={heroImg02}
                  alt=""
                  className="w-full mb-[30px] rounded-lg"
                />
                <img src={heroImg03} alt="" className="w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Work section */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">How It Works</h2>
            <p className="text__para text-center">
              Embark on a seamless healthcare journey: simply select a doctor,
              choose a location, and secure your appointment in a few clicks,
              all through our platform.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] 
          mt-[30px] lg:mt-[55px]"
          >
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find A Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Discover the right medical professional for your needs from
                  our extensive network of verified doctors.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center group
                   hover:bg-primaryColor hover:border-none justify-center"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find A Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Locate the most convenient healthcare facilities near you with
                  our intuitive location finder.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center group
                   hover:bg-primaryColor hover:border-none justify-center"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Schedule your medical consultations effortlessly with our
                  easy-to-use appointment booking system.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center group
                   hover:bg-primaryColor hover:border-none justify-center"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}

      <About />

      {/* Services section */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What We Offer</h2>
            <p className="text__para text-center">
              Gain access to a broad spectrum of medical specializations for all
              your healthcare needs.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>

      {/* Doctors section */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Doctors</h2>
            <p className="text__para text-center">
              Meet our team of highly qualified and dedicated doctors, committed
              to providing you with the best solutions.
            </p>
          </div>

          <DoctorList />
        </div>
      </section>

      {/* FAQ section */}

      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:-gap-0">
            <div className=" hidden md:block">
              <img src={faqImg} className="rounded-xl" alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">Questions By Our Patients</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
