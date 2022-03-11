import './TodoList.css';
import {Fragment, useEffect, useState, useContext} from 'react';
import Container from '../UI/Container/Container';
import AuthContext from '../../task/auth-context';
import Header from '../Layout/Header';
import AddTodoList from '../List/AddTodoList';
import Backdrop from '../UI/Modal/Backdrop';
import Button from '../UI/Button/Button';
import {AiOutlineDelete} from 'react-icons/ai';

const TodoList = props => {
	// props values... 
	const { ListItems, onClickItem } = props; 
	// task context... 
	const taskCtx = useContext(AuthContext);
	const {onChange, item, clicked, listTask, onDelete, onReset, setItem} = taskCtx;

	let [toUpdate, setToUpdate] = useState();
	let [btnClick, setBtnClick] = useState(false);
	const [taskList, setTaskList] = useState([]);
	
	// click function for getting the item object and event...
	const clickHandler = e => {
		let item = e.target.value;
		onClickItem(item, e);
	};

	// delete function for getting id...
	const onDeleteHandler = e => {
		const id= parseInt(e.target.value);
		onDelete(id);
		setBtnClick(!btnClick);
	};

	// modal for update function...
	let [modalOpen, setModalOpen] = useState(false);
	
	const showModal = e => {
		const id = parseInt(e.target.value);
		setToUpdate(id);
		const found = ListItems.filter((el, index) => index === id);
		setItem(found[0]);
		
		// check if the task is done 
		if(found[0].isDone) onClickItem(found,e);

		setModalOpen(true);
	}

	const closeModal = () => {
		setModalOpen(false);
		onReset();
	};

	// useeffect for effectively updating the task list... 
	useEffect(() => {
		const Items = ListItems.map((item, index) => {
			return <div key={index} className='list-wrapper border-list'>
				<div>
					<Button
						type='button'
						className='btn-edit'
						onClick={showModal}
						disabled={false}
						value={index}
						label={item.taskName}/>

					<p className='sub-detail'>{item.detail}</p>
					{item.isDone 
						? <p className='sub-complete'>Complete</p>
						: <p className='sub-in-progress'>In-progress</p>}
				</div>
				<button 
						type='button' 
						className='btn-delete' 
						value={index}
						onClick={onDeleteHandler}><AiOutlineDelete className='icon-delete'/></button>	

			</div>
		});
		setTaskList(Items)
	}, [listTask,btnClick, modalOpen])


	return <Container>
		<Header/>
		<Backdrop show={modalOpen}/>
		<AddTodoList show={modalOpen} taskNo={toUpdate} close={closeModal} action='edit'/>
		{taskList.length > 0 
				? <div className='list-container'>{taskList}</div>
				: <div className='list-container'>
					<p> You're all good. Your task is empty! </p>
				</div>}	
	</Container>
}

export default TodoList;