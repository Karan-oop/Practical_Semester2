import React from 'react'

import UserProfile from './UserProfile'
import FetchAPI from './FetchAPI'

const App =() => {
  return (
    <div>
      <h1>Parent Component</h1>

      <UserProfile name="Karan Chandra Kothari"
      age={19}
      />

      <h1>Fetch API Example</h1>

      <FetchAPI />

    </div>
  )
}

export default App  