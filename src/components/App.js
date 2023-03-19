import React from 'react'

const App = () => {
  const relatives = [
    { id: "relativeListItem1", name: "John" },
    { id: "relativeListItem2", name: "Jane" },
    { id: "relativeListItem3", name: "Bob" },
    { id: "relativeListItem4", name: "Alice" }
  ];
  return (
    <div id="main">
               {/* Do not remove the main div */}
              


    <ol key="relativeList">
      {relatives.map(relative => (
        <li key={relative.id}>{relative.name}</li>
      ))}
    </ol>
  

    </div>
  )
}

export default App
