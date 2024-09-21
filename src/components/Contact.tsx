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
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center">
        <label htmlFor="from_name">
          <input
            type="text"
            name="from_name"
            className="mt-1 p-2 w-80 border rounded-md focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-400 text-black"
            placeholder="Enter your name"
            required
          />
        </label>
      </div>
      <div className="flex justify-center">
        <label htmlFor="reply_to">
          <input
            type="email"
            name="reply_to"
            className="mt-1 p-2 w-80 border rounded-md focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-400 text-black"
            placeholder="Enter your email address"
            required
          />
        </label>
      </div>
      <div className="flex justify-center">
        <label htmlFor="message">
          <textarea
            className="hide-scrollbar resize-none mt-1 p-2 w-80 border rounded-md focus:outline-none focus:ring focus:border-blue-300 h-32 placeholder-gray-400 text-black"
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Enter your message"
            required
          ></textarea>
        </label>
      </div>
      <div className="flex justify-center">
        <button
          className="
            bg-white 
            text-[#0a192f] 
            py-2 px-4 rounded-md 
            hover:bg-gray-200 
            active:bg-gray-300 
            focus:bg-gray-300 
            focus:outline-none 
            focus:ring 
            focus:ring-gray-400"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
