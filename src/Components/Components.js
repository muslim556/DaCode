import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/Icons/logo.svg";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";

export function Footer() {
  return (
    <footer id="footer">
      <div id="footer_top_container">
        <div id="footer_logo_card">
          <p>Logo</p>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
        <div id="footer_link_cards">
          <p>Work</p>
          <a href="/">Blog</a>
          <a href="/">How We Work</a>
          <a href="/">Testimonials</a>
        </div>
        <div id="footer_link_cards">
          <p>Services</p>
          <a href="/">Marketing Strategy</a>
          <a href="/">Website Optimization</a>
          <a href="/">Email Maerketing</a>
        </div>
        <div id="footer_link_cards">
          <p>Business Solution</p>
          <a href="/">Partnership</a>
          <a href="/">About Project</a>
          <a href="/">Corporate</a>
        </div>
        <select id="select">
          <option value="volvo">Language</option>
          <option value="saab">English</option>
          <option value="opel">Russian</option>
          <option value="audi">Uzbek</option>
        </select>
      </div>
      <div id="footer_line"></div>
      <div id="footer_bottom_container">
        <p>© DaCode. 2020</p>
        <div id="footer_bottom_text">
          <p>FB</p>
          <p>TW</p>
          <p>IG</p>
        </div>
      </div>
    </footer>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <nav id="nav">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
        <div id="nav_link_card">
          <NavLink to="/" activclassname="selected">
            Home
          </NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/case">Case</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/blog2">Blog2</NavLink>
          <Button variant="outlined" onClick={handleClickOpen}>
            Request a quote
          </Button>
        </div>
      </nav>

      <div>
        <Dialog open={open} onClose={handleClose} id="nav_form_modal">
          <h1
            style={{
              textAlign: "center",
              paddingTop: "20px",
            }}
          >
            Request a quote
          </h1>
          <DialogContent>
            <DialogContentText
              style={{
                textAlign: "center",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus mollitia repellendus fugit eaque non libero.
            </DialogContentText>
            <input
              type="text"
              placeholder="First Name"
              style={{
                border: "none",
                borderBottom: "1px solid #ddd",
                outline: "none",
                fontSize: "18px",
                width: "100%",
                marginTop: "20px",
                textTransform: "capitalize",
                padding: "0 5px",
              }}
            />
            <input
              type="text"
              placeholder="Last Name"
              style={{
                border: "none",
                borderBottom: "1px solid #ddd",
                outline: "none",
                fontSize: "18px",
                width: "100%",
                marginTop: "20px",
                textTransform: "capitalize",
                padding: "0 5px",
              }}
            />
            <textarea
              placeholder="Write your message"
              rows="4"
              cols="78"
              style={{
                padding: "10px 5px",
                outline: "none",
                marginTop: "20px",
                fontSize: "18px",
                width: "100%",
                border: "1px solid #ddd",
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Send</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
