import { Command } from "commander"

const createHelp = (program: Command) => {
  program.option("-f, --framwork <framwork>", "设置框架")
}
export default createHelp
