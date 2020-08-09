export default async function createItem(data: any) {
  const body = JSON.stringify(data);

  console.info('request body', body);

  return await fetch('/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body,
  });
}



