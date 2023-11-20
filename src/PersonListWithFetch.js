import React, { useState, useEffect } from 'react';

const PersonListWithFetch = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        console.log(data);
        setPersons(data.results);
      } catch (error) {
        console.error('Error fetching data with fetch:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Person List with Fetch</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.login.uuid}>{person.name.first} {person.name.last}</li>
        ))}
      </ul>
    </div>
  );
};

export default PersonListWithFetch;
