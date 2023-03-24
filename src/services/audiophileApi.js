import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const audiophile = createApi({
  reducerPath: "audiophileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1337/api/audiophiles?populate=*",
  }),
  endpoints: (builder) => ({
    getAllAudiophiles: builder.query({
      query: () => "",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllAudiophilesQuery } = audiophile;
