import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const createRequest = (url) => ({ url, headers: { 'Content-Type': 'application/json' } });

const baseURL = 'http://localhost:3000';
// Endpoints calling the API, takes params coming from the redux hook
export const cosunoApi = createApi({
  reducerPath: 'cosunoApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getCompanies: builder.query({
      query: (count) => createRequest('/companies'),
    })
  }),
});

//Destructure the endpoints to be later used as redux hooks
export const { useGetCompaniesQuery } = cosunoApi;
