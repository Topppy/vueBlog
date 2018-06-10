var path = require('path')
var fs = require('fs')
const dir = path.resolve('./docs/blog/')
const titleReg = new RegExp('#\\s{1}(\\S+)')
const homeFilePath = path.resolve('./docs/README.md')
const homeFileTemplatePath = path.resolve('./docs/.vuepress/readmeTemplate.md')

function getBlogList() {
  var files = fs.readdirSync(dir);
  var blogList = []
  files.forEach(file => {
    var text = fs.readFileSync(path.join(dir,file), 'utf8');
    const r = text.match(titleReg)
    // blogList.push([`./blog/${file}`, r[1]])
    blogList.push([`./blog/${file}`, r[1]])
    blogList.push({
      path: `./blog/${file}`,
    })
    // console.log(file,r[1]);
  });
  return blogList
}

const blogs = getBlogList()

function insertBlogList() {
  console.log(homeFileTemplatePath)
  var text = fs.readFileSync(homeFileTemplatePath, 'utf8')
  var insertText = blogs.map((blog) => {
    const [path, title] = blog
    return `### [${title}](${path})`
  })
  const newText = text.replace('BLOGLIST', insertText.join('\n\n'))
  fs.writeFileSync(homeFilePath, newText, 'utf8')
}

insertBlogList()

function gBlogData() {
  const data = blogs.map((blog) => {
    const b = {
      path:
    }
  })
}


function gVBlog(){

}