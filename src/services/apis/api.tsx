import { URIS, apiClient } from ".";

export const apis = {

  /* Post */
  getAllPostsApi: (payload: any) => apiClient.get(URIS.GET_ALL_POSTS, payload),
  getPostApi: (payload: any) => apiClient.get(URIS.GET_POST, payload),
  getPopularPostsApi: (payload: any) => apiClient.get(URIS.GET_POPULAR_POSTS, payload),
};
