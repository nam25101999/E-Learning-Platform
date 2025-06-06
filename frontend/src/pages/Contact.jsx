import React from "react"

import Footer from "../components/common/Footer"
import ContactDetails from "../components/core/ContactPage/ContactDetails"
import ContactForm from "../components/core/ContactPage/ContactForm"
import ReviewSlider from './../components/common/ReviewSlider';

const Contact = () => {
  return (
    <div>
      <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        {/* Thông tin liên hệ */}
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Mẫu liên hệ */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>

      {/* Đánh giá từ học viên khác */}
      <div className=" my-20 px-5 text-white ">
        <h1 className="text-center text-4xl font-semibold mt-8">
          Đánh giá từ các học viên khác
        </h1>
        <ReviewSlider />
      </div>

      {/* chân trang */}
      <Footer />
    </div>
  )
}

export default Contact
