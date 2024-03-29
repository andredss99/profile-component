const baseUrl = 'https://api.github.com/users/andredss99';
const starsUrl = 'https://api.github.com/users/andredss99/starred';

const requestProfileInfo = fetch(baseUrl)
.then(response => response.json())
.then(jsonBody => {
    document.querySelector('.profile-image img').src = jsonBody.avatar_url;
    document.querySelector('.profile-info h1').innerHTML = jsonBody.name;
    document.querySelector('.profile-info h4').innerHTML = jsonBody.login;
    document.querySelector('.repositories h1').innerHTML = jsonBody.public_repos;
    document.querySelector('.followers h1').innerHTML = jsonBody.followers;
});

const requestStarsInfo = fetch(starsUrl)
.then(response => response.json())
.then(jsonBody => {
    document.querySelector('.stars h1').innerHTML = jsonBody.length;
});