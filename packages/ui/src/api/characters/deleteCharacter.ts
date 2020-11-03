export default async function deleteCharacter(id: number) {
    return await fetch(`/characters/${id}`, {
        method: "DELETE",
    });
}
