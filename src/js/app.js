
let dragSrcElement = null;

function handleDragStart(e) {
    dragSrcElement = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragEnter(e) {
    this.classList.add('over');
}

function handleDragLeave(e) {
    this.classList.remove('over');
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }

    if (dragSrcElement !== this) {
        dragSrcElement.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }

    return false;
}

function handleDragEnd(e) {
    this.classList.remove('over');
}

const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task');
        taskItem.draggable = true;
        taskItem.innerHTML = taskText;

        taskItem.addEventListener('dragstart', handleDragStart);
        taskItem.addEventListener('dragenter', handleDragEnter);
        taskItem.addEventListener('dragover', handleDragOver);
        taskItem.addEventListener('dragleave', handleDragLeave);
        taskItem.addEventListener('drop', handleDrop);
        taskItem.addEventListener('dragend', handleDragEnd);

        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});
