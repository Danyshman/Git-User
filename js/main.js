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
			$.ajax({
				url: `https://api.github.com/users/${username}/repos/`,
				data: {
					client_id: '1539bf3f90f958c63330',
					client_secret: '6434e7d1c1ef9d9f53c46a4e8a3e250d6db79a71',
				},
			}).done(repos => {
				repos.each((index, repo) => {
					$('#repos').append(`
            <div class="well">
              <div class="row">
                <div class="col-md-7">
                  <strong>${repo.name}</strong>
                </div>
                <div class="col-md-3">
                
                </div>
                <div class="col-md-2">
                
                </div>
              </div>
            </div>
          `);
				});
			});
			$('#profile').html(`
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">${user.name}</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-3">
                <img class="img-thumbnail avatar" src="${user.avatar_url}">
                <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
              </div>
              <div class="col-md-9">
                <span class="label label-default">Public Repos: ${user.public_repos}</span>
                <span class="label label-primary">Public Gists: ${user.public_gists}</span>
                <span class="label label-success">Followers: ${user.followers}</span>
                <span class="label label-info">Following: ${user.following}</span>
                <br/>
                <br/>
                <ul class="list-group">
                  <li class="list-group-item">Website/blog: ${user.blog}</li>
                  <li class="list-group-item">Location: ${user.location}</li>
                  <li class="list-group-item">Company: ${user.company}</li>
                  <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h3 class="page-header">Latest Repos</h3>
        <div id="repos"></div>
      `);
		});
	});
});
