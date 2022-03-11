import './AddTodoList.css';
import CSSTransition from 'react-transition-group/CSSTransition';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import AuthContext from '../../task/auth-context';
import {Fragment, useContext} from 'react';

const AddTodoList = (props) => {

	const taskCtx = useContext(AuthContext);
	const {onChange, listTask, item, taskList, onReset, onAdd} = taskCtx;

	const animationTiming = {
	    enter: 400,
	    exit: 400
	}

	const onAddTaskHandler = () => {
		onAdd();
		props.close();
		onReset();
	}
	const updateHandler = () => {
		listTask[props.taskNo].taskName = item.taskName;
		listTask[props.taskNo].detail = item.detail;
		props.close();
	}

	return <CSSTransition        
		in={props.show} 
        mountOnEnter 
        unmountOnExit
        timeout={animationTiming} 
        classNames={{
            enter: '',
            enterActive: 'ModalOpen',
            exit: '',
            exitActive: 'ModalClose'
        }}>
        <div className='addTodoList-wrapper'>
			{props.action !== 'edit' 
				? <Fragment>
					<p className='header-title'>Create To Do</p>
					<p className='header-sub-title'>Create your own task and make it your goal!</p>
				</Fragment>
				: <Fragment>
					<p className='header-title'>Update To Do</p>
					<p className='header-sub-title'>Update your task and make it a new goal!</p>
				</Fragment>}
					
			<form>
				<Input
					id='name'
					label='Task Name:'
					type='text'
					name='taskName'
					value={item.taskName}
					inputChangeHandler={onChange}
					placeholder='Enter task name'
				/>
				<Input
					id='detail'
					label='Detail:'
					type='text'
					name='detail'
					value={item.detail}
					inputChangeHandler={onChange}
					placeholder='Enter task details'
				/>
				<div className='btn-wrapper'>
					<Button
						type='button'
						className='btn-close'
						onClick={props.close}
						value=''
						disabled={false}
						label='Close'/>
					{props.action === 'edit' 
						? <Button
							type='button'
							className='btn-create'
							onClick={updateHandler}
							value=''
							disabled={false}
							label='Update'/>
						: <Button
							type='button'
							className='btn-create'
							onClick={onAddTaskHandler}
							value=''
							disabled={false}
							label='Create'/>}
				</div>
			</form>
		</div>
	</CSSTransition>
}

export default AddTodoList;