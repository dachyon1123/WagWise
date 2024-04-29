import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import "../App.css";

import wagwise1 from "../assets/wagwise-image-1.jpg";
import wagwise3 from "../assets/wagwise-image-3.jpg";
import star from "../assets/svg/star.svg";

export default function Homepage() {
  return (
    <div className="main-container">
      <Banner
        title="WagWise Training"
        text="Tailored Canine Training for You and Your Pup's Unique Needs"
      />
      <div className="flex flex-col max-w-screen-lg mb-20 mx-auto">
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
            <img className="h-96 w-96 border" src={wagwise1} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center mt-32 md:flex-row md:justify-center">
          <img className="h-96 w-96 border" src={wagwise3} alt="" />
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
      </div>
      <div className="flex flex-row justify-center gap-10 mx-32 mb-20 mt-32">
        <div className="flex flex-col justify-between w-80 border border-slate-600 rounded-xl p-10 h-[500px]">
          <div className="flex flex-row gap-2">
            <img src={star} alt="" className="h-10 w-10" />
            <img src={star} alt="" className="h-10 w-10" />
            <img src={star} alt="" className="h-10 w-10" />
            <img src={star} alt="" className="h-10 w-10" />
            <img src={star} alt="" className="h-10 w-10" />
          </div>
          <p className="text-sm h-[60%]">
            "My Archie can be a pain in the butt when it comes to meeting new
            people, but after working with Bradley he has shown progress
            adapting to controlling his behavior. Highly recommend this service
            as Bradley is extremely proficient in training as well as keeping a
            positive, professional environment. 5/5 stars. Looking forward to
            continuing Archie’s progression through Bradley’s training
            services!"
          </p>
          <h2 className="text-lg font-bold">Caitlyn K.</h2>
        </div>

        <div className="flex flex-col justify-between w-80 border border-slate-600 rounded-xl p-10 h-[500px]">
          <div className="flex flex-row gap-2">
            <img src={star} alt="" className="h-10 w-10" />
            <img src={star} alt="" className="h-10 w-10" />
            <img src={star} alt="" className="h-10 w-10" />
            <img src={star} alt="" className="h-10 w-10" />
            <img src={star} alt="" className="h-10 w-10" />
          </div>
          <p className="text-sm h-[60%]">
            "I have 2 massive chocolate labs that basically walk me. I
            had ONE session with bradley and now I am actually able to walk
            them! Bradley was able to implement different training exercises and
            teach me how to properly communicate with them resulting with my
            dogs understanding what I am asking of them. I am super excited to
            continue working with my dogs and actually be able to take family
            walks!"
          </p>
          <h2 className="text-lg font-bold">Lyndall S.</h2>
        </div>

        <div className="flex flex-col justify-between w-80 border border-gray-800 rounded-xl p-10 h-[500px]">
          <div className="flex flex-row gap-2">
            <img src={star} alt="" className="h-10 w-10" />
            <img src={star} alt="" className="h-10 w-10" />
            <img src={star} alt="" className="h-10 w-10" />
            <img src={star} alt="" className="h-10 w-10" />
            <img src={star} alt="" className="h-10 w-10" />
          </div>
          <p className="text-sm h-[60%] text-start">
            "Bradley trained both my dogs! He is great and really knows his
            stuff. I call him the “dog whisperer”. He delivered obedience
            training, which is needed for a dog to qualify as a service dog. He
            came to my house and we also went to dog parks."
          </p>
          <h2 className="text-lg font-bold">Rocio L.</h2>
        </div>
      </div>
    </div>
  );
}
