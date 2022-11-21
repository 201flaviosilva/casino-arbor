import React from "react";

import styles from "./ButtonIcon.module.css";

export default function ButtonIcon({ children, onClick = () => { }, ...otherProps }) {
	return (
		<button onClick={onClick} className={styles.buttonIcon} {...otherProps}>
			{children}
		</button>
	);
}
