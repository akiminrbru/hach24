"use client";
import React from "react";
import { Flex, Spin } from "antd";
import styles from "../styles/LoadingWrapper.module.scss";

export const LoadingWrapper = () => {
	return (
		<div className={styles.loading}>
			<Flex align="center" gap="middle">
				<Spin size="large" />
			</Flex>
		</div>
	);
};
