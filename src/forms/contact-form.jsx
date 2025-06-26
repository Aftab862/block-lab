import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, service, phone, message } = formData;
    if (!name || !email || !service || !phone || !message) {
      toast.warn("Please fill in all required fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          service: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="row tp-gx-10">
          {[
            { name: "name", type: "text", placeholder: "Your Name*" },
            { name: "email", type: "email", placeholder: "Email Address*" },
            { name: "service", type: "text", placeholder: "Service Type*" },
            { name: "phone", type: "text", placeholder: "Phone Number*" },
          ].map(({ name, type, placeholder }) => (
            <div className="col-md-6" key={name}>
              <div className="tp-contact-input">
                <input
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          ))}

          <div className="col-md-12">
            <div className="tp-contact-input">
              <textarea
                name="message"
                placeholder="Enter Your Message here*"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="tp-contact-btn mt-10">
            <button type="submit" className="tp-btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </>
  );
};

export default ContactForm;
