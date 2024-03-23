import React from "react";
import Footer from "./Footer";
import InputBox from "./InputBox";
import Textarea from "./Textarea";
import SelectBox from "./SelectBox";
import SubmitBtn from "./SubmitBtn";
const Form = () => {
  const interestArray = [
    { value: "web_dev", label: "Web Development" },
    { value: "design_branding", label: "Design and Branding" },
    { value: "app_dev", label: "App Development" },
    { value: "digital_marketing", label: "Digital Marketing" },
  ];
  const budgetArray = [
    { value: "50-70k", label: "50-70k" },
    { value: "70-120k", label: "70-120k" },
    { value: "150-230k", label: "150-230k" },
    { value: "230-270k", label: "230-270k" },
    { value: "270k+", label: "270k+" },
  ];
  return (
    <div className="mt-[20px]">
      <form action="/submitform" method="post">
        <div className="name-email flex xs:flex-col sm:flex-row w-full gap-3">
          <InputBox
            label="Your Name"
            placeholder="Harry Potter"
            width="100%"
            name="username"
          />
          <InputBox
            label="Your Email"
            width="100%"
            placeholder="harry@potter.email"
            name="email"
          />
        </div>
        <div className="interest-budget flex xs:flex-col sm:flex-row w-full gap-3 mt-6  ">
          <SelectBox
            label="Where does your interest lie?"
            width="100%"
            name="interest"
            options={interestArray}
          />
          <SelectBox
            label="Project Budget"
            width="100%"
            options={budgetArray}
            name="budget"
          />
        </div>

        <div className="text">
          <Textarea
            label="Message"
            width="100%"
            name="message"
            placeholder="Give us more detailed info on your project"
          />
        </div>

        <SubmitBtn />
      </form>

      <Footer />
    </div>
  );
};

export default Form;
