


const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCXooz9whNJZBRTHi9AqdjPw&part=snippet%2Cid&order=date&maxResults=50';
const content = null || document.getElementById("content")


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '79eef28d97msh8c9acb425a12bd6p142cd0jsn0fb51edd6043',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};



async function  fetchData(urlApi){
    const responsive = await fetch(urlApi, options);
    const data = await responsive.json();
    return data;
}
(async()=>{
    try {
        const video = await fetchData(API);
        let view = `
            ${video.items.map( video =>`
            <div class="group relative">
            <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 eounded-me
            orverflow-hidden group-hover:opacity-74 ;g:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700"> 
                    <span aria-hidden="true" class="absolute insert-0">
                        ${video.snippet.title}
                    </span>
                </h3>
            </div>
        </div>
            `).slice(0,5).join("")}
            
       
        `;
        
        content.innerHTML += view;
    } catch (error) {
        console.error(error);
    }
})();