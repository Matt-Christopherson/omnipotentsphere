import './InterestBox.css'

function InterestBox(props) {

  return (
        <figure className="interest-box">
          <img className="interest-image" src={props.image} alt={props.altText}
            title={props.altText} />
          <figcaption>{props.caption}</figcaption>
        </figure>
  )
}

export default InterestBox
