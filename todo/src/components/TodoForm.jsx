import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const TodoForm = ({addTodo} ) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (  
    <div className='todo-form'>
      <h2>Criar tarefas</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder='Digite o título' 
          value={value}
          onChange={(e) => setValue(e.target.value)} // Corrigido aqui
        />
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} // Corrigido aqui
        >
          <option value=''>Selecione uma categoria</option>
          <option value='Estudos'>Estudos</option>
          <option value='Pessoal'>Pessoal</option>
          <option value='Hobby'>Hobby</option> 
        </select>
        <button type='submit'>
          Criar tarefa
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
