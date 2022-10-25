import {Component} from 'react'

// eslint-disable-next-line import/no-cycle
import {initialHistoryList} from '../../App'

import PreviousItem from '../HistoryItems/index'

import './index.css'

class BrowserHistory extends Component {
  state = {
    searchValue: '',
    sp: initialHistoryList,
  }

  onChangeInput = event => {
    const cont = event.target.value
    this.setState({
      searchValue: cont,
    })
  }

  onDeleteButton = id => {
    const {sp} = this.state

    const updateHistoryList = sp.filter(each => each.id !== id)

    this.setState({sp: updateHistoryList})
  }

  render() {
    const {searchValue, sp} = this.state

    const searchValues = sp.filter(each =>
      each.title.toLowerCase().includes(searchValue.toLowerCase()),
    )
    return (
      <div className="main-container">
        <div className="content-container">
          <div className="history-head-box">
            <div className="head-box-container">
              <img
                className="history-logo"
                src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
                alt="app logo"
              />
              <div className="search-box-container">
                <img
                  className="search-logo"
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                />
                <input
                  className="search-input"
                  type="search"
                  placeholder="Search History"
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
          </div>
          <div className="box">
            {searchValues.length > 0 ? (
              <div className="previous-search-box">
                <ul className="main-list">
                  {searchValues.map(each => (
                    <PreviousItem
                      details={each}
                      key={each.id}
                      deleteButton={this.onDeleteButton}
                    />
                  ))}
                </ul>
              </div>
            ) : (
              <div className="previous-message-content">
                <p>There is no history to show</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default BrowserHistory
