export default function Cards(props){
    return(
        <article className="card">
            <div className="icons">{props.icon}</div>
            <h2 className="text">{props.title}</h2>
            <p className="tagline">{props.description}</p>
        </article>
    )
}