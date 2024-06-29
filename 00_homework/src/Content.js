import React, { useState } from 'react';

function Content() {

        const removeTodo = id => {
            const removedList = todos.filter(todo => todo.id !== id);
            setTodos(removedList);
        }

        const onChangeHandler = e => {
            const changeIsDoneList = todos.map(todo => {
                if (todo.id === parseInt(e.target.id)) {
                    todo.isDone = e.target.checked;
                }
                return todo;
            });
            setTodos(changeIsDoneList);
        }

        return (
            <>
                {todos.map(todo => (
                    <p key={todo.id}>
                        <input 
                            type="checkbox" 
                            id={todo.id} 
                            onChange={onChangeHandler} 
                            checked={todo.isDone}
                        />
                        <label 
                            htmlFor={todo.id} 
                            style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}
                        >
                            {todo.description}
                        </label>
                        <button onClick={() => removeTodo(todo.id)}>x</button>  
                    </p>
                ))}
            </>
        );
 }

    function TodoList() {

        const [todos, setTodos] = useState([
            { id: 1, description: '할일 목록을 추가해주세요', isDone: false }
        ]);

        const [inputText, setInputText] = useState('');
        const [nextId, setNextId] = useState(2);

        const onChangeHandler = e => {
            setInputText(e.target.value);
        }

        const onClickHandler = () => {
            const changeTodos = todos.concat({
                id: nextId,
                description: inputText,
                isDone: false
            });

            setInputText('');
            setNextId(nextId + 1);
            setTodos(changeTodos);
        }

        return (
            <>
                <h3>ToDo-List</h3>  
                <div className="todo-list">
                    <TodoItems todos={todos} setTodos={setTodos} />
                </div>
                <div className="append-list">
                    <input 
                        type="text"
                        value={inputText}
                        onChange={onChangeHandler}
                    />
                    <button onClick={onClickHandler}>
                        추가하기
                    </button>    
                </div>
            </>
        );
    }

    function Content() {
        return (
            <div className="content">
                <TodoList />    
            </div>
        );
    }
}

export default Content;