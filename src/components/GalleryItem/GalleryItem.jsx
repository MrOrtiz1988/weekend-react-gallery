function ListItem (props) {
    return (
        <>
         <img src={props.url}/> 
         <br></br> 
         <button>Love it!</button>
         <p>0 people like this 😞</p> 
        </>
    )
}

export default ListItem;