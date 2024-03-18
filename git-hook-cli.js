#!/usr/bin/env node
import { copyFile } from './utils/copyFile.js';
const [, , ...args] = process.argv;
const COMMANDS = {
  HOOK: 'hook'
}

// COMMAND: Copy the hooks to the .git folder
if (args[0] && args[0].toLowerCase() === COMMANDS.HOOK) {
  if (!args[1] || !args[2]) {
    console.error(`Command: git-hook-cli hook <source> <target> \nError: "source" or "target" is empty.`)
    process.exit(1)
  }
  if (args[1] === '.' && args[2] === '.') {
    copyFile(args[1], args[2], e => console.log('Error: ', e.message))
  }
  copyFile(args[1], args[2], e => e && console.log('Error: ', e.message))
}
