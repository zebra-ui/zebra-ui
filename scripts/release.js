const { exec } = require('child_process')
const util = require('util')
const signale = require('signale')

const execPromise = util.promisify(exec)

async function runScript(script) {
  try {
    signale.start(`开始执行 ${script}...`)
    const { stdout, stderr } = await execPromise(`node scripts/${script}`, {
      encoding: 'utf8'
    })
    signale.success(`执行 ${script} 成功:\n${stdout}`)
    if (stderr) {
      signale.warn(`执行 ${script} 时出现警告:\n${stderr}`)
    }
  } catch (error) {
    signale.error(`执行 ${script} 失败: ${error.message}`)
    throw error // 确保错误被抛出以中断执行
  }
}

async function main() {
  try {
    await runScript('updateChangelog.js')
    await runScript('updateVersion.js')
    await runScript('publish.js')
    await runScript('commitToGithub.js')
    // 在这里可以添加更多脚本
    signale.complete('所有脚本已成功执行！')
  } catch (error) {
    signale.fatal('发布脚本执行过程中发生错误:', error.message)
    process.exit(1) // 确保进程以错误状态退出
  }
}

main()
