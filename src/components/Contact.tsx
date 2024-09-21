import emailjs from "emailjs-com";
import { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ug2hunl",
        "template_bdgqx5r",
        e.currentTarget,
        "gFejuYiGu07KRXjtt"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );

    e.currentTarget.reset();
  };

  return (
    <section className="max-w-4xl mx-auto mb-28 px-4 md:px-24">
      <h2 className="text-2xl mb-6 text-center text-white opacity-90">
        Contact Me
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-[#112240] shadow-lg p-6 rounded-lg max-w-lg mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="from_name" className="block mb-2 text-white">
            Name
          </label>
          <input
            type="text"
            name="from_name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-black"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="reply_to" className="block mb-2 text-white">
            Email
          </label>
          <input
            type="email"
            name="reply_to"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-black"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-white">
            Message
          </label>
          <textarea
            name="message"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-black h-32 resize-none"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 transition-all duration-300">
          Submit
        </button>
      </form>
    </section>
  );
}
