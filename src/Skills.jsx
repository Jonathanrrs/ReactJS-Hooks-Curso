import React, { useContext } from 'react';
import { FormContext } from './Form';

export default (props) => {
    const context = useContext(FormContext);

    const addToList = (value, list) => {
        context.setSkills([value].concat(context.skills))
    }

    const removeFromList = (value, list) => context.setSkills(context.skills.filter(v => v !== value))
    return (
        <div>
            <p>Email: {context.email}</p>
            <label>
                <input
                    type="checkbox"
                    name="Likes[]"
                    onChange= {(ev) => ev.target.checked ? addToList('Ruby') : removeFromList('Ruby')}
                >
                </input>Ruby
            </label>
            <label>
            <p>Password: {context.password}</p>
                <input
                    type="checkbox"
                    name="Likes[]"
                    onChange= {(ev) => ev.target.checked ? addToList('Javascript') : removeFromList('Javascript')}
                >
                </input>Javascript
            </label>
        </div>
    )
}