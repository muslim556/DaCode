import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./Blog2.css";
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
import Search from "../../Assets/Icons/search.svg";


const Data = [
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
  {
    id: 13,
    img: img2,
    date: "July 15",
    paragraph: "Do millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 14,
    img: img1,
    date: "July 15",
    paragraph: "jo millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 15,
    img: img4,
    date: "July 15",
    paragraph: "jo millennials care about saving?",
    text: "Curabjitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 16,
    img: img3,
    date: "July 15",
    paragraph: "jo millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 17,
    img: img6,
    date: "July 15",
    paragraph: "ko millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 18,
    img: img5,
    date: "July 15",
    paragraph: "ko millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 19,
    img: img8,
    date: "July 15",
    paragraph: "ko millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 20,
    img: img7,
    date: "July 15",
    paragraph: "xo millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 21,
    img: img10,
    date: "July 15",
    paragraph: "xo millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 22,
    img: img9,
    date: "July 15",
    paragraph: "xo millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 23,
    img: img12,
    date: "July 15",
    paragraph: "wo millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 24,
    img: img11,
    date: "July 15",
    paragraph: "wo millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 25,
    img: img6,
    date: "July 15",
    paragraph: "Do millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 26,
    img: img3,
    date: "July 15",
    paragraph: "jo millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 27,
    img: img2,
    date: "July 15",
    paragraph: "jo millennials care about saving?",
    text: "Curabjitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 28,
    img: img8,
    date: "July 15",
    paragraph: "jo millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 29,
    img: img1,
    date: "July 15",
    paragraph: "ko millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 30,
    img: img10,
    date: "July 15",
    paragraph: "ko millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 31,
    img: img2,
    date: "July 15",
    paragraph: "ko millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 32,
    img: img11,
    date: "July 15",
    paragraph: "xo millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 33,
    img: img4,
    date: "July 15",
    paragraph: "xo millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 34,
    img: img9,
    date: "July 15",
    paragraph: "xo millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 35,
    img: img10,
    date: "July 15",
    paragraph: "wo millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 36,
    img: img12,
    date: "July 15",
    paragraph: "wo millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 37,
    img: img3,
    date: "July 15",
    paragraph: "wo millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 38,
    img: img2,
    date: "July 15",
    paragraph: "wo millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 39,
    img: img8,
    date: "July 15",
    paragraph: "wo millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
  {
    id: 40,
    img: img12,
    date: "July 15",
    paragraph: "wo millennials care about saving?",
    text: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo praesentium excepturi magnam! Laudantium quisquam eum officia molestiae voluptate harum. Atque veniam laboriosam nulla optio facere alias consequatur cum id porro. Quia aliquid enim tempore quas eos ratione doloribus et atque! Non quo, nulla quidem esse blanditiis nostrum cumque culpa neque.",
  },
];


export function Blog2() {
  const [cards] = useState(Data);
  const [pageNUmber, setPageNumber] = useState(0);
  const usersPerPage = 12;
  const pagesVisited = pageNUmber * usersPerPage;

  const pageCount = Math.ceil(cards.length / usersPerPage);

  function changePage({ selected }) {
    setPageNumber(selected);
  }

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
          <input type="search" id="" placeholder="Search blog…" />
          <label>
            <input type="submit" value="" />
            <img src={Search} alt="" />
          </label>
        </form>
      </header>
      <section id="blog_sec1">
        <div id="blog_cards_container">
          {cards
            .slice(pagesVisited, pagesVisited + usersPerPage)
            .map((item) => {
              return (
                <div id="blog_mini_cards" key={item.id}>
                  <div id="blog_img_card">
                    <img src={item.img} alt="" />
                    <span>{item.date}</span>
                  </div>
                  <div id="blog_mini_cards_text">
                    <p>{item.paragraph}</p>
                    <p>{item.text}</p>
                    <button>Read More</button>
                  </div>
                </div>
              );
            })}
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination_btns"}
            previousLinkClassName={"previuos_btns"}
            nextLinkClassName={"next_btn"}
            disabledClassName={"pagination_disabled"}
            activeClassName={"pagination_active"}
          />
        </div>
      </section>
    </>
  );
}
