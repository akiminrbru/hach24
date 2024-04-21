"use client";
import { ProductsWidget, ProductsWidget2 } from "@/widgets/productsWidget";
import { Flex } from "antd";
import { useParams } from "next/navigation";
import React from "react";
import { Typography } from "antd";
import Link from "next/link";
import { ArrowLeftFromLine } from "lucide-react";
import styles from "./page.module.scss";

const { Title } = Typography;

const StoragesDetail = () => {
	const params = useParams();

	return (
		<Flex vertical>
			<Flex gap="middle" vertical>
				<Link className={styles.storagesDetail_link} href="/dashboard/storages">
					<ArrowLeftFromLine /> Все склады
				</Link>
				<Title level={3}>Объект №{params.storagesId}</Title>
			</Flex>
			<Title level={5}>Товары склада:</Title>
			<ProductsWidget2 storeId={params.storagesId} />
		</Flex>
	);
};

export default StoragesDetail;
