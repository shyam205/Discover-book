import { BASE_URL } from "./apiConfig";

export const getBooks = async (query, queryType) => {
    const requestOptions = {
        method: "GET",
        redirect: "follow",
    };

    try {
        // Dynamically construct the API URL based on the queryType
        const queryParam = queryType === "Author" ? "author" : "title"; // Map queryType to API parameter
        const response = await fetch(
            `${BASE_URL}${queryParam}=${encodeURIComponent(query)}&fields=id,author_name,author_alternative_name,title,ratings_average,ratings_sortable,already_read_count,cover_edition_key,first_publish_year,availability&limit=10`,
            requestOptions
        );

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json(); // Parse JSON response
        return result; // Return the resolved data
    } catch (error) {
        console.error("Error in getBooks:", error);
        throw error; // Throw the error so React Query can handle it
    }
};


export const getBookInfo = async (book_title) => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    try {
        const response = await fetch(
            `${BASE_URL}q=${book_title}`,
            requestOptions
        );

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json(); // Parse JSON response
        return result; // Return the resolved data
    } catch (error) {
        console.error("Error in getBooks:", error);
        throw error; // Throw the error so React Query can handle it
    }
};