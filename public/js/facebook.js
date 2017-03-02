function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
 
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
         FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response) {
	console.log(response);
	$('.facebookLogin').hide();
	$('#name').text(response.name);
	$('#photo').attr('src',"https://scontent.xx.fbcdn.net/v/t1.0-1/p480x480/13006742_10204968937457781_1971302455557520269_n.jpg?oh=90a71f7ad8e0909233580af4e3bbcda4&oe=593D51AD" );
}

