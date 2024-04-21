"use client";
import React, { useState } from "react";
import styles from "../styles/productsWidget.module.scss";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import Link from "next/link";

interface DataType {
	key: React.Key;
	id: number;
	product_name: string;
	product_cost: number;
	manufacture_date: string;
	expiry_date: string;
	sku: number;
	storeId: number;
	manufacturerId: number;
}

export const ProductsWidget: React.FC<{ storeId?: string | string[] }> = ({ storeId }) => {
	const [page, setPage] = useState(1);
	const [totalCount, setTotalCount] = useState<number | undefined>(undefined);
	const [dataSource, setDataSource] = useState<DataType[] | undefined>(undefined);

	const { isPending, error, data } = useQuery({
		queryKey: ["stores", page],
		queryFn: () =>
			fetch(`https://dev.darksecrets.ru/api/product/all?page=${page}${storeId ? `&storeId=${storeId}` : ""}`, {
				headers: {
					Authorization: `${Cookies.get("token")}`,
				},
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.success) {
						setTotalCount(data.count);
						setDataSource(data.items);
					}
					return data;
				}),
	});

	const linkToStorageItem = (id: number) => (storeId ? <span>{id}</span> : <Link href={`/dashboard/storages/${id}`}>{id}</Link>);

	const columns: TableColumnsType<DataType> = [
		{
			title: "Id",
			dataIndex: "id",
			key: "id",
		},
		{
			title: "Название",
			dataIndex: "product_name",
			key: "product_name",
		},
		{
			title: "Цена",
			dataIndex: "product_cost",
			key: "product_cost",
			render: (text) => <span>{text} руб.</span>,
		},
		{
			title: "Дата изготовления",
			dataIndex: "manufacture_date",
			key: "manufacture_date",
			render: (text) => <span>{new Date(text).toLocaleDateString("ru-RU")}</span>,
		},
		{
			title: "Срок годности",
			dataIndex: "expiry_date",
			key: "expiry_date",
			render: (text) => <span>{new Date(text).toLocaleDateString("ru-RU")}</span>,
		},
		{
			title: "sku",
			dataIndex: "sku",
			key: "sku",
		},
		{
			title: "Номер склада",
			dataIndex: "storeId",
			key: "storeId",
			render: (id) => linkToStorageItem(id),
		},
	];

	return (
		<Table
			loading={isPending}
			columns={columns}
			dataSource={dataSource}
			size="small"
			pagination={{
				pageSize: 50,
				showSizeChanger: false,
				total: totalCount,
				position: ["topRight"],
				onChange: (page) => {
					setPage(page);
				},
			}}
		/>
	);
};
