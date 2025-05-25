import {Link} from 'react-router'
const NoPage = () => {
    return (
        <div>
            <h1>404</h1>
            <Link to={'/'}><button>Kembali Ke home</button></Link>
        </div>
    )
}

export default NoPage