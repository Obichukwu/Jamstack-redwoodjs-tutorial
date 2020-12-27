import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <h1>RedWood Blog</h1>
      <ul>
        <li>
          <Link to={routes.home()}>Home</Link>
        </li>
        <li>
          <Link to={routes.about()}>About</Link>
        </li>
        <li>
          <Link to={routes.posts()}>Manage Posts</Link>
        </li>
      </ul>
      {children}
    </>
  )
}

export default BlogLayout
