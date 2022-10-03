import inquirer from "inquirer"
import { frameworks, frameworksUrl } from "../../config"

import dl from "./download"

export default async function (project: string, args: unknown) {
  // 命令行的逻辑执行代码
  const answer = await inquirer.prompt([
    {
      type: "list",
      choices: frameworks,
      name: "framework",
      message: "choice your framework",
    },
  ])
  dl(frameworksUrl[answer.framework], project)
}
