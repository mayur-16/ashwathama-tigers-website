// src/components/DonationModal.jsx
import React from "react";
import { createPortal } from "react-dom";
import { X, Download } from "lucide-react";
import { generateDonationImage } from "../utils/generateDonationImage";
import "./DonationModal.css";

const bankInfo = {
  upiId: "QR919741922546-1505@unionbankofindia",
  qrSrc: "/upi-qr.jpeg",
  accountName: "TEAM ASHWATHAMA EDURUPADAVU TIGERS SEVA BRIGADE R",
  accountNo: "079622010001505",
  ifsc: "UBIN0907961",
  bank: "Union Bank of India, Vamanjoor Branch",
};

export default function DonationModal({ open, onOpenChange }) {
  if (!open) return null;

  const handleClose = () => {
    if (onOpenChange) onOpenChange();
  };

  const modal = (
    <div className="modal-overlay">
      {/* Backdrop */}
      <div
        className="modal-backdrop"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="modal-card">
        <button
          onClick={handleClose}
          className="modal-close-btn"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="modal-content">
          <h3 className="modal-title">
            Donate to Team Ashwatthama Tigers
          </h3>

          {/* QR Code */}
          <div className="modal-qr-section">
            <img
              src={bankInfo.qrSrc}
              alt="UPI QR Code"
              className="modal-qr-image"
            />
            <div className="modal-upi-container">
              <p className="modal-upi-id">
                {bankInfo.upiId}
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(bankInfo.upiId);
                  alert('UPI ID copied!');
                }}
                className="modal-copy-btn"
                aria-label="Copy UPI ID"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Bank Details */}
          <div className="modal-bank-details">
            <p><strong>Account Name:</strong> {bankInfo.accountName}</p>
            <p><strong>A/c No:</strong> {bankInfo.accountNo}</p>
            <p><strong>IFSC:</strong> {bankInfo.ifsc}</p>
            <p><strong>Bank:</strong> {bankInfo.bank}</p>
          </div>

            <button
              onClick={() => generateDonationImage(bankInfo)}
              className="modal-download-btn"
            >
              <Download size={24} />
              Download QR & Details
            </button>
          
           <p className="modal-info-text">
            All donations support Tigerdance and charity work in Mangaluru
          </p>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}