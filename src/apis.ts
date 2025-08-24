import axios from 'axios'
import type { IGetFilesInfoData, IListFilesData } from './types'

export function listFiles(ak: string, folder: string): Promise<IListFilesData> {
  return axios({
    method: 'GET',
    url: 'https://pan.baidu.com/rest/2.0/xpan/file',
    params: {
      method: 'list',
      dir: folder,
      order: 'time',
      start: 0,
      limit: 999,
      web: 'web',
      folder: 0,
      access_token: ak,
      desc: 1
    }
  })
}

export function getFilesInfo(ak: string, fileIds: string): Promise<IGetFilesInfoData> {
  return axios({
    method: 'GET',
    url: 'https://pan.baidu.com/rest/2.0/xpan/multimedia',
    params: {
      method: 'filemetas',
      access_token: ak,
      fsids: `[${fileIds}]`,
      thumb: '1',
      dlink: '1',
      extra: '1',
      needmedia: '1',
      detail: '1'
    }
  })
}
