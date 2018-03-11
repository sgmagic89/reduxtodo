import { createSelector } from 'reselect';
import { Todo, TodoItem } from '../../models/todo.model';
import * as todo from '../actions/todo';

export interface State {
  loaded: boolean;
  loading: boolean;
  todos: Todo[];
}

export const initState: State = {
    loaded: false,
    loading: false,
    todos: []
};

export function reducer(state = initState, action: todo.Actions): State {
    switch (action.type) {
        case todo.LOAD: {
            return;
        }

        case todo.LOAD_SUCCESS: {
            return;
        }

        case todo.LOAD_FAILED: {
            return;
        }

        case todo.SEARCH: {
            return;
        }

        case todo.SEARCH_COMPLETE: {
            return;
        }

        case todo.CREATE: {
            return;
        }

        case todo.CREATE_SUCCESS: {
            return;
        }

        case todo.CREATE_FAILED: {
            return;
        }

        case todo.DELETE: {
            return;
        }

        case todo.DELETE_SUCCESS: {
            return;
        }

        case todo.DELETE_FAILED: {
            return;
        }

        case todo.EDIT: {
            return;
        }

        case todo.EDIT_SUCCES: {
            return;
        }

        case todo.EDIT_FAILED: {
            return;
        }

        case todo.SELECT: {
            return;
        }
    }
}
