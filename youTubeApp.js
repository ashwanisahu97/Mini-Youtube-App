let container=document.querySelector("#container");
let getVideo=async()=>{
    try{
        var video=document.querySelector("#search-bar").value;
 let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${video}&type=video&key=AIzaSyAqPqTu1SCNl4F36nsqKo5ZomI95M8ZVkU&maxResults=20`);
 let data=await res.json();
 console.log(data);
 var videoData=data.items;
 console.log(videoData);
 appendVideoes(videoData);
}
catch(err){
    console.log("error:",err);
}
}
let appendVideoes=(videoData)=>{
    container.innerHTML=null;
    // if(videoData===undefined){
    //     return false;
    // }
videoData.forEach(({snippet:{thumbnails:{high:{url}}}})=>{
    console.log(url);
    let div=document.createElement("div");
    // let iframe=document.createElement("iframe");
    // iframe.src=`https://www.youtube.com/embed/${videoId}`;
    // iframe.width="460px";
    // iframe.height="260px";
    // iframe.setAttribute("allowfullscreen",true);
    // div.append(iframe);
  let img=document.createElement("img");
 img.src=url;
// img.setAttribute("src",url);
//    img.width="100%";
//    img.height="100%";
   div.append(img);
   div.onclick="playVideo()";
   let playVideo=()=>{
       window.location.href="video.html";
   }
   container.append(div);
})
}