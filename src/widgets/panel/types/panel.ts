// Routes

export interface IRoutes {
	routes: Route[];
	generation_time: number;
}

export interface Route {
	distance: number;
	duration: number;
	source_id: number;
	source_name: string;
	target_id: number;
	target_name: string;
}

// Products

interface Product {
	id: number;
	product_name: number;
	product_cost: number;
	manufacture_date: Date;
	expiry_date: Date;
	sku: number;
	sale_date: Date;
	quantity_sold: number;
	product_amount: number;
	product_measure: string;
	product_volume: number;
	manufacturer: string;
	storeId: number;
}
