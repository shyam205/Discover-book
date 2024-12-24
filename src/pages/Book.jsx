import React from 'react'
import { useParams } from "react-router-dom";
import { getBookInfo } from '../api/books';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

function Book() {
    const { book_name } = useParams(); // Get book ID from the URL

    const { data: bookData, isFetching, error } = useQuery(
        ["all-books", book_name],
        () => getBookInfo(book_name),
        {
            enabled: !!book_name, // Fetch only on button click
            cacheTime: 0,
            refetchOnWindowFocus: false,
            refetchIntervalInBackground: false,
            refetchOnReconnect: false,
            keepPreviousData: true,
            staleTime: Infinity,
        }
    );

    if(error){
        toast.error('Something went wrong')
    }

    if (isFetching) {
        return (
            <div className="h-screen w-screen bg-orange-400 flex justify-center items-center">
                <div>
                    <img src="/loader.webp" alt="loader" className="h-40 w-40" />
                </div>
            </div>
        );
    }

    if (!bookData) {
        return <div>Book details not found.</div>;
    }

    return (
        <>
             {
                !!bookData && (
                    <div className="p-8">
                    <h1 className="text-4xl font-bold">{bookData?.docs[0]?.title}</h1>
                    <p className="text-xl text-gray-600">
                        Author: {bookData?.docs[0]?.author_name[0] || "Unknown"}
                    </p>
                    <img
                        className="mt-8"
                        src={`https://covers.openlibrary.org/b/olid/${bookData?.docs[0]?.cover_edition_key}-L.jpg`}
                        alt={bookData?.docs[0]?.title}
                    />
                    <p>Rating: {bookData?.docs[0]?.ratings_average?.toFixed(2) || ''}</p>
                    <p className="mt-3">Author Alternative Name: {bookData?.docs[0]?.author_alternative_name ? bookData?.docs[0]?.author_alternative_name[0] : ""}</p>
                    <p className="mt-3">First Publish Year: {bookData?.docs[0]?.first_publish_year || ""}</p>
                    <p className="mt-3">Ebook Access: {bookData?.docs[0]?.ebook_access || ""}</p>
                    <div className="flex justify-start items-center gap-x-2 mt-2 flex-wrap">
                        <p>Language:</p>
                        <div className="flex justify-start items-center gap-x-2">
                            {
                                bookData?.docs[0]?.language?.map((lan, index) => (
                                    <p key={index}>{lan}{index !== bookData?.docs[0]?.language?.length - 1 && ','}</p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-x-2 mt-2 flex-wrap">
                        <p className="text-nowrap">Publish Year:</p>
                        <div className="flex justify-start items-center gap-x-2">
                            {
                                bookData?.docs[0]?.publish_year?.map((publish, index) => (
                                    <p key={index}>{publish}{index !== bookData?.docs[0]?.publish_year?.length - 1 && ','}</p>
                                ))
                            }
                        </div>
                    </div>
                    </div>
                )
            }
        </>
    )
}

export default Book