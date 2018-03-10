import { Action } from '@ngrx/store';
import { Todo, TodoItem } from '../../models/todo.model';

export const SEARCH =           '[Todo] Search';
export const SEARCH_COMPLETE =  '[Todo] Search Complete';
export const LOAD =             '[Todo] Load';
export const LOADCOMPLETE =     '[Todo] LoadComplete';
export const SELECT =           '[Todo] Select';
export const DELETE =           '[Todo] Delete';
export const EDIT =             '[Todo] Edit';
export const CREATE =           '[Todo] CREATE';

export class CreateAction implements Action {
  readonly type = CREATE;

  constructor(public payload: Todo) { }
}

export class DeleteAction implements Action {
  readonly type = DELETE;

  constructor(public payload: Todo) { }
}

export class EditAction implements Action {
  readonly type = EDIT;

  constructor(public payload: Todo) { }
}

export class LoadAction implements Action {
  readonly type = LOAD;

  constructor() { }
}

export class LoadCompleteAction implements Action {
  readonly type = LOADCOMPLETE;

  constructor(public payload: Todo[]) { }
}

export class SearchAction implements Action {
  readonly type = SEARCH;

  constructor(public payload: string) { }
}

export class SearchCompleteAction implements Action {
  readonly type = SEARCHCOMPLETE;

  constructor(public payload: Todo[]) { }
}

export class SelectAction implements Action {
  readonly type = SELECT;

  constructor(public payload: string) { }
}

export type Actions
  = SearchAction
  | SearchCompleteAction
  | LoadAction
  | LoadCompleteAction
  | SelectAction
  | CreateAction
  | DeleteAction
  | EditAction;
