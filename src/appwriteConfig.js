import { Client, Databases, Account } from 'appwrite';

export const PROJECT_ID = '64c64304cd173f489464'
export const DATABASE_ID = '64c6443708b505748d64'
export const COLLECTION_ID_MESSAGES = '64c644428037c2020fd4'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64c64304cd173f489464');

export const databases = new Databases(client);
export const account = new Account(client);
export default client;