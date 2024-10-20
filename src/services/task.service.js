const addTask = (task, taskList, setTaskList) => {
	setTaskList([...taskList, task])
}

const remove = (task, taskList, setTaskList) => {
	const newList = taskList.filter(el => el.id !== task.id)
	setTaskList(newList)
};

const changeList = (task, fromRemoveTaskList, setRemoveTaskList, toAddTaskList, setToAddTaskList) => {
	remove(task, fromRemoveTaskList, setRemoveTaskList)
	addTask(task, toAddTaskList, setToAddTaskList)
}

export {
	remove,
	changeList,
	addTask,
}