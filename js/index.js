const rootURL = 'https://api.github.com';

function getRepositories() {
 let username = document.getElementById('username').value;
 const req = new XMLHttpRequest();
 req.addEventListener('load', displayRepositories);
 req.open('GET', 'https://api.github.com/users/' + username + '/repos');
 req.send();
}

function displayRepositories() {
  
}

function getCommits(el) {
}

function displayCommits() {
}

function getBranches(el) {
}

function displayBranches() {
}
