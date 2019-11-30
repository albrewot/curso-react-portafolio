import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styles from "./App.module.css";
import Footer from "../../components/Footer/Footer";
import Content from "../Content/Content";
import SideBar from "../../components/SideBar/SideBar";
import Edit from "../Edit/Edit";
import { doEdit, doGet } from "../../services/UserInfo";

export default class App extends Component {
  state = {
    userData: {
      name: "John Doe",
      profession: "Developer",
      summary: "summary"
    },
    links: {
      fbLink: "#1",
      twLink: "#2",
      igLink: "#3",
      lkLink: "#4",
      githubLink: "#5"
    },
    name: "",
    summary: "",
    fbLink: "",
    twLink: "",
    githubLink: "",
    igLink: "",
    lkLink: "",
    profession: ""
  };

  componentDidMount = () => {
    console.log("Component Did Mount");
    this.handleData();
  };

  handleTextChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () =>
      console.log(this.state)
    );
  };

  handleEdit = async () => {
    const {
      name,
      summary,
      fbLink,
      twLink,
      githubLink,
      igLink,
      lkLink,
      profession
    } = this.state;

    const res = await doEdit({
      name,
      summary,
      fbLink,
      twLink,
      githubLink,
      igLink,
      lkLink,
      profession
    });

    console.log("res", res);
    if (res.error || !res) {
      console.log("Error al Editar data");
    } else {
      const { name, profession, summary, ...links } = res.data;
      console.log("sum", summary, links);
      this.setState({ userData: res.data, links });
    }
  };

  handleData = async () => {
    const res = await doGet();
    if (res.error || !res) {
      console.log("Error al obtener data");
    } else {
      const { name, profession, summary, ...links } = res.data;
      console.log("sum", summary, links);
      this.setState({ userData: res.data, links });
    }
  };

  render() {
    const { userData, links } = this.state;
    return (
      <Router>
        <div className={styles.container}>
          <SideBar />
          <Switch>
            <Route path="/edit">
              <Edit
                handleTextChange={this.handleTextChange}
                handleEdit={this.handleEdit}
                userData={userData}
                links={links}
              />
            </Route>
            <Route path="/">
              <Content userData={userData} />
              <Footer links={links} />
            </Route>
          </Switch>
          {/* <Content /> */}
        </div>
      </Router>
    );
  }
}
