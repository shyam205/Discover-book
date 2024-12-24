import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Faq() {
    const faqs = [
        {
            question: "What is Discover Book?",
            answer:
                "Discover Book is an online platform that helps you discover books based on your interests. From personalized recommendations to detailed author insights, we make finding your next read easy and enjoyable.",
        },
        {
            question: "How do I search for a book?",
            answer:
                "You can use our search bar at the top of the homepage to find books by title, author, or genre. Simply type your query and explore the results!",
        },
        {
            question: "Can I create a reading list?",
            answer:
                "Yes! You can create, customize, and manage your reading lists by signing up for a free account.",
        },
        {
            question: "Is the service free?",
            answer: "Absolutely. Our basic services, including book search and recommendations, are completely free.",
        },
        {
            question: "How do I get personalized book recommendations?",
            answer:
                "By providing us with your preferences, genres you love, or books you’ve enjoyed, our system will suggest titles tailored just for you.",
        },
    ];

    return (
        <div>
            <div className="bg-orange-500"><Navbar /></div>
            <div className="max-w-4xl mx-auto p-6">
                <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                            <p className="text-gray-600 mt-2">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Faq;