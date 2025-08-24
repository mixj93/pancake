interface IFile {
  tkbind_id: number
  server_mtime: number
  category: number
  unlist: number
  isdir: number
  oper_id: number
  wpfile: number
  local_mtime: number
  share: number
  pl: number
  local_ctime: number
  is_scene: 0
  black_tag: 0
  extent_int2: 0
  server_ctime: number
  extent_tinyint7: 0
  owner_id: number
  thumbs: {
    icon: string
    url3: string
    url2: string
    url1: string
  }
  size: number
  extent_int8: 0
  fs_id: number
  path: string
  owner_type: 1
  from_type: 0
  real_category: 'webm'
  md5: string
  server_atime: number
  server_filename: string
}

// pan's response data types
export interface IPanData {
  // https://pan.baidu.com/union/doc/okumlx17r
  // 表示具体错误码
  // 0 表示成功，其他是出错
  errno: number
  // 有关该错误的描述
  // 空为成功，其他是出错
  errmsg: string | undefined
  // 发起请求的请求 Id
  request_id: number
  guid_info: string
  guid: number
}

interface IFileInfo extends IFile {
  dlink: string
  filename: string
  // duration: 3060
  // media_info: any
}

export interface IListFilesData extends IPanData {
  list: IFile[]
}

export interface IGetFilesInfoData extends IPanData {
  list: IFileInfo[]
  names: {}
}
