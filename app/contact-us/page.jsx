import React from "react";

function ContactUs() {
  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col">
      <div className="container mx-auto flex-1">
        <div className="p-3 lg:p-5">
          <div
            className="px-5 py-1 pb mt-[100px] text-lg text-gray-light"
            style={{ boxShadow: "0px 0px 20px #0005" }}
          >
            <h2 className="text-xl lg:text-4xl text-primary font-playfairDisplay mb-2 capitalize">
              Contact Us
            </h2>
            <p className="mb-5 text-sm lg:text-base">
              For any inquiries, feel free to contact us.
            </p>

            <div className="mb-4 flex flex-col items-start gap-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600">
                  📞
                </span>
                <p className="text-sm lg:text-base">0370-1444587</p>
              </div>

              <a
                href="tel:+923701444587"
                className="px-4 py-2 rounded-full text-white text-sm lg:text-base bg-primary-600 hover:bg-primary-500"
              >
                Call now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
