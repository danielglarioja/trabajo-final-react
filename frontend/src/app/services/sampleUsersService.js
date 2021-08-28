import routes from '../rest/routes';
import client from '../rest/client';

export const getUsers = async () => {
    const users = await client.get(routes.sample());
    return users.data;
}