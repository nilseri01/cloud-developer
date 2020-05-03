import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'

import { deleteTodo } from '../../businessLayer/Todo';
import { getHeaders, getUserId } from '../utils';
import { createLogger } from '../../utils/logger';

const logger = createLogger('todo-delete')

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const userId = getUserId(event);
    const todoId = event.pathParameters.todoId

    await deleteTodo(todoId, userId);

    return {
      statusCode: 200,
      headers: getHeaders(),
      body: JSON.stringify({
      })
    }
  } catch (error) {
    logger.error(error.errorMessage)

    return {
      statusCode: 500,
      headers: getHeaders(),
      body: "Failed to delete todo"
    }
  }
}
