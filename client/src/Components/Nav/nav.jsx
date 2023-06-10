import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/searchBar';

export default function Nav(props) {
    return (
        <div>
            <h2>Introduce un nombre de pais guey</h2>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
};