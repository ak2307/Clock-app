import React from 'react';
import Counter from './Counter';
import Clock from './Clock';
import Timer from './Timer';

function MainClock() {
    return (
        <div>
            <div>
                <Clock title="Vancouver" datediff={0} />
                <hr />
            </div>
            <div>
                <Counter />
                <hr />
                <Timer />
            </div>
        </div>
    );
}

export default MainClock;