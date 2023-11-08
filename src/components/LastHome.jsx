import React, {useEffect} from 'react';

const LastHome = () => {
    let date =new Date().getDate()

    return (
        <div>
            <p>React is a framework that employs Webpack to automatically compile React, JSX,
                and ES6 code while handling CSS file prefixes. React is a JavaScript-based UI
                development library. Although React is a library rather than a language, it is
                widely used in web development. The library first appeared in May 2013 and is
                now one of the most commonly used frontend libraries for web development.</p>

            <h2>Today's date is {date} </h2>
        </div>
    );
};

export default LastHome;