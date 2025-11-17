// src/utils/generateDonationImage.js
import html2canvas from "html2canvas";

/**
 * Creates a hidden DOM node with donation info + QR,
 * renders it to canvas, and triggers PNG download.
 */
export const generateDonationImage = async (info) => {
  // Create a temporary div (off-screen)
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.left = "-9999px";
  container.style.top = "0";
   container.style.width = "400px";
  container.style.padding = "20px";
  container.style.background = "#fff";
  container.style.border = "1px solid #ddd";
  container.style.borderRadius = "12px";
  container.style.fontFamily = "Arial, sans-serif";
  container.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
  container.style.color = "#1a1a1a";

  container.innerHTML = `
    <div style="text-align: center; margin-bottom: 16px;">
      <h3 style="margin:0; font-size:18px; color:#d4380d;">Team Ashwaatthama Tigers</h3>
      <p style="margin:4px 0 0; font-size:12px; color:#666;">Tigerdance & Charity, Mangaluru</p>
    </div>

    <div style="text-align: center; margin: 16px 0;">
      <img src="${info.qrSrc}" alt="UPI QR" style="width:180px; height:180px; border:1px solid #ccc; border-radius:8px;" />
      <p style="margin:8px 0 0; font-weight:bold; font-size:14px;">UPI ID: ${info.upiId}</p>
    </div>

    <div style="font-size:13px; line-height:1.6; border-top:1px dashed #ccc; padding-top:12px;">
      <p style="margin:4px 0;"><strong>Account Name:</strong><br><span style="font-size:12px;">${info.accountName}</span></p>
      <p style="margin:4px 0;"><strong>A/c No:</strong> ${info.accountNo}</p>
      <p style="margin:4px 0;"><strong>IFSC:</strong> ${info.ifsc}</p>
      <p style="margin:4px 0;"><strong>Bank:</strong> ${info.bank}</p>
    </div>

    <p style="text-align:center; font-size:11px; color:#888; margin-top:16px;">
      All donations support Tigerdance and charity work in Mangaluru.
    </p>
  `;

  document.body.appendChild(container);

  try {
    const canvas = await html2canvas(container, {
      scale: 2, // Higher quality
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    // Trigger download
    const link = document.createElement("a");
    link.download = "Team-Ashwaatthama-Tigers-Donation-Details.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (err) {
    console.error("Failed to generate image:", err);
    alert("Sorry, couldn't generate image. Try again.");
  } finally {
    document.body.removeChild(container);
  }
};