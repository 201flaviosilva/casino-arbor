import React from "react";

import styles from "./ButtonIcon.module.css";

export default function ButtonIcon({ children, className, onClick = () => { }, ...otherProps }) {
	return (
		<button onClick={onClick} className={`${styles.buttonIcon} ${className}`} {...otherProps}>
			{children}
		</button>
	);
}
