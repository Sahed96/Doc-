// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import man1 from "../../assets/man1.png";
import man2 from "../../assets/man2.png";
import man3 from "../../assets/man3.png";
import man4 from "../../assets/man4.png";
import man5 from "../../assets/man5.png";
import star from "../../assets/Vector.png";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={true}
      >
        <SwiperSlide>
          <div className="w-[371px] p-5 h-[241px] bg-[#FFFFF5] rounded-2xl">
            <div className="text-start">
              <h3 className="text-[19px] mb-3 font-semibold">
                Expertise and Compassion Combined
              </h3>
              <p className="text-xs mb-5 font-normal text-[#4D4C7B]">
                I cant thank enough for their exceptional care. The doctors and
                staff showed incredible expertise and compassion throughout my
                treatment journey. I felt truly cared for every step of the way.
              </p>
            </div>
            <div className="flex gap-4">
              <div>
                <img src={man3} alt="" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#020043]">
                  Sarah D,{" "}
                  <span className="text-[#4D4C7B] font-normal ">
                    IT Professional
                  </span>
                </p>
                <div className="flex w-[90px] gap-1 mt-1">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[371px] p-5 h-[241px] bg-[#FFFFF5] rounded-2xl">
            <div className="text-start">
              <h3 className="text-[19px] mb-3 font-semibold">
                Life-Saving Care, Life-Changing Experience
              </h3>
              <p className="text-xs mb-5 font-normal text-[#4D4C7B]">
                My experience at [Healthcare Provider Name] was life-changing.
                The prompt and accurate diagnosis, coupled with the advanced
                treatments they provided, saved my life.
              </p>
            </div>
            <div className="flex gap-4">
              <div>
                <img src={man4} alt="" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#020043]">
                  Michael R,{" "}
                  <span className="text-[#4D4C7B] font-normal ">
                    Businessman
                  </span>
                </p>
                <div className="flex w-[90px] gap-1 mt-1">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[371px] p-5 h-[241px] bg-[#FFFFF5] rounded-2xl">
            <div className="text-start">
              <h3 className="text-[19px]  mb-3 font-semibold">
                A Partner in Health and <br /> Wellness
              </h3>
              <p className="text-xs mb-5 font-normal text-[#4D4C7B]">
                As a busy professional, I appreciate the convenience and quality
                of care I receive at [Healthcare Provider Name]. From
                telemedicine consultations to routine check-ups, they ve become
                my trusted partner in health and
              </p>
            </div>
            <div className="flex gap-4">
              <div>
                <img src={man1} alt="" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#020043]">
                  Jessica B,{" "}
                  <span className="text-[#4D4C7B] font-normal ">
                    IT Professional
                  </span>
                </p>
                <div className="flex w-[90px] gap-1 mt-1">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[371px] p-5 h-[241px] bg-[#FFFFF5] rounded-2xl">
            <div className="text-start">
              <h3 className="text-[19px] mb-3 font-semibold">
                Expertise and Compassion Combined
              </h3>
              <p className="text-xs mb-5 font-normal text-[#4D4C7B]">
                I cant thank enough for their exceptional care. The doctors and
                staff showed incredible expertise and compassion throughout my
                treatment journey. I felt truly cared for every step of the way.
              </p>
            </div>
            <div className="flex gap-4">
              <div>
                <img src={man2} alt="" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#020043]">
                  John E,{" "}
                  <span className="text-[#4D4C7B] font-normal ">Designer</span>
                </p>
                <div className="flex w-[90px] gap-1 mt-1">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[371px] p-5 h-[241px] bg-[#FFFFF5] rounded-2xl">
            <div className="text-start">
              <h3 className="text-[19px] mb-3 font-semibold">
                Expertise and Compassion Combined
              </h3>
              <p className="text-xs mb-5 font-normal text-[#4D4C7B]">
                I cant thank enough for their exceptional care. The doctors and
                staff showed incredible expertise and compassion throughout my
                treatment journey. I felt truly cared for every step of the way.
              </p>
            </div>
            <div className="flex gap-4">
              <div>
                <img src={man5} alt="" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#020043]">
                  jack R,{" "}
                  <span className="text-[#4D4C7B] font-normal ">
                    IT Professional
                  </span>
                </p>
                <div className="flex w-[90px] gap-1 mt-1">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
