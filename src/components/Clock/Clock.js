import './Clock.css';
import { useState, useEffect} from 'react';
import { AiTwotoneCalendar } from 'react-icons/ai';


export default function Clock(){
	
	const [dateState, setDateState] = useState(new Date());

	useEffect(() => {
		setInterval(() => {
			setDateState(new Date());
		}, 30000);
	}, []);

	let day = dateState.toLocaleDateString('en-GB', { day: 'numeric'});
	let month = dateState.toLocaleDateString('en-GB', { month: 'short'});
	let year = dateState.toLocaleDateString('en-GB', { year: 'numeric'});

	return <div className='clock-wrapper'>
		<div className='date-wrapper'>
			<div>
				<p className='day'>{day}</p>
				<div>
					<p className='month'>{month}</p>
					<p className='year'>{year}</p>
				</div>
			</div>
			<div>
				<AiTwotoneCalendar className='calendar-icon'/>
			</div>
		</div>
		<div className='time-wrapper'>
			<p className='time'>
		        {dateState.toLocaleString('en-US', {
		            hour: 'numeric',
		            minute: 'numeric',
		            hour12: true,
		        })}
		    </p>
		</div>
   	</div>	
}