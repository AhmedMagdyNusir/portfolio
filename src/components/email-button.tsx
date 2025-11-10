"use client";

import { useState } from "react";
import outlineIcons from "@/components/icons/outline";
import solidIcons from "@/components/icons/solid";
import { author } from "@/lib/constants";

const email = author.email;

export default function EmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!copied) {
      try {
        // Try using the clipboard API
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(email);
        } else {
          // Fallback for unsupported environments
          const textarea = document.createElement("textarea");
          textarea.value = email;
          textarea.style.position = "absolute";
          textarea.style.left = "-9999px";
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 5000);
      } catch (err) {
        console.error("Failed to copy the email:", err);
      }
    }
  };

  return (
    <button onClick={handleCopy} className="basic-btn text-sm">
      {copied ? <solidIcons.Check /> : <outlineIcons.Copy />}
      {copied ? "Email copied!" : "Copy my email address"}
    </button>
  );
}
