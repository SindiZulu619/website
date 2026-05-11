import { useState, useEffect, useRef } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import * as bootstrap from "bootstrap"

import Hero1 from "./assets/Hero1.jpeg"
import Hero2 from "./assets/Hero2.jpeg"
import Hero3 from "./assets/Hero3.jpeg"
import Hero4 from "./assets/Hero4.jpeg"

export default function HeroCarousel() {
  const carouselRef = useRef(null)
  const carouselInstance = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const slides = [
    { image: Hero1 },
    { image: Hero2 },
    { image: Hero3 },
    { image: Hero4 },
  ]

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return

    carouselInstance.current = new bootstrap.Carousel(el, {
      interval: 4000,
      wrap: true,
      pause: false,
    })

    carouselInstance.current.cycle()

    const handleSlide = (e) => {
      setActiveIndex(e.to)
    }

    el.addEventListener("slid.bs.carousel", handleSlide)

    return () => {
      el.removeEventListener("slid.bs.carousel", handleSlide)
      carouselInstance.current?.dispose()
    }
  }, [])

  return (
    <div
      ref={carouselRef}
      id="heroCarousel"
      className="carousel slide carousel-fade"
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "8%",
          transform: "translateY(-50%)",
          color: "white",
          maxWidth: "650px",
          zIndex: 10,
        }}
      >
        <h1 className="fw-bold" style={{ fontSize: "3.5rem", lineHeight: "1.2" }}>
          Control Asset Movement.
          <br />
          Prevent Loss.
        </h1>

        <h1
          className="fw-bold text-primary"
          style={{ fontSize: "2rem", marginTop: "10px" }}
        >
          Strengthen Accountability.
        </h1>

        <h3
          style={{
            fontSize: "1.1rem",
            marginTop: "14px",
            color: "#e5e7eb",
            lineHeight: "1.6",
          }}
        >
          Monitor assets at critical checkpoints, detect unauthorized movement,
          and maintain full visibility across your operations.
        </h3>

        <div style={{ marginTop: "24px", display: "flex", gap: "12px" }}>
          <button className="btn btn-primary px-4 py-2">
            View Use Cases →
          </button>

          <button className="btn btn-outline-light px-4 py-2">
            Request Demo
          </button>
        </div>
      </div>

      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div
              style={{
                height: "100vh", 

                backgroundImage: `url(${slide.image})`,

                
                backgroundSize: "cover",

                backgroundPosition: "center right", 

                backgroundRepeat: "no-repeat",

                width: "100%",
              }}
            />
          </div>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "6px",
          zIndex: 5,
        }}
      >
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => carouselInstance.current?.to(i)}
            style={{
              width: i === activeIndex ? "30px" : "20px",
              height: "4px",
              backgroundColor: i === activeIndex ? "#fff" : "rgba(255,255,255,0.4)",
              borderRadius: "2px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          />
        ))}
      </div>
    </div>
  )
}
