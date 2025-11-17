// src/components/DonateButton.jsx
import React from "react";
import DonationModal from "./DonationModal";
import { useDonationModal } from "../hooks/useDonationModal";

export default function DonateButton({ children = "Donate Now", className = "" }) {
  const { open, openModal, closeModal } = useDonationModal();

  return (
    <>
      <button onClick={openModal} className={`donate-button ${className}`}>
        {children}
      </button>
      <DonationModal open={open} onOpenChange={closeModal} />
    </>
  );
}