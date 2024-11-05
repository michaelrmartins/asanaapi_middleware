// Server Configurations File

// Import and initialize Dotenv
const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const server = express();

const server_ipaddress = process.env.SERVER_IP;
const server_port = process.env.SERVER_PORT;


server.listen(server_port, () => {
    console.log(`Server running on, http://${server_ipaddress}:${server_port}`)});