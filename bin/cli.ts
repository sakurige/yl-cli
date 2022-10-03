#! /usr/bin/env node
// 获取环境变量中的node命令

import { program } from "commander"
import createHelp from "../lib/core/help"
import createCommander from "../lib/core/commander"
createHelp(program)
createCommander(program)
program.parse(process.argv)
