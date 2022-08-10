const BASE_URL = "https://jsonplaceholder.typicode.com";

export default {
  async GetImagesByAlbumId(id) {
    const response = await fetch(`${BASE_URL}/albums/${id}/photos`);
    return response.json();
  },
};
