import './index.css'

const YourPassword = props => {
  const {item, showPasswords, removeItem} = props
  const {id, website, userName, password} = item
  const fitrstLetter = userName[0].toUpperCase()

  const onClickDeleteIcon = () => {
    removeItem(id)
  }

  const starImg =
    'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png'

  const deleteIcon =
    'https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png'

  return (
    <li className="password-container-1">
      <p className="first-letter"> {fitrstLetter} </p>
      <div className="domain-name-star-container">
        <p className="doamin-name"> {website} </p>
        <p className="name"> {userName} </p>
        {showPasswords ? (
          <p className="password-text"> {password} </p>
        ) : (
          <img src={starImg} alt="stars" className="star-img" />
        )}
      </div>
      <button
        type="button"
        onClick={onClickDeleteIcon}
        data-testid="delete"
        className="button-1"
      >
        <img src={deleteIcon} alt="delete-icon" className="delete-icon" />
      </button>
    </li>
  )
}

export default YourPassword
