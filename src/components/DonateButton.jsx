import React from "react";
import DonationModal from "./DonationModal";
import { useDonationModal } from "../hooks/useDonationModal";

export default function DonateButton({ children = "Donate Now", className = "" }) {
  const { open, openModal, closeModal } = useDonationModal();

  return (
    <>
      <button
        onClick={openModal}
        className={`px-4 py-1.5 bg-gradient-to-r from-tiger-400 to-flame-500 hover:from-tiger-500 hover:to-flame-600 text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-glow-gold transform hover:scale-105 ${className}`}
      >
        {children}
      </button>
      <DonationModal open={open} onOpenChange={closeModal} />
    </>
  );
}