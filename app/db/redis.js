'use server';

import { createClient } from 'redis';

const client = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: 'redis-13947.c93.us-east-1-3.ec2.redns.redis-cloud.com',
    port: 13947,
  },
});
client.on('error', (error) => {
  console.error(`Redis client error:`, error);
});

export async function addCMSType(key, value) {
  try {
    await client.connect();
    const prevTypes = await client.hGetAll('Types');
    await client.hSet('Types', { ...prevTypes, [key]: value });
    await client.disconnect();
  } catch (err) {
    console.log('Error in addCMSType', err);
  }
}

export async function getCMSTypes(key) {
  try {
    await client.connect();
    const value = await client.hGetAll('Types');
    await client.disconnect();
    return JSON.stringify(value);
  } catch (err) {
    console.log('Error in getCMSType', err);
  }
}