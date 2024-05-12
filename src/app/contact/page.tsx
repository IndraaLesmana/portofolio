import Contact from "@/modules/contact";
import React from "react";

const ContactPage = () => {
  return (
    <article className="contact active">
      <header>
        <h2 className="h2 article-title font-bold">Contact</h2>
      </header>
      <Contact />
    </article>
  );
};

export default ContactPage;
