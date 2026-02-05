import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "../styles/pdfModal.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import cv from "../documents/EduardoMoralesMeza-CV.pdf";


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


export default function PdfModal({ open, onClose }) {
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1.0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setVisible(true);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
  const handleEsc = (e) => {
    if (e.key === "Escape") handleClose();
  };

  if (open) window.addEventListener("keydown", handleEsc);
  return () => window.removeEventListener("keydown", handleEsc);
}, [open]);

  if (!open && !visible) return null;

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 200); // coincide con animación
  };

  return (
    <div
      className={`pdf-overlay ${visible ? "show" : "hide"}`}
      onClick={handleClose}
    >
      <div className="pdf-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="pdf-toolbar">
          <div className="left">
            <button onClick={() => setScale((s) => Math.max(s - 0.2, 0.6))}>
              −
            </button>
            <span>{Math.round(scale * 100)}%</span>
            <button onClick={() => setScale((s) => Math.min(s + 0.2, 2.5))}>
              +
            </button>
          </div>

          <div className="right">
            <a href={cv} download className="download-btn">
              Descargar
            </a>
            <button className="close-btn" onClick={handleClose}>
              ✕
            </button>
          </div>
        </div>

        {/* PDF */}
        <div className="pdf-content">
          <Document
            file={cv}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            {numPages &&
              Array.from(new Array(numPages), (_, i) => (
                <Page key={i} pageNumber={i + 1} scale={scale} />
              ))}
          </Document>
        </div>
      </div>
    </div>
  );
}
