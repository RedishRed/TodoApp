import './Input.css';

const Input = (props) => {
    
    let htmlFor=`#${props.id}`;

    return <div> 
        <label htmlFor={htmlFor}>{props.label}</label>
        <input 
            type={props.type}
            name={props.name}
            value={props.value}
            id={props.id}
            onChange={props.inputChangeHandler} 
            placeholder={props.placeholder}/>
    </div>
}

export default Input;