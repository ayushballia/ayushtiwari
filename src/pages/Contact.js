import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMailBulk,
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
// import Map from "./Map";

const Contact = () => {
  return (
    <section>
      <h2 className="contact-me">Contact me!</h2>
      <div className="contact">
        <div>
          <h3>BY PHONE</h3>
          <span className="icon">
            <FaPhoneAlt />
          </span>
          <a href="tel:+917505330911">7505330911</a>
          <p>Monday to Friday, 9am to 6pm PST</p>
        </div>
        <div>
          <h3>E-mail</h3>
          <span className="icon">
            <FaMailBulk />
          </span>
          <a href="mailto:ayushtiwari@live.in">ayushtiwari@live.in</a>
        </div>
        <div className="social-links">
          <h3>Social links</h3>
          <a
            className="social-media"
            href="https://www.linkedin.com/in/ayushtiwary/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FaLinkedin />}
          </a>
          <a
            className="social-media"
            href="https://github.com/ayushballia"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FaGithub />}
          </a>
          <a
            className="social-media"
            href="https://www.twitter.com/ayushballia"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FaTwitter />}
          </a>
          <br />
          <a
            className="social-media"
            href="https://www.facebook.com/ayushballia"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FaFacebook />}
          </a>
          <a
            className="social-media"
            href="https://www.instagram.com/ayushballia"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FaInstagram />}
          </a>
          <a
            className="social-media"
            href="https://wa.me/+917505330911"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FaWhatsapp />}
          </a>
        </div>
      </div>
      {/* <div className="last">
        <div className="form">
          <h3>Contact form </h3>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />

            <label htmlFor="country">Country</label>
            <input type="email" name="country" id="country" />

            <label htmlFor="message">Message</label>
            <textarea name="message" cols="30" rows="3"></textarea>

            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="map">
          <Map center={{ lat: 25.71, lng: 84.47 }} zoom={11} />
        </div>
      </div> */}
    </section>
  );
};

export default Contact;
