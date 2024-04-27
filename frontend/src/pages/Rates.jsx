import Banner from "../components/Banner";
import "../App.css";

export default function Rates() {
  return (
    <div className="flex flex-col">
      <Banner
        title="Rates"
        text="Check out our rates for training sessions and programs."
      />
      <div className="rates flex flex-col ml-20 text-sm flex items-center gap-10 mt-24">
        <p className="flex flex-col gap-2 text-center items-center w-1/2">
          <strong className="text-2xl">Private Sessions - $200</strong>
          Experience personalized one-on-one training sessions with me, tailored
          to address your dog's specific needs and behaviors. Whether you're
          dealing with a specific behavioral issue or seeking general obedience
          training, these sessions are designed to meet your dog's unique
          requirements.
        </p>

        <p className="flex flex-col gap-2 text-center items-center w-1/2">
          <strong className="text-2xl">Board and Train - $XXX</strong> Enroll
          your dog in a comprehensive training program where they stay with me
          for a dedicated period. During their stay, they'll receive intensive
          training and socialization in a controlled environment. This program
          is designed to accelerate your dog's learning and development.
        </p>

        <p className="flex flex-col gap-2 text-center items-center w-1/2">
          <strong className="text-2xl">Boarding - $XXX</strong> Give your dog a
          safe and comfortable place to stay while you're away. Our boarding
          services offer individual attention and care, ensuring your dog feels
          at home. Rest easy knowing your furry friend is in good hands.
        </p>
      </div>
    </div>
  );
}
