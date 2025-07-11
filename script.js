document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const input = document.getElementById('task-input');
    const taskText = input.value.trim();
    
    if (taskText === '') return;
    
    const li = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '×';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
    
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    document.getElementById('task-list').appendChild(li);
    
    input.value = '';
    input.focus();
});