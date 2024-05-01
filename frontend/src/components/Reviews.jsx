import star from "../assets/svg/star.svg";

export default function Reviews(props) {
  return (
    <div className="flex flex-col justify-between md:shadow-md md:shadow-black w-80 bg-white border border-slate-600 rounded-xl p-10 h-[500px]">
      <div className="flex flex-row gap-2">
        <img src={star} alt="" className="h-10 w-10" />
        <img src={star} alt="" className="h-10 w-10" />
        <img src={star} alt="" className="h-10 w-10" />
        <img src={star} alt="" className="h-10 w-10" />
        <img src={star} alt="" className="h-10 w-10" />
      </div>
      <p className="text-sm h-[60%]">{props.text}</p>
      <h2 className="text-lg font-bold">- {props.name}</h2>
    </div>
  );
}
