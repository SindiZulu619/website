import React from "react";
import { FileText, TriangleAlert } from "lucide-react";

import contractor from "./assets/Contractors.jpeg";
import paperLogs from "./assets/Paper logs.jpeg";
import visibility from "./assets/Visibility.jpeg";

export default function HeroFeatures() {
  const features = [
    {
      image: paperLogs,
      text: "Paper logs are easy to lose, damage, or manipulate",
    },
    {
      image: visibility,
      text: "No real-time insight for facility managers",
    },
    {
      image: contractor,
      text: "External contractors work with limited oversight",
    },
    {
      icon: FileText,
      text: "Audit preparation is manual, slow, and stressful",
    },
    {
      icon: TriangleAlert,
      text: "Missed inspections increase safety risks and legal exposure",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f5f5f5" }} className="py-3">
      <div className="container px-4 text-center">

        <h2 className="mb-3 fw-semibold">
          Compliance is being done... but not verified.
        </h2>

        
        <div className="row g-2 row-cols-1 row-cols-md-3 row-cols-lg-5 justify-content-center">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="col text-center" key={index}>

                {/* ICON / IMAGE */}
                <div
                  className="d-flex align-items-center justify-content-center mx-auto mb-2 rounded-circle shadow-sm"
                  style={{
                    width: "68px",
                    height: "68px",
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    overflow: "hidden",
                  }}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt="feature"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <Icon size={24} color="red" />
                  )}
                </div>

                {/* TEXT */}
                <p
                  className="small text-muted mb-0"
                  style={{ lineHeight: "1.3" }}
                >
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}





