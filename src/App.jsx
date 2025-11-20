// src/App.jsx
import { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, {
        id: Date.now().toString(),
        text: input.trim(),
        createdAt: new Date().toLocaleString()
      }]);
      setInput('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-2">AWS Task Scheduler</h1>
        <p className="text-center text-cyan-300 mb-12 text-lg">React • Lambda • DynamoDB • SNS</p>

        <div className="bg-slate-800 rounded-2xl p-10 shadow-2xl">
          <div className="flex gap-4 mb-10">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addTask()}
              placeholder="What needs to get done?"
              className="flex-1 px-6 py-4 bg-slate-700 rounded-xl text-lg focus:outline-none focus:ring-4 focus:ring-cyan-500 transition"
            />
            <button
              onClick={addTask}
              className="px-10 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-bold text-lg transition transform hover:scale-105"
            >
              Add Task
            </button>
          </div>

          <div className="space-y-4">
            {tasks.length === 0 ? (
              <p className="text-center text-gray-400 py-16 text-xl">No tasks yet — add one above!</p>
            ) : (
              tasks.map(task => (
                <div key={task.id} className="bg-slate-700 px-8 py-5 rounded-xl flex justify-between items-center hover:bg-slate-600 transition">
                  <div>
                    <div className="font-semibold text-xl">{task.text}</div>
                    <div className="text-sm text-gray-400 mt-1">{task.createdAt}</div>
                  </div>
                  <button className="text-red-400 hover:text-red-300 text-3xl font-bold">×</button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}