import React, { Component } from "react";
import styles from "./Edit.module.css";
import Icon from "../../components/Icon/Icon";

const Edit = ({ handleTextChange, handleEdit, userData, links }) => {
  return (
    <div className={styles.container}>
      <h1>Editar informacion</h1>
      <div className={["form-group", styles.formSection].join(" ")}>
        <label htmlFor="name">Nombre</label>
        <input
          name="name"
          id="name"
          type="text"
          className="form-control"
          onChange={e => handleTextChange(e)}
        />
      </div>
      <div className={["form-group", styles.formSection].join(" ")}>
        <label htmlFor="name">Profesion</label>
        <input
          name="profession"
          id="profession"
          type="text"
          className="form-control"
          onChange={e => handleTextChange(e)}
        />
      </div>
      <div className={["form-group", styles.formSection].join(" ")}>
        <label htmlFor="">Sumario</label>
        <textarea
          name="summary"
          id="summary"
          rows={3}
          onChange={e => handleTextChange(e)}
          className="form-control"
        ></textarea>
      </div>
      <div className={["form-group", styles.formSection].join(" ")}>
        <Icon type="facebook-square" size="lg" color="#3b5998" />
        <input
          name="fbLink"
          id="fbLink"
          type="text"
          className="form-control"
          onChange={e => handleTextChange(e)}
        />
      </div>
      <div className={["form-group", styles.formSection].join(" ")}>
        <Icon type="twitter-square" size="lg" color="#1da1f2" />
        <input
          name="twLink"
          id="twLink"
          type="text"
          className="form-control"
          onChange={e => handleTextChange(e)}
        />
      </div>
      <div className={["form-group", styles.formSection].join(" ")}>
        <Icon type="instagram" size="lg" color="#e1306c" />
        <input
          name="igLink"
          id="igLink"
          type="text"
          className="form-control"
          onChange={e => handleTextChange(e)}
        />
      </div>
      <div className={["form-group", styles.formSection].join(" ")}>
        <Icon type="linkedin" size="lg" color="#0077b5" />
        <input
          name="lkLink"
          id="lkLink"
          type="text"
          className="form-control"
          onChange={e => handleTextChange(e)}
        />
      </div>
      <div className={["form-group", styles.formSection].join(" ")}>
        <Icon type="github-square" size="lg" color="#333" />
        <input
          name="githubLink"
          id="githubLink"
          type="text"
          className="form-control"
          onChange={e => handleTextChange(e)}
        />
      </div>

      <a href="#" className="btn btn-primary" onClick={handleEdit}>
        Guardar
      </a>
    </div>
  );
};

export default Edit;
