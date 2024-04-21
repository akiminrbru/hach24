"use client";
import React from "react";
import { Column } from "@ant-design/plots";

export const ChartsWidget = () => {
	const config = {
		data: {
			type: "fetch",
			value: "https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/column-column.json",
		},
		xField: "letter",
		yField: "frequency",
		label: {
			text: (d: any) => `${(d.frequency * 100).toFixed(1)}%`,
			textBaseline: "bottom",
		},
		axis: {
			y: {
				labelFormatter: ".0%",
			},
		},
		style: {
			// 圆角样式
			radiusTopLeft: 10,
			radiusTopRight: 10,
		},
	};

	return (
		<div>
			<Column {...config} />
		</div>
	);
};
