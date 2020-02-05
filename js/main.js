$(document).ready(() => {
	$('#searchUser').on('keyup', event => {
		let username = event.target.value;

		//Make request to Github
		$.ajax({
			url: `https://api.github.com/users/${username}`,
			data: {
				client_id: '1539bf3f90f958c63330',
				client_secret: '6434e7d1c1ef9d9f53c46a4e8a3e250d6db79a71',
			},
		}).done(user => {
			$('#profile').html(`
        ${user.name}
      `);
		});
	});
});
