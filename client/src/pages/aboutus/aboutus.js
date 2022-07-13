import React from "react";
import "./Aboutus.css";
import { Link } from "react-router-dom";
export default function aboutus() {
  return (
    <div className="aboutus">
      <div className="aboutusTitle">About Us</div>
      <div className="aboutushead">
        Welcome To VLOGIT. We're glad and grateful you're here. The best ideas
        can change who we are.
        <br></br>
        The Vlog It is where those ideas start, get out,and spark strong
        conversations.
      </div>

      <div className="container">
        <div className="box">
          <div className="card">
            <h5>Our Mission</h5>
            <div className="para">
              <p>
                We are creating a new digital publishing model an open forum
                where more than 100 million students come to experience creative
                and flexible thinking. Those that support complexity, and
                important storytelling. Together with millions of editors and
                publishers, we create an honest and healthy ecosystem inspired
                by important ideas and people who think about it.
              </p>
            </div>
          </div>

          <div className="card">
            <h5>Know your audience</h5>
            <div className="para">
              <p>
                Find out which posts are a hit with Vlog It's built-in
                analytics. You’ll see where your audience is coming from and
                what they’re interested in. Your audience can even connect with
                your blog directly.
              </p>
            </div>
          </div>

          <div className="card">
            <h5>Hang onto your memories</h5>
            <div className="para">
              <p>
                Save important moments that matter. Vlog It lets you securely
                store thousands of posts, photos, and more.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="last">
        <div className="cardd">
          <h2>Join Millions Of Others</h2>
          <div className="parap">
            <p>
              Whether you share your expertise, breaking news, or whatever you
              think, you are doing well with Blogger. Join to find out why
              millions of people have published their passions here.
            </p>
          </div>
          <button className="btnn">
            <Link className="link" to="/register">
              Join Us
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
