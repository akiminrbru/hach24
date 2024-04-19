"use client";

import React, { ReactNode, useState } from "react";
import styles from "../styles/panel.module.scss";
import "../styles/Restyle.scss";
import { PanelRoutes } from "./PanelRoutes";
import { PanelProducts } from "./PanelProducts";
import { Tabs } from "antd";
import { PanelMap } from "./PanelMap";

type TabPosition = "left" | "right" | "top" | "bottom";

type TabData = {
	key: number;
	label: string;
	children: ReactNode;
};

const TabsArray: any = [
	{ key: 1, label: "Маршруты", children: <PanelRoutes /> },
	{ key: 2, label: "Товары", children: <PanelProducts /> },
	{ key: 3, label: "Карта", children: <PanelMap /> },
];

export const Panel: React.FC = () => {
	const [tabPosition, setTabPosition] = useState<TabPosition>("left");

	return (
		<div className={styles.panel}>
			<Tabs
				size="large"
				tabPosition={tabPosition}
				items={TabsArray.map((item: TabData) => {
					return {
						key: item?.key,
						label: item?.label,
						children: item?.children,
					};
				})}
			/>
			{/* <PanelRoutes />
			<PanelProducts /> */}
		</div>
	);
};
