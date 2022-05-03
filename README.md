# basicNodeJWT

A basig API example using JWT

 - 1 : Login
   - Route: //localhost:3000/api/v1/login
   - Http Request method: POST
   - POST body: {username:String, password:String}
   - Returns: {msg:String, token:String}
 - 2 : Dashboard
   - Route: //localhost:3000/api/v1/login
   - Http Request method: GET
   - Requiered Header key: Authorization:String ('Bearer token' whee token is the token returned by the Login)

Note: This project does not use a database
