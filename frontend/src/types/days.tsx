import { Date, Types } from "mongoose";
import { TodoType } from "./todos";

export interface Days {
    _id: Types.ObjectId,
    day: String,
    todos: Array<TodoType>,
    createdAt: Date,
    updatedAt: Date
}