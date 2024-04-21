"use client";
import React from "react";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const QueryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: "#F37022",
						fontSize: 15,
					},
				}}>
				{children}
			</ConfigProvider>
		</QueryClientProvider>
	);
};
