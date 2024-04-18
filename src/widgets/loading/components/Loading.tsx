"use client";
import React from "react";
import { Flex, Spin } from "antd";
import styles from "../styles/Loading.module.scss";

export const Loading = () => {
	return (
		<div className={styles.loading}>
			<Flex align="center" gap="middle">
				<Spin size="large" />
			</Flex>
		</div>
	);
};
