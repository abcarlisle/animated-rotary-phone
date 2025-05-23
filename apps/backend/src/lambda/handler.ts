import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event) => {
  // Dummy data for prototype
  return {
    statusCode: 200,
    body: JSON.stringify({
      boms: [
        { id: '1', product_name: 'Widget A', revision: 'A1', components: [{ part_number: 'P-100', quantity: 2 }] },
        { id: '2', product_name: 'Widget B', revision: 'B2', components: [{ part_number: 'P-200', quantity: 5 }] }
      ]
    })
  };
};
