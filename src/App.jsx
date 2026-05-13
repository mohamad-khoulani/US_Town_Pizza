import "./App.css";

const videos = [
  { id: 1, src: "video1.mp4" },
  { id: 2, src: "video2.mp4" },
  { id: 3, src: "video3.mp4" },
  { id: 4, src: "video4.mp4" },
  { id: 5, src: "video5.MP4" },
];

export default function App() {
  return (
    <>
      <header>
        <h1>US Town Pizza</h1>
        <h3 style={{ color: "brown" }}>📍 Mosede Strandvej 4, 2670 Greve</h3>
        <a href="tel:43697989" className="main-phone-btn">
          Ring nu: 43 69 79 89
        </a>
        <br />
        <a
          href="https://ustownpizzagreve.dk/?utm_source=GMBwebsite&utm_medium=organic&utm_campaign=Google%20My%20Business"
          className="order-link-btn"
        >
          Bestil Pizza Her
        </a>
      </header>

      <br />
      <br />

      <main className="content-wrapper">
        {videos.map((video) => (
          <div key={video.id} className="video-box">
            <video muted loop autoPlay playsInline preload="auto">
              <source src={video.src} type="video/mp4" />
            </video>
          </div>
        ))}
      </main>

      <br />
      <br />

      <footer>
        <p>© 2026 US Town Pizza</p>
      </footer>
    </>
  );
}
