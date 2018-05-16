const paths = {
  '/': '首页',
  '/ga': '相册',
  '/resume': '简历',
  '/blog': '博客',
  '/note': '笔记'
}


// export const getPathName = path => paths[path]
// const getRootPath = path => {
//    return '/' + path.split('/')[1]
//   }
  
//   export const getPathName = path => paths[getRootPath(path)]
export const getPathName = rootPath => paths[rootPath]