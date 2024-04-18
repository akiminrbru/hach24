"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import type { FormProps } from "antd";
import { Button, Form, Input, Flex } from "antd";
import { Typography } from "antd";
import { useRouter } from "next/navigation";

const { Title } = Typography;

type FieldType = {
	name: string;
	email: string;
	password: string;
};

export default function Register() {
	const router = useRouter();
	const [isError, setIsError] = useState<string>("");

	const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
		console.log("Success:");
		const data = await getData(values.email, values.password, values.name);
		console.log(data);

		data.success ? router.push("/login") : setIsError(data.message);
	};

	const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	const getData = async (email: string, password: string, name: string) => {
		return await fetch("https://dev.darksecrets.ru/api/auth/reg", {
			method: "post",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password,
				name: name,
			}),
		})
			.then((response) => response.json())
			.then((data) => data);
	};

	return (
		<main className={styles.main}>
			<Flex align="center" vertical>
				<Title>Регистрация</Title>
				<Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 600 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
					<Form.Item<FieldType> label="Имя" name="name" rules={[{ required: true, message: "Введите имя!" }]}>
						<Input />
					</Form.Item>
					<Form.Item<FieldType> label="Email" name="email" rules={[{ required: true, message: "Введите email!" }]}>
						<Input />
					</Form.Item>
					<Form.Item<FieldType> label="Пароль" name="password" rules={[{ required: true, message: "Введите пароль!" }]}>
						<Input.Password />
					</Form.Item>
					{isError && <span>{isError}</span>}
					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type="primary" htmlType="submit">
							Войти
						</Button>
					</Form.Item>
				</Form>
			</Flex>
		</main>
	);
}
