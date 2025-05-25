import { defineCollection, z } from "astro:content";

const bookCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		author: z.string(),
		img: z.string(),
		readTime: z.number(),
		description: z.string(),
		buy: z.object({
			spain: z.string().url(),
			usa: z.string().url()
		})
	})
})
export const collection = {
	'books': bookCollection,
};
