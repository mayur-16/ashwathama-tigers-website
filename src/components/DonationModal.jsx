import React from "react";
import { createPortal } from "react-dom";
import { X, Download, Copy, CheckCircle2 } from "lucide-react";
import { generateDonationImage } from "../utils/generateDonationImage";

const bankInfo = {
  upiId: "QR919741922546-1505@unionbankofindia",
  qrSrc: "/upi-qr.jpeg",
  accountName: "TEAM ASHWATHAMA EDURUPADAVU TIGERS SEVA BRIGADE R",
  accountNo: "079622010001505",
  ifsc: "UBIN0907961",
  bank: "Union Bank of India, Vamanjoor Branch",
};

export default function DonationModal({ open, onOpenChange }) {
  const [copied, setCopied] = React.useState(false);

  if (!open) return null;

  const handleClose = () => {
    if (onOpenChange) onOpenChange();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(bankInfo.upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const modal = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-coal-900/70 backdrop-blur-sm animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-gradient-to-br from-tiger-50 via-white to-flame-50 rounded-2xl shadow-2xl overflow-hidden animate-scale-in max-h-[90vh] overflow-y-auto border-4 border-tiger-200">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white hover:bg-tiger-100 shadow-lg transition-colors border-2 border-tiger-200"
          aria-label="Close"
        >
          <X size={20} className="text-coal-800" />
        </button>

        {/* Content */}
        <div className="p-6 pt-12 text-center">
          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-tiger-500 via-flame-600 to-flame-500 mb-2">
            Support Our Mission
          </h3>
          <p className="text-sm text-coal-600 mb-6">
            Help us preserve tiger dance culture & support our community
          </p>

          {/* QR Code */}
          <div className="mb-6">
            <div className="inline-block p-4 bg-white rounded-xl shadow-lg border-4 border-gradient-to-br from-tiger-300 to-flame-300">
              <img
                src={bankInfo.qrSrc}
                alt="UPI QR Code for Team Ashwatthama Tigers Donation"
                className="w-48 h-48 sm:w-56 sm:h-56"
              />
            </div>
            
            {/* UPI ID */}
            <div className="mt-4 flex items-center justify-center gap-2 bg-white rounded-lg p-3 max-w-sm mx-auto shadow-md border-2 border-tiger-200">
              <code className="text-xs sm:text-sm font-mono text-coal-700 break-all font-semibold">
                {bankInfo.upiId}
              </code>
              <button
                onClick={handleCopy}
                className="flex-shrink-0 p-2 hover:bg-tiger-100 rounded-lg transition-colors"
                aria-label="Copy UPI ID"
              >
                {copied ? (
                  <CheckCircle2 size={18} className="text-green-600" />
                ) : (
                  <Copy size={18} className="text-flame-600" />
                )}
              </button>
            </div>
          </div>

          {/* Bank Details */}
          <div className="bg-white rounded-xl p-5 text-left space-y-2 mb-6 shadow-md border-2 border-tiger-200">
            <div className="text-sm">
              <span className="font-bold text-flame-600">Account Name:</span>
              <p className="text-coal-700 mt-1 font-medium">{bankInfo.accountName}</p>
            </div>
            <div className="text-sm">
              <span className="font-bold text-flame-600">A/c No:</span>
              <p className="text-coal-700 mt-1 font-mono font-semibold">{bankInfo.accountNo}</p>
            </div>
            <div className="text-sm">
              <span className="font-bold text-flame-600">IFSC:</span>
              <p className="text-coal-700 mt-1 font-mono font-semibold">{bankInfo.ifsc}</p>
            </div>
            <div className="text-sm">
              <span className="font-bold text-flame-600">Bank:</span>
              <p className="text-coal-700 mt-1">{bankInfo.bank}</p>
            </div>
          </div>

          {/* Download Button */}
          <button
            onClick={() => generateDonationImage(bankInfo)}
            className="w-full bg-gradient-to-r from-tiger-400 to-flame-500 hover:from-tiger-500 hover:to-flame-600 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-glow-gold transform hover:scale-105"
          >
            <Download size={20} />
            Download QR & Details
          </button>

          {/* Info Text */}
          <p className="mt-6 text-sm text-coal-600 italic">
            All donations support Tiger Dance performances and charity work in Mangalore
          </p>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}