import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
  <>
  {children}

  <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
  <p>
        My default route is named <code>about</code>, link to me with `
        <Link to={routes.about()}>About</Link>`
      </p>
  </>)
}

export default BlogLayout
