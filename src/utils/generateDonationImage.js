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
  container.style.width = "450px";
  container.style.padding = "30px";
  container.style.background = "linear-gradient(135deg, #fff5eb 0%, #fef3c7 100%)";
  container.style.border = "2px solid #f97316";
  container.style.borderRadius = "16px";
  container.style.fontFamily = "'Inter', Arial, sans-serif";
  container.style.boxShadow = "0 10px 40px rgba(249, 115, 22, 0.3)";
  container.style.color = "#1a1a1a";

  container.innerHTML = `
    <div style="text-align: center; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 2px solid rgba(249, 115, 22, 0.2);">
      <h3 style="margin:0; font-size:24px; font-weight:bold; background: linear-gradient(135deg, #f59e0b, #f97316, #dc2626); -webkit-background-clip: text; background-clip: text; color: transparent;">Team Ashwatthama Tigers</h3>
      <p style="margin:8px 0 0; font-size:14px; color:#6b7280; font-weight:500;">Tiger Dance & Charity · Mangaluru</p>
    </div>

    <div style="text-align: center; margin: 24px 0; background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      <img src="${info.qrSrc}" alt="UPI QR" style="width:200px; height:200px; border:2px solid #f97316; border-radius:12px;" />
      <p style="margin:12px 0 0; font-weight:bold; font-size:13px; color:#374151; word-break: break-all;">UPI ID: ${info.upiId}</p>
    </div>

    <div style="font-size:13px; line-height:1.8; background: white; padding: 20px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
      <p style="margin:8px 0;"><strong style="color:#f97316;">Account Name:</strong><br><span style="font-size:12px; color:#4b5563;">${info.accountName}</span></p>
      <p style="margin:8px 0;"><strong style="color:#f97316;">A/c No:</strong> <span style="color:#4b5563;">${info.accountNo}</span></p>
      <p style="margin:8px 0;"><strong style="color:#f97316;">IFSC:</strong> <span style="color:#4b5563;">${info.ifsc}</span></p>
      <p style="margin:8px 0;"><strong style="color:#f97316;">Bank:</strong> <span style="color:#4b5563;">${info.bank}</span></p>
    </div>

    <p style="text-align:center; font-size:12px; color:#6b7280; margin-top:20px; font-style: italic;">
      All donations support Tiger Dance and charity work in Mangaluru
    </p>
  `;

  document.body.appendChild(container);

  try {
    const canvas = await html2canvas(container, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
      logging: false,
    });

    // Trigger download
    const link = document.createElement("a");
    link.download = "Team-Ashwatthama-Tigers-Donation-Details.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (err) {
    console.error("Failed to generate image:", err);
    alert("Sorry, couldn't generate image. Please try again.");
  } finally {
    document.body.removeChild(container);
  }
};