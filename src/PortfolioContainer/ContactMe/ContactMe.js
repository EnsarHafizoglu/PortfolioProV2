import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Typewriter } from "react-simple-typewriter";
import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../PortfolioContainer/Footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (!screen || !screen.fadeInScreen || !props.id) return;
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ .env backend base URL (SONUNA / YOK!)
  const apiUrl = process.env.REACT_APP_API_URL || "https://geribildirimapi.onrender.com/api/geribildirim";

  const submitForm = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      const errorMessage = "Lütfen tüm alanları doldurun!";
      setBanner(errorMessage);
      toast.error(errorMessage);
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${apiUrl}/gonder`, {
        adSoyad: name,
        email: email,
        mesaj: message,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200 || res.status === 201) {
        setBanner("Geri bildiriminiz başarıyla gönderildi.");
        toast.success("Geri bildiriminiz başarıyla gönderildi.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.warn(`Sunucu beklenmeyen yanıt verdi: ${res.status}`);
        setBanner("Bir hata oluştu. Lütfen tekrar deneyin.");
        toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch (error) {
      console.error("Form gönderme hatası:", error);
      setBanner("Bir hata oluştu. Lütfen tekrar deneyin.");
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Let's Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typewriter
              words={["Get In Touch 📧"]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <a href="mailto:ensarportfoliopro@gmail.com">
            <i className="fa fa-google-plus-square" />
          </a>
          <a href="https://www.instagram.com/ensar_hfzoglu/">
            <i className="fa fa-instagram" />
          </a>
          <a href="https://github.com/EnsarHafizoglu">
            <i className="fa fa-github" />
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label>Name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            <label>Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            <label>Message</label>
            <textarea onChange={(e) => setMessage(e.target.value)} value={message} />
            <div className="send-btn">
              <button type="submit" disabled={loading}>
                {loading ? (
                  <span>
                    Sending...
                    <img src={load1} alt="loading" className="load" />
                  </span>
                ) : (
                  <>
                    Send <i className="fa fa-paper-plane" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
