import Hander from "@/components/Hander";

const Contact = () => {
  return (
    <>
      <Hander />
      <section className="flex px-32 py-20">
        <div className="w-1/2 flex justify-center">
          <div></div>
          <div></div>
          <div className="w-[70%]">
            <h1>Contact our Sales team</h1>
            <form className="flex gap">
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <label>
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="border-[#C5C7D0] border-[1px] rounded-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label>
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="border-[#C5C7D0] border-[1px] rounded-sm"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <label>
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="border-[#C5C7D0] border-[1px] rounded-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label>
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="border-[#C5C7D0] border-[1px] rounded-sm"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default Contact;
