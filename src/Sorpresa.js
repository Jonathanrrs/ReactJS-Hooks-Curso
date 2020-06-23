import React, {useEffect} from 'react';

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