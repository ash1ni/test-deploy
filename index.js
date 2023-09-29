const express = require('express');
require('dotenv').config();
const app = express();
const port = 3000

const gitHubData = {
    "login": "ash1ni",
    "id": 72379437,
    "node_id": "MDQ6VXNlcjcyMzc5NDM3",
    "avatar_url": "https://avatars.githubusercontent.com/u/72379437?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ash1ni",
    "html_url": "https://github.com/ash1ni",
    "followers_url": "https://api.github.com/users/ash1ni/followers",
    "following_url": "https://api.github.com/users/ash1ni/following{/other_user}",
    "gists_url": "https://api.github.com/users/ash1ni/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ash1ni/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ash1ni/subscriptions",
    "organizations_url": "https://api.github.com/users/ash1ni/orgs",
    "repos_url": "https://api.github.com/users/ash1ni/repos",
    "events_url": "https://api.github.com/users/ash1ni/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ash1ni/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Ashwini Kumar Pandey",
    "company": "Student",
    "blog": "https://ash1ni.github.io/portfolio/",
    "location": "New Delhi, Delhi, India",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": "ash1ni",
    "public_repos": 55,
    "public_gists": 0,
    "followers": 3,
    "following": 7,
    "created_at": "2020-10-05T08:02:28Z",
    "updated_at": "2023-07-14T18:05:30Z"
    }

app.get("/",(req,res)=>{
    res.send("<h1>This is Server</h1>");
});

app.get('/sample', (req,res)=>{
    try {
        res.send("<h2>Sample route for test</h2>")
    } catch (error) {
       res.render(error);
    }
    
});

app.get('/login', (req,res)=>{
    try {
        res.status(200).json('this is the login page')
    } catch (error) {
        res.send(error)
    }
})

app.get('/github', (req,res)=>{
    try {
        res.status(200).json(gitHubData);
    } catch (error) {
        res.send(error);
    }
})

app.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${port}`); 
});
