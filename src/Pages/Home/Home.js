import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import home_img from "../../Assets/Icons/home_children.svg";
import arrow from "../../Assets/Icons/read_arrow.svg";
import Slider from "react-slick";
import img1 from "../../Assets/Images/home_img1.png";
import img2 from "../../Assets/Images/home_img2.png";
import img3 from "../../Assets/Images/home_img3.png";
import leftarrow from "../../Assets/Icons/leftarrow_bck.svg";
import rightarrow from "../../Assets/Icons/rightarrow_bck.svg";
import working_remotely from "../../Assets/Icons/Working Remotely.svg";
import star from "../../Assets/Icons/star.svg";
import user1 from "../../Assets/Images/home_user1.png";
import user2 from "../../Assets/Images/home_user2.png";
import user3 from "../../Assets/Images/home_user3.png";
import user4 from "../../Assets/Images/home_user4.png";
import user5 from "../../Assets/Images/home_user5.png";
import website from "../../Assets/Icons/web-site.svg";
import wordpress from "../../Assets/Icons/wordpress.svg";
import webdesign from "../../Assets/Icons/web-design.svg";
import optimization from "../../Assets/Icons/magnifying-glass.svg";
import layers from "../../Assets/Icons/layers.svg";
import startup from "../../Assets/Icons/startup.svg";
import { NavLink } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={leftarrow}
      className={className}
      style={{ ...style, display: "block", width: "100px", height: "100px" }}
      onClick={onClick}
      alt=""
      id="leftarrow"
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={rightarrow}
      className={className}
      style={{
        ...style,
        display: "block",
        width: "100px",
        height: "100px",
        zIndex: "10",
      }}
      onClick={onClick}
      alt=""
      id="leftarrow"
    />
  );
}

function SamplePrevArrow2(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={rightarrow}
      className={className}
      style={{ ...style, display: "block", width: "100px", height: "100px" }}
      onClick={onClick}
      alt=""
      id="sec6_arrow"
    />
  );
}

function SamplenoArrow2(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={rightarrow}
      className={className}
      style={{ ...style, display: "none", width: "100px", height: "100px" }}
      onClick={onClick}
      alt=""
      id="sec6_arrow"
    />
  );
}

