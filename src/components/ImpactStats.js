import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ImpactStats() {
  const [stats, setStats] = useState({
    users: 0,
    donations: 0,
    collaborations: 0
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/stats")
      .then(res => setStats(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="stats">
      <div className="stat">
        <div className="stat__num">{stats.users}</div>
        <div className="stat__label">Humans Impacted</div>
      </div>
      <div className="stat">
        <div className="stat__num">{stats.collaborations}</div>
        <div className="stat__label">Collaborations</div>
      </div>
      <div className="stat">
        <div className="stat__num">{stats.donations}</div>
        <div className="stat__label">Donations</div>
      </div>
    </section>
  );
}
