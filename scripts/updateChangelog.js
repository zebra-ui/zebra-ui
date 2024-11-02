const fs = require('fs').promises
const path = require('path')
const signale = require('signale')

// 更新路径以匹配你的目录结构
const changelogPath = path.join(
  __dirname,
  '../demos/demo-normal/uni_modules/zebra-ui/changelog.md'
)
const outputPath = path.join(
  __dirname,
  '../docs/zebra-ui-docs/content/changedlog.md'
)
const copyPath = path.join(__dirname, '../src/changelog.md')

async function updateChangelog() {
  try {
    // 读取 changelog 文件
    const changelogData = await fs.readFile(changelogPath, 'utf8')

    // 复制内容到 src/changelog.md
    await fs.writeFile(copyPath, changelogData, 'utf8')
    signale.success('成功复制 changelog 到 src/changelog.md')

    const outputData = await fs.readFile(outputPath, 'utf8')

    const versionWithDateRegex = /##\s+(\d+\.\d+\.\d+)\s*（.*?）/g
    const changelogVersions = new Set()
    let match

    while ((match = versionWithDateRegex.exec(changelogData)) !== null) {
      changelogVersions.add(match[1])
    }

    const outputVersionRegex = /###\s+(\d+\.\d+\.\d+)/g
    const outputVersions = new Set()

    while ((match = outputVersionRegex.exec(outputData)) !== null) {
      outputVersions.add(match[1])
    }

    const versionsToInsert = [...changelogVersions].filter(
      (version) => !outputVersions.has(version)
    )

    if (versionsToInsert.length === 0) {
      signale.info('没有新版本需要插入。')
      return
    }

    const newContent = versionsToInsert
      .map((version) => {
        const versionRegex = new RegExp(
          `## ${version}（.*?）(.*?)((?=## \\d+\\.\\d+\\.\\d+)|$)`,
          's'
        )
        const versionContentMatch = changelogData.match(versionRegex)
        if (versionContentMatch) {
          return versionContentMatch[0]
            .replace(/^## /, '### ')
            .replace(/（.*?）/, '')
        }
        return ''
      })
      .join('\n\n')

    const insertPosition = outputData.indexOf('<!-- changedlog-unrelease -->')
    if (insertPosition === -1) {
      signale.error('未找到插入位置：<!-- changedlog-unrelease -->')
      return
    }

    const updatedContent =
      outputData.slice(
        0,
        insertPosition + '<!-- changedlog-unrelease -->'.length
      ) +
      '\n\n' +
      newContent +
      outputData.slice(insertPosition + '<!-- changedlog-unrelease -->'.length)

    await fs.writeFile(outputPath, updatedContent, 'utf8')
    signale.success('更新成功！')
  } catch (error) {
    signale.error('处理过程中发生错误:', error.message)
  }
}

updateChangelog()
