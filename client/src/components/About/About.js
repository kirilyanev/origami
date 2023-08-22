import { useLocation, useNavigate, useParams } from 'react-router-dom';

const About = () => {
    const params = useParams();
    const pathname = useLocation().pathname;

    return (
        <main className="main-container">
            <h1>About {params.name} Page</h1>

            {pathname === '/about/pesho' ? 
            <h2>Pesho is the best!!!</h2>
            : ''
            }
        </main>
    );
};

export default About;