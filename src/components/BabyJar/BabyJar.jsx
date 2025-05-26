import './BabyJar.css'

function BabyJar(props) {

    return (
        <a href={props.link}>
            <figure>
                <img src={props.image} alt="baby specimen in a jar" class="baby" />
                <figcaption>{props.caption}</figcaption>
            </figure>
        </a>
    )
}

export default BabyJar
