import { useLocation, useNavigate, useParams} from 'react-router-dom';

const About = () => {
    const params = useParams();
    return (
        <main className="main-container">
            <h1>About {params.name} Page</h1>
        </main>
    );
};

export default About;