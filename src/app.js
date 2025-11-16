
class PlaybackManager
{
    static current_song; 
    static isPlaying = false;
    static PlaySong(song, song_tile)
    {
        var audio_player = document.getElementById("audio");
        var title = document.getElementById("track-title");
        title.innerHTML = song.song_name;
        this.current_song = song;
        console.log(this.current_song);
        audio_player.src = this.current_song.song_url;
        audio_player.play();
        this.isPlaying = true;
    }

    static Pause()
    {
        this.isPlaying = false;
    }
}

class Song
{
    constructor(song_name, song_url, song_thumb)
    {
        this.song_name = song_name;
        this.song_url = song_url;
        this.song_thumb = song_thumb;
    }
}


function songs_setup()
{

}


let tooltips = [];

function init()
{
    
    let songs = [];
    let song_titles = 
    [
        "track one",
        "still",
        "capitulate",
        "revenge is boring",
        "memos",
        "enough",
        "answertone \n [ft szeth]",
        "dreaming is irrelevant",
        "edenrepeat [u u u]",
        "dew"
    ];
    for (let index = 0; index < 9; index++) {
        let file_i = index + 1;
        var temp_track = new Song(
            song_titles[index], 
            "../assets/exampletracks/exampletracks/0" + file_i + ".mp3",
            "../assets/exampletracks/single-covers/0" + file_i + ".png"
        );
        console.log( "../assets/exampletracks/exampletracks/0" + file_i + ".mp3",)

        songs.push(temp_track)
    }
    var track_ten = new Song(
        song_titles[9],
        "../assets/exampletracks/exampletracks/10.mp3",
        "../assets/exampletracks/single-covers/10.png"
    )
    songs.push(track_ten)

    var song_row = document.getElementById("song-row-id");
    for (let index = 0; index < songs.length; index++) {
        var song_tile = document.createElement("div");
        song_tile.className = "song-tile";
        
        var song_image = document.createElement("img");
        song_image.onclick = function() {PlaybackManager.PlaySong(songs[index],song_tile)};
        song_image.src = songs[index].song_thumb;


        var song_tooltip = document.createElement("div");
        song_tooltip.className = "songtooltip";

        song_tooltip.innerHTML = songs[index].song_name ;

        song_tile.appendChild(song_tooltip);
        tooltips.push(song_tooltip);
        song_tile.appendChild(song_image);

        song_row.appendChild(song_tile);
    }

    document.addEventListener('mousemove', tooltip_to_mouse, false);

    
}


function tooltip_to_mouse(e)
{
    for (var i=tooltips.length; i--;) {
        var true_x = e.pageX + 20;
        var true_y = e.pageY;

        tooltips[i].style.left = (true_x) + 'px';
        tooltips[i].style.top = (true_y) + 'px';
    }
}

function playPauseRotation()
{
    var sac_thing = document.getElementById("sac");
    sac_thing.classList.toggle("rotated90");
}
init();