import { useState } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    if (!formData.name || !formData.message) return alert("Please fill in your name and message.");

    // Prepare content
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`);
    const whatsappText = encodeURIComponent(`Hi Pardha, I am ${formData.name} (${formData.email}, Ph: ${formData.phone}).\n\n${formData.message}`);

    // Open Email client
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=Pardhup531@gmail.com&su=${subject}&body=${body}`, "_blank");

    // Open WhatsApp (with a small delay to avoid aggressive pop-up blockers)
    setTimeout(() => {
      window.open(`https://wa.me/916301659982?text=${whatsappText}`, "_blank");
    }, 500);
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:Pardhup531@gmail.com" data-cursor="disable">
                Pardhup531@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+916301659982" data-cursor="disable">
                +91 6301659982
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/21028ecpardhu181-bit"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/patharlapalli-pardha-saradhi-444488386?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <p className="contact-social">
              Rajahmundry, AP
            </p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Pardha Saradhi</span>
            </h2>
            <h5>
              <MdCopyright /> 2024
            </h5>
          </div>
        </div>

        <div className="contact-form-container">
          <h4 className="form-title">Send me a message</h4>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-inputs">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone No"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
            ></textarea>
            <div className="form-actions">
              <button type="button" onClick={handleSend}>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
