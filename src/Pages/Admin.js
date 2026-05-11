import { useState } from "react";

const API_URL =
  "https://tazsownqxq.execute-api.af-south-1.amazonaws.com/dev/register";

export default function Admin() {
  const [productName, setProductName] = useState("");
  const [sku, setSku] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const addProduct = async () => {
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: productName,
          sku: sku,
        }),
      });

      const data = await res.json();
      setResult(data);

      setProductName("");
      setSku("");
    } catch (err) {
      console.error(err);
      alert("Error creating product");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Dashboard</h1>

      <input
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />

      <input
        placeholder="SKU"
        value={sku}
        onChange={(e) => setSku(e.target.value)}
      />

      <button onClick={addProduct} disabled={loading}>
        {loading ? "Creating..." : "Create Product"}
      </button>
      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>Created Successfully</h3>
          <p>UID: {result.uid}</p>
          <p>Product ID: {result.productId}</p>
          <p>NFC URL: {result.nfcUrl}</p>
        </div>
      )}
    </div>
  );
}
