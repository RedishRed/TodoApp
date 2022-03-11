import './Backdrop.css';

export default function Backrop(props){
    const cssClasses = [
        'Backdrop', 
        props.show
            ? 'BackdropOpen'
            : 'BackdropClose'
    ]; 
	return <div className={cssClasses.join(' ')}></div>
}