import { Command } from "commander"
import action from "./action"
const createCommander = (program: Command) => {
  program
    .command("create <project> [other...]") // 自定义命令
    .alias("crt") // 给命令去一个别名
    .description("创建项目")
    .action(action)
}
export default createCommander