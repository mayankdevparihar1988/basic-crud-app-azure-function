import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { NewTodoItem } from "../model/new-todo-item";
import { TodoItem } from "../model/todo-item";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const newItem = req.body as NewTodoItem;

    if(newItem && newItem.title && newItem.description){
        context.res = {
            status: 201,
            body: {
                id: 'dummy-id',
                title: newItem.title,
                description: newItem.description
            } as TodoItem
        }
        return;
    }

    context.res = {
        status: 400,
        message: 'Bad Request check req body'
    }

};

export default httpTrigger;