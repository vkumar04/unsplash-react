import React, { Component } from 'react'
import unspash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

export class App extends Component{
  state = {
    images: []
  }
  onSearchSubmit = async (term) => {
    const res = await unspash('/search/photos', {
      params: { query: term}
    })
      this.setState({images: res.data.results})
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App