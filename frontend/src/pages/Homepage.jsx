import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Banner from "../components/Banner";
import Reviews from "../components/Reviews";
import Carousel from "../components/Carousel";
import "../App.css";

import reviewData from "../assets/reviews.json";
import wagwise1 from "../assets/wagwise-image-1.jpg";
import wagwise6 from "../assets/wagwise-image-6.jpg";
import wagwise3 from "../assets/wagwise-image-3.jpg";
import paw from "../assets/svg/paw.svg";

export default function Homepage() {
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(isScreenSmall)
  return (
    <div className="main-container">
      <Banner
        title="WagWise Training"
        text="Tailored Canine Training for You and Your Pup's Unique Needs"
      />
      <div className="flex flex-col max-w-screen-lg mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-col-reverse md:flex-row items-center md:justify-center mt-32">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-3xl font-bold mb-10 md:mr-20 mr-0 md:text-left text-center md:mt-0 mt-10">
                Teaching Your Dog Good Manners for a Happy Home
              </h2>
              <p className="md:mr-20 md:text-left md:mx-0 mx-2 text-center text-base flex items-center">
                At WagWise, I believe in fostering strong, positive
                relationships between dogs and their owners through
                personalized, comprehensive training programs. With a focus on
                one-on-one attention, I am dedicated to understanding the unique
                needs and behaviors of each dog, ensuring that my methods are
                tailored to their individual personalities. Whether you're
                looking to address specific behavioral issues or simply
                strengthen your bond with your furry companion, I am committed
                to providing you with the tools and support you need to succeed.
                With a focus on positive reinforcement and clear communication,
                I strive to make training enjoyable and effective for both you
                and your dog. Join me on this rewarding journey towards a
                happier, well-behaved dog!
              </p>
              <Link to="/rates">
                <button className="rates-button w-24 h-10 mt-5 bg-lime-200 rounded-md text-white">
                  View Rates
                </button>
              </Link>
            </div>
            <img
              className="h-96 w-96 rounded-xl shadow-md shadow-slate-500"
              src={wagwise1}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-32 md:flex-row md:justify-center">
          <img
            className="h-96 w-96 rounded-xl shadow-md shadow-slate-500"
            src={wagwise3}
            alt=""
          />
          <div className="flex flex-col mx-2">
            <h2 className="text-3xl text-center md:text-left font-bold mb-10 md:ml-20 md:mt-0 mt-10">
              What I Do
            </h2>
            <p className="flex flex-col text-center md:text-left md:ml-20 text-sm flex items-center">
              <strong className="md:self-start text-base">
                Private Sessions:
              </strong>{" "}
              Personalized one-on-one training sessions tailored to your dog's
              specific needs and behaviors. These sessions are ideal for
              addressing specific behavioral issues or for general obedience
              training. <br />
              <br />
              <strong className="md:self-start text-base">
                Board and Train:
              </strong>{" "}
              A comprehensive training program where your dog stays with me for
              a period of time, receiving intensive training and socialization.
              This program is designed to fast-track your dog's learning in a
              controlled environment. <br />
              <br />
              <strong className="md:self-start text-base">Boarding:</strong> A
              safe and comfortable place for your dog to stay while you're away.
              Your dog will receive individual attention and care, ensuring they
              feel at home during their stay. Each training program is designed
              to strengthen the bond between you and your dog, providing you
              with the tools and knowledge you need to continue their training
              at home.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse md:justify-between items-center md:mt-32 mt-20 md:mb-32">
          <div className="flex flex-col md:items-start items-center">
            <h2 className="text-3xl md:mt-0 mt-10 mb-10 font-bold">Training Services</h2>
            <div className="flex md:gap-12 gap-2 text-sm">
              <ul className="">
                <li className="flex items-center gap-2 mb-6">
                  <img src={paw} alt="" className="h-4" />
                  Basic Obedience
                </li>
                <li className="flex items-center gap-2 mb-6">
                  <img src={paw} alt="" className="h-4" />
                  Behavior Modification
                </li>
                <li className="flex items-center gap-2 mb-6">
                  <img src={paw} alt="" className="h-4" />
                  Puppy Training
                </li>
                <li className="flex items-center gap-2 mb-6">
                  <img src={paw} alt="" className="h-4" />
                  Off Leash Training
                </li>
                <li className="flex items-center gap-2 mb-6">
                  <img src={paw} alt="" className="h-4" />
                  Agression-Management
                </li>
              </ul>
              <ul className="">
                <li className="flex items-center gap-2 mb-6">
                  <img src={paw} alt="" className="h-4" />
                  In Home Training
                </li>
                <li className="flex items-center gap-2 mb-6">
                  <img src={paw} alt="" className="h-4" />
                  Board and Traing Programs
                </li>
                <li className="flex items-center gap-2 mb-6">
                  <img src={paw} alt="" className="h-4" />
                  Advanced Obedience
                </li>
                <li className="flex items-center gap-2 mb-6">
                  <img src={paw} alt="" className="h-4" />
                  Behavioral Consultation
                </li>
                <li className="flex items-center gap-2 mb-6">
                  <img src={paw} alt="" className="h-4" />
                  Anxiety Management
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img
              src={wagwise6}
              alt=""
              className="h-96 w-96 rounded-xl shadow-md shadow-slate-500"
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-20 md:mx-24 mx-0 py-20 bg-[#5F9E51] md:rounded-xl">
        <h2 className="text-3xl font-bold mb-10">Client Reviews and Testimonials</h2>
        {isScreenSmall ? 
          <Carousel />
        : 
          <div className="flex flex-row justify-center gap-8">
            {reviewData.map((review, index) => {
              return <Reviews name={review.name} text={review.text} />;
            })}
          </div>
        }
      </div>
    </div>
  );
}
