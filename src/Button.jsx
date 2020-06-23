import React, { useContext } from 'react';
import {ThemeContext} from './App.js';

export default (props) => {
    const context = useContext(ThemeContext);
    return (
        <button
        style={{
            backgroundColor: context.backgroundColor,
            color: context.color
        }}
        > Click me
        </button>
    )
}