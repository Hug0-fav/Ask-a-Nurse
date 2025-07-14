// app/request/page.js
export default function RequestPage() {
  return (
    <main className="min-h-screen px-6 py-16 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Request a Topic</h1>
        <p className="mb-8 text-gray-700 dark:text-gray-300">
          Have something you want Jennie to write about? Fill out the form
          below!
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
            placeholder="Topic details..."
            rows={5}
            className="w-full px-4 py-2 border rounded bg-gray-100 dark:bg-gray-800"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Submit Request
          </button>
        </form>
      </div>
    </main>
  );
}
