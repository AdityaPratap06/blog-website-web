import { URIS, apiClient } from ".";

export const apis = {

  /* Post */
  getAllPostsApi: (payload: any) => apiClient.get(URIS.GET_ALL_POSTS, payload),

};