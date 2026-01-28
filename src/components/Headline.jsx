import React, { useState, useEffect } from "react";

const Headline = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Roles derived from your resume: B.Tech CSE, UI/UX, AI, and Full Stack
  const roles = [
    "Full Stack Developer",
    "UI/UX Designer",
    "AI Enthusiast",
    "B.Tech CSE Student",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      // Determine if we are adding or removing characters
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      // Adjust speed for deleting vs typing
      setTypingSpeed(isDeleting ? 50 : 150);

      // Logic to switch between typing and deleting
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause at the end
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="flex flex-col items-center justify-center font-sans">
      <h1 className="text-4xl md:text-6xl font-bold text-white-900">
        Hi, I'm <span className="text-white-100">Aniket Pawar</span>
      </h1>
      <p className="mt-4 text-2xl md:text-3xl font-light text-white-700">
        I am a{" "}
        <span className="text-white-600 border-r-4 border-blue-500  ml-2">
          {text}
        </span>
      </p>
    </div>
  );
};

export default Headline;
