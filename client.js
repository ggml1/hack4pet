var server_url = "http://localhost:8080"

function answerP1() {
	let x = document.getElementById("p1a").value;
	console.log(x);
	if(x == 43) {
		window.location.assign('../../AC.html');
	}
	else {
		window.location.assign('../../WA.html');
	}
}

function tryLogin() {
	let x = document.getElementById("username").value;
	let y = document.getElementById("password").value;

	let user = {
		username: x, 
		password: y
	}

	const options = {
		method: "POST",
		headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	}

	let url = server_url + "/login";
	fetch(url, options).then(function(response){
		return response.json();
	}).then(function(login){
		if(login.status == 1){
			console.log(login);
			alert("Successfully logged in."); //se conseguir botar o nome, tirar aqui
			window.location.assign('./index.html');
		}
		else{
			alert("Invalid username or password.");
			window.location.assign('./sign-in.html');	
		}
	});
}

function tryRegister() {
	let x = document.getElementById("reg_user").value;
	let y = document.getElementById("reg_password").value;

	let user = {
		username: x, 
		password: y
	}

	const options = {
		method: "POST",
		headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	}

	let url = server_url + "/register";
	fetch(url, options).then(function(response){
		return response.json();
	}).then(function(login){
		if(login.status == 1){
			alert("Registration successful!");
			window.location.assign('./index.html');
		}
		else{
			alert("Username already taken.");
			window.location.assign('./sign-up.html');	
		}
	});
}