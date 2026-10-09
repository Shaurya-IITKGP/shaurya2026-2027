import type { CSSProperties } from "react";
import styles from "./EmberField.module.css";

const EMBER_COUNT = 35;

function seededUnit(index: number, salt: number) {
  const value = Math.sin((index + 1) * (salt + 11) * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

const embers = Array.from({ length: EMBER_COUNT }, (_, index) => ({
  id: index,
  left: `${seededUnit(index, 1) * 100}%`,
  size: seededUnit(index, 2) * 5 + 2,
  duration: seededUnit(index, 3) * 7 + 5,
  delay: -(seededUnit(index, 4) * 8),
  drift: (seededUnit(index, 5) - 0.5) * 120,
}));

type EmberFieldProps = {
  viewport?: boolean;
};

export default function EmberField({ viewport = false }: EmberFieldProps) {
  return (
    <div
      className={`${styles.field} ${viewport ? styles.viewport : ""}`}
      aria-hidden="true"
    >
      {embers.map((ember) => (
        <span
          key={ember.id}
          className={styles.ember}
          style={
            {
              left: ember.left,
              width: `${ember.size}px`,
              height: `${ember.size}px`,
              animationDuration: `${ember.duration}s`,
              animationDelay: `${ember.delay}s`,
              "--drift": `${ember.drift}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
