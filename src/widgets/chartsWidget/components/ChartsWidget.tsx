"use client";
import React from "react";
import { ResponsiveBar } from "@nivo/bar";

export const ChartsWidget = () => {
	const data = [
		{
			country: "AD",
			Помидоры: 124,
			"hot dogColor": "hsl(144, 70%, 50%)",
			Рис: 48,
			burgerColor: "hsl(197, 70%, 50%)",
			Свинина: 22,
			sandwichColor: "hsl(100, 70%, 50%)",
			Огурцы: 146,
			kebabColor: "hsl(293, 70%, 50%)",
			Картошка: 70,
			friesColor: "hsl(290, 70%, 50%)",
			Хлеб: 5,
			donutColor: "hsl(40, 70%, 50%)",
		},
	];

	return (
		<ResponsiveBar
			data={data}
			keys={["Помидоры", "Рис", "Свинина", "Огурцы", "Картошка", "Хлеб"]}
			indexBy="country"
			margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
			padding={0.3}
			groupMode="grouped"
			valueScale={{ type: "linear" }}
			indexScale={{ type: "band", round: true }}
			colors={{ scheme: "nivo" }}
			defs={[
				{
					id: "dots",
					type: "patternDots",
					background: "inherit",
					color: "#38bcb2",
					size: 4,
					padding: 1,
					stagger: true,
				},
				{
					id: "lines",
					type: "patternLines",
					background: "inherit",
					color: "#eed312",
					rotation: -45,
					lineWidth: 6,
					spacing: 10,
				},
			]}
			fill={[
				{
					match: {
						id: "fries",
					},
					id: "dots",
				},
				{
					match: {
						id: "sandwich",
					},
					id: "lines",
				},
			]}
			borderColor={{
				from: "color",
				modifiers: [["darker", 1.6]],
			}}
			axisTop={null}
			axisRight={null}
			axisBottom={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: "Товар",
				legendPosition: "middle",
				legendOffset: 32,
				truncateTickAt: 0,
			}}
			axisLeft={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: "Количество",
				legendPosition: "middle",
				legendOffset: -40,
				truncateTickAt: 0,
			}}
			labelSkipWidth={12}
			labelSkipHeight={12}
			labelTextColor={{
				from: "color",
				modifiers: [["darker", 1.6]],
			}}
			legends={[
				{
					dataFrom: "keys",
					anchor: "bottom-right",
					direction: "column",
					justify: false,
					translateX: 120,
					translateY: 0,
					itemsSpacing: 2,
					itemWidth: 100,
					itemHeight: 20,
					itemDirection: "left-to-right",
					itemOpacity: 0.85,
					symbolSize: 20,
					effects: [
						{
							on: "hover",
							style: {
								itemOpacity: 1,
							},
						},
					],
				},
			]}
			role="application"
			ariaLabel="Nivo bar chart demo"
			barAriaLabel={(e) => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
		/>
	);
};
