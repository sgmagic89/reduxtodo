import { Action } from '@ngrx/store';
import { Todo, TodoItem } from '../../models/todo.model';


export const SEARCH =           '[Todo] Search';
export const SEARCH_COMPLETE =  '[Todo] Search Complete';
export const LOAD =             '[Todo] Load';
export const LOADCOMPLETE =     '[Todo] Load Complete';
export const LOADFAILED =       '[Todo] Load Failed';
export const SELECT =           '[Todo] Select';
export const DELETE =           '[Todo] Delete';
export const DELETESUCCESS =    '[Todo] Delete Success';
export const DELETEFAILED =     '[Todo] Delete Failed';
export const EDIT =             '[Todo] Edit';
export const EDITSUCCES =       '[Todo] Edit Success';
export const EDITFAILED =       '[Todo] Edit Failed';
export const CREATE =           '[Todo] Create';
export const CREATESUCCESS =    '[Todo] Create Success';
export const CREATEFAILED =     '[Todo] Create Failed';

export class CreateAction implements Action {
  readonly type = CREATE;

  constructor(public payload: Todo) { }
}


export class CreateSuccessAction implements Action {
  readonly type = CREATE_SUCCESS;

  constructor(public payload: Todo) { }
}

export class CreateFailedAction implements Action {
  readonly type = CREATE_FAILED;

  constructor(public payload: Todo) { }
}

export class DeleteAction implements Action {
  readonly type = DELETE;

  constructor(public payload: Todo) { }
}

export class DeleteSuccessAction implements Action {
  readonly type = DELETE_SUCCESS;

  constructor(public payload: Todo) { }
}

export class DeleteFailedAction implements Action {
  readonly type = DELETE_FAILED;

  constructor(public payload: Todo) { }
}


export class EditAction implements Action {
  readonly type = EDIT;

  constructor(public payload: Todo) { }
}

export class EditSuccessAction implements Action {
         readonly type = EDIT_SUCCES;

         constructor(public payload: Todo) { }
}

export class EditFailedAction implements Action {
         readonly type = EDIT_FAILED;

         constructor(public payload: Todo) {}
}

export class LoadAction implements Action {
  readonly type = LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Todo[]) { }
}

export class LoadFailedAction implements Action {
         readonly type = LOAD_FAILED;

         constructor(public payload: Todo[]) {}
       }

export class SearchAction implements Action {
  readonly type = SEARCH;

  constructor(public payload: string) { }
}

export class SearchCompleteAction implements Action {
         readonly type = SEARCH_COMPLETE;

         constructor(public payload: Todo[]) {}
}

export class SelectAction implements Action {
  readonly type = SELECT;

  constructor(public payload: string) { }
}

export type Actions
  = SearchAction
  | SearchCompleteAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailedAction
  | SelectAction
  | CreateAction
  | CreateSuccessAction
  | CreateFailedAction
  | DeleteAction
  | DeleteSuccessAction
  | DeleteFailedAction
  | EditAction
  | EditSuccessAction
  | EditFailedAction;
