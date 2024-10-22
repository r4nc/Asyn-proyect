const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCPv0z1j5-npPK0Fmj7DZTHQ&part=snippet%2Cid&order=date&maxResults=4';

const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7e698d08f1msh667ce0577bee6f2p18c94djsn55fa4a12cbc0',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
async function fetchData(url) {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video =>`
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>
            `).slice(0,4).join('')}

        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();