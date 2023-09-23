import { Date, Types } from "mongoose"

export interface TodoType {
    _id: Types.ObjectId,
    when: String,
    what: String,
    status: String,
    createdAt: Date,
    updatedAt: Date,
}