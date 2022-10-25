import './index.css'

const PreviousItem = props => {
  const {details, deleteButton} = props
  const {id, logoUrl, timeAccessed, title, domainUrl} = details

  const onDeleteButton = () => {
    deleteButton(id)
  }

  return (
    <div>
      <li className="search-list">
        <div className="box-1">
          <p className="class-time">{timeAccessed}</p>
          <div className="sub-box">
            <img className="logo-image" src={logoUrl} alt="domain logo" />
            <p className="title-name">{title}</p>

            <p className="url-link">{domainUrl}</p>
          </div>
        </div>
        <div className="box-2">
          <button
            testid="delete"
            className="deleteButton"
            onClick={onDeleteButton}
            type="button"
          >
            <img
              className="delete-icon"
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    </div>
  )
}

export default PreviousItem
