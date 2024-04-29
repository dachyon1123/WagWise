import '../App.css'

export default function Banner(props) {
  return (
    <div className="homepage flex flex-col items-center justify-center text-gray-50 h-44">
      <img src="" alt="" />
      <h1 className="mt-10 mb-5 text-3xl font-bold">{props.title}</h1>
      <p className="mb-10">
        {props.text}
      </p>
    </div>
  );
}
