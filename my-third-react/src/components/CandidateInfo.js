import Voting from "./Voting";


function CandidateInfo({img, name, age, party}) { 

    const imgStyle = {
       width: "300px"
    }

    return (
        <div>
            <img style={imgStyle} src={img}></img>
            <h1>{name}</h1>
            <p>{age}</p>
            <p>{party}</p>
            <Voting name={name} />
        </div>
     
    )
}

CandidateInfo.defaultProps = {
    age: "(secret)"
}


export default CandidateInfo;