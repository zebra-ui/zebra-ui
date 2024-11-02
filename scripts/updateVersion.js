const fs = require('fs').promises
const path = require('path')
const signale = require('signale')

// 更新路径以匹配你的目录结构
const zebraUiPackagePath = path.join(
  __dirname,
  '../demos/demo-normal/uni_modules/zebra-ui/package.json'
)
const rootPackagePath = path.join(__dirname, '../package.json')
const srcPackagePath = path.join(__dirname, '../src/package.json')

async function updateVersion() {
  try {
    // 读取 zebra-ui 的 package.json 文件
    const zebraUiData = await fs.readFile(zebraUiPackagePath, 'utf8')
    const zebraUiPackage = JSON.parse(zebraUiData)
    const newVersion = zebraUiPackage.version

    // 更新根目录的 package.json
    const rootData = await fs.readFile(rootPackagePath, 'utf8')
    const rootPackage = JSON.parse(rootData)
    rootPackage.version = newVersion
    await fs.writeFile(
      rootPackagePath,
      JSON.stringify(rootPackage, null, 4),
      'utf8'
    )
    signale.success(
      `根目录的 package.json 中的 version 字段已成功更新为: ${newVersion}`
    )

    // 更新 src/package.json
    const srcData = await fs.readFile(srcPackagePath, 'utf8')
    const srcPackage = JSON.parse(srcData)
    srcPackage.version = newVersion
    await fs.writeFile(
      srcPackagePath,
      JSON.stringify(srcPackage, null, 4),
      'utf8'
    )
    signale.success(
      `src/package.json 中的 version 字段已成功更新为: ${newVersion}`
    )
  } catch (error) {
    signale.error('处理过程中发生错误:', error.message)
  }
}

updateVersion()
