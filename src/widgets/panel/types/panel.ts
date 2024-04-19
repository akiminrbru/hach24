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
