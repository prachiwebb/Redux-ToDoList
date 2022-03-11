import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, clearTodo } from '../redux/action';
import './TodoList.css';

const TodoList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducer.list);
  const [inputData, setInputData] = useState('');
  const onInputChange = (e) => {
    setInputData(e.target.value);
  };
  return (
    <div className='main-div'>
      <div className='child-div'>
        <figure>
          <figcaption style={{ color: 'white' }}>
            Add Your List Here ✌
          </figcaption>
        </figure>
        <div className='addItems'>
          <input
            type='text'
            placeholder='✍ Add Items...'
            value={inputData}
            onChange={(e) => onInputChange(e)}
          />
          <i
            className='fa fa-plus add-btn'
            onClick={() => {
              //   e.stopPropagation();

              dispatch(addTodo(inputData), setInputData(''));
            }}
          ></i>
        </div>
        <div className='showItems'>
          {list.map((elem) => {
            return (
              <div className='eachItem' key={elem.id}>
                <h3>{elem.data}</h3>
                <div className='todo-btn'>
                  <i
                    className='far fa-trash-alt add-btn'
                    onClick={() => {
                      dispatch(deleteTodo(elem.id));
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className='showItems'>
          <button
            className='btn effect04'
            data-sm-link-text='remove All'
            onClick={() => {
              dispatch(clearTodo());
            }}
          >
            <span>CheckList</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
