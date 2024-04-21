"use client";
import React, { useRef, useState } from "react";
import { Table, Button, Space, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { TableColumnsType, InputRef, TableColumnType } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import Highlighter from "react-highlight-words";

interface DataType {
	key: React.Key;
	id: number;
	store_name: string;
	store_address: string;
	region: string;
	store_type: string;
}

type DataIndex = keyof DataType;

export const StoragesWidget = () => {
	const [searchText, setSearchText] = useState("");
	const [searchedColumn, setSearchedColumn] = useState("");
	const searchInput = useRef<InputRef>(null);

	const [stores, setStores] = useState<DataType[] | undefined>(undefined);

	const handleSearch = (selectedKeys: string[], confirm: FilterDropdownProps["confirm"], dataIndex: DataIndex) => {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	};

	const handleReset = (clearFilters: () => void) => {
		clearFilters();
		setSearchText("");
	};

	const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<DataType> => ({
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
			<div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
				<Input ref={searchInput} placeholder={`Search ${dataIndex}`} value={selectedKeys[0]} onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])} onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)} style={{ marginBottom: 8, display: "block" }} />
				<Space>
					<Button type="primary" onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)} icon={<SearchOutlined />} size="small" style={{ width: 90 }}>
						Search
					</Button>
					<Button onClick={() => clearFilters && handleReset(clearFilters)} size="small" style={{ width: 90 }}>
						Reset
					</Button>
					<Button
						type="link"
						size="small"
						onClick={() => {
							confirm({ closeDropdown: false });
							setSearchText((selectedKeys as string[])[0]);
							setSearchedColumn(dataIndex);
						}}>
						Filter
					</Button>
					<Button
						type="link"
						size="small"
						onClick={() => {
							close();
						}}>
						close
					</Button>
				</Space>
			</div>
		),
		filterIcon: (filtered: boolean) => <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />,
		onFilter: (value, record) =>
			record[dataIndex]
				.toString()
				.toLowerCase()
				.includes((value as string).toLowerCase()),
		onFilterDropdownOpenChange: (visible) => {
			if (visible) {
				setTimeout(() => searchInput.current?.select(), 100);
			}
		},
		render: (text) => (searchedColumn === dataIndex ? <Highlighter highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }} searchWords={[searchText]} autoEscape textToHighlight={text ? text.toString() : ""} /> : text),
	});

	const columns: TableColumnsType<DataType> = [
		{
			title: "id",
			dataIndex: "id",
		},
		{
			title: "Название",
			dataIndex: "store_name",
			...getColumnSearchProps("store_name"),
		},
		{
			title: "Адресс",
			dataIndex: "store_address",
		},
		{
			title: "Регион",
			dataIndex: "region",
		},
		{
			title: "Тип",
			dataIndex: "store_type",
		},
	];

	const { isPending, error, data } = useQuery({
		queryKey: ["stores"],
		queryFn: () =>
			fetch("https://dev.darksecrets.ru/api/storage/all", {
				headers: {
					Authorization: `${Cookies.get("token")}`,
				},
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					setStores(data.items);
					return data;
				}),
	});

	return <Table bordered columns={columns} dataSource={stores} />;
};
