import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StatisticalSummary = () => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/statistical-summary")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setSummary(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
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
    <div className="container mt-4">
      <div className="card shadow-lg border border-danger">
        <div className="card-header bg-danger text-white text-center">
          <h2 className="mb-0">Statistical Summary</h2>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead className="table-danger">
                <tr>
                  <th>Feature</th>
                  <th>Mean</th>
                  <th>Median</th>
                  <th>Mode</th>
                  <th>Standard Deviation</th>
                  <th>Variance</th>
                  <th>Minimum</th>
                  <th>Maximum</th>
                  <th>25th Percentile</th>
                  <th>50th Percentile</th>
                  <th>75th Percentile</th>
                  <th>Inter Quartile Range</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(summary).map(([feature, stats]) => (
                  <tr key={feature}>
                    <td className="fw-bold">{feature}</td>
                    <td>{stats.Mean.toFixed(2)}</td>
                    <td>{stats.Median.toFixed(2)}</td>
                    <td>{stats.Mode}</td>
                    <td>{stats["Standard Deviation"].toFixed(2)}</td>
                    <td>{stats.Variance.toFixed(2)}</td>
                    <td>{stats.Minimum.toFixed(2)}</td>
                    <td>{stats.Maximum.toFixed(2)}</td>
                    <td>{stats["25th Percentile"].toFixed(2)}</td>
                    <td>{stats["50th Percentile"].toFixed(2)}</td>
                    <td>{stats["75th Percentile"].toFixed(2)}</td>
                    <td>{stats.IQR.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticalSummary;
