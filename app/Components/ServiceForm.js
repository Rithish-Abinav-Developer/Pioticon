"use client";
import axios from "axios";
import React, { useState } from "react";

export default function ServiceForm() {
    const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    company: "",
    service: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // allow only numbers for mobile
    if (name === "mobile" && !/^\d*$/.test(value)) return;

    setFormData({ ...formData, [name]: value });
    setError("");
  };

  const validate = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.mobile
    ) {
      return "Please fill all required fields.";
    }

    // email validation
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      return "Please enter a valid email address.";
    }

    // mobile validation (exactly 10 digits)
    if (formData.mobile.length !== 10) {
      return "Mobile number must be exactly 10 digits.";
    }

    return "";
  };



const handleSubmit = async (e) => {
  e.preventDefault();
  const validationError = validate();
  if (validationError) {
    setError(validationError);
    return;
  }
  setLoading(true);
  try {
    const { data } = await axios.post("/api/send-mail", formData);
    if (!data.success) {
      setError("Failed to send email. Please try again.");
      return;
    }
    alert("Form submitted successfully!");
    setFormData({ firstName:"", lastName:"", email:"", mobile:"", company:"", service:"", message:"" });
  } catch (err) {
    console.error(err);
    setError("Server error. Please try later.");
  } finally {
    setLoading(false);
  }
};



  return (
    <form id="service_form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First name"
        value={formData.firstName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last name"
        value={formData.lastName}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="mobile"
        placeholder="Mobile Number"
        maxLength={10}
        value={formData.mobile}
        onChange={handleChange}
      />

      <input
        type="text"
        name="company"
        placeholder="Company Name"
        value={formData.company}
        onChange={handleChange}
      />

      <input
        type="text"
        name="service"
        placeholder="PMC Governance"
        value={formData.service}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>

      {error && <p className="form_error">{error}</p>}

     <button className="common_btn" type="submit" disabled={loading}>
  <span>
    {loading ? "Sending..." : "Submit Now"} <img src="/images/arrow-right.svg" alt="logo" />
  </span>
</button>
    </form>
  );
}
