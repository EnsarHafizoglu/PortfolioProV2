import React, { useEffect, useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [showButton, setShowButton] = useState(true); // başlangıçta true

  useEffect(() => {
    // artık scroll dinlemeye gerek yok çünkü hep görünecek
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`scroll-container ${showButton ? "show" : ""}`}>
      <button className="btn-scroll" onClick={scrollToTop}>
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}
