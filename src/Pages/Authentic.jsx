import { useEffect, useState } from "react";

const API_URL =
  "https://tazsownqxq.execute-api.af-south-1.amazonaws.com/dev/verify";

export default function Verify() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const uid = params.get("uid");

    if (!uid) {
      setError("No UID found in URL");
      setLoading(false);
      return;
    }

    fetchVerify(uid);
  }, []);

  const fetchVerify = async (uid) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uid,
          counter: 1,
          signature: "test",
          nonce: "web",
        }),
      });

      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error(err);
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2>Verifying...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;
  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      {data?.status === "AUTHENTIC" && (
        <>
          <h1>✔️ Authentic Product</h1>
          <h2>{data?.product?.name}</h2>
          <p>SKU: {data?.product?.sku}</p>
          <p>Risk: {data?.risk}</p>
        </>
      )}
      {data?.status === "NOT_FOUND" && (
        <>
          <h1>⚠️ Unknown Product</h1>
          <p>This UID is not registered in the system</p>
        </>
      )}

      {data?.status === "CLONED" && (
        <>
          <h1>🚨 Cloned Product Detected</h1>
          <p>This tag has been duplicated or reused</p>
        </>
      )}
      {data?.status === "TAMPERED" && (
        <>
          <h1>⚠️ Tampered Product</h1>
          <p>Signature verification failed</p>
        </>
      )}
      {!data?.status && (
        <>
          <h1>❌ Verification Failed</h1>
          <p>Unexpected response from server</p>
        </>
      )}
    </div>
  );
}
