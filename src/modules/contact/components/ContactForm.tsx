"use client";
import React, { useState } from "react";
import { FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import { Toaster, toast } from 'react-hot-toast';

const ContactForm = () => {
  const initValues = { name: "", email: "", message: "" };
  const initState = { isLoading: false, error: "", values: initValues };
  const [result, setResult] = useState(initState);
  const [loading, setLoading] = useState<boolean>(false);
  const { values } = result;

  const sendEmail = async (values: {
    name: string;
    email: string;
    message: string;
  }) => {
    setLoading(true);
    try {
      const res = await fetch("/api/emails", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setResult({ ...initState, values: initValues });
    } catch (error: unknown) {
      if (error instanceof Error) {
        setResult({ ...initState, error: error.message });
      } else {
        setResult({ ...initState, error: String(error) });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setResult((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [event.target.name]: event.target.value,
      },
    }));

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setResult((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await sendEmail(values);
      setResult(initState);
      toast(
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaCheckCircle style={{ marginRight: "8px" }} />
          Message sent.
        </div>,
        {
          style: {
            background: "#2F855A",
            color: "#fff",
          },
        }
      );
    } catch (error) {
      setResult((prev) => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : String(error),
      }));
    }
  };

  return (
    <section className="contact-form">
      <Toaster position="top-center" reverseOrder={false} />
      {/* <div className="">{JSON.stringify(result)}</div> */}
      <p className="form-title">Or send me a message</p>
      <form className="form" onSubmit={onSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Full name"
            required
          />

          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="form-input"
            placeholder="Email address"
            required
          />
        </div>

        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
          className="form-input"
          placeholder="Your Message"
          required
        ></textarea>

        <button className="form-btn" type="submit">
          {loading ? (
            <p>Sending message...</p>
          ) : (
            <>
              <FaPaperPlane className="icon-plane" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
