import React, { useState } from "react";
import styles from "../styles/panel.module.scss";
import { IRoutes } from "../types/panel";
import { useQuery } from "@tanstack/react-query";

export const PanelRoutes = () => {
	const [routes, setRoutes] = useState<IRoutes | null>(null);

	const { isPending, error, data } = useQuery({
		queryKey: ["routes"],
		queryFn: () =>
			fetch("http://localhost:3000/data/routes.json")
				.then((res) => res.json())
				.then((data) => {
					// console.log(data);
					// setRoutes(data);
					return data;
				}),
	});

	return <div className={styles.panel_routes}></div>;
};
