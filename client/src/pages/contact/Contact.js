import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_uz7vrjl",
        "template_95bod8t",
        form.current,
        "EZ-kIPqYs7LW0hyYh"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactimg">
      <div className="container">
        <br></br>
        <h2> CONNECT WITH US</h2>
        <br></br>
        <div className="desc">
          {" "}
          We would love to respond to your queries.Feel free to get in touch.
        </div>
        <div className="contact-box">
          <div className="contact-left">
            <h3> Send Your Request</h3>
            <form ref={form} onSubmit={sendEmail}>
              <div className="input-row">
                <div className="input-group">
                  <label>Name</label>
                  <input type="text" placeholder="Type Your Name"></input>
                </div>
                <div className="input-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Type Your Phone No."
                  ></input>
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Type Your Email"
                  ></input>
                </div>
                <div className="input-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    placeholder="Type Subject for your query"
                  ></input>
                </div>
              </div>
              <label>Message</label>
              <textarea
                rows="5"
                name="message"
                placeholder="Type your message here"
              ></textarea>
              <button type="submit">SEND</button>
            </form>
          </div>
          <div className="contact-right">
            <h3>Reach Us</h3>
            <table>
              <tbody>
                <tr>
                  <td>Email</td>
                  <td>contactus@gmail.com</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>+1 012 846 3839</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>
                    Jaypee University Of Engineering And Technology,Mumbai -
                    Agra National Hwy, Raghogarh -Vijaypur, Madhya Pradesh
                    473226
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
