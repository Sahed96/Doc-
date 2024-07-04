import stats from "../../assets/Group 12.png";
import vid from "../../assets/Group (1).png";
import contract from "../../assets/contract (1) 1.png";
import coin from "../../assets/Group.png";
import star from "../../assets/fi-sr-star.png";
import man1 from "../../assets/Ellipse 2 (1).png";
import man2 from "../../assets/Ellipse 3 (1).png";
import man3 from "../../assets/Ellipse 4 (1).png";
import man4 from "../../assets/Ellipse 5.png";

const Care = () => {
  return (
    <div>
      <div className="mt-[50px] justify-center lg:flex gap-6">
        <div className="lg:max-w-[216px] border-[#02004333] border-[0.5px] p-5 min-h-[312px] bg-white rounded-[24px]">
          <p className="lg:text-[40px] text-[80px] font-semibold">90%</p>
          <p className="lg:text-[14px] text-[30px] lg:w-[156px]">
            Patient satisfaction rate, reflecting our commitment.
          </p>
          <img
            className="w-[130px] h-[130px] mx-auto mt-4"
            src={stats}
            alt=""
          />
        </div>
        <div>
          <div>
            <h1 className="lg:text-[48px] text-[30px] font-semibold text-center">
              Comprehensive Care <br /> for Every Patient
            </h1>
          </div>
          <div className="lg:flex mx-auto gap-6">
            <div className="min-w-[216px] border-[#02004333] border-[0.5px] relative p-4 max-h-[190px] bg-[#FFFFF5] rounded-[24px]">
              <p className="text-[40px] font-semibold">500+</p>
              <p className="text-[14px] w-[115px]">Board-certified doctors</p>
              <img
                className="w-[77px] h-[77px] absolute right-4 bottom-4"
                src={contract}
                alt=""
              />
            </div>
            <div className="min-w-[216px] border-[#02004333] border-[0.5px] mt-6 p-4 max-h-[162px] bg-[#EBEAFA] rounded-[24px]">
              <p className="text-[40px] flex items-center font-semibold">
                4.8{" "}
                <span className="ml-2">
                  <img src={star} alt="" />
                </span>
              </p>
              <p className="text-[14px]">Over 20,000 Patient</p>
              <div className="flex pt-2 relative">
                <img className="" src={man1} alt="" />
                <img className="absolute left-5" src={man2} alt="" />
                <img className="absolute left-10" src={man3} alt="" />
                <img className="absolute left-16" src={man4} alt="" />
              </div>
            </div>
            <div className="min-w-[216px] border-[#02004333] lg:mb-0 mb-5 mt-5 lg:mt-0 border-[0.5px] relative p-5 max-h-[190px] bg-[#FFFFF5] rounded-[24px]">
              <p className="text-[40px] font-semibold">$5000</p>
              <p className="text-[14px] w-[115px]">
                Money spend for poor patient
              </p>
              <img
                className="w-[90px] h-[72px] absolute right-4 bottom-2"
                src={coin}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="lg:max-w-[216px] border-[#02004333] border-[0.5px] p-5 min-h-[312px] bg-white rounded-[24px]">
          <p className="lg:text-[40px] text-[80px] font-semibold">50%</p>
          <p className="lg:text-[14px] text-[30px] lg:w-[156px]">
            Free lesson video for patient
          </p>
          <img className="w-[132px] h-[127px] mx-auto mt-10" src={vid} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Care;
