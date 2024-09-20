import './style.css'

export default function Section({ id,classeName, title, children }) {
    return (
        <section id={id} className={classeName}>
            <header className="header-section">
                <h2> {title} </h2>
            </header>
            {children}
        </section>
    );
}