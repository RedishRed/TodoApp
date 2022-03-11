import './Button.css';

const Button = (props) => {

	const btnStyle = props.disabled? 'disabed':'btn';

	return <button 
		type={props.type}
		className={props.className}
		onClick={props.onClick}
		value={props.value}
		disabled={props.disabled}>
		{props.label}
	</button>
}

export default Button;