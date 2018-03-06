export interface Todo {
    id: number;
    heading: string;
    createdOn: Date;
    startDate: Date;
    endDate: Date;
    todos: TodoItem[];
}

export interface TodoItem {
    message: string;
    done: boolean;
    endDate: Date;
}
