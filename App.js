import React from 'react';
import ReactDOM from 'react-dom';
import data from './data';
import SingleQuestion from './Question'; // Import SingleQuestion component
import './index.css';


 
 

function App() {
  return (
    <main>
      <div className="container">
        <h3>FAQ</h3>
        <section className="info">
          {data.map((question) => (
            <SingleQuestion
              title={question.title}
              info={question.info}
              key={question.id}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

const AppLayout = () => {
  return (
    <div className="app">
 <App/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
