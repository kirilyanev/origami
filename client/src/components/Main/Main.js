// import {Fragment} from 'react';

import './Main.css';

const Main = ({
    posts
}) => {
    console.log(posts);
    return (
        <main className="main-container">
            <h1>Sooome Heading</h1>

            {posts.map(x => 
                <p>{x.content}</p>
            )}
        </main>
    );
};

export default Main;
