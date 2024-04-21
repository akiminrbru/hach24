"use client";
import Link from "next/link";
import React from "react";
import styles from "./page.module.scss";
import { usePathname } from "next/navigation";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();
	return (
		<div className={styles.main}>
			<div className="container">
				<div className={styles.main_inner}>
					<aside className={styles.main_aside}>
						<Link className={`${pathname == "/dashboard" && styles.linkActive}`} href="/dashboard">
							Главная
						</Link>
						<Link className={`${pathname == "/dashboard/map" && styles.linkActive}`} href="/dashboard/map">
							Карта
						</Link>
						<Link href="#">Поставки</Link>
						<Link href="#">Статистика</Link>
						<Link className={`${pathname == "/dashboard/products" && styles.linkActive}`} href="/dashboard/products">
							Товары
						</Link>
						<Link className={`${pathname.includes("/dashboard/storages") && styles.linkActive}`} href="/dashboard/storages">
							Склады
						</Link>
						<Link className={`${pathname == "/dashboard/charts" && styles.linkActive}`} href="/dashboard/charts">
							Графики
						</Link>
					</aside>
					<div className={styles.main_content}>{children}</div>
				</div>
			</div>
		</div>
	);
}
