import {useFetch} from "../hooks/useFetch.jsx"
import './Home.css'
import {Link} from "react-router-dom";
import SpinnerLoader from "../utils/SpinnerLoader.jsx";

const Home = () => {
    const {data, loading, error} = useFetch("https://checkitinvestments.com/articles")

    return (
        <div className="Home">
            <h2>Articles</h2>

            {loading &&
                <div className="articles">
                    <div className="loader"><SpinnerLoader/></div>
                </div>}
            {error && <div className="trip-list"><p>An error occurred</p></div>}
            {!data &&
                <div className="articles">No data found</div>}

            {data && !loading && !error && data.articles.map((article) => (
                <div key={article.id} className="card">
                    <h3>{article.title}</h3>
                    {/*<p>{article.body}</p>*/}
                    <p className="author">Authored by {article.author}</p>

                    <Link to={`/article/${article.id}`}>Read more  →</Link>
                </div>
            ))
            }

        </div>
    );
};

export default Home;