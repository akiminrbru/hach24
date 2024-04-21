"use client";
import React from "react";
import { StoragesWidget } from "@/widgets/storagesWidget";
import { Flex, Typography } from "antd";

const { Title } = Typography;

const page = () => {
	return (
		<Flex vertical>
			<Title level={3}>Склады и клиенты</Title>
			<StoragesWidget />
		</Flex>
	);
};

export default page;
