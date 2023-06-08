# cit281-p3
## create project files 
p3-module.js, p3-server.js, index.html, package.json, .gitignore 
## initialize git repo 
use git status and git add and git commit -m 
## create and test module functions 
<img width="832" alt="Screenshot 2023-06-08 at 11 35 44 AM" src="https://github.com/mmathes2/cit281-p3/assets/134009490/1fc2599d-c525-417b-9c54-5afc137c4f8f">
<img width="845" alt="Screenshot 2023-06-08 at 11 35 56 AM" src="https://github.com/mmathes2/cit281-p3/assets/134009490/87391658-cc02-427c-919d-9fbc0afd4245">

## create index.html 
``` 
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Coinage</title>

  <style>
  </style>
</head>

<body>
    <h1>Welcome to Coinage!</h1>
    <ul>
        <li><a href="/coin?denom=25&count=3">3 x 25 coin = 75</a></li>
        <li><a href="/coins?option=1">Option 1 = 35</a></li>
        <li><a href="/coins?option=2">Option 2 = 57</a></li>
        <li><a href="/coins?option=3">Option 3 = 57 (Extra Credit)</a></li>
    </ul>
</body>
</html>
```
## initialize project folder as Node.js folder and install fastify 

```npm init``` ```npm install fastify --save``` 
```node_modules``` <- add this to .gitignore 

## add fastify to web server code 

<img width="323" alt="Screenshot 2023-06-08 at 11 32 07 AM" src="https://github.com/mmathes2/cit281-p3/assets/134009490/2eab0021-5869-423b-859d-1948f56f7dba">

## add / route with GET and server listen 

<img width="504" alt="Screenshot 2023-06-08 at 11 32 53 AM" src="https://github.com/mmathes2/cit281-p3/assets/134009490/09bf50e1-7854-4966-aa8c-d967d5035e37">

<img width="469" alt="Screenshot 2023-06-08 at 11 33 11 AM" src="https://github.com/mmathes2/cit281-p3/assets/134009490/1a45cc5f-5bf6-4131-bb1b-c2f231af033f">

## add /coins route with GET 

<img width="707" alt="Screenshot 2023-06-08 at 11 34 12 AM" src="https://github.com/mmathes2/cit281-p3/assets/134009490/639fa28a-c0fd-47c6-9ec7-a0e2dbcff855">
