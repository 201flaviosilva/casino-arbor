import React from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";
import ButtonIcon from "../ButtonIcon";
import styles from "./Modal.module.scss";

export default function Modal({ children, setIsOpen, title = "", asCloseButton = true }) {

	return ReactDOM.createPortal(
		<div className={styles.wrapper}>
			<div className={`${styles.container}`}>
				<div className={styles.header}>
					<h1>{title}</h1>
					{asCloseButton && <ButtonIcon onClick={() => setIsOpen(false)} className={styles.closeButton}><MdClose size={25} /></ButtonIcon>}
				</div>
				<div className={styles.body}>{children}</div>
			</div>
		</div>,
		document.getElementById("modal-root")
	);
}
