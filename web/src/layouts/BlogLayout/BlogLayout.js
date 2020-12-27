import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const BlogLayout = ({ children }) => {
  const { logIn, isAuthenticated, logOut, currentUser } = useAuth()

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
        {isAuthenticated && (
          <li>
            <Link to={routes.posts()}>Manage Posts</Link>
          </li>
        )}
        <li>
          <Link to={routes.contact()}>Contact Us</Link>
        </li>
        {isAuthenticated && (
          <li>
            <a href="#" onClick={logOut}>
              Log Out
            </a>
          </li>
        )}
        {!isAuthenticated && (
          <li>
            <a href="#" onClick={logIn}>
              Log In
            </a>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <a href="#">{currentUser.email}</a>
          </li>
        )}
      </ul>
      {children}
    </>
  )
}

export default BlogLayout
