import React, { Component } from 'react'

class Octocat extends Component {
  render() {
    return (
      <article>
        <a href={this.props.octolink}>
          <img
            className="mainImage"
            src={this.props.octoimage}
            width="325"
            height="325"
            alt={this.props.octoname}
          />
        </a>
        <ul>
          <li>
            #148:
            <a href={this.props.octolink}>
              <strong>{this.props.octoname}</strong>
            </a>
          </li>
          <li>
            <a href={this.props.authorname}>
              <img
                src={this.props.authorimage}
                width="24px"
                height="24px"
                alt={this.props.authorname}
              />
            </a>
          </li>
        </ul>
      </article>
    )
  }
}
export default Octocat
