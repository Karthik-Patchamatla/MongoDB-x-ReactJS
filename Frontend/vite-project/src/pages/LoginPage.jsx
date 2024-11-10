import { Link } from 'react-router-dom';

export default function LoginPage() {
    return (
        <div>
            <form action="">
                <h1 className="text-xl font-semibold mb-5">LoginPage</h1>
                <div><input type="text" placeholder="email" /></div>
                <div><input type="password" placeholder="password" /></div>
                <div><button type="submit">Login</button></div>
                <p>Already have an account <Link to='/register'>Register</Link></p>
            </form>
        </div>
    );
}