import { ApiConstants } from "src/api/ApiConstants";
import { iriApi } from "../index";

const userQuery = iriApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: (query) => ({ url: `${ApiConstants.UserList}`, params: query }),
      providesTags: ["userGet"],
      invalidatesTags: [],
    }),
    postUser: build.mutation({
      query: (request) => ({
        url: `${ApiConstants.UserUpload}`,
        method: "POST",
        data: request,
        headers: { "Content-Type": "multipart/form-data" },
      }),
      providesTags: ["userCreate"],
      invalidatesTags: ["userGet"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetUsersQuery, usePostUserMutation } = userQuery;
