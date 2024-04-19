"use client";
import { Panel } from "@/widgets/panel";
import styles from "./page.module.scss";
import { useQuery } from "@tanstack/react-query";
import { Flex, Typography, Skeleton } from "antd";
import Cookies from "js-cookie";

const { Title, Text } = Typography;

type Profile = {
	birthday: string;
	email: string;
	gender: string;
	id: number;
	name: string;
	role: string;
};

export default function Dashboard() {
	const { isPending, error, data } = useQuery({
		queryKey: ["profile"],
		queryFn: () =>
			fetch("https://dev.darksecrets.ru/api/user/profile", {
				headers: {
					Authorization: `${Cookies.get("token")}`,
				},
			})
				.then((res) => res.json())
				.then((data) => data.item),
	});

	return (
		<main className={styles.profile}>
			<div className="container">
				<div className={styles.profile_inner}>
					<Flex vertical>
						<Title>Dashboard</Title>
						<Panel />
					</Flex>
				</div>
			</div>
		</main>
	);
}
