import React from "react";
import "./Case.css";
import service_img from "../../Assets/Images/service_img.png";



export function Case() {
  const Case = [
    {
      id: 1,
      paragraph: "Lunar Strategy SaaS Marketing Agency - Rebranding of website",
      text: "We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves.",
    },
    {
      id: 2,
      paragraph: "Lunar Strategy SaaS Marketing Agency - Rebranding of website",
      text: "We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves.",
    },
    {
      id: 3,
      paragraph: "Lunar Strategy SaaS Marketing Agency - Rebranding of website",
      text: "We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves.",
    },
    {
      id: 4,
      paragraph: "Lunar Strategy SaaS Marketing Agency - Rebranding of website",
      text: "We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves.",
    },
  ];
  return (
    <>
      <header id="case_header">
        <p>Some of our SaaS clients</p>
        <p>
          We take your SaaS idea and make it into reality. We start with going
          into why and what your are looking for. Then after brainstorming on
          branding and strategy we are going into the details of what what and
          why the you want to create a website. In order to make the creation
          process as smooth and effective as possible then we are working in an
          agile/scrum way in order to make sure we can deliver on time and
          within budget for our clients.
        </p>
      </header>
      <section id="case_sec1">
        {Case.map((item) => {
          return (
            <div id="case_sec1_card_container" key={item.id}>
              <div id="case_sec1_cards">
                <div></div>
                <p>{item.paragraph}</p>
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </section>
      <section id="service_sec2" className="case_sec2">
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
    </>
  );
}
