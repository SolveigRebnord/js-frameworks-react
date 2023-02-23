function Headings({color, fontSize, name, age}) { //destructing

    const headingStyle = {
        color: color || "red",
        fontSize: fontSize + "px" || "32px"
    }

    return (
            <h1 style={headingStyle}>Hei {name || "there stranger"}, {age || "(no age)"}</h1>
    )
}

Headings.defaultProps = {
    age: "(secret)" // denne vinner over den i funksjonen
}


export default Headings;