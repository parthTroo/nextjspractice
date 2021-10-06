function post({ post }) {
	console.log(post);
	return (
		<>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
		</>
	);
}

export default post;

export async function getStaticPaths() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await response.json();
	const paths = data.map((post) => ({
		params: {
			postId: `${post.id}`,
		},
	}));
	// const paths = data.map((post) => {
	// 	return {
	// 		params: {
	// 			postId: `${post.id}`,
	// 		},
	// 	};
	// });
	console.log("paths", paths);
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const { params } = context;
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.postId}`
	);
	const data = await response.json();
	console.log(data);

	return {
		props: {
			post: data,
		},
	};
}
