import React, { useState, useEffect } from "react";
import "./Team.css";
import linkidn_round from "../../Assets/Icons/linkidn_round.svg";
import user from "../../Assets/Icons/user-Light.svg";

export function Team() {
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
  const Team = [
    {
      id: 1,
      user_img: user,
      name: "Kevin Jeppesen",
      job: "Web Project Manager",
      img: linkidn_round,
      email: "kevin@dacode.se",
    },
    {
      id: 2,
      user_img: user,
      name: "Kevin Jeppesen",
      job: "Web Project Manager",
      img: linkidn_round,
      email: "kevin@dacode.se",
    },
    {
      id: 3,
      user_img: user,
      name: "Kevin Jeppesen",
      job: "Web Project Manager",
      img: linkidn_round,
      email: "kevin@dacode.se",
    },
    {
      id: 4,
      user_img: user,
      name: "Kevin Jeppesen",
      job: "Web Project Manager",
      img: linkidn_round,
      email: "kevin@dacode.se",
    },
    {
      id: 5,
      user_img: user,
      name: "Kevin Jeppesen",
      job: "Web Project Manager",
      img: linkidn_round,
      email: "kevin@dacode.se",
    },
    {
      id: 6,
      user_img: user,
      name: "Kevin Jeppesen",
      job: "Web Project Manager",
      img: linkidn_round,
      email: "kevin@dacode.se",
    },
    {
      id: 7,
      user_img: user,
      name: "Kevin Jeppesen",
      job: "Web Project Manager",
      img: linkidn_round,
      email: "kevin@dacode.se",
    },
    {
      id: 8,
      user_img: user,
      name: "Kevin Jeppesen",
      job: "Web Project Manager",
      img: linkidn_round,
      email: "kevin@dacode.se",
    },
    {
      id: 9,
      user_img: user,
      name: "Kevin Jeppesen",
      job: "Web Project Manager",
      img: linkidn_round,
      email: "kevin@dacode.se",
    },
    {
      id: 10,
      user_img: user,
      name: "Kevin Jeppesen",
      job: "Web Project Manager",
      img: linkidn_round,
      email: "kevin@dacode.se",
    },
    {
      id: 11,
      user_img: user,
      name: "Kevin Jeppesen",
      job: "Web Project Manager",
      img: linkidn_round,
      email: "kevin@dacode.se",
    },
    {
      id: 12,
      user_img: user,
      name: "Kevin Jeppesen",
      job: "Web Project Manager",
      img: linkidn_round,
      email: "kevin@dacode.se",
    },
  ];

  return (
    <>
      <header id="team_header">
        <p>The Team</p>
        <p>
          Our team members have over 15 years of experience within web
          development, SEO, content and design. We have an extensive portfolio
          of working with different companies and projects from various parts of
          the world.
        </p>
      </header>
      <section id="team_sec1">
        <div id="team_cards_container">
          {Team.map((item) => {
            return (
              <div
                id="team_mini_cards"
                onClick={() => show(item)}
                style={{
                  cursor: "pointer",
                }}
              >
                <div id="team_user_round">
                  <img src={item.user_img} alt="" />
                </div>
                <p>{item.name}</p>
                <p>{item.job}</p>
                <img src={item.img} alt="" />
                <a href="mailto:muslimbeknajmiddinov31@gmail.com">
                  {item.email}
                </a>
              </div>
            );
          })}
        </div>
      </section>
      <div className={modal ? "modal activ" : "modal"}>
        <div id="team_mini_cards">
          <div id="team_user_round">
            <img src={showData.user_img} alt="" />
          </div>
          <p>{showData.name}</p>
          <p>{showData.job}</p>
          <p>{showData.email}</p>
        </div>
      </div>
    </>
  );
}
