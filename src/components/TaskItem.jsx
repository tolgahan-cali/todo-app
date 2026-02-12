import { useState } from "react";

export default function TaskItem({
  task,
  onDelete,
  onEdit,
  onCheck,
  setEditingId,
  isEditing,
}) {
  const [editText, setEditText] = useState("");
  return (
    <li className={`task-item ${task.isChecked && "completed"}`}>
      <div className="task-content-top">
        <div className="task-left">
          <div
            onClick={() => {
              onCheck(task.id);
            }}
            className="custom-checkbox"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span className="task-text">{task.task}</span>
        </div>

        <div className="task-actions">
          <button
            onClick={() => {
              isEditing ? setEditingId(null) : setEditingId(task.id);
              setEditText("");
            }}
            className="action-btn"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </button>
          <button
            onClick={() => {
              onDelete(task.id);
            }}
            className="action-btn delete"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        </div>
      </div>

      {isEditing && (
        <div className="task-edit-row">
          <input
            placeholder="Yeni görevi girin.."
            type="text"
            className="todo-input edit-mode-input"
            autoFocus
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button
            onClick={() => {
              onEdit(task.id, editText);
              setEditingId(null);
              setEditText("");
            }}
            className="action-btn save"
            title="Kaydet"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </button>
          <button className="action-btn cancel" title="İptal">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      )}
    </li>
  );
}
