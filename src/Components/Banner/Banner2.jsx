import banner from "../../assets/Rectangle 32.png";
import arrow from "../../assets/Arrow 1.png";
import arrow2 from "../../assets/Arrow 1 (1).png";
import doc from "../../assets/logo_light.png";

const Banner2 = () => {
  return (
    <div>
      <div className="lg:mt-[160px] mt-10 bg-gradient-to-r rounded-[32px] from-[#020043] to-[#0200434D] relative justify-center flex mx-auto w-full h-full max-w-[1160px] min-h-[160px] lg:min-h-[470px] bg-cover bg-center ">
        <img
          className="rounded-[32px] absolute mix-blend-overlay"
          src={banner}
          alt=""
        />
        <div className="absolute left-4 lg:left-[60px] top-5 lg:top-[107px] ">
          <h1 className="text-white text-[16px] lg:text-[40px] font-semibold">
            Get Your <br /> First Appointment <br /> at 50% Off!
          </h1>
          <div className="flex gap-2 lg:gap-6">
            <button className="bg-[#FFC637] gap-2 font-light lg:font-medium mt-4 lg:mt-[45px] flex items-center rounded-[12px] pl-2 lg:pl-6 pr-2 lg:pr-4 py-1 lg:py-3">
              Appointment{" "}
              <span>
                <img src={arrow} alt="" />
              </span>
            </button>
            <button className="bg-transparent text-white border-[1px] border-white gap-2 mt-4 lg:mt-[45px] flex items-center rounded-[12px] pl-6 pr-4 py-3">
              Learn More{" "}
              <span>
                <img src={arrow2} alt="" />
              </span>
            </button>
          </div>
        </div>
        <img
          className="absolute top-2 right-2 lg:top-10 lg:right-10"
          src={doc}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner2;
