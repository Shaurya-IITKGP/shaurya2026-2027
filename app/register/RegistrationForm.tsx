"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./RegistrationForm.module.css";

interface RegistrationFormProps {
  onFocusChange: (field: string | null) => void;
  onSubmitStart: () => void;
}

export default function RegistrationForm({ onFocusChange, onSubmitStart }: RegistrationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    onSubmitStart();
    setTimeout(() => setIsSuccess(true), 2000);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
      className={styles.wrapper}
    >
      <div className={styles.card}>
        {/* Wood-grain texture overlay */}
        <div
          className={styles.woodGrain}
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.05 0.9\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"/%3E%3C/svg%3E')",
          }}
        />

        {/* Corner ornaments */}
        <div className={`${styles.corner} ${styles.cornerTL}`} />
        <div className={`${styles.corner} ${styles.cornerTR}`} />
        <div className={`${styles.corner} ${styles.cornerBL}`} />
        <div className={`${styles.corner} ${styles.cornerBR}`} />

        {/* Header */}
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Expedition Manifest</h3>
        </div>

        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className={styles.form}
            >
              {/* Full Name */}
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="Enter your full name"
                  onFocus={() => onFocusChange("name")}
                  onBlur={() => onFocusChange(null)}
                  disabled={isSubmitting}
                  className={styles.input}
                />
              </div>

              {/* College */}
              <div className={styles.fieldGroup}>
                <label className={styles.label}>College / Institute</label>
                <input
                  required
                  type="text"
                  placeholder="Enter your institution"
                  onFocus={() => onFocusChange("college")}
                  onBlur={() => onFocusChange(null)}
                  disabled={isSubmitting}
                  className={styles.input}
                />
              </div>

              {/* Phone */}
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Phone Number</label>
                <input
                  required
                  type="tel"
                  pattern="[6-9][0-9]{9}"
                  maxLength={10}
                  minLength={10}
                  placeholder="9876543210"
                  onFocus={() => onFocusChange("phone")}
                  onBlur={() => onFocusChange(null)}
                  disabled={isSubmitting}
                  className={styles.input}
                />
              </div>

              {/* Email */}
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  onFocus={() => onFocusChange("email")}
                  onBlur={() => onFocusChange(null)}
                  disabled={isSubmitting}
                  className={styles.input}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className={styles.submitBtn}
              >
                <span className={styles.btnContent}>
                  <svg
                    className={`${styles.btnIcon} ${isSubmitting ? styles.btnIconSpin : styles.btnIconHover}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                  {isSubmitting ? "PROCESSING..." : "BOARD THE EXPEDITION"}
                  {!isSubmitting && <span className={styles.btnArrow}>→</span>}
                </span>
                <div className={styles.btnShimmer} />
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className={styles.successState}
            >
              {/* Animated tick */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                className={styles.tickWrap}
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className={styles.tickGlow}
                />
                <svg className={styles.tickSvg} viewBox="0 0 100 100" fill="none">
                  <motion.circle
                    cx="50" cy="50" r="46"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 0.4 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                  <motion.circle
                    cx="50" cy="50" r="40"
                    stroke="currentColor"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                  />
                  <motion.path
                    d="M 32,52 L 45,65 L 70,35"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                  />
                </svg>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                className={styles.successText}
              >
                <h3 className={styles.successTitle}>Crew Roster Updated</h3>
                <div className={styles.successRule} />
                <p className={styles.successCopy}>Welcome aboard the Shaurya expedition.</p>

                <button onClick={resetForm} className={styles.resetBtn}>
                  <svg className={styles.resetIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                  </svg>
                  Register Another Member
                  <span className={styles.resetUnderline} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
