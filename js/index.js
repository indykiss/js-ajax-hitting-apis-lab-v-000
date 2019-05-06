const rootURL = 'https://api.github.com';

function getRepositories() {
 let username = document.getElementById('username').value;
 const req = new XMLHttpRequest();
 req.addEventListener('load', displayRepositories);
 req.open('GET', 'https://api.github.com/users/' + username + '/repos');
 req.send();
}

function displayRepositories() {
  var repos = JSON.parse(this.responseText);
 console.log(repos);
 const repoList = `<ul>${repos
   .map(
     r =>
       '<li>' +
       r.name +
       ' - <a href="' + r.html_url + '">Repo link</a>' +
       ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a>' +
       ' - <a href="#" data-repo="' + r.name + '" onclick="getBranches(this)">Get Branches</a></li>'
   )
   .join('')}</ul>`;
 document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(el) {
}

function displayCommits() {
}

function getBranches(el) {
}

function displayBranches() {
}
