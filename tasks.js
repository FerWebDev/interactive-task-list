// task.js - Módulo para gestión de tareas

/**
 * @typedef Task
 * @type {object}
 * @property {string} id - Identificador único para la tarea
 * @property {string} text - Texto descriptivo de la tarea
 * @property {boolean} completed - Estado de la tarea (true=completada, false=pendiente)
 * @property {string} createdAt - Fecha de creación en formato ISO
 */

/** @type {Task[]} - Array para almacenar las tareas */
let tasks = [];

const TASKS_STORAGE_KEY = 'esgTaskListApp';

/**
 * Carga las tareas desde LocalStorage al iniciar
 * @returns {Task[]} - Array de tareas cargadas
 */
function loadTasks() {
    try {
        const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
            // Validación básica de los datos cargados
            if (!Array.isArray(tasks)) {
                console.error("Formato de datos incorrecto en localStorage");
                tasks = [];
            }
        } else {
            tasks = [];
        }
    } catch (error) {
        console.error("Error al cargar tareas:", error);
        tasks = [];
    }
    return [...tasks];
}

/**
 * Guarda el array actual de tareas en LocalStorage
 * @returns {boolean} - true si se guardó correctamente, false en caso contrario
 */
function saveTasks() {
    try {
        localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
        return true;
    } catch (error) {
        console.error("Error al guardar tareas:", error);
        return false;
    }
}

/**
 * Agrega una nueva tarea a la lista
 * @param {string} text - Texto de la nueva tarea
 * @returns {Task|null} - La tarea creada o null si el texto está vacío
 */
function addTask(text) {
    const trimmedText = text.trim();
    if (!trimmedText) {
        return null;
    }
    
    const newTask = {
        id: Date.now().toString(),
        text: trimmedText,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    tasks.push(newTask);
    saveTasks();
    return newTask;
}

/**
 * Elimina una tarea de la lista por su ID
 * @param {string} id - ID de la tarea a eliminar
 * @returns {boolean} - true si se eliminó correctamente
 */
function deleteTask(id) {
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== id);
    
    const removed = initialLength > tasks.length;
    if (removed) {
        saveTasks();
    }
    
    return removed;
}

/**
 * Cambia el estado de completado de una tarea por su ID
 * @param {string} id - ID de la tarea a marcar/desmarcar
 * @returns {Task|null} - La tarea actualizada o null si no se encontró
 */
function toggleTaskComplete(id) {
    let updatedTask = null;
    
    tasks = tasks.map(task => {
        if (task.id === id) {
            updatedTask = { ...task, completed: !task.completed };
            return updatedTask;
        }
        return task;
    });
    
    if (updatedTask) {
        saveTasks();
    }
    
    return updatedTask;
}

/**
 * Obtiene todas las tareas actuales
 * @returns {Task[]} - Copia del array de tareas
 */
function getTasks() {
    return [...tasks];
}

/**
 * Calcula y devuelve los contadores de tareas
 * @returns {{total: number, pending: number, completed: number}} - Objeto con los totales
 */
function getTaskCounts() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;
    
    return { total, pending, completed };
}

/**
 * Elimina todas las tareas completadas
 * @returns {number} - Número de tareas eliminadas
 */
function clearCompletedTasks() {
    const initialLength = tasks.length;
    tasks = tasks.filter(task => !task.completed);
    
    const removedCount = initialLength - tasks.length;
    if (removedCount > 0) {
        saveTasks();
    }
    
    return removedCount;
}

// Exportación de funciones (disponibles globalmente)
// Nota: Si prefieres usar módulos ES, puedes descomentar la siguiente línea:
// export { loadTasks, saveTasks, addTask, deleteTask, toggleTaskComplete, getTasks, getTaskCounts, clearCompletedTasks };