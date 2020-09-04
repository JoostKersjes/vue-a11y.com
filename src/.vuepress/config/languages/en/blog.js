const posts = {
  id: 'post',
  title: 'All posts',
  layout: 'Posts',
  itemLayout: 'Full',
  dirname: 'posts',
  path: '/posts/',
  itemPermalink: '/posts/:slug',
  pagination: {
    layout: 'Posts',
    prevText: '<<',
    nextText: '>>',
    getPaginationPageTitle (pageNumber) {
      return `All posts - page ${pageNumber}`
    }
  }
}

const categories = {
  id: 'categories',
  keys: ['category', 'categories'],
  title: 'category',
  scopeLayout: 'Posts',
  path: '/category/',
  pagination: {
    layout: 'Posts',
    getPaginationPageTitle (pageNumber, key) {
      return `Category: ${key} - page ${pageNumber}`
    }
  }
}

module.exports = {
  posts,
  categories
}
