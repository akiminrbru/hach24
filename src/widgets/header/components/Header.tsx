"use client";
import React from "react";
import styles from "../styles/header.module.scss";
import Link from "next/link";
import { useUserStore } from "@/app/model/user";
import { Flex, Button } from "antd";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { CircleUserRound } from "lucide-react";

export const Header = () => {
	const isAuth = useUserStore((state) => state.isAuth);
	const setIsAuth = useUserStore((state) => state.setIsAuth);
	const { push } = useRouter();

	const logout = () => {
		Cookies.remove("token");
		push("/login");
		setIsAuth(false);
	};

	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.header_inner}>
					<Link className={styles.header_logo} href={"/"}>
						Logo
					</Link>
					<div className={styles.header_right}>
						{isAuth ? (
							<Flex gap="small" align="center">
								<Link href={"/dashboard"}>
									<CircleUserRound />
								</Link>
								<Button onClick={logout}>Выход</Button>
							</Flex>
						) : (
							<Flex gap="small" align="center">
								<Link href={"/authorization"}>
									<Button>Вход</Button>
								</Link>
								<Link href={"/registration"}>
									<Button>Регистрация</Button>
								</Link>
							</Flex>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};
