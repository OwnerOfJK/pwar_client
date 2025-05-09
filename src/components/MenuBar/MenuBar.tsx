import { usePixelawProvider } from "@pixelaw/react";
import type React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./MenuBar.module.css";

import { DojoEngine } from "@pixelaw/core-dojo";

const MenuBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    pixelawCore: { engine },
    wallet,
    world,
  } = usePixelawProvider();
  // const { address } = useAccount()
  // const { connectAsync, connectors } = useConnect()
  const currentWallet = wallet?.id;

  if (!(engine instanceof DojoEngine)) return null;

  if (!engine.dojoSetup) return;

  // Determine if the settings page is shown based on the current path
  const showSettings = location.pathname === "/settings";
  const showWorldSelector = location.pathname === "/world";
  const showWalletSelector = location.pathname === "/wallet";

  const toggleSettings = () => {
    if (showSettings) {
      navigate("/");
    } else {
      navigate("/settings"); // Navigate to settings if not currently showing
    }
  };

  const toggleWalletSelector = () => {
    if (showWalletSelector) {
      navigate("/pwar");
    } else {
      navigate("/wallet");
    }
  };

  const toggleWorldSelector = () => {
    if (showWorldSelector) {
      navigate("/");
    } else {
      navigate("/world"); // Navigate to settings if not currently showing
    }
  };
  return (
    <div className={styles.inner}>
      <div className={styles.logoContainer}>
        <img src="/assets/logo/pixeLaw-logo.png" alt="logo" />
      </div>
      <div className={styles.rightSection}>
        <button
          type={"button"}
          className={styles.menuButton}
          onClick={toggleWalletSelector}
        >
          Wallet ({currentWallet})
        </button>
        <button
          type={"button"}
          className={styles.menuButton}
          onClick={toggleWorldSelector}
        >
          World ({world})
        </button>
        <button
          type={"button"}
          className={styles.menuButton}
          onClick={toggleSettings}
        >
          Settings
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
