import React from 'react';

const EnvironmentDebug = () => {
  // Log to both client-side console and server-side console
  console.log('Environment Variables:', {
    channelName: process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_NAME,
    apiKeyPresent: !!process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
  });

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Environment Variables Debug</h2>
      <div className="space-y-2">
        <p>
          <strong>YouTube Channel Name:</strong>{' '}
          {process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_NAME || 'Not found'}
        </p>
        <p>
          <strong>YouTube API Key:</strong>{' '}
          {process.env.NEXT_PUBLIC_YOUTUBE_API_KEY 
            ? `${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY.slice(0, 10)}...` 
            : 'Not found'}
        </p>
        <div className="bg-yellow-100 p-2 rounded">
          <strong>Troubleshooting Tips:</strong>
          <ul className="list-disc pl-5">
            <li>Ensure .env.local is in project root</li>
            <li>No quotes around values</li>
            <li>Restart dev server after changes</li>
            <li>Check for typos in variable names</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentDebug;