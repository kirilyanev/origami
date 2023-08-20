import { Component } from 'react';
import { Route, Link, NavLink, Redirect, Switch, Routes } from 'react-router-dom';

import * as postService from './services/postService.js';
// import { getAll } from './services/postService.js';

import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import About from './components/About';
import ContactUs from './components/ContactUs';
import style from './App.module.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            selectedPost: null,
        };

        this.onMenuItemClick = this.onMenuItemClick.bind(this);
    }

    componentDidMount() {
        postService.getAll()
            .then(posts => {
                console.log('postove-' + posts);
                this.setState({ posts });
            });
    }

    onMenuItemClick(id) {
        this.setState({ selectedPost: id });
    }

    getPosts() {
        if (!this.state.selectedPost) {
            return this.state.posts;
        } else {
            let result = [this.state.posts.find(x => x.id === this.state.selectedPost)];
            return result;
        }
    }

    render() {
        return (
            <div className={style.app}>
                <Header />

                <div className={style.container}>
                    <Menu onMenuItemClick={this.onMenuItemClick} />

                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path='/contact-us' element={<ContactUs />} />
                        <Route path='/' exact element={<Main posts={this.getPosts()} />} />
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;


// function App() {
//   return (
//     <div className={style.app}>
//       <Header />

//       <div className={style.container}>
//         <Menu />

//         <Main />
//       </div>
//     </div>
//   );
// }