import React from 'react'

const App = () => {
  const relatives = [
    { id: "relativeListItem1", name: "John" },
    { id: "relativeListItem2", name: "Jane" },
    { id: "relativeListItem3", name: "Bob" },
    { id: "relativeListItem4", name: "Alice" }
  ];
  objectLength = Object.keys(relatives).length;
  return (
    <div id="main">
               {/* Do not remove the main div */}
    <ol key="relativeList">
      {relatives.map(relative => (
        <li key={relative.id}>{relative.name}</li>
      ))}
    </ol>
    <h1>{objectLength}</h1>
  

    </div>
  )
}

export default App
