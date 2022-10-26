function Children (props) {

    const { name, onNameChange } = props;

    return(
        <div> 
            Child Component
            <input type={"text"} value={name} onChange={(e) => onNameChange(e.target.value)} />
        </div>
    );
}

export default Children;