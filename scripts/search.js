//import {test1, getData, saveData, test2} from '../scripts/saveData.js';
function search(){
    let search = document.querySelector('.input-bar').value;
    let choose = document.querySelector('.type-select').value;
    let category = document.querySelector('.category-select').value;
    let web = document.querySelector('.web-select').value;
    
    if(!search || !choose || !category || !web){
        alert('do not input completely');
    }
    else{
        console.log(search, choose, category, web);
        
        search = Number(search);
        
          if(category === 'video'){
            console.log("bug1");
            if(web === "v1"){         
              console.log("bug");
              window.open(`https://ani.gamer.com.tw/search.php?keyword=${search}`, "_blank");
            }
            else if(web === "v2"){
              window.open(`https://anime1.me/?s=${search}`, "_blank");
            }
          }
          else if(category === 'manga'){
              if(web === "m1"){         
                window.open(`https://m.manhuagui.com/s/${search}.html`, "_blank");
              }
              else if(web === "m2"){
                window.open(`https://www.baozimh.com/search?q=${search}`, "_blank");
              }
              
          }
          else if(category === 'novel'){
              alert("作者不太看小說，歡迎私訊添加");
          }
        
        
    }

}
document.querySelector('.enter').addEventListener('click', function(){
    search();
});
