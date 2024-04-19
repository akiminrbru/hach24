// Placemarks

export interface IGeo {
	type: string;
	metadata: Metadata;
	features: Feature[];
}

export interface Feature {
	type: string;
	id: number;
	geometry: Geometry;
	properties: Properties;
}

export interface Properties {
	iconCaption: string;
	"marker-color": string;
}

export interface Geometry {
	coordinates: number[];
	type: string;
}

export interface Metadata {
	name: string;
	creator: string;
	description: string;
}

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
