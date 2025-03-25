import emailjs from "emailjs-com";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.from_name.value.trim();
    const email = form.reply_to.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setMessage("All fields are required.");
      setIsLoading(false);
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_ug2hunl",
        "template_bdgqx5r",
        form,
        "gFejuYiGu07KRXjtt"
      );

      if (result.status === 200) {
        setMessage("Email sent successfully!");
      } else {
        setMessage("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("Error sending email. Please try again.");
    } finally {
      setIsLoading(false);
      form.reset();
    }
  };

  return (
    <section className="max-w-5xl mx-auto my-12 px-4 sm:px-6 md:px-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center">
        Contact Me
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-[#112240] shadow-md p-6 rounded-lg max-w-lg mx-auto"
      >
        {message && (
          <p
            className={`mb-4 text-center ${
              message.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
            aria-live="polite"
          >
            {message}
          </p>
        )}
        <div className="mb-4">
          <label htmlFor="from_name" className="block mb-2 text-gray-300">
            Name
          </label>
          <input
            type="text"
            name="from_name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="reply_to" className="block mb-2 text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="reply_to"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-gray-300">
            Message
          </label>
          <textarea
            name="message"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black h-32 resize-none"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-800 text-white py-3 rounded-md hover:bg-blue-600 transition-all duration-300"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Submit"}
        </button>
      </form>
    </section>
  );
}
