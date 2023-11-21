export type FilterOptions = "all" | "mobile" | "web";

export interface IProject {
	id: string;
	type: FilterOptions;
	title: string;
	description: string;
	linkGitHub?: string;
	linkPreview?: string;
	isDeveloping: boolean;
	bannerImage: string;
	previewImages: string[];
	tecnologies: string[];
}
