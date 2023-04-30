import './index.css'

const EmptyView = () => {
  const emptyImg =
    'https://assets.ccbp.in/frontend/react-js/no-passwords-img.png'

  return (
    <div className="no-password-container">
      <img src={emptyImg} alt="no passwords" className="no-passwords" />
      <p className="no-pass-para"> No Passwords </p>
    </div>
  )
}

export default EmptyView
