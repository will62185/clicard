#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
var chalk = require('chalk')
var boxen = require('boxen')

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'single-double'
}
// Text + chalk definitions
let data = {
  'name': chalk.white.bold('Will Woodford'),
  'title': chalk.white.bold('Cloud Platform Engineer'),
  //'handle': chalk.blue('will62185'),
  'work': chalk.green('Ultimate Software'),
  'twitter': chalk.white('https://twitter.com/will62185'),
  'github': chalk.white('https://github.com/will62185'),
  //'linkedin': chalk.blue('https://linkedin.com/in/bitandbang'),
  'web': chalk.white('https://www.pizzatech.io'),
 // 'npx': chalk.white('npx willwoodford'),
  'labelWork': chalk.white.bold('      Work:'),
  'labelTwitter': chalk.white.bold('   Twitter:'),
  'labelGitHub': chalk.white.bold('    GitHub:'),
  //'labelLinkedIn': chalk.white.bold('  LinkedIn:'),
  'labelWeb': chalk.white.bold('       Web:'),
  //'labelCard': chalk.white.bold('      Card:')
}

// Actual strings we're going to output
var newline = '\n'
var heading = `${data.name}`
var title = `${data.title}`
var working = `${data.labelWork}  ${data.work}`
var twittering = `${data.labelTwitter}  ${data.twitter}`
var githubing = `${data.labelGitHub}  ${data.github}`
//var linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
var webing = `${data.labelWeb}  ${data.web}`
//var carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
let output = heading + newline + title + newline + working + newline + twittering + newline + githubing + newline + /*linkedining + newline +*/ webing //+ newline //+ newline + carding

console.log(chalk.white(boxen(output, options)))
