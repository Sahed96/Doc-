const Faq = () => {
  return (
    <div>
      <div className="lg:mt-[160px] mt-10 lg:p-0 p-5">
        <button className="bg-[#FFFFF5] mb-[15px] border-[#020043] border-[1px] rounded-[25px] px-[24px] py-[10px]">
          Faq
        </button>
        <h2 className="text-[36px] mb-[16px] text-[#020043] font-semibold">
          Frequntly Asked Question
        </h2>
      </div>
      <div className="space-y-3">
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title bg-[#FFFFF5] text-xl font-medium">
            What are your office hours?
          </div>
          <div className="collapse-content">
            <p className="pt-4 text-[#343268] text-[14px] font-normal opacity-60">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title bg-[#FFFFF5] text-xl font-medium">
            How can I schedule an appointment?
          </div>
          <div className="collapse-content">
            <p className="pt-4 text-[#343268] text-[14px] font-normal opacity-60">
              You can make an appointment by calling our office during business
              hours, booking online through our website, or using our mobile
              app.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title bg-[#FFFFF5] text-xl font-medium">
            Do you accept insurance?
          </div>
          <div className="collapse-content">
            <p className="py-4 text-[#343268] text-[14px] font-normal opacity-60">
              We accept a wide variety of insurance plans. Please visit our
              insurance information page or contact our billing department to
              confirm if we accept your specific plan.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title bg-[#FFFFF5] text-xl font-medium">
            What should I bring to my appointment?
          </div>
          <div className="collapse-content">
            <p className="py-4 text-[#343268] text-[14px] font-normal opacity-60">
              Please bring a valid ID, your insurance card, a list of current
              medications, relevant medical records, any necessary referral
              forms, and a payment method for any co-pays or charges.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title bg-[#FFFFF5] text-xl font-medium">
            Do you offer telemedicine appointments?
          </div>
          <div className="collapse-content">
            <p className="py-4 text-[#343268] text-[14px] font-normal opacity-60">
              Yes, we offer telemedicine appointments for certain conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
