import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const Home = () => {
  return (
    <div>
      <div className="Group1">
        {/* // Navbar Section Starting */}
        <section id="NavbarSection">
          <img src="./images/Logo.jpg" id="logo" />
          <img src="./images/Delivery .jpg" id="deliveryImg" />

          <ul id="G1ul">
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              {" "}
              <li id="navl1"> HOME</li>
            </a>
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              <li id="navl2">MENU</li>
            </a>
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              <li id="navl3">OUR STORY</li>
            </a>
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              <li id="navl4"> CONTACT US</li>
            </a>
          </ul>

          {/* //Navbar Section Ending. */}
        </section>

        {/* Header section items  */}

        <section id="HeaderSection">
          <div id="headerPera">
            <img src="./images/HeaderPera.jpg" id="headerpera" />
          </div>

          <div id="headerImg">
            <img src="./images/headerImage.gif" id="headerimg" />
          </div>
        </section>
      </div>

      <div className="Group2">
        <section id="Gi1">
          <img src="./images/b1.jpg" id="gi1" />
          <img src="./images/b2.jpg" id="gi2" />
          <img src="./images/b3.jpg" id="gi3" />
        </section>

        <button id="btnG2">ALWAYS TASTY BURGERS</button>

        <section id="Gi2">
          <h1 id="gih1">CHOOSE & ENJOY</h1>
          <p id="gip1">
            Choose your favourite Burgers and Enjoy your day with our meals.
          </p>
        </section>

        <section id="Burgers">
          <div id="Burger1">
            <img src="./images/burger1.gif" id="burger1" />
            <h id="B1h">BEEF BURGER</h>
            <p id="B1p">Special Beef Burger</p>
            <button id="B1b">ORDER NOW</button>
          </div>

          <div id="Burger2">
            <img src="./images/burger2.gif" id="burger2" />
            <h id="B1h1">FIRE CHICKEN BURGER</h>
            <p id="B1p1">Fire Chicken Burger</p>
            <button id="B1b1">ORDER NOW</button>
          </div>

          <div id="Burger3">
            <img src="./images/burger3.gif" id="burger3" />
            <h id="B1h2">SHAMI BURGER</h>
            <p id="B1p2"> Cheesie Shami Burger</p>
            <button id="B1b2">ORDER NOW</button>
          </div>
        </section>

        <section id="Peragraph" className="col-md-3">
          <div id="Perad" className="my-3">
            <span id="Perasp">Discover</span>
            <br />
            <h id="Perah">UPCOMING EVENT</h>
            <p id="Perap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              maximus cursus lacinia. In iaculis tellus ac arcu facilisis, nec
              tempor quam luctus. Curabitur vestibulum justo vitae erat
              pellentesque laoreet. Pellentesque scelerisque iaculis auctor.
              Nullam erat justo, pretium sit amet dapibus nec, placerat quis
              elit. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Nunc vitae sem ac sem finibus
              lobortis. In efficitur tempor dolor non interdum. Aliquam maximus
              sem vitae ante dignissim, sed facilisis libero efficitur. Sed
              pretium nisi et cursus euismod. Mauris gravida tortor a orci
              viverra vulputate. Fusce blandit nisl mauris, sed laoreet purus
              rutrum tempor. Donec eget ipsum ut diam viverra fermentum id id
              ante. Duis id libero non mi ullamcorper elementum. Etiam a varius
              lacus.{" "}
            </p>
            <img src="./images/pera.gif" id="Perai" />
          </div>
        </section>

        <section id="Group3">
          <div>
            <span id="G3sp1">RESERVATION</span>
            <br />
            <h id="G3h1">BOOK YOUR TABLE</h>
          </div>

          <img src="./images/g3i1.gif" id="g3i1" />

          <div id="G3inps">
            <input placeholder="NAME" id="G3i1" />
            <input placeholder="EMAIL" id="G3i2" />
            <input placeholder="DATE" id="G3i3" />
            <input placeholder="TIME" id="G3i4" />
            <input placeholder="PEOPLE" id="G3i5" />
            <button id="G3b1">FIND A TABLE</button>
          </div>

          <img src="./images/g3i2.gif" id="g3i2" />
        </section>

        <section id="Group4" className="footer">
          <div>
            <img src="./images/footerlogo.jpg" id="ftrlo" />

            <p id="ftrp">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              maximus cursus lacinia. In iaculis tellus ac arcu facilisis, nec
              tempor quam luctus. Curabitur vestibulum justo vitae erat
              pellentesque laoreet. Pellentesque scelerisque iaculis auctor.
            </p>
          </div>

          <span id="location">
            <GoLocation /> MAIN ROAD,BUILDING NAME, COUNTRY
          </span>

          <span id="mail">
            <AiOutlineMail /> INFO@COMPANYNAME.COM
          </span>

          <span id="G4sp">
            Created By @
            <a   href="https://m.facebook.com/younus.hussain.786" >
              Syed Mohammad Younis
            </a>{" "}
            2022,ALL RIGHT RESERVED.
          </span>

          <div id="G4ld">
            <ul id="G4ul">
              <li id="G4li1">
                <a href="www.instagram.com">
                  <FaInstagram />{" "}
                </a>
              </li>
              <li id="G4li2">
                <a href="www.facebook.com">
                  <FaFacebookF />{" "}
                </a>
              </li>
              <li id="G4li3">
                <a href="www.twitter.com">
                  {" "}
                  <FaTwitter />
                </a>
              </li>
              <li id="G4li4">
                <a href="www.whatsapp.com">
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
