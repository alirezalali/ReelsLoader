const ApiDocsPage = () => {
    return (
        <div className="my-4 flex flex-col rounded-lg border p-8">
            <h1 className="mb-4 text-2xl font-bold">API Documentation</h1>

            <section className="text-sm mb-4">
                <h2 className="mb-2 text-xl font-semibold">1. Endpoint</h2>
                <p className="mb-2">
                    <span className="font-semibold">URL:</span>
                    <code className="ml-2 text-gray-900 dark:text-gray-500">
                        https://reelaloader.vercel.app/api/video
                    </code>
                </p>
                <p className="mb-2">
                    <span className="font-semibold">Method:</span>
                    <span className="ml-2">GET</span>
                </p>
                <p className="mb-2">
                    <span className="font-semibold">Query Parameter:</span>
                    <code className="ml-2">postUrl</code> (string, required)
                </p>
            </section>

            <section className="text-sm mb-4">
                <h2 className="mb-2 text-xl font-semibold">2. Example Request</h2>
                <div className="mb-2 p-4 bg-gray-100 rounded-md">
                    <code className="block text-gray-800">
                        https://reelsloader.vercel.app/api/video?postUrl=https://www.instagram.com/p/CX1234567/
                    </code>
                </div>
            </section>

            <section className="text-sm mb-4">
                <h2 className="mb-2 text-xl font-semibold">3. Example Responses</h2>

                <div className="mb-4">
                    <h3 className="mb-2 font-semibold">3.1. Error Response</h3>
                    <div className="p-4 bg-red-100 rounded-md">
                        <pre className="text-sm text-red-700">
                            {`{
  "status": "error",
  "message": "Post URL is required"
}`}
                        </pre>
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="mb-2 font-semibold">3.2. Success Response</h3>
                    <div className="p-4 bg-green-100 rounded-md">
                        <pre className="text-sm text-green-700">
                            {`{
  "status": "success",
  "data": {
    "filename": "ReelsLoader-1734345296.mp4",
    "width": "640",
    "height": "1136",
    "videoUrl": "https://scontent-iad3-2.cdninstagram.com/..."
  }
}`}
                        </pre>
                    </div>
                </div>
            </section>

            <section className="text-sm">
                <h2 className="mb-2 text-xl font-semibold">4. Notes</h2>
                <ul className="list-disc list-inside">
                    <li>
                        Ensure the <code>postUrl</code> parameter is a valid Instagram post
                        URL.
                    </li>
                    <li>
                        The API returns the video file details, including dimensions and a
                        direct download link.
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default ApiDocsPage;
