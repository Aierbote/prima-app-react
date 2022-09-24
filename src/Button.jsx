import "./Button.css"

export default function Button (props) {
    return (
        <button className={props.whichType}>{props.children}</button>
    )
};