// app/contact/page.js
export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-16 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact Jennie</h1>
        <p className="mb-8 text-gray-700 dark:text-gray-300">
          Feel free to send a message or feedback!
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded bg-gray-100 dark:bg-gray-800"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded bg-gray-100 dark:bg-gray-800"
          />
          <textarea
            placeholder="Your Message..."
            rows={5}
            className="w-full px-4 py-2 border rounded bg-gray-100 dark:bg-gray-800"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
