import Banner from "../components/Banner";
import "../App.css";

import wagwise7 from "../assets/wagwise-image-7.jpg";
import wagwise2 from "../assets/wagwise-image-2.jpg";
import sabo2 from '../assets/sabo2.jpg'
import stockImage1 from "../assets/stock-image-1.jpg"

export default function Rates() {
  return (
    <div className="rates-container flex flex-col">
      <Banner title="Rates" text="How it Works" />
      <div className="flex flex-row justify-center mt-32 gap-8">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
          <p className="w-72 text-sm leading-7">
            Each dog is unique, and I believe in tailoring my services to meet
            your specific requirements. To begin, we'll schedule a consultation
            where I can gain insight into your needs and your dog's individual
            characteristics. Based on our discussion, I will develop a
            customized plan designed specifically for you and your furry
            companion.
          </p>
        </div>
        <img
          src={wagwise7}
          alt=""
          className="h-80 w-72 rounded-xl shadow-md shadow-slate-500"
        />

        <div className="flex flex-row gap-8">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-6">Private Sessions</h2>
            <p className="w-72 text-sm leading-7 mb-10">
              Training fees are determined based on the specific services
              required.
            </p>
            <ol className="list-disc text-sm ml-4">
              <li className="mb-2">
                Initial Consultation: $125 for 60-75 minutes
              </li>
              <li>In-Person Private Sessions: $150/hr</li>
            </ol>
          </div>
          <img
            src={wagwise2}
            alt=""
            className="h-80 w-72 rounded-xl shadow-md shadow-slate-500"
          />
        </div>
      </div>

      <div className="flex flex-row justify-center mt-10 mb-32 gap-8">
        <img
          src={stockImage1}
          alt=""
          className="h-80 w-72 rounded-xl shadow-md shadow-slate-500"
        />
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-6">Board & Train</h2>
          <p className="w-72 text-sm leading-7 mb-10">
            Pricing varies depending on the duration
            and specific training needs of your dog. Please contact me directly
            to discuss pricing options and availability for this comprehensive
            training program.
          </p>
        </div>

        <div className="flex flex-row gap-8">
          <img
            src={sabo2}
            alt=""
            className="h-80 w-72 rounded-xl shadow-md shadow-slate-500"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-6">Boarding</h2>
            <p className="w-72 text-sm leading-7 mb-10">
              Our boarding rates are tailored to the length of stay and the
              unique needs of your dog.
            </p>
            <ol className="list-disc text-sm ml-4">
              <li className="mb-2">
                Prices start at $100/day
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
