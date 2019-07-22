import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const containerStyle = {
  maxWidth: 700,
  margin: `0 auto`,
}

class DefaultLayout extends Component {
  render() {
    return (
      <div>
        <div
          css={{
            background: `rgb(207, 58, 62)`,
          }}
        >
          <div css={containerStyle}>
            <h1
              css={{
                margin: 0,
                lineHeight: 1,
                "@media screen and (min-width: 500px)": {
                  lineHeight: 1,
                },
              }}
            >
              <Link
                css={{
                  color: `rgb(224,203,144)`,
                  ":hover": {
                    color: `rgb(224,203,144)`,
                    textDecoration: `none`,
                  },
                }}
                to="/"
              >
                Gatsby + Wordpress!!
              </Link>
            </h1>
          </div>
        </div>
        <div css={containerStyle}>{this.props.children}</div>
      </div>
    )
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.object.isRequired,
}

export default DefaultLayout
