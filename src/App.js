import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [name, setName] = useState(1);

  const changeNAme = () => {
    setName(name + 1);
  };

  useEffect(() => {
    console.log('run only on intiative');
  }, []);

  useEffect(() => {
    
    console.log('calling useeffect');
  });

  useEffect(() => {
    console.log('print only name dependent');
  }, [name]);

  return (
    <>
      {name === 10 && <>no data</>}
      {name <= 9 && (
        <>
          <div>
            <h1>{name}</h1>
          </div>
          <div onClick={changeNAme}>change</div>
        </>
      )}
    </>
  );
}
