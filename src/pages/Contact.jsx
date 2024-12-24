import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div>
        <div className="bg-orange-500"><Navbar /></div>
        <div className="px-10">
            <h2 className="text-3xl text-center mt-20 mb-5">We'd Love to Hear from You</h2>
            <p className="text-center">Whether you have questions, suggestions, or need assistance, we’re here to help. Connect with us and let us know how we can make your reading journey better!</p>
        <div>
        <div className="mb-10">
            <h2 className="text-2xl text-center my-5">Contact Options</h2>
            <p className="text-center font-bold">1. General Inquiries</p>
            <p className="text-center">For general questions about our platform or services, feel free to reach out via email:</p>

            <p className="text-center">📧 Email: support@discoverbook.com</p>
            <p className="text-center font-bold mt-4">2. Technical Support</p>
            <p className="text-center">Facing technical issues? Our support team is ready to assist you:</p>

            <p className="text-center">📧 Email: techsupport@discoverbook.com</p>
            <p className="text-center">🕒 Available: Monday to Friday, 9:00 AM - 6:00 PM (EST)</p>
            <p className="text-center font-bold mt-4">3. Feedback and Suggestions</p>
            <p className="text-center">We value your feedback and ideas to improve our platform. Share your thoughts with us:</p>

            <p className="text-center">📧 Email: feedback@discoverbook.com</p>
            <p className="text-center font-bold mt-4">4. Social Media</p>
            <p className="text-center">Connect with us on social media for updates, book recommendations, and more:</p>

            <p className="text-center">🌐 Facebook: facebook.com/discoverbook</p>
            <p className="text-center">🐦 Twitter: twitter.com/discoverbook</p>
            <p className="text-center">📸 Instagram: instagram.com/discoverbook</p>
            <p className="text-center">Contact Form</p>
            <p className="text-center">Alternatively, use our contact form to send us a message directly. We aim to respond within 24-48 hours.</p>
        </div>
            
        </div>
        <div className="mb-10">
            <p className="text-center">Visit Us</p>
            <p className="text-center mt-5 font-bold">📍 Address:</p>
            <p className="text-center">123 Book Lover's Lane,</p>
            <p className="text-center">Reading City, Bookland 45678,</p>

            <p className="text-center mt-5 font-boldr">🕒 Office Hours:</p>
            <p className="text-center">Monday to Friday: 9:00 AM - 6:00 PM (EST)</p>
            <p className="text-center">Saturday: 10:00 AM - 2:00 PM (EST)</p>

            <p className="text-center mt-5 font-bold">Call Us</p>
            <p className="text-center">📞 Phone: +1 (800) 123-4567</p>
            <p className="text-center">☎️ Alternate: +1 (800) 987-6543</p>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact