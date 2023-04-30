import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'

import YourPassword from '../YourPassword'

import EmptyView from '../EmptyView'

import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    userName: '',
    password: '',
    userPasswordsList: [],
    showPasswords: false,
    userSearchVal: '',
  }

  searchForPassword = event => {
    this.setState({userSearchVal: event.target.value.toLowerCase()})
  }

  removeItem = id => {
    const {userPasswordsList} = this.state
    const filteredList = userPasswordsList.filter(each => each.id !== id)

    this.setState({
      userPasswordsList: filteredList,
    })
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({
      showPasswords: !prevState.showPasswords,
    }))
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {website, userName, password} = this.state
    const userObj = {id: uuidV4(), website, userName, password}

    if (website !== '' && userName !== '' && password !== '') {
      this.setState(prevState => ({
        userPasswordsList: [...prevState.userPasswordsList, userObj],
        website: '',
        userName: '',
        password: '',
      }))
    }
  }

  renderFormFelid = () => {
    const {website, userName, password} = this.state

    const title = 'Add New Password'
    const smImg =
      'https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png'
    const lgImg =
      'https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png'

    return (
      <div className="top-container">
        <img src={smImg} className="sm-img" alt="password manager" />
        <img src={lgImg} className="lg-img" alt="password manager" />
        <form onSubmit={this.submitForm} className="form-container">
          <h1 className="form-heading">{title}</h1>
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              className="input-img"
              alt="website"
            />
            <hr className="line" />
            <input
              onChange={this.onChangeWebsite}
              value={website}
              className="input-element"
              type="text"
              placeholder="Enter Website"
            />
          </div>

          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              className="input-img"
              alt="username"
            />
            <hr className="line" />
            <input
              onChange={this.onChangeUsername}
              value={userName}
              className="input-element"
              type="text"
              placeholder="Enter Username"
            />
          </div>

          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              className="input-img"
              alt="password"
            />
            <hr className="line" />
            <input
              onChange={this.onChangePassword}
              value={password}
              className="input-element"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="button-container">
            <button type="submit" className="button">
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }

  render() {
    const {userPasswordsList, showPasswords, userSearchVal} = this.state
    const count = userPasswordsList.length

    const filteredProjectItems = userPasswordsList.filter(each =>
      each.website.toLowerCase().includes(userSearchVal),
    )

    const len = filteredProjectItems.length

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo-img"
        />
        {this.renderFormFelid()}
        <div className="YourPassword-container">
          <div className="password-inner-container">
            <div className="your-count-container">
              <h1 className="your-password"> Your Passwords</h1>
              <p className="password-count"> {count} </p>
            </div>

            <div className="input-container-1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="input-img-1"
                alt="search"
              />
              <hr className="line-1" />
              <input
                onChange={this.searchForPassword}
                className="input-element-1"
                type="search"
                placeholder="Search"
              />
            </div>
          </div>

          <hr className="hr-line" />

          <div className="show-password-container">
            <input
              id="chechbox-el"
              onChange={this.toggleShowPassword}
              type="checkbox"
              alt="checkbox"
            />
            <label htmlFor="chechbox-el" className="show-passwords">
              {' '}
              Show Passwords{' '}
            </label>
          </div>

          {count === 0 || len === 0 ? (
            <EmptyView />
          ) : (
            <ul className="password-main-container">
              {filteredProjectItems.map(each => (
                <YourPassword
                  item={each}
                  key={each.id}
                  showPasswords={showPasswords}
                  removeItem={this.removeItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
