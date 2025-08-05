import React from 'react';
import "../styles/Globals.css";

/**
 * NavBar displays a row of tabs.
 * 
 * Props:
 * - items: Array<{ key: string, label: string }>
 * - activeKey: string
 * - onSelect: (key: string) => void
 */
export default function NavBar({ items, activeKey, onSelect }) {
  return (
    <nav className="navbar">
      {items.map(({ key, label }) => (
        <button
          key={key}
          className={key === activeKey ? 'navBtn active' : 'navBtn'}
          onClick={() => onSelect(key)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
