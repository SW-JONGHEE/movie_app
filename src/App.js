import React from 'react';
import PropTypes from 'prop-types';

function Food({name, rating}) {
    return (
        <div>
            <div>I Love {name}</div>
            <h4>{rating}/5.0</h4>
        </div>
    );
}

function renderFood(dish) {
    return <Food key={dish.id} name={dish.name} rating={dish.rating}/>
}

const foodILike = [
    {
        id:1,
        name:'kimbap',
        image: '',
        rating: 5
    },
    {
        id:2,
        name:'cupnoodle',
        image: '',
        rating: 4.9
    },
    {
        id:3,
        name:'coffe',
        image: '',
        rating: 5.5
    },
    {
        id:4,
        name:'ia',
        image: '',
        rating: 3
    },
    {
        id:5,
        name:'il',
        image: '',
        rating: 4
    },
];

Food.prototypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number,
};

function App() {
  return (
    <div>
        <h1>Hello!!</h1>
        {foodILike.map(renderFood)}
    </div>

  );
}

export default App;
