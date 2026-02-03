import { useState } from 'react';
import './HangulTodo.css';

const HangulTodo = ({ onClose }) => {
  const [todos, setTodos] = useState([
    { id: 1, text: '허준재 찾기 Find Joon Jae 🧜‍♂️', completed: true, mood: '🌊' },
    { id: 2, text: '인어의 기억 지키기 💎', completed: false, mood: '🐚' },
    { id: 3, text: '바다에서 수영하기 🏊', completed: false, mood: '🌊' },
    { id: 4, text: '사랑 고백하기 💕', completed: true, mood: '💖' },
  ]);
  const [newTodo, setNewTodo] = useState('');
  const [selectedMood, setSelectedMood] = useState('🌊');

  const moods = ['🌊', '🧜‍♂️', '🐚', '💎', '🐬', '💖'];

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: newTodo,
        completed: false,
        mood: selectedMood
      }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(t => t.completed).length;

  return (
    <div className="demo-overlay" onClick={onClose}>
      <div className="demo-container hangul-todo" onClick={e => e.stopPropagation()}>
        <button className="demo-close" onClick={onClose}>✕</button>
        
        <header className="todo-header">
          <h1>🧜‍♂️ Blue Sea Todo</h1>
          <p>Legend of the Blue Sea Tasks</p>
          <div className="todo-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(completedCount / todos.length) * 100}%` }}
              />
            </div>
            <span>{completedCount}/{todos.length} 완료</span>
          </div>
        </header>

        <div className="todo-input-section">
          <div className="mood-selector">
            {moods.map(mood => (
              <button
                key={mood}
                className={`mood-btn ${selectedMood === mood ? 'active' : ''}`}
                onClick={() => setSelectedMood(mood)}
              >
                {mood}
              </button>
            ))}
          </div>
          <div className="todo-input-group">
            <input
              type="text"
              placeholder="새로운 할 일 추가... 🌊"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            />
            <button className="add-btn" onClick={addTodo}>추가</button>
          </div>
        </div>

        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <button className="check-btn" onClick={() => toggleTodo(todo.id)}>
                {todo.completed ? '✓' : '○'}
              </button>
              <span className="todo-mood">{todo.mood}</span>
              <span className="todo-text">{todo.text}</span>
              <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>🗑️</button>
            </li>
          ))}
        </ul>

        <div className="todo-stats">
          <div className="stat-card">
            <span className="stat-emoji">🐚</span>
            <span className="stat-value">{todos.length}</span>
            <span className="stat-label">전체 Total</span>
          </div>
          <div className="stat-card">
            <span className="stat-emoji">💎</span>
            <span className="stat-value">{completedCount}</span>
            <span className="stat-label">완료 Done</span>
          </div>
          <div className="stat-card">
            <span className="stat-emoji">🌊</span>
            <span className="stat-value">{todos.length - completedCount}</span>
            <span className="stat-label">남음 Left</span>
          </div>
        </div>

        <footer className="todo-footer">
          <p>인어의 사랑처럼 영원히 🧜‍♂️💕</p>
        </footer>
      </div>
    </div>
  );
};

export default HangulTodo;
