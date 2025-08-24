import { listFiles as listFilesApi, getFilesInfo as getFilesInfoApi } from './apis'

export async function listFiles(folder: string, options: { ak: string }) {
  const { ak } = options

  console.log(`Listing contents of folder: ${folder}`)

  try {
    const resp = await listFilesApi(ak, folder)
    const files = resp.list || []
    files.forEach((file) => {
      console.log(`${file.fs_id} ${file.server_filename} (${file.size} bytes)`)
    })
  } catch (error) {
    console.error('Error when LIST:', error)
  }
}

export async function getFilesLink(fileIds: string, options: { ak: string }) {
  const { ak } = options

  console.log(`Download link for: ${fileIds}\n`)

  try {
    const resp = await getFilesInfoApi(ak, fileIds)
    const list = resp.list || []
    if (list.length > 0) {
      console.log(`Download commands: \n`)
    }
    for (let i = 0; i < list.length; i++) {
      const file = list[i]
      if (file?.dlink) {
        const downloadCmd = `wget "${file.dlink}&access_token=${ak}" -U 'pan.baidu.com' -O "${file.filename}"`
        console.log(`${downloadCmd}\n`)
      }
    }
  } catch (error) {
    console.error('Error when LIST:', error)
  }
}
