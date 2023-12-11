import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('You searched for:', search);
};

  return (
    <div>
      <section className="hero">
        <div className="content">
          <h1>CampusCrib</h1>
          <p> Trust us to get you a home away from home</p>
          <Link to={"/hostels"}>Start Now</Link>
          // <form onSubmit={handleSubmit}>
          //       <input
          //           type="text"
          //           placeholder="Search..."
          //           value={search}
          //           onChange={(e) => setSearch(e.target.value)}
          //       />
          //       <button type="submit">Search</button>
          //   </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
