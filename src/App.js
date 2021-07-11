import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const[people , setPeople] = useState(data);
  return(
    <section className="background">
      <div className="overlay"></div>
      <main className="employee-content">
      <h1>Todays hired Employees</h1> 
        <div className="list-container">
          <div className="list-content">
            <p>{people.length} employees hired today</p>
            <h2>Members list</h2>
            <List people={people} setPeople={()=>setPeople()}/>
            <button onClick={()=> setPeople([])}>Clear All</button>
          </div>
        </div>
      </main>
  </section>
  );
  
}

export default App;