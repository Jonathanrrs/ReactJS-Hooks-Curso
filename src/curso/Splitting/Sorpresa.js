import React, {useEffect} from 'react';

//Imports dinamicos 
export default (props) => {
    useEffect(() => {
        import ('./hello').then(mod => mod.default())
      }, []);
    return (
        <div>
            <p>Sorpresa wuhooo!</p>
        </div>
    )
}