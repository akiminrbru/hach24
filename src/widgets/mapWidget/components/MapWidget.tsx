"use client";
import React, { useState } from "react";
import styles from "../styles/mapWidget.module.scss";
import { useQuery } from "@tanstack/react-query";
import { YMaps, Map, Placemark, Polyline } from "@pbe/react-yandex-maps";
import Cookies from "js-cookie";
import { Flex } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

interface IGeo {
	id: number;
	region: string;
	store_address: string;
	store_name: string;
	store_type: string;
	coordinates?: {
		id: number;
		lat: number;
		lon: number;
		storeId: number;
	};
}

export const MapWidget = () => {
	const [geo, setGeo] = useState<IGeo[] | null>(null);

	const { isPending, error, data } = useQuery({
		queryKey: ["geo"],
		queryFn: () =>
			fetch("https://dev.darksecrets.ru/api/storage/all?region=Ростов", {
				headers: {
					Authorization: `${Cookies.get("token")}`,
				},
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					setGeo(data.items);
					return data;
				}),
	});
	return (
		<Flex vertical>
			<Title level={3}>Ростов-на-дону</Title>
			<div className={styles.mapWidget}>
				<YMaps query={{ apikey: "49c9fa2e-a9b5-45ad-ad74-fa17a20c3315" }}>
					<Map width={"100%"} height={500} defaultState={{ center: [47.15, 39.73], zoom: 10 }}>
						{geo?.map((item) => (
							<Placemark key={item?.id} properties={{ iconCaption: item?.store_name }} options={{ iconColor: item?.store_type == "STORE" ? "blue" : "red", preset: item?.store_type == "STORE" ? "islands#blueFactoryCircleIcon" : "islands#blueShoppingCircleIcon" }} geometry={item?.coordinates && [item?.coordinates?.lat, item?.coordinates?.lon]} />
						))}
					</Map>
				</YMaps>
			</div>
		</Flex>
	);
};
