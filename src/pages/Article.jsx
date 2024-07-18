import {useFetch} from "../hooks/useFetch.jsx";
import {NavLink, useParams, useNavigate} from "react-router-dom";
import SpinnerLoader from "../utils/SpinnerLoader.jsx";
import {useEffect} from "react";


const Article = () => {
    const {id} = useParams();
    const {data, loading, error} = useFetch("https://checkitinvestments.com/articles/" + id.toString())
    const navigate = useNavigate()
    useEffect(() => {
        if (error) {
            // Navigate to a new route
            //navigate(-1); //go back
            setTimeout(() => {
                navigate('/');
            }, 4000)

        }
    }, [error, navigate]);

    return (
        <div className="article">

            {loading &&
                <div className="articles">
                    <div className="loader"><SpinnerLoader/></div>
                </div>}
            {error && data && <div className="trip-list"><p>{data.error}</p></div>}
            {error && !data && <div className="trip-list"><p>We could not fetch the data</p></div>}

            {!data &&
                <div className="articles">No data found</div>}

            {data && !loading && !error &&
                <div key={data.id} className="card">
                    <h3>{data.title}</h3>
                    <p className="author">Author: {data.author}</p>
                    <p>{data.body}</p>


                    <NavLink to="/">Go Back ↑</NavLink>
                </div>


            }


        </div>
    );
};

export default Article;