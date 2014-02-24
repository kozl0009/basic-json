$('#save').click(function () {
    // add loading image to div
    $('#loading').html('<img src="http://preloaders.net/preloaders/287/Filling%20broken%20ring.gif"> loading...');
    
    // run ajax request
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api.github.com/users/kozl0009",
        success: function (data) {
            // replace div's content with returned data
            // setTimeout added to show loading
            console.log(data);
            setTimeout(function () {
				var iDiv = document.createElement("div");
				iDiv.className = "boxes";
				var avatarImg = document.createElement("img");
				avatarImg.setAttribute('src', data.avatar_url);
				iDiv.appendChild(avatarImg);
				var userLogin = document.createElement("p");
				userLogin.innerHTML = "<b>User: <a href='data.html_url'>" + data.login + "</a></b>";
				iDiv.appendChild(userLogin);
				var userRepos = document.createElement("p");
				userRepos.innerHTML = "<b>Public Repositories: " + data.public_repos + "</b>";
				iDiv.appendChild(userRepos);
				var createdAt = document.createElement("p");
				createdAt.innerHTML = "<b>Account created: " + $.format.date(data.created_at, "dd/MM/yyyy") + "</b>";
				iDiv.appendChild(createdAt);
				$('#loading').html('');
				document.body.appendChild(iDiv);
				
            }, 2000);
        }
    });
});