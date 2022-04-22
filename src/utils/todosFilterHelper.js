import {
  TODO_STATE_FILTER,
  TODO_SORT_BY_DATE_FILTER,
  TODO_IS_IMPORTANT_FILTER,
  TODO_WITH_DESCRIPTION_FILTER
} from "../constants"


export const todosFilterHelper = ({ todos, params }) => {
  let todosCopy = [ ...todos ]

  if (params[TODO_STATE_FILTER] && params[TODO_STATE_FILTER] !== "all") {
    todosCopy = todosCopy.filter((todo) => (
      params[TODO_STATE_FILTER] === "completed"
        ? todo.isCompleted
        : !todo.isCompleted
    ))
  }

  if (params[TODO_SORT_BY_DATE_FILTER] && params[TODO_SORT_BY_DATE_FILTER] !== "default") {
    const direction = params[TODO_SORT_BY_DATE_FILTER] === "first-new" ? 1 : -1
    todosCopy.sort((a, b) => a.date > b.date ? 0 + direction : a.date < b.date ? 0 - direction : 0)
  }

  if (params[TODO_IS_IMPORTANT_FILTER] && params[TODO_IS_IMPORTANT_FILTER] === "checked") {
    todosCopy = todosCopy.filter(todo => todo.isImportant)
  }

  if (params[TODO_WITH_DESCRIPTION_FILTER] && params[TODO_WITH_DESCRIPTION_FILTER] === "checked") {
    todosCopy = todosCopy.filter(todo => !!todo.description)
  }

    return todosCopy
}
