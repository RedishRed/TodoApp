import './Header.css';
import Clock from '../Clock/Clock';
import Button from '../UI/Button/Button';
import AddTodoList from '../List/AddTodoList';
import Backdrop from '../UI/Modal/Backdrop';
import {useState} from 'react';

export default function Header(){
	let [modalOpen, setModalOpen] = useState(false);
	const showModal = () => setModalOpen(true)
	const closeModal = () => setModalOpen(false)

	const modalHandler = () => {
		console.log('click');
	}

	return <div>
		<Backdrop show={modalOpen}/>
		<div className='header-wrapper'>
			<Clock/>
			<p className='title'> Tasks</p>	
			<Button
				className='btn-add'
				type='button'
				onClick={showModal}
				label='+'
				value=''
			/>
		</div>
	</div>
}