import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import * as AWS from 'aws-sdk'
import * as AWSXRay from 'aws-xray-sdk'

import { CreateTodoRequest } from '../../requests/CreateTodoRequest'
import { createTodo } from '../../businessLayer/Todo'
import { createLogger } from '../../utils/logger'
import { getHeaders, getUserId } from '../utils'
import * as uuid from 'uuid'

const XAWS = AWSXRay.captureAWS(AWS)
const logger = createLogger('todo-create')
const snsArn = process.env.SNS_ARN

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

  try {
    const userId = getUserId(event);
    const newTodo: CreateTodoRequest = JSON.parse(event.body)

    let todo = {
      todoId: uuid.v4(),
      userId,
      name: newTodo.name,
      dueDate: newTodo.dueDate
    }

    const newTodoResponse = await createTodo(todo);

    const snsClient = new XAWS.SNS();
    var params = {
      Message: JSON.stringify(todo),
      Subject: "[TO-DO-CREATION]",
      TopicArn: snsArn
    };

    await snsClient.publish(params).promise();

    return {
      statusCode: 201,
      headers: getHeaders(),
      body: JSON.stringify({
        item: newTodoResponse
      })
    }
  } catch (error) {
    logger.error(error.errorMessage)

    return {
      statusCode: 500,
      headers: getHeaders(),
      body: "Failed to save todo"
    }
  }
}
