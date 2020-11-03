export default async function duplicateCharacter(id: number) {
    return await fetch(`/characters/${id}/duplicate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });
}
