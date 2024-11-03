const { exec } = require('child_process')
const util = require('util')
const fs = require('fs').promises
const path = require('path')
const signale = require('signale')

const execPromise = util.promisify(exec)
const rootPackagePath = path.join(__dirname, '../package.json')

async function getVersion() {
  try {
    const data = await fs.readFile(rootPackagePath, 'utf8')
    const packageJson = JSON.parse(data)
    return packageJson.version
  } catch (error) {
    signale.error('读取 package.json 失败:', error.message)
    throw error
  }
}

async function commitAndTag() {
  try {
    const version = await getVersion()
    const commitMessage = `release: ${version}`
    const tagName = `${version}`

    signale.pending('添加更改到 git...')
    await execPromise('git add .')

    signale.pending('提交更改...')
    await execPromise(`git commit -m "${commitMessage}"`)

    signale.pending('创建标签...')
    await execPromise(`git tag ${tagName}`)

    signale.pending('推送到 GitHub...')
    await execPromise('git push')
    await execPromise('git push --tags')

    signale.success('提交、打标签并推送成功！')
  } catch (error) {
    signale.error('提交到 GitHub 失败:', error.message)
    process.exit(1)
  }
}

commitAndTag()
