import React, { Component } from 'react'

class CatHeader extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <a className="octodex" href="#">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="45"
                  height="45"
                  alt="GithubLogo"
                />
                <strong>Octodex</strong>
              </a>
            </li>
            <li>
              <a className="grey" href="#">
                Home
              </a>
            </li>
            <li>
              <a href="https://octodex.github.com/faq/">FAQ</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a href="https://twitter.com/githubdesign">
                Follow us on Twitter
              </a>
            </li>
            <li className="back-to-github">
              <a href="https://github.com/">Back to GitHub.com</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default CatHeader
