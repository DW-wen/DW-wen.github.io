import {test1, saveDataNovel, getDataNovel} from '../scripts/saveData.js';

// 顯示儲存的東西在螢幕上

 // get data from localStorage


function remove(preview){
  document.querySelectorAll('.js-delete-button').forEach(function(deleteButton, index){
      deleteButton.addEventListener('click', function(){
          preview.splice(index, 1);
          /* */
          saveDataNovel(preview);
          displayData();
      });
  });
}

function heart(preview){
  document.querySelectorAll('.like-heart').forEach(function(likeButton, index){
    likeButton.addEventListener('click', function(){
      console.log(3);
      if(preview[index].like === true){
        preview[index].like = false;
      }
      else{
        preview[index].like = true;
      }
      saveDataNovel(preview);
      displayData();
    });
  });
}
function likeIt(like){
  if(like){
    return 'red';
  }
  return 'white';
}

function info(preview){
  document.querySelectorAll('.info-button').forEach(function(infoButton, index){
    infoButton.addEventListener('click', function(){
      if(preview[index].infoClick === true){
        preview[index].infoClick = false;
      }
      else{
        preview[index].infoClick = true;
      }
      saveDataNovel(preview);
      displayData();
    });
  });
}
function InfoButtonClick(Info){
  if(Info.infoClick === true){
    return '';
  }
  else{
    return 'introductionInvisible';
  }
}

function showID(preview){
  document.querySelectorAll('.number-button').forEach(function(ID, index){
    ID.addEventListener('click', function(){
      //console.log(preview[index].showID);
      if(preview[index].showID === true){
        preview[index].showID = false;
      }
      else{
        preview[index].showID = true;
      }
      saveDataNovel(preview);
      displayData();
    });
  });
}
function showIDClick(ID){
  //console.log(20);
  if(ID.showID === true){
    return '';
  }
  else{
    return 'IDInvisible';
  }
}




export function displayData(){
    let save = '';
    
    let preview = getDataNovel();
    //console.log(preview);
    preview.forEach(function(previewSection, index){
     
        save +=
        `
        <div class="video-preview">

                  <div class="video-image-container">
                  <!--heart-->
                  <!--新增編號方便查詢-->
                  <img src="/like-heart/${likeIt(previewSection.like)}-heart-removebg-preview.png" class="like-heart js-like-heart-${index}" onclick="">
                  <!--delete-button-->
                  <button class="delete-button js-delete-button" onclick="">delete</button>
                  <!--插入照片-->
                  <a href="https://www.youtube.com/" target="_blank"><img class="video-image" src="${previewSection.image}"></a>
                </div>

                  <div class="video-info"> 
                    <p class="title"> <!--標題-->
                      ${previewSection.title}  
                    </p>
                    <p class="title"> <!--作者-->
                      ${previewSection.author}
                    </p>
                    <div class="info-and-order">
                      <div class="info-button-click">
                        <button class="info-button " name="info-button-${previewSection.id}">
                          info
                        </button>
                        <p class="introduction ${InfoButtonClick(previewSection)}"><!--資訊-->
                          ${previewSection.info}
                        </p>
                      </div>
                      
                      <div class="number-button-click">
                        <button class="number-button" name="number-button-${previewSection.id}">
                          number
                        </button>
                        
                        <p class="showID ${showIDClick(previewSection)}">
                          ${previewSection.id}
                        </p>
                        
                      </div>
                      
                    </div>
                  </div>
              </div>
        `
    });
    //console.log(preview);
    document.querySelector('.grid-novel').innerHTML = save;
    remove(preview);
    heart(preview);
    info(preview);
    showID(preview);
}
//console(localStorage.saveDataNovel);
//localStorage.clear(); // debug 記得刪除

displayData();








