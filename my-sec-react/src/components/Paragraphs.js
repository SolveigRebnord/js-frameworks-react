function Paragraphs(props) {
    return (
            <div>
                <p>{props.para || "Im the default p yo"}</p>
            </div>
            
    )
}

Paragraphs.defaultProps = {
    para: "Im another default p yo" // denne vinner over den i funksjonen
}

export default Paragraphs;