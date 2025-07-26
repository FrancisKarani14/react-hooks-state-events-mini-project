import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle deleting a task
  function handleDeleteTask(taskText) {
    const updatedTasks = tasks.filter(task => task.text !== taskText);
    setTasks(updatedTasks);
  }

  // Handle changing the category filter
  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  // Handle adding a new task
  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  // Filter tasks based on selected category
  const tasksToDisplay = tasks.filter((task) =>
    selectedCategory === "All" ? true : task.category === selectedCategory
  );

  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />

      <TaskList
        tasks={tasksToDisplay}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
