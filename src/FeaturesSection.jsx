import React from "react";

import higherEducation from "./assets/Higher Education.jpeg";
import healthcare from "./assets/Healthcare.jpeg";
import offices from "./assets/Offices.jpeg";
import manufacturing from "./assets/Manufacturing.jpeg";

import { HardHat, Landmark } from "lucide-react";

const HandbagIcon = ({ size = 40, color = "#111" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 16 16"
  >
    <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6z"/>
  </svg>
);

const FeaturesSection = () => {
  const features = [
    { image: higherEducation, title: "Higher Education" },
    { image: healthcare, title: "Healthcare" },
    { image: offices, title: "Corporate Offices" },
    { image: manufacturing, title: "Manufacturing" },
    { icon: HandbagIcon, title: "Retail" },
    { icon: HardHat, title: "Hospitality" },
    { icon: Landmark, title: "Government" },
  ];

  return (
    <section
      style={{
        background: "#f5f5f5",
        padding: "40px 0",
      }}
    >
      <div className="container text-center">

        <h2
          style={{
            marginBottom: "30px",
            fontWeight: 600,
            fontSize: "22px",
          }}
        >
          Trusted by organisation across multiple industries
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "24px",
            justifyItems: "center",
            alignItems: "start",
          }}
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} style={{ textAlign: "center" }}>

                <div
                  style={{
                    width: "85px",
                    height: "85px",
                    borderRadius: "50%",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
                    border: "1px solid #eee",
                    margin: "0 auto 10px",
                    overflow: "hidden",
                  }}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "70%",
                        height: "70%",
                        objectFit: "contain", // 🔥 NO cropping EVER
                      }}
                    />
                  ) : (
                    <Icon size={36} color="#111" />
                  )}
                </div>

                <h6
                  style={{
                    fontSize: "13px",
                    margin: 0,
                    lineHeight: "1.3",
                  }}
                >
                  {item.title}
                </h6>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;









