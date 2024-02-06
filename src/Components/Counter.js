import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
        return (
            <form onSubmit={()=>setCount(0)}>
                <label>Count the Laps
                <br />
                {count}
                <br />
                <input type="button" value="+" onClick={() => setCount(count+1)} />
                <br/>
                <input type="button" value="-" onClick={() => setCount(count-1)} />
                <br/>
                <input type='submit' value='Reset' />
                </label>
            </form>
        );
}

export default Counter;