import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useNavigate } from "react-router-dom";
import { getBooks } from '../api/books';
import { useParams } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify';

function SearchResult() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const queryType = searchParams.get("q");

    const { book_name } = useParams()
    const { data: allBookData, isFetching,error } = useQuery(
        ["all-books", book_name],
        () => getBooks(book_name, queryType),
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
    

    const handleClickBook = (cover_edition_key) => {
        navigate(`/book/${cover_edition_key}`);
    }
    
    if(error){
        toast.error('Something went wrong')
        navigate('/')
    }
    if(allBookData?.docs?.length === 0){
        toast.error('No Data Found')
        navigate('/')
    }
    
    if(isFetching){
        return (
            <div className="h-screen w-screen bg-orange-400 flex justify-center items-center">
                <div>
                    <img src="/loader.webp" alt="loader" className="h-40 w-40" />
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="bg-orange-400"><Navbar /></div>
            <h2 className="mt-[50px] text-center font-black text-3xl">Book Info -  {book_name}</h2>
            <div className="py-20 px-10 flex flex-wrap justify-center sm:justify-left items-center sm:items-start gap-x-10 gap-y-20">
                {
                    !!allBookData && allBookData.docs?.map((book, index) => (
                        <div>
                            <div key={index} className="relative bg-cover bg-center cursor-pointer shadow-xl hover:scale-110 ease-in duration-200" style={{ backgroundImage: `url(https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg)`}}
                                onClick={() => handleClickBook(book?.cover_edition_key)}
                            >
                                <div className={`h-96 w-60 rounded-md p-5 ${ book.cover_edition_key ? "bg-cover bg-center" : "bg-gray-400"
                                }`}>
                                    <div>
                                        <p className="text-white text-lg" style={{  maxWidth: '30ch'}}>{!book.cover_edition_key && book.title}</p>
                                        <p className="text-white text-xl font-black" style={{  maxWidth: '30ch'}}>{!book.cover_edition_key && (book?.author_name || '')}</p>
                                    </div>
                                    {!book.cover_edition_key && (
                                        <div className="w-full mt-10 bottom-30 flex justify-center item-center">
                                            <img src="/cover_book.png" alt="cover_book" className="h-30 w-40" />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div class="relative mt-5 flex justify-start items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#ff8401" version="1.1" id="Capa_1" width="40px" height="20px" viewBox="0 0 442.04 442.04">
                                    <g>
                                        <g>
                                            <path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203    c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219    c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367    c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021    c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212    c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071    c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z"/>
                                        </g>
                                        <g>
                                            <path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188    c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993    c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5    s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z"/>
                                        </g>
                                        <g>
                                            <path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z"/>
                                        </g>
                                    </g>
                                </svg>
                                <p className="font-bold">{book.already_read_count}</p>
                            </div>
                        </div>
                    ))
                }
                </div>
                <Footer />
        </div>
    )
}

export default SearchResult