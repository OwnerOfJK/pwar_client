import { useState, useEffect } from "react";
import { usePixelawProvider } from "@pixelaw/react";

export const StatsDashboard = () => {
  const { pixelawCore } = usePixelawProvider();
  const [isOpen, setIsOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Track clicks
  const handleCellClick = () => {
    setClickCount(prev => prev + 1);
  };

  // Set up click listener
  useEffect(() => {
    pixelawCore.events.on("cellClicked", handleCellClick);
    return () => {
      pixelawCore.events.off("cellClicked", handleCellClick);
    };
  }, [pixelawCore]);

  return (
    <div   className={`fixed top-[60px] left-[20px] z-10 bg-cyan-500 p-[12px] cursor-pointer transition-all duration-30 ease-in-out ${
        isOpen ? 'rounded-[6px]' : 'rounded-full'}`}
      onClick={isOpen ? undefined : () => setIsOpen(true)}>
      {isOpen ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0 }}>Player Stats</h3>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                color: 'white'
              }}
            >
              ×
            </button>
          </div>

          <div style={{ 
            backgroundColor: '#475569', 
            padding: '16px', 
            borderRadius: '6px',
            minWidth: '300px'
          }}>
            <h4 style={{ margin: '0 0 8px 0' }}>Interaction Stats</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Total Clicks:</span>
              <span style={{ fontFamily: 'monospace' }}>{clickCount}</span>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          ≡
        </div>
      )}
    </div>
  );
};
