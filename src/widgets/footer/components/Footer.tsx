import React from "react";
import styles from "../styles/footer.module.scss";

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className="container">
				<div className={styles.footer_inner}>© powered by darksecrets</div>
			</div>
		</div>
	);
};
