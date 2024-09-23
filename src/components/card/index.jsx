import "./style.css";

export default function Card({ className, title, description }) {
    return (
        <>
            <div className={className}>
                <h1>{title}</h1>
                <div>{description}</div> 
            </div>
        </>
    );
}
