import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthResponse, AuthValidation, UsersResponse } from "../types/User";

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/",
  }),
  tagTypes: ["AuthValidation", "AuthResponse"],
  endpoints: (build) => ({
    register: build.mutation<AuthResponse, AuthValidation>({
      query: (data) => ({
        url: `api/register`,
        method: "POST",
        body: data,
      }),
    }),

    login: build.mutation<AuthResponse, AuthValidation>({
      query: (data) => ({
        url: `api/login`,
        method: "POST",
        body: data,
      }),
    }),

    getUsers: build.query<UsersResponse, number>({
      query: (page) => `api/users/?page=${page}`,
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetUsersQuery } =
  authApi;
