import banner from "../../assets/Rectangle 5.png";

const Banner = () => {
  return (
    <div>
      <div className="banner bg-gradient-to-r rounded-[32px] from-[#00C19D00] to-[#02004378] relative justify-center flex mx-auto w-full h-full max-w-[1160px] min-h-[160px] lg:min-h-[470px] bg-cover bg-center mt-12 ">
        <img className="absolute opacity-80" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
