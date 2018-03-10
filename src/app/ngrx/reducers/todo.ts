import { createSelector } from 'reselect';
import { Todo, TodoItem } from '../../models/todo.model';
import * as todo from '../actions/todo';

export interface State {
    ids: string[];
    entities: { [id: string], Todo };
}
