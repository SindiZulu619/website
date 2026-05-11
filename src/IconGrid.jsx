import React from "react";
import "./App.css";

import fireExtinguisher from "./assets/Fire extinguishers.jpeg";
import nfc from "./assets/nfc.jpeg";
import monitor from "./assets/monitor.jpeg";

export default function IconGrid() {
  const features = [
    {
      image: fireExtinguisher,
      title: "Tag your assets",
      text: "Fire extinguishers, lifts, server rooms, equipment and more.",
    },
    {
      image: nfc,
      title: "Tap to log",
      text: "Inspectors tap with a phone — no forms, no friction.",
    },
    {
      image: monitor,
      title: "Monitor in real time",
      text: "View logs, compliance status, and reports instantly.",
    },
  ];

  return (
    <section
      className="how-it-works"
      style={{
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <h2 style={{ marginBottom: "14px" }}>How It Works</h2>

      <div className="steps">

        {features.map((item, index) => (
          <React.Fragment key={index}>

            <div
              className="step d-flex align-items-start"
              style={{ gap: "14px" }}
            >

              <div
                className="icon-circle"
                style={{
                  width: "56px",
                  height: "56px",
                  minWidth: "56px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  flexShrink: 0,
                  background: "#f3f4f6",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain", 
                    padding: "6px",
                    display: "block",
                  }}
                />
              </div>

              <div>

                
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    background: "#2563eb",
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "4px",
                  }}
                >
                  {index + 1}
                </div>

                <h3 style={{ margin: "0 0 4px 0", fontSize: "16px" }}>
                  {item.title}
                </h3>

                <p style={{ margin: 0, fontSize: "14px", color: "#6b7280" }}>
                  {item.text}
                </p>

              </div>

            </div>

            {index !== features.length - 1 && (
              <div
                className="line"
                style={{
                  height: "1px",
                  background: "#e5e7eb",
                  margin: "10px 0",
                }}
              />
            )}

          </React.Fragment>
        ))}

      </div>
    </section>
  );
}






