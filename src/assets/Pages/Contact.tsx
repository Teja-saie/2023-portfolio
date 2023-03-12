import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mayzbwbz");

  if (state.succeeded) {
    return (
      <p className="pt-[12vh] text-white font-semibold text-2xl text-center">
        Thanks for submitting!
      </p>
    );
  }

  return (
    <div className="pt-[12vh] flex justify-center flex-col items-center ">
      <div className="w-4/5">
        <h1 className="text-white text-2xl py-2">Contact Us</h1>
        <p className="text-white ">
          Have a question, comment, or project idea? Let us know! We're
          passionate about building high-quality websites and web applications
          that help businesses and organizations succeed online.
          <br />
          <br />
          Our team of experienced web developers is dedicated to creating custom
          solutions tailored to your unique needs. Whether you're looking to
          launch a new website, improve your existing site's functionality, or
          implement a complex web application, we're here to help.
          <br />
          <br />
          Fill out the form below to get in touch with us, and we'll get back to
          you as soon as possible. We look forward to hearing from you!
        </p>
        <div className="py-1">
          <div className="lg:max-w-4xl sm:w-full md:w-full lg:mx-auto px-4">
            <div className="shadow-md rounded pt-6 pb-8 mb-4">
              <form onSubmit={handleSubmit} className="mx-auto max-w-md">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    maxLength={10}
                    name="phone"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-xs italic"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-xs italic"
                  />
                </div>

                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="bg-third hover:bg-fourth text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
