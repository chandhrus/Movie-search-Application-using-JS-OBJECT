const inputbox = document.createElement('input');
inputbox.style.cssText = "width:300px;height:35px;margin-top:20px;margin-left:120px;font-size:20px;border:none;outline:none;";

const searchbutton = document.createElement('button');
searchbutton.style.cssText = 'padding:10px;margin-left:20px;font-size:15px';
searchbutton.textContent = 'search';
searchbutton.setAttribute('id', 'search');

const content = document.getElementById('container');
content.style.cssText = "width:600px;height:600px;background-color:lightblue;margin-top:50px;border:2px solid black;box-shadow:rgba(8, 8, 8, 0.8);";

const detail = document.getElementById("details");
detail.style.cssText = "width:450px;height:420px;background-color:white;margin:50px 0px 0px 70px;text-align:center;font-size:20px;border:2px solid black;";

content.appendChild(inputbox);
content.appendChild(searchbutton);
content.appendChild(detail);

function Movie(name, img,actors, year, director, music) {
    this.moviename = name.toLowerCase();
    this.img=img;
    this.actorname = actors;
    this.year = year;
    this.directorname = director;
    this.musicdirector = music;
    this.displayitem = function () {
        return `<br>Movie:  ${this.moviename}<br>
                <img src="${this.img}" style="width:300px;height:200px">
        <br>Actor-Name:  ${this.actorname}<br>
        <br>Year      :  ${this.year} <br>
        <br>Director  :  ${this.directorname}<br>
        <br>Music-Director: ${this.musicdirector}`;
    };
}
const movie1 = new Movie('Beast', 'https://filmfare.wwmindia.com/content/2022/apr/vijaybeast41649158104.jpg','vijay', '2021', 'Nelson', 'Anirudh');
const movie2 = new Movie('leo', 'https://indiaglitz-media.s3.amazonaws.com/telugu/home/leo-movie-review-1.jpg','vijay', '2024', 'lokesh', 'Anirudh');
const movie3 = new Movie('Muthu','https://pbs.twimg.com/media/EdSo_etU0AIqVgH?format=jpg&name=medium', 'Rajinikanth', '1995', 'K. S. Ravikumar', 'A. R. Rahman');
const movie4 = new Movie('Baasha', 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201702/baasha-story_647_022617125042.jpg','Rajinikanth', '1995', 'Suresh Krishna', 'Deva');
const movie5 = new Movie('Enthiran', 'https://media.assettype.com/tnm%2Fimport%2Fsites%2Fdefault%2Ffiles%2FEndhiran_Facebook.jpg?w=1200&auto=format%2Ccompress&fit=max','Rajinikanth', '2010', 'S. Shankar', 'A. R. Rahman');
const movie6 = new Movie('Sivaji', 'https://venkatarangan.com/wp-content/uploads/2007/06/Sivaji-TheBoss.jpg','Rajinikanth', '2007', 'S. Shankar', 'A. R. Rahman');
const movie7 = new Movie('Indian', 'https://static.tnn.in/thumb/msid-110441878,thumbsize-86232,width-1280,height-720,resizemode-75/110441878.jpg?quality=100','Kamala Hassan', '1996', 'S. Shankar', 'A. R. Rahman');
const movie8 = new Movie('Thalapathi', 'https://www.imdb.com/title/tt0101649/mediaviewer/rm2643543553/?ref_=tt_ov_i','Rajinikanth', '1991', 'Mani Ratnam', 'Ilaiyaraaja');
const movie9 = new Movie('Kandukondain Kandukondain','https://static.toiimg.com/thumb/msid-75523933,imgsize-878501,width-400,resizemode-4/75523933.jpg' ,'Rajinikanth', '2000', 'Rajiv Menon', 'A. R. Rahman');
const movie10 = new Movie('Mankatha','https://preview.redd.it/12-years-of-mankatha-v0-7ufgwkhtkalb1.jpg?width=1080&crop=smart&auto=webp&s=1119598d50a2d7b6c7a05f6ecc91454499abc13d' ,'Ajith Kumar', '2011', 'Venkat Prabhu', 'Yuvan Shankar Raja');

const movies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10];

searchbutton.addEventListener('click', function () {
    const inputmovie = inputbox.value.toLowerCase();
    let foundmovie = null;
    if(inputmovie==""){
        detail.innerHTML = "<br><br><br>Please enter the movie name";
    }
    else{

    for (let m of movies) {
        if (inputmovie === m.moviename) {
            foundmovie = m;
            break;
        }
    }
    if (foundmovie) {
        detail.innerHTML = foundmovie.displayitem();
    } else {
        detail.innerHTML = "<br><br><br>sorry movie not found";
    }
    }
});