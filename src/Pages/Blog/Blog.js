import React, { useState, useEffect } from "react";
import "./Blog.css";
import Search from "../../Assets/Icons/search.svg";
import img1 from "../../Assets/Images/blog_img1.png";
import img2 from "../../Assets/Images/blog_img2.png";
import img3 from "../../Assets/Images/blog_img3.png";
import img4 from "../../Assets/Images/blog_img4.png";
import img5 from "../../Assets/Images/blog_img5.png";
import img6 from "../../Assets/Images/blog_img6.png";
import img7 from "../../Assets/Images/blog_img7.png";
import img8 from "../../Assets/Images/blog_img8.png";
import img9 from "../../Assets/Images/blog_img9.png";
import img10 from "../../Assets/Images/blog_img10.png";
import img11 from "../../Assets/Images/blog_img11.png";
import img12 from "../../Assets/Images/blog_img12.png";

export function Blog() {
  const Blog = [
    {
      id: 1,
      img: img1,
      date: "July 15",
      paragraph: "Do millennials care about saving?",
      text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
      text2:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
    },
    {
      id: 2,
      img: img2,
      date: "July 15",
      paragraph: "jo millennials care about saving?",
      text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
      text2:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
    },
    {
      id: 3,
      img: img3,
      date: "July 15",
      paragraph: "jo millennials care about saving?",
      text: "Curabjitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
      text2:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
    },
    {
      id: 4,
      img: img4,
      date: "July 15",
      paragraph: "jo millennials care about saving?",
      text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
      text2:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
    },
    {
      id: 5,
      img: img5,
      date: "July 15",
      paragraph: "ko millennials care about saving?",
      text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
      text2:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
    },
    {
      id: 6,
      img: img6,
      date: "July 15",
      paragraph: "ko millennials care about saving?",
      text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
      text2:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
    },
    {
      id: 7,
      img: img7,
      date: "July 15",
      paragraph: "ko millennials care about saving?",
      text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
      text2:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
    },
    {
      id: 8,
      img: img8,
      date: "July 15",
      paragraph: "xo millennials care about saving?",
      text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
      text2:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
    },
    {
      id: 9,
      img: img9,
      date: "July 15",
      paragraph: "xo millennials care about saving?",
      text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
      text2:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
    },
    {
      id: 10,
      img: img10,
      date: "July 15",
      paragraph: "xo millennials care about saving?",
      text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
      text2:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
    },
    {
      id: 11,
      img: img11,
      date: "July 15",
      paragraph: "wo millennials care about saving?",
      text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
      text2:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
    },
    {
      id: 12,
      img: img12,
      date: "July 15",
      paragraph: "wo millennials care about saving?",
      text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
      text2:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
    },
  ];

  const [search, setSearch] = useState("");

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
      <header id="blog_header">
        <p>News & Articles</p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="search"
            id=""
            placeholder="Search blog…"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <label>
            <input type="submit" value="" />
            <img src={Search} alt="" />
          </label>
        </form>
      </header>
      <section id="blog_sec1">
        <div id="blog_cards_container">
          {Blog.filter(
            (item) => item.paragraph.toLowerCase().indexOf(search) !== -1
          ).length === 0 && search !== ""
            ? ""
            : Blog.filter(
                (item) => item.paragraph.toLowerCase().indexOf(search) !== -1
              ).length === 0 && search === ""
            ? Blog.map((item, i) => (
                <div id="blog_mini_cards" key={item.id}>
                  <div id="blog_img_card">
                    <img src={item.img} alt="" />
                    <span>{item.date}</span>
                  </div>
                  <div id="blog_mini_cards_text">
                    <p>{item.paragraph}</p>
                    <p>{item.text}</p>
                    <button onClick={() => show(item)}>Read More</button>
                  </div>
                </div>
              ))
            : Blog.filter(
                (item) => item.paragraph.toLowerCase().indexOf(search) !== -1
              ).map((item, i) => (
                <div id="blog_mini_cards" key={item.id}>
                  <div id="blog_img_card">
                    <img src={item.img} alt="" />
                    <span>{item.date}</span>
                  </div>
                  <div id="blog_mini_cards_text">
                    <p>{item.paragraph}</p>
                    <p>{item.text}</p>
                    <button onClick={() => show(item)}>Read More</button>
                  </div>
                </div>
              ))}
        </div>
      </section>
      <div className={modal ? "modal activ" : "modal"}>
        <div id="home_sec1_modal">
          <p>{showData.paragraph}</p>
          <p>{showData.text2}</p>
        </div>
      </div>
    </>
  );
}
