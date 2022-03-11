import './TodoList.css';
import {Fragment, useEffect, useState, useContext} from 'react';
import Container from '../UI/Container/Container';
import AuthContext from '../../task/auth-context';
import Header from '../Layout/Header';

const TodoList = props => {
	// props values... 
	const { ListItems, onClickItem } = props; 
	// task context... 
	const taskCtx = useContext(AuthContext);

	const Items = ListItems.map((item, index) => {
		return <div key={index} className='list-wrapper border-list'>
			<p>{item.taskName}</p>
			<p className='sub-detail'>{item.detail}</p>
			{item.isDone 
				? <p className='sub-complete'>Complete</p>
				: <p className='sub-in-progress'>In-progress</p>}

		</div>
	});
	return <Container>
		<Header/>
		{Items}		
	</Container>
}

export default TodoList;