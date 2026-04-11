import React, { useEffect, useState } from "react";
import API from "../api/api";

const History = () => {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    fetchHistory();

  }, []);

  const fetchHistory = async () => {

    const res = await API.get("/history");

    setHistory(res.data);

  };

  return (

    <div>

      <h1 className="text-2xl font-bold mb-6">
        Resume History
      </h1>

      <div className="space-y-4">

        {history.map((item, index) => (

          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow"
          >

            <p className="text-sm text-gray-400 mb-2">
              {new Date(item.createdAt).toLocaleString()}
            </p>

            <pre className="whitespace-pre-wrap">
              {item.analysis}
            </pre>

          </div>

        ))}

      </div>

    </div>

  );

};

export default History;