import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header({ search, onChangeSearch }) {
  return (
    <header id="header" className="py-3 bg-white shadow position-sticky sticky-top">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="header-navigation d-flex justify-content-end align-items-center">
              <div className="search-bar">
                <div className="form-search">
                  <span className="icon"><FontAwesomeIcon icon="search" /></span>
                  <input type="search" className="form-control" placeholder="Search" value={search} onChange={onChangeSearch} />
                </div>
              </div>
              <nav id="mainmenu" className="ms-3">
                <ul className="d-flex justify-content-end m-0">
                  <li><a href="#"><FontAwesomeIcon icon="home" /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon="bell" /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon="user-circle" /></a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}