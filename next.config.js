/** @type {import('next').NextConfig} */
const withInterceptStdout = require('next-intercept-stdout');
const youtube_key = process.env.YOUTUBE_KEY;

const nextConfig = {
	reactStrictMode: false,
	async rewrites() {
		return [
			{
				source: '/api/youtube',
				destination: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${youtube_key}&playlistId=PLGOVj4gmzJyDZ4VkTTHeQFBnJzNPCjxYJ&maxResults=4`,
			},
		];
	},
};

module.exports = withInterceptStdout(nextConfig, (text) =>
	text.includes('Duplicate atom key') ? '' : text
);
