import React from "react";
import { CheckCircle } from "lucide-react";
import Dashboard from "./assets/Dashboard.jpeg";

const features = [
  "Proof that inspections actually happened",
  "Timestamped, location-based logs",
  "Digital audit trails (no paperwork)",
  "Instant visibility across all facilities",
];

export default function HeroSection() {
  return (
    <section
      className="container"
      style={{
        paddingTop: "12px",
        paddingBottom: "18px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <div style={{ flex: 1 }}>

          <h2
            className="fw-bold mb-3"
            style={{ lineHeight: "1.2" }}
          >
            A simple, tamper-resistant<br />
            compliance logging system
          </h2>

          <p
            className="text-muted mb-3"
            style={{
              fontSize: "15px",
              lineHeight: "1.4",
            }}
          >
            We combine NFC-enabled asset tags + a real-time dashboard to give you:
          </p>

          {/* FEATURES */}
          <ul className="list-unstyled m-0">
            {features.map((item, i) => (
              <li
                key={i}
                className="d-flex gap-2 mb-1 align-items-start"
              >
                <CheckCircle
                  size={20}
                  style={{
                    color: "#16a34a", // green tick
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                />

                <span style={{ fontSize: "15px" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>

        </div>

        <div style={{ flex: 1 }}>

          <img
            src={Dashboard}
            alt="Dashboard"
            style={{
              width: "800px",
              height: "380px",
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              display: "block",
            }}
          />

        </div>
      </div>
    </section>
  );
}




