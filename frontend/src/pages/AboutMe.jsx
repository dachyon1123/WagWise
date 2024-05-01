import Banner from "../components/Banner";
import wagwise4 from "../assets/wagwise-image-4.jpg";
import wagwise2 from "../assets/wagwise-image-2.jpg";
import "../App.css";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <Banner title="About Me" text="" />
      <div className="flex flex-row justify-center mb-32">
        <img
          className="about-me mt-20 ml-20 h-[300px] w-[250px] rounded-lg"
          src={wagwise4}
          alt=""
        />
        <p className="w-1/2 text-xl ml-20 mt-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          consequat lobortis lobortis. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Cras nec libero non
          neque iaculis iaculis. Phasellus efficitur lacus metus, non aliquet
          purus ornare blandit. Maecenas ut faucibus mi. Praesent ullamcorper
          nisl eget nisl venenatis, sed vestibulum purus porta. Cras dapibus mi
          sit amet dignissim auctor. Suspendisse potenti. Nam posuere nulla in
          libero pulvinar aliquam. Suspendisse blandit quis ipsum quis volutpat.
          Aliquam faucibus lorem at magna tempus rutrum. Phasellus ac nisl id
          erat iaculis fermentum quis quis ipsum. Quisque at nulla tempor,
          tempus dolor vitae, luctus elit. Praesent ullamcorper purus a elit
          malesuada efficitur. Vivamus consequat facilisis risus, sit amet
          iaculis tortor lobortis eget. Suspendisse hendrerit nisl ac hendrerit
          suscipit. Curabitur finibus blandit ornare. Nullam luctus, leo sed
          aliquet luctus, eros ipsum blandit neque, vitae pellentesque enim
          lacus in libero. Donec sit amet sagittis risus. Sed convallis, enim eu
          faucibus porta, enim magna facilisis nisl, quis molestie eros velit in
          enim. Sed eget lobortis arcu, ut semper justo.
        </p>
      </div>
    </div>
  );
}
