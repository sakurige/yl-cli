import download from "download-git-repo"
import ora from "ora"
import chalk from "chalk"
const spinner = ora()

export default function dl(url: string, path: string) {
  spinner.start("download.......")
  download("direct:" + url, path, { clone: true }, (err: unknown) => {
    if (!err) {
      spinner.succeed("git code success\n")
      console.log(
        chalk.green("you can run fellow commander to start a project")
      )
      console.log(`cd ${path}`)
      console.log("pnpm install")
      console.log("pnpm dev")
    } else {
      spinner.fail("git code fail")
    }
  })
}
