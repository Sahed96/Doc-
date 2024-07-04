// import Slider from "../Slider/Slider";
import Slider from "../Slider/Slider";

const Testimonial = () => {
  return (
    <div>
      <div className="lg:mt-[160px] mt-10 lg:p-0 p-5">
        <button className="bg-[#FFFFF5] mb-[15px] border-[#020043] border-[1px] rounded-[25px] px-[24px] py-[10px]">
          Testimonial
        </button>
        <h2 className="text-[36px] mb-[16px] text-[#020043] font-semibold">
          What they say about us
        </h2>
      </div>
      <div className="mt-8">
        <Slider />
      </div>
    </div>
  );
};

export default Testimonial;
