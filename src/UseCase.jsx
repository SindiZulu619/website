import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { IoCheckmark } from "react-icons/io5"

export default function FeatureSections() {
  const features = [
    {
      icon: "wrench",
      title: "Maintenance Logging",
      color: "#0d6efd",
      bg: "#e7f1ff",
      desc: `Capture, store and manage every maintenance activity performed on your assets. Ensure reliability, extend asset life and reduce unexpected downtime.`,
      items: [
        "Log inspections, repairs and replacements",
        "Track service history and next due dates",
        "Technician identification and digital signatures",
        "Attach images, notes and documents",
        "Get alerts for upcoming maintenance",
      ],
      link: "Explore Maintenance Use Case",
    },
    {
      icon: "box-seam",
      title: "Inventory Tracking",
      color: "#198754",
      bg: "#eaf7ef",
      desc: `Track every item, tool and equipment in real time. Know what you have, where it is, and who has it.`,
      items: [
        "Real-time visibility of assets and items",
        "Fast check-in/check-out with NFC",
        "Location and status tracking",
        "Reduce loss, theft and misplacement",
        "Reports and analytics for better decisions",
      ],
      link: "Explore Inventory Use Case",
    },
  ]

  return (
    <div className="container py-5">

      <div className="row g-4 row-cols-1 row-cols-md-2">
        {features.map((f, i) => (
          <div className="col" key={i}>
            <div
              className="p-4 rounded-4 h-100"
              style={{
                background: f.bg,
                boxShadow: "0 12px 30px rgba(0,0,0,0.10)",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              {/* TITLE */}
              <div className="d-flex align-items-center mb-2">
                <div
                  className="me-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "12px",
                    background: "white",
                  }}
                >
                  <i
                    className={`bi bi-${f.icon}`}
                    style={{ fontSize: "28px", color: f.color }}
                  ></i>
                </div>

                <h5 className="fw-bold text-dark mb-0">
                  {f.title}
                </h5>
              </div>

              
              <p
                style={{
                  fontSize: "14px",
                  color: "#111",
                  fontWeight: 500,
                  marginBottom: "14px",
                  lineHeight: "1.5",
                }}
              >
                {f.desc}
              </p>

              
              <div className="mb-3">
                {f.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="d-flex align-items-start mb-2"
                    style={{ gap: "8px" }}
                  >
                  
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "white",
                        border: `2px solid ${f.color}`,
                        color: f.color,
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      <IoCheckmark size={14} />
                    </div>

                  
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#111",
                        fontWeight: 500,
                        lineHeight: "1.4",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#"
                style={{
                  color: f.color,
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-block",
                  marginTop: "4px",
                }}
              >
                {f.link} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


