import React from 'react';

export function ComponentThumbnail({ type, color }) {
  switch (type) {
    case 'resistor':
      return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect x="8" y="13" width="16" height="6" rx="2" fill="#D4B896" stroke="#123047" strokeWidth="1.5"/>
          <line x1="2" y1="16" x2="8" y2="16" stroke="#123047" strokeWidth="1.5"/>
          <line x1="24" y1="16" x2="30" y2="16" stroke="#123047" strokeWidth="1.5"/>
          <rect x="11" y="13" width="2" height="6" fill="#CC0000"/>
          <rect x="15" y="13" width="2" height="6" fill="#CC0000"/>
          <rect x="19" y="13" width="2" height="6" fill="#663300"/>
        </svg>
      );
    case 'led':
      return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <path d="M10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16V20H10V16Z" fill={color || "#FF0000"} opacity="0.85"/>
          <line x1="13" y1="20" x2="13" y2="28" stroke="#123047" strokeWidth="1.5"/>
          <line x1="19" y1="20" x2="19" y2="26" stroke="#123047" strokeWidth="1.5"/>
        </svg>
      );
    case 'capacitor':
      return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect x="11" y="8" width="10" height="14" rx="2" fill="#123047"/>
          <line x1="13" y1="22" x2="13" y2="28" stroke="#123047" strokeWidth="1.5"/>
          <line x1="19" y1="22" x2="19" y2="28" stroke="#123047" strokeWidth="1.5"/>
        </svg>
      );
    case 'battery':
      return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect x="9" y="8" width="14" height="18" rx="2" fill="#123047"/>
          <rect x="9" y="8" width="14" height="5" rx="1" fill="#159C9C"/>
          <rect x="11" y="5" width="3" height="3" fill="#123047"/>
          <rect x="18" y="5" width="3" height="3" fill="#123047"/>
        </svg>
      );
    case 'transistor':
      return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <path d="M9 18C9 14.134 12.134 11 16 11C19.866 11 23 14.134 23 18H9Z" fill="#123047"/>
          <line x1="12" y1="18" x2="12" y2="26" stroke="#123047" strokeWidth="1.5"/>
          <line x1="16" y1="18" x2="16" y2="26" stroke="#123047" strokeWidth="1.5"/>
          <line x1="20" y1="18" x2="20" y2="26" stroke="#123047" strokeWidth="1.5"/>
        </svg>
      );
    case 'switch':
      return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect x="9" y="11" width="14" height="10" rx="2" fill="#587184"/>
          <circle cx="16" cy="16" r="3" fill="#123047"/>
          <line x1="10" y1="21" x2="10" y2="26" stroke="#123047" strokeWidth="1.5"/>
          <line x1="22" y1="21" x2="22" y2="26" stroke="#123047" strokeWidth="1.5"/>
        </svg>
      );
    case 'ic':
    case 'microcontroller':
      return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect x="8" y="7" width="16" height="18" rx="2" fill="#123047"/>
          <circle cx="16" cy="10" r="1.5" fill="#587184"/>
          <line x1="5" y1="11" x2="8" y2="11" stroke="#123047" strokeWidth="1.5"/>
          <line x1="5" y1="16" x2="8" y2="16" stroke="#123047" strokeWidth="1.5"/>
          <line x1="5" y1="21" x2="8" y2="21" stroke="#123047" strokeWidth="1.5"/>
          <line x1="24" y1="11" x2="27" y2="11" stroke="#123047" strokeWidth="1.5"/>
          <line x1="24" y1="16" x2="27" y2="16" stroke="#123047" strokeWidth="1.5"/>
          <line x1="24" y1="21" x2="27" y2="21" stroke="#123047" strokeWidth="1.5"/>
        </svg>
      );
    default:
      return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect x="8" y="8" width="16" height="16" rx="3" fill="#159C9C"/>
        </svg>
      );
  }
}
