"use client";
import { Flex, Typography } from "antd";
import styles from "./page.module.scss";

const { Title } = Typography;

export default function Dashboard() {
	return (
		<Flex vertical>
			<Title level={3}>Добро пожаловать в панель логистики</Title>
			<div className={styles.dash}>
				<div className={styles.dash_item}>
					<span>0</span>
					<h5>Поставок</h5>
				</div>
				<div className={styles.dash_item}>
					<span>0</span>
					<h5>По плану</h5>
				</div>
				<div className={styles.dash_item}>
					<span>0</span>
					<h5>Машин свободно</h5>
				</div>
				<div className={styles.dash_item}>
					<span>0</span>
					<h5>Нет прогноза</h5>
				</div>
			</div>
		</Flex>
	);
}
