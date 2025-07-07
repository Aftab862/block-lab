import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Important: import this CSS
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

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
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
          {[{ name: "name", type: "text", placeholder: "Your Name*" },
          { name: "email", type: "email", placeholder: "Email Address*" },
          { name: "service", type: "text", placeholder: "Service Type*" }
          ].map(({ name, type, placeholder }) => (
            <div className="col-md-6" key={name}>
              <div className="tp-contact-input">
                <label style={{ color: "#171717" }}>{placeholder}</label>
                <input
                  name={name}
                  type={type}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          ))}

          {/* Phone Input using react-phone-input-2 */}
          <div className="col-md-6">
            <div className="tp-contact-input">
              <label style={{ color: "#171717" }}>Phone Number*</label>
              <PhoneInput
                country={'us'}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputStyle={{
                  width: '100%',
                  height: '60px',
                }}
                required
              />
            </div>
          </div>

          <div className="col-md-12">
            <div className="tp-contact-input">
              <label style={{ color: "#171717" }}>Enter Your Message here</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={2}
              />
            </div>
          </div>

          <div className="tp-contact-btn mt-10">
            <button type="submit" className="tp-btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </div>
      </form>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </>
  );
};

export default ContactForm;
