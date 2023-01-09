import React, { useEffect } from "react";
import Swal from "sweetalert2";

import styles from "./Error.module.scss";

export default function Error({ title = "Error!", text = "Something went wrong!" }) {

	useEffect(() => {
		Swal.fire({
			icon: "error",
			title,
			text,
		});
	}, [text, title]);

	return (
		<div className={styles.container}>
			<h1>{title}
			</h1>
			<h2>{text}</h2>
		</div>
	);
}
