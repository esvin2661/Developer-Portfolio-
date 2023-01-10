import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <Link href = "/about">
                <a>About</a>
            </Link>
            <p>Welcome to the home page!</p>
        </div>
    );
}