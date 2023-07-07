// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const updateTab = () => {
    clickTabItem(tabId)
  }

  const activeTabStyle = isActive ? 'active-tab' : ''

  return (
    <li>
      <button
        type="button"
        onClick={updateTab}
        className={`tab-text ${activeTabStyle}`}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
