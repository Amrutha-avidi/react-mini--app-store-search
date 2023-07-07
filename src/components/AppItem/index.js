// Write your code here
// Write your code here

import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="appItem-container">
      <img className="appItem-image" src={imageUrl} alt={appName} />
      <p className="appItem-name">{appName}</p>
    </li>
  )
}
export default AppItem
