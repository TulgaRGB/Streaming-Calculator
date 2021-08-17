import React from "react";
import * as styles from './ToggleButton.module.css';

interface Props {
  onClick: () => void,
  isActive: boolean,
  label: string
}
export function ToggleButton({onClick, isActive, label}: Props): React.ReactElement {
  return (
      <button onClick={onClick} className={`${styles.button} ${isActive? styles.active : undefined}`}>{label}</button>
  )
}
