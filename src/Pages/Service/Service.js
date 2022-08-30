import React, { useState, useEffect } from "react";
import "./Service.css";
import arrow from "../../Assets/Icons/read_arrow.svg";
import website from "../../Assets/Icons/web-site.svg";
import wordpress from "../../Assets/Icons/wordpress.svg";
import webdesign from "../../Assets/Icons/web-design.svg";
import optimization from "../../Assets/Icons/magnifying-glass.svg";
import layers from "../../Assets/Icons/layers.svg";
import startup from "../../Assets/Icons/startup.svg";
import service_img from "../../Assets/Images/service_img.png";

export function Service() {
  const Services = [
    {
      id: 0,
      img: website,
      name: "WordPress Site",
      text: "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut ",
      text2:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum iure beatae numquam a. Earum esse aperiam provident, amet inventore minus non reprehenderit dolore velit dolor officiis labore, ipsam repudiandae praesentium. Sapiente ipsa voluptate deleniti officia numquam modi cupiditate tenetur, architecto iusto alias eum dolores iste cumque, eos, commodi et unde?",
    },
    {
      id: 1,
      img: wordpress,
      name: "WordPress Plugin",
      text: "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut ",
      text2:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum iure beatae numquam a. Earum esse aperiam provident, amet inventore minus non reprehenderit dolore velit dolor officiis labore, ipsam repudiandae praesentium. Sapiente ipsa voluptate deleniti officia numquam modi cupiditate tenetur, architecto iusto alias eum dolores iste cumque, eos, commodi et unde?",
    },
    {
      id: 2,
      img: webdesign,
      name: "Website Redesign",
      text: "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut ",
      text2:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum iure beatae numquam a. Earum esse aperiam provident, amet inventore minus non reprehenderit dolore velit dolor officiis labore, ipsam repudiandae praesentium. Sapiente ipsa voluptate deleniti officia numquam modi cupiditate tenetur, architecto iusto alias eum dolores iste cumque, eos, commodi et unde?",
    },
    {
      id: 3,
      img: optimization,
      name: "Search Engine Optimization",
      text: "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut ",
      text2:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum iure beatae numquam a. Earum esse aperiam provident, amet inventore minus non reprehenderit dolore velit dolor officiis labore, ipsam repudiandae praesentium. Sapiente ipsa voluptate deleniti officia numquam modi cupiditate tenetur, architecto iusto alias eum dolores iste cumque, eos, commodi et unde?",
    },
    {
      id: 4,
      img: layers,
      name: "Search Engine Optimization",
      text: "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut ",
      text2:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum iure beatae numquam a. Earum esse aperiam provident, amet inventore minus non reprehenderit dolore velit dolor officiis labore, ipsam repudiandae praesentium. Sapiente ipsa voluptate deleniti officia numquam modi cupiditate tenetur, architecto iusto alias eum dolores iste cumque, eos, commodi et unde?",
    },
    {
      id: 5,
      img: startup,
      name: "Cross Platform Mobile App",
      text: "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut ",
      text2:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum iure beatae numquam a. Earum esse aperiam provident, amet inventore minus non reprehenderit dolore velit dolor officiis labore, ipsam repudiandae praesentium. Sapiente ipsa voluptate deleniti officia numquam modi cupiditate tenetur, architecto iusto alias eum dolores iste cumque, eos, commodi et unde?",
    },
  ];

  const [showData, setShowData] = useState({});
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);
  const show = (item) => {
    openModal();
    setShowData(item);
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      console.log(e.target.className);
      if (e.target.className === "modal activ") {
        setModal(false);
      }
    });
  }, []);

  return (
    <>
      <header id="service_header">
        <p>What we can offer your SaaS Business</p>
        <p>
          We have chosen to only collaborate and work with SaaS businesses, this
          is because our expertise lies and we know that we can provide the most
          value to our clients. Our team has worked with Nordic, European and
          American tech unicorns.
        </p>
      </header>
      <section id="service_sec1">
        <div id="service_sec1_container">
          <div id="home_sec1_text_card">
            <p>Our Services</p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et.
            </p>
          </div>
          <div id="service_sec1_cards_container">
            {Services.map((item) => {
              return (
                <div id="service_mini_cards" key={item.id}>
                  <span></span>
                  <img src={item.img} alt="" />
                  <p>{item.name}</p>
                  <p>{item.text}</p>
                  <button onClick={() => show(item)}>
                    Read more <img src={arrow} alt="" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section id="service_sec2">
        <p>Interested to work with us ?</p>
        <p>Send a line here get and update daily</p>
        <a href="/">DaCode@example.com</a>
      </section>
      <section id="service_sec3">
        <div id="service_sec3_text_card">
          <p>Establishing online presence</p>
          <p>
            Every SaaS website, regardless of niche, must do one thing
            brilliantly, which is converting visitors into users. At first
            glance, the site should encourage and guide visitors in a smooth way
            towards call-to-actions. This goes hand in hand with a responsive
            design, meaning it needs to be apt for different devices. We use a
            data-driven approach to measure user response when developing the
            site. This method usually makes the site quicker to launch, is more
            cost-effective and more successful in the long run. The pages need
            to be search engine optimized (SEO) because it lays the foundation
            for the technical quality, which in turn determines how high it will
            rank among search results. We also make sure that your website is
            indexed properly. We audit your audience and get to know your target
            market to be able to speak to them through the website in the best
            possible way. By finding out their consumer behavior we can refine
            the website approach.
          </p>
        </div>
        <div id="service_img_card">
          <p>Schedule a free session</p>
          <img src={service_img} alt="" />
        </div>
      </section>
      <div className={modal ? "modal activ" : "modal"}>
        <div id="home_sec1_modal">
          <p>{showData.name}</p>
          <p>{showData.text2}</p>
        </div>
      </div>
    </>
  );
}
