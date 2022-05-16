const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
const Discord = require("discord.js");

const burak = new Discord.Client();


burak.login("Token");




burak.on("ready", () => {
  masoon.channels.get("845777108110016512").join();
});
