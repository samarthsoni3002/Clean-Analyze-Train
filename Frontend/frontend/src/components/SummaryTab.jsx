import { useState } from "react";
import StatisticalSummary from "./StatisticalSummary";

const SummaryTab = () => {
  const [activeTab, setActiveTab] = useState("Statistical Summary");

  const summaries = [
    { name: "Statistical Summary", component: <StatisticalSummary /> },
    { name: "Other", component: <StatisticalSummary /> },
  ];
  console.log(summaries);
  return (
    <div className="w-full p-4">
      <div className="flex space-x-4 border-b pb-2">
        {summaries.map((summary) => (
          <button
            key={summary.name}
            className={`px-4 py-2 ${
              activeTab == summary.name ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setActiveTab(summary.name)}
          >
            {summary.name}
          </button>
        ))}
      </div>

      <div className="mt-4 p-4 border rounded-lg shadow-md">
        {activeTab === "Statistical Summary" && <StatisticalSummary />}
        {activeTab === "OtherSummary" && <p>Other Summary Content</p>}{" "}
      </div>
    </div>
  );
};

export default SummaryTab;
