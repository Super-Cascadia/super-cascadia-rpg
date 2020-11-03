export default async function createCharacter(data: any) {
    const body = JSON.stringify(data);

    console.info('request body', body);

    return await fetch('/characters', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body,
    });
}



