import React from 'react'

const Header = () => {
  return (
  <header style={{backgroundColor: '#f4f4f4', padding: 20, textAlign: 'center'}}>
  <h1 style={{fontFamily: '"Arial", sans-serif', color: '#333'}}>InkBlot</h1>
  <nav>
    <ul style={{listStyle: 'none', padding: 0}}>
      <li style={{display: 'inline', margin: '0 15px'}}>
        <a href="/" style={{textDecoration: 'none', color: '#007BFF'}}>Home</a>
      </li>
      <li style={{display: 'inline', margin: '0 15px'}}>
        <a href="/addblogs" style={{textDecoration: 'none', color: '#007BFF'}}>Add Blog</a>
      </li>
      <li style={{display: 'inline', margin: '0 15px'}}>
        <a href="/myblogs" style={{textDecoration: 'none', color: '#007BFF'}}>My Blogs</a>
      </li>
    </ul>
  </nav>
</header>


  )
}

export default Header