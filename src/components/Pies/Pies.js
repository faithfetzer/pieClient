import React, {useState, useEffect} from 'react';
import './Pies.css';
import DisplayPies from './Pie/Pie';

const Pies = (props) => {
    const [pies, setPies] = useState([]);

    const pie = [
        {
            nameOfPie: 'pumpkin',
            baseOfPie: 'puree',
            crust: 'pastry',
            timeToBake: 50,
            servings: 8,
            rating: 5
        },
        {
            nameOfPie: 'apple',
            baseOfPie: 'fruit',
            crust: 'graham cracker',
            timeToBake: 80,
            servings: 10,
            rating: 5
        },
        {
            nameOfPie: 'chess',
            baseOfPie: 'chocolate',
            crust: 'butter',
            timeToBake: 40,
            servings: 8,
            rating: 5
        },
        {
            nameOfPie: 'shephards',
            baseOfPie: 'lamb',
            crust: 'potato',
            timeToBake: 90,
            servings: 8,
            rating: 3
        },
    ]
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name of Pie</th>
                        <th>Base of Pie</th>
                        <th>Crust</th>
                        <th>Bake Time</th>
                        <th>Servings</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <DisplayPies pie={pie}/>
                </tbody>
            </table>
        </div>
    )
}

export default Pies;