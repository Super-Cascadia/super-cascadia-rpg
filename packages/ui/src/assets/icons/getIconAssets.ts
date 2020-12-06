function getUrl() {
  return `/assets/icon`;
}

export async function getIconAssets() {
  const fetchUrl = getUrl();
  const response = await fetch(fetchUrl);

  return await response.json();
}
