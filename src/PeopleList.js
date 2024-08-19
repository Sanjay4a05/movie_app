import React, { useState, useEffect } from 'react';
import './PeopleList.css';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDRkMTAyOTBkNmNiN2EyODBjNzM3MDVkNmI2NDNkNCIsIm5iZiI6MTcyMzQ1MTA3NC4yMTc5OTEsInN1YiI6IjY2YjMxOWI0OTE0NzA1ZTc5MDZmNzFkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.01csjL9h7I-Dp5b8DxbKid78mjn-kcjVL1G40nrWSv4';

const PeopleList = () => {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/person/popular', {
                    headers: {
                        Authorization: `Bearer ${API_KEY}`,
                        'Content-Type': 'application/json;charset=utf-8'
                    }
                });
                const data = await response.json();
                setPeople(data.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching popular people:', error);
                setLoading(false);
            }
        };

        fetchPeople();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="people-list">
            {people.map((person) => (
                <div key={person.id} className="person-card">
                    <img
                        src={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
                        alt={person.name}
                    />
                    <h3>{person.name}</h3>
                    <p>Known for: {person.known_for_department}</p>
                </div>
            ))}
        </div>
    );
};

export default PeopleList;
