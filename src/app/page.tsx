import { Inter } from "next/font/google";
import "./page.css";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { GiCompanionCube } from "react-icons/gi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* About us */}
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
      {/* Events */}
      <section>
        <h1 className="text-6xl font-bold text-center bg-green-700 text-yellow-200 p-8">
          Events
        </h1>
        <div className="mx-32">
          <div className="flex justify-between bg-teal-300 p-5">
            <div className="flex justify-between text-center">
              <div className="m-5">
                <h1>Date</h1>
              </div>
              <div className="text-justify">
                <h3>day</h3>
                <h3>month</h3>
              </div>
              <div className="m-5">
                <h5>dfghk/ig</h5>
              </div>
            </div>
            <div className="m-5">
              <button>Donet Now</button>
            </div>
          </div>
          <hr className="font-bold text-inherit"/>
        </div>
      </section>
      {/* newsletter */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div
                className="bg-light bg-pos-l py-6 px-4 px-lg-6 text-center rounded"
                data-bg-img="assets/images/bg/02.png"
              >
                <div className="mb-5">
                  <h2>
                    <span className="font-w-4 d-block">
                      Subscribe newsletter
                    </span>{" "}
                    now for a custom built
                  </h2>
                </div>
                <div className="">
                  <div className="">
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
                            className="btn btn-dark mt-3 mt-md-0"
                            type="submit"
                            name="subscribe"
                            value="Subscribe Now"
                          />
                        </div>
                      </form>
                      <small className="">
                        Get started for 1 Month free trial No Purchace required.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
