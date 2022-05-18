import jQuery from "jquery";
import bootstrap from "bootstrap";

("use strict");

const express = require("express");
var http = require("http");
const fs = require("fs");
const path = require("path");

const app = express();
app.use("/", express.static("./"));

var server = http.createServer(app).listen(8080);
