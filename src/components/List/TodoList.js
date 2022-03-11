import './TodoList.css';
import {Fragment, useEffect, useState, useContext} from 'react';
import Container from '../UI/Container/Container';
import AuthContext from '../../task/auth-context';
import Header from '../Layout/Header';
import {AiOutlineDelete} from 'react-icons/ai';

const TodoList = props => {
	// props values... 
	const { ListItems, onClickItem } = props; 
	// task context... 
	const taskCtx = useContext(AuthContext);
	const {onChange, item, clicked, listTask, onDelete, onReset, setItem} = taskCtx;

	let [btnClick, setBtnClick] = useState(false);
	const [taskList, setTaskList] = useState([]);
	const clickHandler = e => {
		let item = e.target.value;
		onClickItem(item, e);
	};

	const onDeleteHandler = e => {
		const id= parseInt(e.target.value);
		onDelete(id);
		setBtnClick(!btnClick);
	};

	useEffect(() => {
		const Items = ListItems.map((item, index) => {
			return <div key={index} className='list-wrapper border-list'>
				<div>
					<p>{item.taskName}</p>
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
	}, [listTask,btnClick])
	return <Container>
		<Header/>
		{taskList.length > 0 
				? <div className='list-container'>{taskList}</div>
				: <div className='list-container'>
					<p> You're all good. Your task is empty! </p>
				</div>}	
	</Container>
}

export default TodoList;