import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1739531944447-2c68bc64d728?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1739531944447-2c68bc64d728?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1739531944447-2c68bc64d728?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1739531944447-2c68bc64d728?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1739531944447-2c68bc64d728?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1739531944447-2c68bc64d728?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function ExpandableImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery file ${index}`}
            className="gallery-image"
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="overlay" onClick={() => setSelectedImage(null)}>
          <div className="overlay-content">
            <button
              className="close-button"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Expanded"
              className="expanded-image"
            />
          </div>
        </div>
      )}

      <style>{`
        .gallery-container {
          padding: 20px;
          max-width: 900px;
          margin: auto;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 10px;
        }
        .gallery-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 10px;
          cursor: pointer;
          transition: transform 0.3s ease-in-out;
        }
        .gallery-image:hover {
          transform: scale(1.05);
        }
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .overlay-content {
          position: relative;
          max-width: 90vw;
          max-height: 80vh;
        }
        .expanded-image {
          width: auto;
          max-width: 50vw;
          max-height: 80vh;
          border-radius: 10px;
        }
        .close-button {
          position: absolute;
          top: -10px;
          right: 5px;
          background: white;
          border: none;
          padding: 10px;
          border-radius: 40%;
          cursor: pointer;
          color:black;
          font-size: 18px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}
