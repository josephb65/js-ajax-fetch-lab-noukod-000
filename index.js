function getIssues() {

  fetch('https://api.github.com/repos/Herna4/javascript-fetch-lab/issues', {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
}

function createIssue() {
  const title = document.getElementById('title').value//$('#title').val()
  const content = document.getElementById('body').value//$('#body').val()

  fetch(`https://api.github.com/repos/Herna4/javascript-fetch-lab/issues`,{
    method: 'post',
    body: JSON.stringify({title: title, body: content}),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then()
}

function showResults(json) {
    //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks', {
    method: 'post',
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token${getToken()}`
    }
    
  })
  .then(resp => resp.json())
  .then(json => console.log(json));
}



function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}