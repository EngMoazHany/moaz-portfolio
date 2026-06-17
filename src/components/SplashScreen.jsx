import { useEffect, useState } from "react";
import styles from "./SplashScreen.module.css";
import logo from "../assets/logo.png";

const particles = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  left: `${(index * 19) % 100}%`,
  top: `${(index * 31) % 100}%`,
  delay: `${(index % 10) * 0.18}s`,
  size: `${3 + (index % 4)}px`,
}));

export default function SplashScreen() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 4300);

    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div className={styles.splash}>
      <div className={styles.grid}></div>

      <div className={styles.glowOne}></div>
      <div className={styles.glowTwo}></div>
      <div className={styles.glowThree}></div>

      <div className={styles.particles}>
        {particles.map((particle) => (
          <span
            key={particle.id}
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
            }}
          ></span>
        ))}
      </div>

      <div className={styles.binaryText}>
        01001101 01101111 01100001 01111010 00100000 01000001 01001001
      </div>

      <div className={styles.logoBox}>
        <div className={`${styles.orbit} ${styles.orbitOne}`}></div>
        <div className={`${styles.orbit} ${styles.orbitTwo}`}></div>
        <div className={`${styles.orbit} ${styles.orbitThree}`}></div>

        <img src={logo} alt="Moaz Hany Logo" className={styles.splashLogo} />

        <div className={styles.aiBadges}>
          <span>AI</span>
          <span>ML</span>
          <span>DATA</span>
        </div>
      </div>

      <div className={styles.loadingArea}>
        <p>Initializing AI Portfolio</p>
        <div className={styles.loadingTrack}>
          <span></span>
        </div>
      </div>
    </div>
  );
}