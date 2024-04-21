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
