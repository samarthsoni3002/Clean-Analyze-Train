import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Summary = () => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("summary");

    if (storedData) {
      setSummary(JSON.parse(storedData));
      setLoading(false);
      console.log("Loaded from localStorage", JSON.parse(storedData));
    } else {
      fetch("http://localhost:8000/summary")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("summary", JSON.stringify(data));
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return <p className="text-muted">Loading...</p>;
  }
  if (error) {
    return <p className="text-danger">Error: {error.message}</p>;
  }
  if (!summary) {
    return <p className="text-muted">No Data Available!!</p>;
  }

  return (
    <div>
      <h2>Summary</h2>
      <pre>{JSON.stringify(summary, null, 2)}</pre>
    </div>
  );
};

export default Summary;
