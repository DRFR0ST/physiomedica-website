import React from 'react'
import { Link } from 'react-router-dom'

const SuperLink = ({ to, forceExternal = false, children, ...props }) => {
  const isExternal =
    forceExternal ||
    new RegExp(/https?:\/\/((?:[\w\d-]+\.)+[\w\d]{2,})/i).exec(to)

  return isExternal ? (
    <a href={to} {...props}>
      {children}
    </a>
  ) : (
    <Link to={to} {...props}>
      {children}
    </Link>
  )
}

export default SuperLink
