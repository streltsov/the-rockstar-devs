module.exports = {
	tags: ["posts"],
	layout: "layouts/post.njk",
	// Making the URL (`domain.com/some-post`), not (`domain.com/blog/some-post`).
	permalink: "/{{ page.fileSlug }}/",
};
