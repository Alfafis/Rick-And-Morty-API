import React, { useState, useEffect } from "react";

import logoTitle from "../../assets/logo-title1.png";
import loadImg from "../../assets/loading.png";

import api from "../../services/api";
import "./style.css";

const Home = () => {
  const [character, SetCharacter] = useState([]);
  const [modal, SetModal] = useState([]);

  function loader() {
    const search = document.querySelector(".loading");
    search.classList.toggle("display");
    const logo = document.querySelector(".logo");
    logo.classList.toggle("display");
  }
  function removeLoader() {
    const logo = document.querySelector(".logo");
    logo.classList.toggle("display");
    const search = document.querySelector(".loading");
    search.classList.toggle("display");
    const grid = document.querySelector(".grid");
    grid.classList.toggle("display");
  }

  function searchApi(dado) {
    api
      .getCharacterByName(dado)
      .then(({ results }) => {
        const grid = results.map(({ id, name, image }) => {
          return { id, name, image };
        });
        SetCharacter(grid);
      })
      .catch((error) => error);
  }

  function handleClick(e) {
    const search = document.querySelector("#search").value;
    loader();
    setTimeout(function () {
      removeLoader();
    }, 3000);
    searchApi(search);
  }

  function handleModal(id) {
    api
      .getCharacterById(id)
      .then((response) => {
        const res = response;
        console.log(res);
        SetModal(res);
      })
      .catch((error) => error);
    const modal = document.querySelector(".modal");
    modal.classList.toggle("display");
  }

  return (
    <div className="menu">
      <div className="logo">
        <img className="logoTitle" src={logoTitle} alt="Rick and Morty" />
        <fieldset>
          <input id="search" type="text" placeholder="Search charaters" />
          <button className="search-rick" onClick={handleClick}>
            Search
          </button>
        </fieldset>
      </div>
      <div className="body-grid">
        <div className="grid">
          {character.map((char) => (
            <div
              className="Card"
              key={char.id}
              onClick={() => handleModal(char.id)}
            >
              <img className="logoImg" src={char.image} alt="card" />
              <label>
                <p>{char.name}</p>
                <span>{char.id}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="loading">
        <img className="logoImg" src={loadImg} alt="loading" />
        <span>Loading</span>
      </div>
      <div className="modal" key={modal.id}>
        <button>close</button>
        <img className="modal-img" src={modal.image} alt={modal.name} />
        <div className="modal-title">
          <label>{modal.name}</label>
          <span>{modal.gender}</span>
        </div>
        <div className="modal-body">
          <label>About</label>
          {/* <span>{modal.location}</span> */}
          <label>Origin</label>
          {/* <span>{modal.origin}</span> */}
          <label>Locaition</label>
          {/* <span>{modal.location}</span> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