export function Home() {
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

  const settings = {
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    prevArrow: <SamplenoArrow2 />,
    nextArrow: <SamplePrevArrow2 />,
    slidesToShow: 2,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Works = [
    {
      id: 0,
      img: img1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum ",
    },
    {
      id: 1,
      img: img2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum ",
    },
    {
      id: 2,
      img: img3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum ",
    },
    {
      id: 3,
      img: img1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum ",
    },
    {
      id: 4,
      img: img2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum ",
    },
    {
      id: 5,
      img: img3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum ",
    },
  ];

  const Ideas = [
    {
      id: 1,
      parapgraph: "Your Idea",
      text: "In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company",
    },
    {
      id: 2,
      parapgraph: "Strategy metting",
      text: "This meeting will be a meeting where we together go over our proposed strategy on how we can reach your website goals. Here we will establish a project update system where you will be able to follow the whole process form start to finish",
    },
    {
      id: 3,
      parapgraph: "Agile and Scrum framework",
      text: "In this step we will have a team meeting with the project manager and the lead developer and designer. Then we will be working using and agile and scrum framework in order to make sure to deliver your project on time and within budget",
    },
    {
      id: 4,
      parapgraph: "Your website goes live",
      text: "The final checks of the website will happen, we will make sure that all tracking pixels, links and user interface is compatible with all differerent devices. We will also perform a few different tests to make sure that the website is optimised for user experience",
    },
  ];

  const News = [
    {
      id: 0,
      name: "Why Your SaaS Business should use WordPress",
      text: "A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort",
      text2:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas voluptatem cumque ut quisquam voluptas commodi, corrupti corporis! Qui eius odio sunt, aliquam praesentium, accusamus unde aperiam facere assumenda quae non? Sapiente nihil, dolore corporis a, facere cumque tempora natus cupiditate maxime eius, nemo tenetur animi maiores nostrum in velit deleniti.",
    },
    {
      id: 1,
      name: "Why Your SaaS Business should use WordPress",
      text: "A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort",
      text2:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas voluptatem cumque ut quisquam voluptas commodi, corrupti corporis! Qui eius odio sunt, aliquam praesentium, accusamus unde aperiam facere assumenda quae non? Sapiente nihil, dolore corporis a, facere cumque tempora natus cupiditate maxime eius, nemo tenetur animi maiores nostrum in velit deleniti.",
    },
    {
      id: 2,
      name: "Why Your SaaS Business should use WordPress",
      text: "A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort",
      text2:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas voluptatem cumque ut quisquam voluptas commodi, corrupti corporis! Qui eius odio sunt, aliquam praesentium, accusamus unde aperiam facere assumenda quae non? Sapiente nihil, dolore corporis a, facere cumque tempora natus cupiditate maxime eius, nemo tenetur animi maiores nostrum in velit deleniti.",
    },
    {
      id: 3,
      name: "Why Your SaaS Business should use WordPress",
      text: "A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort",
      text2:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas voluptatem cumque ut quisquam voluptas commodi, corrupti corporis! Qui eius odio sunt, aliquam praesentium, accusamus unde aperiam facere assumenda quae non? Sapiente nihil, dolore corporis a, facere cumque tempora natus cupiditate maxime eius, nemo tenetur animi maiores nostrum in velit deleniti.",
    },
    {
      id: 4,
      name: "Why Your SaaS Business should use WordPress",
      text: "A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort",
      text2:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas voluptatem cumque ut quisquam voluptas commodi, corrupti corporis! Qui eius odio sunt, aliquam praesentium, accusamus unde aperiam facere assumenda quae non? Sapiente nihil, dolore corporis a, facere cumque tempora natus cupiditate maxime eius, nemo tenetur animi maiores nostrum in velit deleniti.",
    },
    {
      id: 5,
      name: "Why Your SaaS Business should use WordPress",
      text: "A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort",
      text2:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas voluptatem cumque ut quisquam voluptas commodi, corrupti corporis! Qui eius odio sunt, aliquam praesentium, accusamus unde aperiam facere assumenda quae non? Sapiente nihil, dolore corporis a, facere cumque tempora natus cupiditate maxime eius, nemo tenetur animi maiores nostrum in velit deleniti.",
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
      <header id="header">
        <div id="header_left_container">
          <span></span>
          <p>
            We help you create your <span>website</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut
            turpis adipiscing tempus, magna elit nunc iaculis sit. Libero velit
            quis leo non. At donec egestas cras in libero pellentesque. Donec
            amet phasellus
          </p>
          <div id="header_btns_card">
            <button>Get Started</button>
            <button>Contact Us</button>
          </div>
        </div>
        <div>
          <img src={home_img} alt="" />
        </div>
      </header>
      <section id="home_sec1">
        <div id="home_sec1_text_card">
          <p>Our Services</p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et.
          </p>
        </div>
        <div id="home_sec1_cards_container">
          {Services.map((item) => {
            return (
              <div id="home_mini_cards" key={item.id}>
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
      </section>
      <section id="home_sec2">
        <p>Portfolio</p>
        <p>Our Great Work</p>
        <div id="home_sec2_btns">
          <button>Website Optimization</button>
          <button>Website Redesign</button>
          <button>Search Engine Optimization</button>
        </div>
        <div id="home_sec2_green_card"> </div>
        <Slider className="slider" {...settings}>
          {Works.map((item) => {
            return (
              <div key={item.id}>
                <div id="home_sec2_mini_cards" key={item.id}>
                  <div>
                    <img src={item.img} alt="" />
                  </div>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </Slider>
        <NavLink to="/allitems" id="home_sec2_btn">
          See all
        </NavLink>
      </section>
      <section id="home_sec3">
        <div id="home_sec3_container">
          <p>
            Your idea into <span>reality</span>
          </p>
          <p>
            We start every web development project with a project manager from
            daCode interviewing you about the goal with the project. This is for
            us to be able to come up with a solution for your SaaS business,
            estimate a timeline, and come up with a budget
          </p>

          {Ideas.map((item) => {
            return (
              <div id="home_sec3_mini_cards" key={item.id}>
                <div id="round_number_card">
                  <p>{item.id}</p>
                </div>
                <div id="home_sec3_text_card">
                  <p>{item.parapgraph}</p>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <img src={working_remotely} alt="" id="home_sec3_img" />
      </section>
      <section id="home_sec4">
        <p>Interested to work with us ?</p>
        <p>Send a line here get and update daily</p>
        <a href="/">DaCode@example.com</a>
      </section>
      <section id="home_sec5">
        <p>Testimonals</p>
        <p>Our Happy Clients</p>
        <div id="home_sec5_card">
          <div id="leftarrow_card">
            <img src={leftarrow} alt="" />
          </div>
          <div id="home_sec5_text_card">
            <p>5.0</p>
            <div id="home_star_card">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <p>
              We tried agencies brfore we found daCode. Has been a pleasure to
              work with and will soon start the next project with our second
              brand
            </p>
          </div>
          <div id="leftarrow_card">
            <img src={rightarrow} alt="" />
          </div>
        </div>
        <div id="home_user_card">
          <img src={user1} alt="" />
          <img src={user2} alt="" />
          <img src={user3} alt="" />
          <img src={user4} alt="" />
          <img src={user5} alt="" />
        </div>
      </section>
      <section id="home_sec6">
        <div id="home_sec6_text_card">
          <p>News & Articles</p>
          <p>DaCode Blog</p>
          <p>
            On daCode blog we will review the latest in web development for the
            SaaS-, tech-- and crypto industry
          </p>
          <button>See all</button>
        </div>
        <Slider {...settings2} className="slider_sec6">
          {News.map((item) => {
            return (
              <div id="home_sec6_cards" key={item.id}>
                <p>{item.name}</p>
                <p>{item.text}</p>
                <button onClick={() => show(item)}>
                  Read more <img src={arrow} alt="" />
                </button>
              </div>
            );
          })}
        </Slider>
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
