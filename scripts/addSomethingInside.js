import {test1, getDataVideo, saveDataVideo, getDataNovel, saveDataNovel, getDataManga, saveDataManga, test2} from '../scripts/saveData.js';
//import {displayData} from './screen_display_video.js';
console.log('test');


function addInside(){
    
    document.querySelector('.add').addEventListener('click', function(){
        let id = document.querySelector('.input-number').value;
        id = Number(id);
        
        let title = document.querySelector('.input-name').value;
        let author = document.querySelector('.input-author').value;
        let info = document.querySelector('.input-info').value;
        let web = document.querySelector('.web').value;
        console.log(title, author, info, web);
        
        if(!id || !title || !author || !info || !web){
            alert('do not input completely');
        }
        else{
            console.log(web);

            
            /*
            console.log(typeof get);
            let save = {
            id: id,
            info: info ,
            infoClick: false,
            showID: false,
            like: false,
            author: author,
            title: title,
            image: '/video/emily_3.jpg'
            };
            */
            
            //add in objet
            if(web === "video"){
              let get = getDataVideo();
              get.push({ 
              id: id,
              info: info ,
              infoClick: false,
              showID: false,
              like: false,
              author: author,
              title: title,
              image: '/video/emily_3.jpg'
            });
            saveDataVideo(get);
            }
            else if(web === "manga"){
              let get = getDataManga();
              get.push({ 
              id: id,
              info: info ,
              infoClick: false,
              showID: false,
              like: false,
              author: author,
              title: title,
              image: '/video/emily_3.jpg'
            });
            saveDataManga(get);
            }
            else{
              let get = getDataNovel();
              get.push({ 
              id: id,
              info: info ,
              infoClick: false,
              showID: false,
              like: false,
              author: author,
              title: title,
              image: '/video/emily_3.jpg'
            });
              saveDataNovel(get);
            }
            
            
            //displayData();
            window.location.reload(); // 刷新介面
        }
    });
}

addInside();