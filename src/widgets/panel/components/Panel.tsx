"use client";

import React, { useState } from "react";
import styles from "../styles/panel.module.scss";
import { YMaps, Map, Placemark, Polyline } from "@pbe/react-yandex-maps";
import { useQuery } from "@tanstack/react-query";
import { IGeo } from "../types/panel";
import { PanelRoutes } from "./PanelRoutes";

export const Panel: React.FC = () => {
	const [geo, setGeo] = useState<IGeo | null>(null);

	const { isPending, error, data } = useQuery({
		queryKey: ["geo"],
		queryFn: () =>
			fetch("http://localhost:3000/data/geo.json")
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					setGeo(data);
					return data;
				}),
	});

	return (
		<div className={styles.panel}>
			<PanelRoutes />
			<div className={styles.panel_map}>
				<YMaps query={{ apikey: "49c9fa2e-a9b5-45ad-ad74-fa17a20c3315" }}>
					<Map width={600} height={500} defaultState={{ center: [47.15, 39.73], zoom: 10 }}>
						<Placemark geometry={[55.684758, 37.738521]} />

						{geo?.features?.map((item) => (
							<Placemark properties={{ iconCaption: item?.properties?.iconCaption }} options={{ iconColor: item?.properties["marker-color"], preset: "islands#blueFactoryCircleIcon" }} geometry={[item?.geometry?.coordinates[1], item?.geometry?.coordinates[0]]} />
						))}
						<Polyline
							geometry={[
								[55.684758, 37.738521],
								[55.884758, 37.938521],
							]}
							options={{
								strokeColor: "#000",
								strokeWidth: 4,
								strokeOpacity: 0.5,
							}}
						/>
					</Map>
				</YMaps>
			</div>
		</div>
	);
};
