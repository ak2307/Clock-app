import React from 'react';
import Clock from './Clock';
import '../Customization/worldclock.css';

function WorldClock () {
    return (
        <div className='world-clock'>
            <Clock title="London" datediff={8} />
            <Clock title="New Delhi" datediff={12.5} />
            <Clock title ="New York" datediff={3} />
            <Clock title="Tokyo" datediff={16} />
        </div>
    );
}

export default WorldClock;