import arrow from "../../assets/Arrow 1.png";
import img1 from "../../assets/Rectangle 27-1.png";
import img2 from "../../assets/Rectangle 27-2.png";
import img3 from "../../assets/Rectangle 27.png";
import img4 from "../../assets/Group 28.png";
const Health = () => {
  return (
    <div className="bg-[#FFFFF5] rounded-[32px] p-10 mt-10 lg:mt-[160px] min-h-[928px]">
      <div className="lg:grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <button className="bg-[#FFFFF5] mb-[15px] border-[#020043] border-[1px] rounded-[25px] px-[24px] py-[10px]">
            Service
          </button>
          <h2 className="text-[36px] mb-[16px] text-[#020043] font-semibold">
            We Help To Get <br /> Solutions
          </h2>
          <p className="max-w-[470px] text-base font-normal text-[#4D4C7B]">
            We are proud to be a trusted healthcare provider in our community,
            and we look forward to serving you and your family with excellence,
            integrity, and compassion. Your health is our priority, and we are
            here for you every step of the way. We believe in treating each
            patient with dignity, respect, and empathy, ensuring that they
            receive the attention and care they deserve.
          </p>
          <button className="bg-[#FFC637] lg:mb-0 mb-8 gap-2 mt-[45px] flex items-center rounded-[12px] pl-6 pr-4 py-3">
            Appointment{" "}
            <span>
              <img src={arrow} alt="" />
            </span>
          </button>
        </div>
        <div className="relative lg:mb-0 mb-5">
          <img className="rounded-[30px]" src={img2} alt="" />
          <div className="absolute text-white opacity-60 p-7 left-7 lg:left-5 bottom-5 lg:bottom-[70px] bg-[#020043] rounded-[32px] min-w-[250px] lg:min-w-[321px] min-h-[144px] ">
            <p className="text-xl mb-5 font-semibold">Advanced Technology</p>
            <p className="text-xs font-normal w-[180px] lg:w-[219px] text-[#FFFFFFCC]">
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
            <img
              className="absolute right-4 bottom-4 hover:cursor-pointer"
              src={img4}
              alt=""
            />
          </div>
        </div>
        <div className="relative lg:mb-0 mb-5">
          <img className="rounded-[30px]" src={img1} alt="" />
          <div className="absolute text-white opacity-60 p-7 left-7 lg:left-5 bottom-5 bg-[#020043] rounded-[32px] lg:min-w-[321px] min-w-[250px] min-h-[144px] ">
            <p className="text-xl mb-5 font-semibold">Online Doctor Meet</p>
            <p className="text-xs font-normal w-[219px] text-[#FFFFFFCC]">
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
            <img
              className="absolute right-4 bottom-4 hover:cursor-pointer"
              src={img4}
              alt=""
            />
          </div>
        </div>
        <div className="relative">
          <img className="rounded-[30px]" src={img3} alt="" />
          <div className="absolute text-white opacity-60 p-7 left-5 bottom-5 bg-[#020043] rounded-[32px] min-w-[250px] lg:min-w-[321px] min-h-[144px] ">
            <p className="text-xl mb-5 font-semibold">
              Consultancy your health
            </p>
            <p className="text-xs font-normal w-[180px] lg:w-[219px] text-[#FFFFFFCC]">
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
            <img
              className="absolute lg:right-4 right-7 bottom-4 hover:cursor-pointer"
              src={img4}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
