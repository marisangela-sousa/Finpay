import "./button.css"

const PrimaryButton = ({buttonName}) => {
    return(
        <button className="buttons primary-button">
            <a>{buttonName}</a>
        </button>
    );
}

export default PrimaryButton;