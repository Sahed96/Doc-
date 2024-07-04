import arrow from "../../assets/Arrow 1.png";
import doc from "../../assets/Rectangle 24.png";
const About = () => {
  return (
    <div className="lg:mt-[160px] mt-14 lg:p-0 p-5 lg:flex justify-between">
      <div>
        <button className="bg-[#FFFFF5] mb-[15px] border-[#020043] border-[1px] rounded-[25px] px-[24px] py-[10px]">
          Who we are
        </button>
        <h2 className="text-[36px] mb-[16px] text-[#020043] font-semibold">
          We Help To Get <br /> Solutions
        </h2>
        <p className="lg:max-w-[470px] text-base font-normal text-[#4D4C7B]">
          We are proud to be a trusted healthcare provider in our community, and
          we look forward to serving you and your family with excellence,
          integrity, and compassion. Your health is our priority, and we are
          here for you every step of the way. We believe in treating each
          patient with dignity, respect, and empathy, ensuring that they receive
          the attention and care they deserve.
        </p>
        <button className="bg-[#FFC637] gap-2 lg:mb-0 mb-10 mt-[45px] flex items-center rounded-[12px] pl-6 pr-4 py-3">
          Learn more{" "}
          <span>
            <img src={arrow} alt="" />
          </span>
        </button>
      </div>
      <div>
        <div className="relative">
          <img src={doc} alt="" />
          <div className="absolute text-white p-7 lg:-left-24 left-2 bottom-2 lg:-bottom-10 bg-[#343268] rounded-[32px] max-w-[250px] lg:max-w-[395px] min-h-[80px] lg:min-h-[210px] ">
            <p className="lg:text-[24px] text-[12px] mb-5 font-medium">
              Our mission is simple
            </p>
            <p className="lg:text-base text-xs font-normal text-[#FFFFFFCC]">
              To provide high-quality healthcare services that are accessible,
              personalized, and patient-centered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
