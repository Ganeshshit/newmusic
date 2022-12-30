console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('song/1.mp3')
let masterPlay=document.getElementById('masterPlay');
let myProgresbar=document.getElementById('myProgresbar');
let gif=document.getElementById('gif');
let songItem= Array.from( document.getElementsByClassName('songItem'));
let songs=[
    {songName:"lamborgini", filePath: "song/1.mp3" ,coverPath:"covers/album.png"},
    {songName:"lovemethod", filePath: "song/2.mp3" ,coverPath:"covers/2.png"},
    {songName:"Dj wale babu", filePath: "song/3.mp3" ,coverPath:"covers/3.png"},
    {songName:"tuhi tu hay", filePath: "song/4.mp3" ,coverPath:"covers/4.png"},
    {songName:"lamborgini", filePath: "song/5.mp3" ,coverPath:"covers/5.png"},
    {songName:"lamborgini", filePath: "song/6.mp3" ,coverPath:"covers/1.jpg"},
    {songName:"lamborgini", filePath: "song/7.mp3" ,coverPath:"covers/1.jpg"},
    {songName:"lamborgini", filePath: "song/1.mp3" ,coverPath:"covers/1.jpg"},
    {songName:"lamborgini", filePath: "song/1.mp3" ,coverPath:"covers/1.jpg"},
    {songName:"lamborgini", filePath: "song/1.mp3" ,coverPath:"covers/1.jpg"},
    {songName:"lamborgini", filePath: "song/1.mp3" ,coverPath:"covers/1.jpg"},
    {songName:"lamborgini", filePath: "song/1.mp3" ,coverPath:"covers/1.jpg"},
    {songName:"lamborgini", filePath: "song/1.mp3" ,coverPath:"covers/1.jpg"},
    {songName:"lamborgini", filePath: "song/1.mp3" ,coverPath:"covers/1.jpg"},
    {songName:"lamborgini", filePath: "song/1.mp3" ,coverPath:"covers/1.jpg"},
    {songName:"lamborgini", filePath: "song/1.mp3" ,coverPath:"covers/1.jpg"},
]

songItem.forEach((element,i) => {
    // console.log(element,i)
    // element.querySelectorAll("img")[0].src=songs[i].coverPath;
    element.getElementsByTagName("img")[0].src=songs[i].coverPath
    // element.querySelectorAll("songName")[0].innerText=songs[i].filePath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName
});
//  Handle Play pause
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused||audioElement.currentTime<=0 ) {
        audioElement.play();
        // audioElement.pause()
        gif.style.opacity=1;
        
    }
    else{
        audioElement.pause()
        gif.style.opacity=0;

    }
})
// progresbar.addEvenetListener('timeupdate',()=>{
//     console.log('timeupdate');
//     //Update Seekbar
// })
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate')
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100 );
    // console.log(progress);
    myProgresbar.value=progress

})
myProgresbar.addEventListener('change',()=>{
    audioElement.currentTime=myProgresbar.value*audioElement.duration/100;
})
Array.from(document.getElementsByClassName('songName')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        songIndex=parseInt(e.target.id)
        console.log(e.target);
        audioElement.src=`songs/${index}.mp3`;
    // masterSongName.innerText=songs[songIndex].songName; 

        audioElement.currentTime=0;
        audioElement.play()
    })
})
document.getElementById('next').addEventListener('click',()=>{
    // songIndex=parseInt(e.target)

    if (songIndex>9) {
        songIndex=0;
        
    }
    else {
        songIndex+=1
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    // masterSongName,innerText=songs[songIndex].songName; 

    audioElement.currentTime=0;
    audioElement.play();
    // masterPlay

     
})
document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=0) {
        songIndex=0;
        
    }
    else {
        songIndex-=1
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    // masterSongName,innerText=songs[songIndex].songName; 
    audioElement.currentTime=0;
    audioElement.play();
    // masterPlay

     
})

// audioElement.play();

// Listen to Evenets



