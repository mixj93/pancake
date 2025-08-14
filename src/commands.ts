import { listFiles as listFilesApi, getFileInfo as getFileInfoApi } from './apis'

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

export async function getFileLink(fileId: string, options: { ak: string }) {
  const { ak } = options

  console.log(`Download link for: ${fileId}`)

  try {
    const resp = await getFileInfoApi(ak, [fileId])
    const file = resp.list?.[0]
    if (file?.dlink) {
      const downloadCmd = `wget "${file.dlink}&access_token=${ak}" -U 'pan.baidu.com' -O "${file.filename}"`
      console.log(`Download command: \n\n${downloadCmd}`)
    } else {
      console.log('No file found with the given ID.')
    }
  } catch (error) {
    console.error('Error when LIST:', error)
  }
}
