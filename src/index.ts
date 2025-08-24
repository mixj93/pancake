#!/usr/bin/env node

import { Command, Option } from '@commander-js/extra-typings'
import { initAxios } from './axios.js'
import { getFilesLink, listFiles } from './commands.js'

initAxios()

const program = new Command()

program
  .name('pancake')
  .description('🥞 Pancake is a baidu pan commandline tool')
  .version('0.2.0')
  .addOption(
    new Option('-k, --ak <access-key>', 'Access Key is required').env('PANCAKE_ACCESS_KEY').makeOptionMandatory()
  )

// Commands
// List files in a folder
program
  .command('list <folder>')
  .description('list files in a folder')
  .addOption(
    new Option('-k, --ak <access-key>', 'Access Key is required').env('PANCAKE_ACCESS_KEY').makeOptionMandatory()
  )
  .action(listFiles)

// Get download link for a file
program
  .command('link <file_ids>')
  .description('get download link for files, separated by comma')
  .addOption(
    new Option('-k, --ak <access-key>', 'Access Key is required').env('PANCAKE_ACCESS_KEY').makeOptionMandatory()
  )
  .action(getFilesLink)

program.parse()
