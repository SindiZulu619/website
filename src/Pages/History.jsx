import { useEffect, useState } from "react";

const API_URL =
  "https://tazsownqxq.execute-api.af-south-1.amazonaws.com/dev/history";

export default function History() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await fetch(API_URL);
      const result = await res.json();

      setData(result);
    } catch (err) {
      console.error(err);
      setError("Failed to load history");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2>Loading scan history...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h1>📊 Scan History</h1>

      {data.length === 0 ? (
        <p>No scans yet</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: 20,
          }}
        >
          <thead>
            <tr>
              <th>UID</th>
              <th>Status</th>
              <th>Risk</th>
              <th>SKU</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index} style={{ textAlign: "center" }}>
                <td>{item.uid}</td>
                <td>{item.status}</td>
                <td>{item.risk}</td>
                <td>{item.sku}</td>
                <td>
                  {new Date(item.timestamp).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}