document.addEventListener('DOMContentLoaded', function() {
    const randomImageElement = document.getElementById('randomImage');
    const audioPlayerElement = document.getElementById('audioPlayer');
    const audioSourceElement = document.getElementById('audioSource');
    const refreshButton = document.getElementById('refreshButton');

    const musicUrls = [
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3'
    ];

    async function fetchRandomImage() {
        try {
            const response = await fetch('https://picsum.photos/600/400');
            if (response.ok) {
                randomImageElement.src = response.url;
            } else {
                console.error('Failed to fetch image:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching the image:', error);
        }
    }

    function fetchRandomMusic() {
        try {
            const randomIndex = Math.floor(Math.random() * musicUrls.length);
            const randomMusicUrl = musicUrls[randomIndex];
            audioSourceElement.src = randomMusicUrl;
            audioPlayerElement.load();
        } catch (error) {
            console.error('Error setting the music:', error);
        }
    }

    async function refreshContent() {
        await fetchRandomImage();
        fetchRandomMusic();
    }

    refreshButton.addEventListener('click', refreshContent);

    // Fetch initial content on page load
    refreshContent();
});
