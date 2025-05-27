import './BabyJar.css'

function BabyJar({image, caption, onSelect}) {
    return (
        <button onClick={onSelect}>
            <figure>
                <img src={image} alt="baby specimen in a jar" className="baby" />
                <figcaption>{caption}</figcaption>
            </figure>
        </button>
    )
}

export default BabyJar
