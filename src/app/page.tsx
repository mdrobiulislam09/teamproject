import { Inter } from "next/font/google";
import "./page.css";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { GiCompanionCube } from "react-icons/gi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* SS About us */}
      <section id="about-section">
        <div className="about-left">
          <h1 className="text-2xl">Our Members</h1>
          <img
            src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?w=740&t=st=1682548746~exp=1682549346~hmac=481f8388d755d4f75989be6ea31f8f7ffd2e92e25b89b8f5328fcea0f5f6be91"
            alt="About Img"
          />
        </div>
        <div className="about-right">
          <h1 className="about-title">About Us</h1>
          <p>
            We are a small editorial group housed at the Programming Hero in
            Dhaka, Bangladesh. Our collaborators include publishers, legal
            scholars, computer scientists, government agencies, and other groups
            and individuals that promote open access to law, worldwide. We are
            supported by private donations, corporate sponsorships, and our
            parent institution, the Programming Hero.
          </p>
          <div className="address">
            <ul>
              <li>
                <span className="address-logo">
                  <GiCompanionCube />
                </span>
                <p>Address</p>
                <span className="saprater">:</span>
                <p>Bonani, Dhaka, Bangladesh.</p>
              </li>
              <li>
                <span className="address-logo">
                  <FiPhoneCall />
                </span>
                <p>Phone No</p>
                <span className="saprater">:</span>
                <p>+91 987-654-4321</p>
              </li>
              <li>
                <span className="address-logo">
                  <AiOutlineMail />
                </span>
                <p>Email ID</p>
                <span className="saprater">:</span>
                <p>teamwork@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* SS Events */}
      <section>
        <h1 className="k text-6xl font-bold text-center bg-green-700 text-yellow-200 p-8">
          Events
        </h1>
        {/* 1st Event  */}
        <div className="md:mx-36">
          <div className="flex justify-between  p-5">
            <div className="flex justify-between text-center bb">
              <div className="m-1">
                <h1 className="text-5xl">26</h1>
              </div>
              <div className="text-justify m-1 mx-3">
                <h3>MON</h3>
                <h3>JUN</h3>
              </div>
              <div className="m-5">
                <h5>
                  <span>Bongho Bazer fire</span>
                  <span className=""> / Mirpur, Dhaka.</span>
                </h5>
              </div>
            </div>
            <div className="m-5">
              <button className="bgco ff bgc btn-sm">Register Now</button>
            </div>
          </div>
          <hr className="hr" />
        </div>
        {/* 2nd Event  */}
        <div className="md:mx-36">
          <div className="flex justify-between  p-5">
            <div className="flex justify-between text-center bb">
              <div className="m-1">
                <h1 className="text-5xl">29</h1>
              </div>
              <div className="text-justify m-1 mx-3">
                <h3>WED</h3>
                <h3>JUN</h3>
              </div>
              <div className="m-5">
                <h5>
                  <span>New Market Fire</span>
                  <span className=""> / New Market, Dhaka</span>
                </h5>
              </div>
            </div>
            <div className="m-5">
              <button className="bgco ff bgc btn-sm">Register Now</button>
            </div>
          </div>
          <hr className="hr" />
        </div>
        {/* 3rd event  */}
        <div className="md:mx-36">
          <div className="flex justify-between  p-5">
            <div className="flex justify-between text-center bb">
              <div className="m-1">
                <h1 className="text-5xl">04</h1>
              </div>
              <div className="text-justify m-1 mx-3">
                <h3>FRI</h3>
                <h3>JUlY</h3>
              </div>
              <div className="m-5">
                <h5>
                  <span>Child Labor Solution Agency</span>
                  <span className=""> / Bonani, Dhaka</span>
                </h5>
              </div>
            </div>
            <div className="m-5">
              <button className="bgco ff bgc btn-sm">Register Now</button>
            </div>
          </div>
          <hr className="hr" />
        </div>
      </section>
      {/* SS newsletter */}
      <br />
      <section>
        <div className="parent-wrapper">
          <span className="close-btn glyphicon glyphicon-remove"></span>
          <div className="subscribe-wrapper">
            <h4>Subscribe newsletter now for a member.</h4>
            <input
              type="email"
              name="email"
              className="subscribe-input"
              placeholder="Enter Your e-mail"
            />
            <div className="submit-btn">Subscribe Now</div>
          </div>
        </div>
        <div className="text-center">
              Keep With us being a member without cost.
            </div>
      </section>
      {/* <section>
        <div
          className="bg-light bg-pos-l py-6 px-4 px-lg-6 text-center rounded"
          data-bg-img="assets/images/bg/02.png"
        >
          <div className="mb-5">
            <h2>
              <span>Subscribe newsletter now for a member.</span>
            </h2>
          </div>
          <div className="">
            <form className="row mb-3">
              <div className="col-md">
                <input
                  type="text"
                  value=""
                  name="name"
                  className="\"
                  id="mc-name"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-md">
                <input
                  type="email"
                  value=""
                  name="EMAIL"
                  className="\"
                  id="mc-email"
                  placeholder="Email Address"
                />
              </div>
              <div className="col-md-auto">
                <input
                  className="btn bgco"
                  type="submit"
                  name="subscribe"
                  value="Subscribe Now"
                />
              </div>
            </form>
            <small>
              Keep With us being a member without cost..
            </small>
          </div>
        </div>
      </section> */} 
    </main>
  );
}
