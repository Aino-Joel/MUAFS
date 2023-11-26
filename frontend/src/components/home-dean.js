import React from "react";
import { Link } from "react-router-dom";
import { BsFillArchiveFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function Home() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>Welcome...</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>POPULAR</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <Link to="/dreamworld">
            <h2>DREAM WORLD</h2>
          </Link>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>PREFERRRED LOCATION</h3>
            <FaMapMarkerAlt className="card_icon" />
          </div>
          <Link to="/kikoni A">
            <h2>KIKONI A</h2>
          </Link>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>HIGHLY RATED</h3>
            <MdStarRate className="card_icon" />
          </div>
          <Link to="/NANA">
            <h2>NANA HOSTEL</h2>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
