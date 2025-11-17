// src/hooks/useDonationModal.js
import { useState } from "react";

export const useDonationModal = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return { open, openModal, closeModal };
};