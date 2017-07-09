import React from "react"
import Link from "gatsby-link"
import {gray} from '../utils/colors'

import HeaderNav from './HeaderNav'

export default ({inverted}) => (
  <div css={{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
  }}>
    <Link to="/" style={{textDecoration: 'none', color: 'currentColor'}} >
      <img style={{margin: 0, border: `2px solid ${gray}`, boxSizing: 'content-box'}} src="/static/icon_50.png" width={50}/>
    </Link>
    <HeaderNav />
  </div>
)