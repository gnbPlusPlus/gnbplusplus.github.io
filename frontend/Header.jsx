import "./Header.css";

// Component that returns the structure of the Home page's header visual
export default function Header() {
    return (
        <header className="app_header">
            <h1 className="app_logo">AdoptMePls!</h1>
            <h2 className="app_slogan"><em>So many pets are waiting for their forever homes. Find your next best friend today!</em></h2>
        </header>
    );
}