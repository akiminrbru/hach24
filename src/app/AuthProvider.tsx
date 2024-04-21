"use client";
import React from "react";
import { useUserStore } from "@/app/model/user";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import { LoadingWrapper } from "@/entities/LoadingWrapper";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const setIsAuth = useUserStore((state) => state.setIsAuth);
	const setEmail = useUserStore((state) => state.setEmail);

	const { isPending, error, data } = useQuery({
		queryKey: ["userCheck"],
		queryFn: () =>
			fetch("https://dev.darksecrets.ru/api/auth/check", {
				method: "post",
				headers: {
					Authorization: `${Cookies.get("token")}`,
				},
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					data.success ? setIsAuth(true) : setIsAuth(false);
					return data;
				}),
	});

	const profileData = useQuery({
		queryKey: ["profile"],
		queryFn: () =>
			fetch("https://dev.darksecrets.ru/api/user/profile", {
				headers: {
					Authorization: `${Cookies.get("token")}`,
				},
			})
				.then((res) => res.json())
				.then((data) => {
					data.success && setEmail(data?.item?.email);
					return data;
				}),
	});

	return (
		<>
			{isPending && <LoadingWrapper />}
			{children}
		</>
	);
};
