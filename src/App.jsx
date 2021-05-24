import React, { Component } from 'react'
import CatFooter from './components/CatFooter'
import CatHeader from './components/CatHeader'
import Octocat from './components/Octocat'
import Cats from './octocats.json'

export class App extends Component {
  render() {
    const catsFromJsonData = Cats.data.map(cat => (
      <Octocat
        octolink={cat.link}
        octoimage={cat.image}
        octoname={cat.name}
        octonumber={cat.number}
        authorimage={cat.authors.map(author => author['image'])}
        authorname={cat.authors.map(author => author['link'].slice(19))}
      />
    ))
    return (
      <>
        <CatHeader />
        <main>{catsFromJsonData}</main>
        <CatFooter />
      </>
    )
  }
}
