import { useState } from "react";
import "../../css/Dashboard.css";

// Components
import List from "../list/List";

// Hooks
import getRecent from "../../hooks/getRecent";
import getPopular from "../../hooks/getPopular";
import getFeatured from "../../hooks/getFeatured";

const Dashboard = ({ setSelected }) => {
  const [recent, setRecent] = useState(getRecent());
  const [popular, setPopular] = useState(getPopular());
  const [featuredTitle, setFeaturedTitle] = useState("Batman");
  const [featured, setFeatured] = useState(getFeatured(featuredTitle));

  return (
    <div id="dashboard">
      <div className="dash-list">
        <h2>Most Recent</h2>
        <List comics={recent} setSelected={setSelected} />
      </div>
      <div className="dash-list">
        <h2>Popular</h2>
        <List comics={popular} setSelected={setSelected} />
      </div>
      <div className="dash-list">
        <h2>Featured - {featuredTitle}</h2>
        <List comics={featured} setSelected={setSelected} />
      </div>
    </div>
  );
};

export default Dashboard;
