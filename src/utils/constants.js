//Get Videos List of Popular
export const VideosList =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=";

export const SEARCH_LIST_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

//Searching By Query
export const SEARCH_YOUTUBE_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&q=";

// Search by Video Id

export const SEARCH_YOUTUBE_ID_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

// Comments Api
export const COMMENTS_YOUTUBE_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&maxResults=50&part=snippet&videoId=";
// Comments Api
// export const COMMENTS_YOUTUBE_API =
//   "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=";

//GET https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true&fields=items%2Fsnippet%2Fthumbnails&key={YOUR_API_KEY}
