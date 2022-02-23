import React, { useContext } from "react";
import Topics from "./Topics.jsx";
import Subtopics from "./Subtopics.jsx";
import GithubLogin from "../components/GithubLogin";
import { TopicContext } from "../App.jsx";

function Dashboard() {
  return (
    <div className="Dashboard">
      <header>
        <h1 id="mainTitle" className="GitGoodTitle">
          🤖GitGood
        </h1>
        <p id="subTitle" className="Tagline">
          Organize your coding resources ✅
        </p>
        <GithubLogin />
      </header>
      <div className="containers">
        <Topics />
        <Subtopics />
      </div>
    </div>
  );
}

export default Dashboard;
