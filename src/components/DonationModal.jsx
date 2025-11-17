// src/components/DonationModal.jsx
import React from "react";
import { createPortal } from "react-dom";   // ← THIS IS THE KEY
import { X, Download } from "lucide-react";
import { generateDonationImage } from "../utils/generateDonationImage";

const bankInfo = {
  upiId: "QR919741922546-1505@unionbankofindia",
  qrSrc: "/upi-qr.jpeg", // ← make sure this file exists in public/
  accountName: "TEAM ASHWATHAMA EDURUPADAVU TIGERS SEVA BRIGADE R",
  accountNo: "079622010001505",
  ifsc: "UBIN0907961",
  bank: "Union Bank of India, Vamanjoor Branch",
};

export default function DonationModal({ open, onClose }) {
  if (!open) return null;

  const modal = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60">
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-gray-200 transition"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6 pt-12 text-center">
          <h3 className="text-2xl font-bold text-orange-600 mb-6">
            Donate to Team Ashwatthama Tigers
          </h3>

          {/* QR Code */}
          <div className="mb-6">
            <img
              src={bankInfo.qrSrc}
              alt="UPI QR Code"
              className="w-64 h-64 mx-auto border-4 border-gray-200 rounded-xl"
            />
            <p className="mt-4 font-mono text-lg bg-gray-100 px-4 py-2 rounded-lg inline-block">
              {bankInfo.upiId}
            </p>
          </div>

          {/* Bank Details */}
          <div className="bg-gray-50 rounded-xl p-5 text-left text-sm space-y-2">
            <p><strong>Account Name:</strong> {bankInfo.accountName}</p>
            <p><strong>A/c No:</strong> {bankInfo.accountNo}</p>
            <p><strong>IFSC:</strong> {bankInfo.ifsc}</p>
            <p><strong>Bank:</strong> {bankInfo.bank}</p>
          </div>

          <p className="mt-5 text-gray-600 text-sm">
            All donations support Tigerdance and charity work in Mangaluru
          </p>

          {/* Download Button */}
          <button
            onClick={() => generateDonationImage(bankInfo)}
            className="mt-6 w-full bg-orange-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transition flex items-center justify-center gap-3"
          >
            <Download className="w-6 h-6" />
            Download QR & Details (PNG)
          </button>
        </div>
      </div>
    </div>
  );

  // This line makes it appear on top of everything, even footer
  return createPortal(modal, document.body);
}