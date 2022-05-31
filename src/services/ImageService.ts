import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IImage } from '../models/IImage'

export const imageAPI = createApi({
    reducerPath: 'catAPI',
    tagTypes: ['Image'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.thecatapi.com/v1/images'}),
    endpoints: (build) => ({
        fetchAllImages: build.query<IImage[], number>({
            query: (limit = 15, mime_types: string[] = ['jpg', 'png'] ) => ({
                url: '/search',
                params: {
                    limit: limit,
                    mime_types: mime_types
                }
            }),
            providesTags: result => ['Image']
        })
    })
})