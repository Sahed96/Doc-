import banner from "../../assets/Rectangle 32.png";
import arrow from "../../assets/Arrow 1.png";
import arrow2 from "../../assets/Arrow 1 (1).png";
import doc from "../../assets/logo_light.png";

const Banner2 = () => {
  return (
    <div>
      <div className="mt-[160px] bg-gradient-to-r rounded-[32px] from-[#020043] to-[#0200434D] relative justify-center flex mx-auto w-full h-full max-w-[1160px] min-h-[470px] bg-cover bg-center ">
        <img
          className="rounded-[32px] absolute mix-blend-overlay"
          src={banner}
          alt=""
        />
        <div className="absolute left-[60px] top-[107px] ">
          <h1 className="text-white text-[40px] font-semibold">
            Get Your <br /> First Appointment <br /> at 50% Off!
          </h1>
          <div className="flex gap-6">
            <button className="bg-[#FFC637] gap-2 font-medium mt-[45px] flex items-center rounded-[12px] pl-6 pr-4 py-3">
              Appointment{" "}
              <span>
                <img src={arrow} alt="" />
              </span>
            </button>
            <button className="bg-transparent text-white border-[1px] border-white gap-2 mt-[45px] flex items-center rounded-[12px] pl-6 pr-4 py-3">
              Learn More{" "}
              <span>
                <img src={arrow2} alt="" />
              </span>
            </button>
          </div>
        </div>
        <img className="absolute top-10 right-10" src={doc} alt="" />
      </div>
    </div>
  );
};

export default Banner2;
