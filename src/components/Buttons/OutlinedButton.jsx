import "./button.css"

const OutlinedButton = ({buttonName, color}) => {
    return(
        <button className="buttons outlined-button">
            <a style={{color: color}}>{buttonName}</a>
        </button>
    );
}

export default OutlinedButton;