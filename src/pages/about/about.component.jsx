import React from "react";
import "./about.style.scss";

const About = () => (
  <main className="about">
    <div className="about-container" xyz="fade stagger">
      <h1 className="xyz-in" xyz="inherit left">
        About Me
      </h1>
      <div className="about-me-img xyz-in" xyz="inherit right">
        <picture>
          <img src="images/profile_image.jpg" alt="Your Profile_Image" />
        </picture>
      </div>
      <div className="about-me xyz-in" aria-label="About me" xyz="inherit down">
        <p>
          <span>I</span> am sesame snaps shortbread pastry chocolate bar
          tiramisu apple pie shortbread croissant. Dragée lemon drops
          gingerbread cheesecake sweet roll oat cake bear claw muffin. Sweet
          gummi bears jelly toffee ice cream gingerbread cheesecake gummies.
        </p>
        <br />
        <p>
          Pudding cookie chocolate cake lemon drops biscuit. Gummi bears
          cheesecake jelly macaroon liquorice. Tart candy canes topping brownie
          chocolate bar topping chocolate bar muffin.
        </p>
        <br />
        <p>
          Muffin danish lemon drops tart halvah oat cake wafer shortbread.
          Pudding sweet roll carrot cake pudding cotton candy powder gummies.
          Tart chocolate bar donut chupa chups chocolate ice cream jelly.
        </p>
        <br />
        <p>
          Chupa chups pie tiramisu sugar plum sugar plum toffee chocolate bar
          lollipop dragée. Cotton candy cupcake cake apple pie chocolate cake
          chocolate cake candy. Gingerbread cotton candy chocolate cake cake
          candy canes. Ice cream brownie jelly chocolate bar chocolate caramels
          cotton candy cookie.
        </p>
        <br />
      </div>
    </div>
  </main>
);

export default About;
