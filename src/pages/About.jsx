import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
    return (
        <div>
            <div className="bg-orange-500"><Navbar /></div>
            <div className="px-10">
                <h2 className="text-3xl text-center mt-20 mb-5">Discover Your Next Great Read</h2>
                <p>At Discover Book, we are passionate about books and dedicated to creating a haven for readers of all ages and interests. Whether you're a lifelong bibliophile or just beginning your reading journey, we aim to connect you with the stories and authors that resonate with you.</p>
                <p className="text-2xl mt-7 mb-2 text-center">Who We Are</p>
                <p>We are a team of book enthusiasts who believe in the transformative power of literature. Our mission is simple: to help you discover books that inspire, educate, and entertain. From timeless classics to the latest bestsellers, we curate a diverse selection of titles to cater to every reader’s taste.</p>
                <p className="text-2xl mt-7 mb-2 text-center">What We Offer</p>
                <ul>
                    <li>
                        1. Personalized Recommendations: Our intelligent search and recommendation engine is designed to help you find books that match your interests, whether you're into mystery, romance, science fiction, or self-help.
                    </li>
                    <li>
                        2. Comprehensive Book Database: With access to thousands of titles and detailed information about authors, genres, and reviews, we make it easy to explore the world of books.
                    </li>
                    <li>
                        3. Community Engagement: Connect with fellow readers, share reviews, and discuss your favorite books in our vibrant community.
                    </li>
                    <li>
                        4. Author Spotlights: Discover more about the creators behind your favorite stories with exclusive insights, interviews, and biographies.
                    </li>
                </ul>
                <p className="text-2xl mt-7 mb-2 text-center">Our Vision</p>
                <p>
                    We envision a world where every individual can find a book that sparks their imagination and fuels their dreams. Our platform bridges the gap between readers and the vast universe of literature, making it accessible, enjoyable, and meaningful.
                </p>
                <p className="text-2xl mt-7 mb-2 text-center">Join Us in the Joy of Reading</p>
                <p className="mb-20">
                    Embark on a journey of discovery, where every page turns into an adventure, every book becomes a treasure, and every visit to [Your Website Name] brings you closer to your next unforgettable read. Together, let's celebrate the love for books and the joy they bring into our lives.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default About