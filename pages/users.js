function userList({ users }) {
	return (
		<div>
			<h1>users List </h1>
			{users.map((user, index) => (
				<p key={index}>{user.username} </p>
			))}
		</div>
	);
}

export default userList;

export async function getStaticProps() {
	let url = "https://jsonplaceholder.typicode.com/users";
	const response = await fetch(url);
	const data = await response.json();
	// console.log(data);

	return {
		props: {
			users: data,
		},
	};
}
