"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactMe: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = {
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-24 py-12 px-4 bg-gradient-to-r from-purple-900 to-blue-300 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-32 w-48 z-0 blur-lg absolute top-1/2 -left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10 text-center relative">
        <h5 className="text-xl font-bold text-white mb-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md mx-auto">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi!
        </p>
        <div className="socials flex flex-row gap-2 justify-center">
          <Link href="https://github.com/sshradd">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/shraddha-subash-53936a1a9/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
