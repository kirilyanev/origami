// import {Fragment} from 'react';

import Post from '../Post/Post.js';
import './Main.css';

const Main = ({
    posts
}) => {
    console.log(posts);
    return (
        <main className="main-container">
            <h1>Sooome Heading</h1>

            <div className="posts">

                {posts.map(x =>
                    <Post
                        key={x._id}
                        content={x.content}
                        author={x.author}
                    />
                )}
            </div>
        </main>
    );
};

export default Main;
