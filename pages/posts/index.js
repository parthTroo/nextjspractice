function PostList({ posts }) {
	console.log("post", posts);
	return (
		<div>
			<h1>post List </h1>
			{posts.map((post, index) => (
				<p key={index}>{post.id} </p>
			))}
		</div>
	);
}

export default PostList;

export async function getStaticProps() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await response.json();

	return {
		props: {
			posts: data.slice(0, 10),
		},
	};
}
