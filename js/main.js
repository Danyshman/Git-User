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
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">${user.name}</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-3">
                <img class="thumbnail" src="${user.avatar_url}">
                <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
              </div>
              <div class="col-md-9">
                
              </div>
            </div>
          </div>
        </div>
      `);
		});
	});
});
