const { exec } = require('child_process')
const util = require('util')
const signale = require('signale')
const path = require('path')

const execPromise = util.promisify(exec)
const srcPath = path.join(__dirname, '../src')

async function publishPackage() {
  try {
    signale.pending('正在发布包到 npm...')
    const { stdout, stderr } = await execPromise('npm publish', {
      cwd: srcPath
    })

    signale.success('发布成功:', stdout)
    if (stderr) {
      signale.warn('警告:', stderr)
    }
  } catch (error) {
    signale.error('发布失败:', error.message)
    throw error // 确保错误被抛出以中断执行
  }
}

publishPackage().catch((error) => {
  signale.fatal('发布过程中发生错误:', error.message)
  process.exit(1) // 确保进程以错误状态退出
})
