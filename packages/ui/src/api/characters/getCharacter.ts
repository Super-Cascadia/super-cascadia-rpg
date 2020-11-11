function getUrl(id: number, includeAttributes?: boolean) {
  if (includeAttributes) {
    return `/characters/${id}?details=characterAttributes`;
  }

  return `/characters/${id}`;
}

export async function getCharacter(id: number, includeAttributes?: boolean) {
  const fetchUrl = getUrl(id, includeAttributes);
  const response = await fetch(fetchUrl);

  return await response.json();
}
