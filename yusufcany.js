#!/usr/bin/env node
'use strict';
var c = require('chalk');
var link = require('terminal-link');
var img = require('terminal-image');
var got = require('got');
var ww = require('word-wrap');
var iq = require('inquirer');
var opn = require('open');

got('https://user-images.githubusercontent.com/55593600/163213137-4c31a9b0-ceba-46b0-b64c-bf540cea13a3.png', {responseType:'buffer'})
.then(function (image) { return img.buffer(image.body, {width: '40%'}) })
.then(function (image) {

console.log(image)
console.log(ww(`
Hello, this is ${c.red.bold("Yusufcan YÄ±lmaz")}!

ð¨âð» Frontend Developer | Bixos
ð Vue.js and Nuxt.js Developer

`.trim(), { width: 200, trim: true }));

console.log('\n\n')
iq.prompt([
  {
    type: 'list',
    message: 'Do you want to learn more about me?',
    name: 'open',
    choices: [
      { name: c.gray(`ð»  What i am doing right now? (${c.bold('GitHub')})`), value: 'https://github.com/yusufcany' },
      { name: c.cyan(`ð¦  Other socials? (${c.bold('Linktree')})`), value: 'https://linktr.ee/yusufcany' },
      { name: c.blue(`ð¹  My goals and my path (${c.bold('LinkedIn')})`), value: 'https://www.linkedin.com/in/yusufcan-yilmaz/' },
      { name: c.red('ð  Nope. Bye.\n'), value: false }
    ]
  }
]).then(function (a) { opn(a.open); process.exit() }).catch(function () {});
}).catch(function (e) { console.log(e)});
