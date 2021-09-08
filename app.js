//profile.js getProfile() metoduna ulaşmak için obje tanımlanır.
const profile = new Profile();
const ui=new UI();
const searchProfile = document.querySelector('#searchProfile').addEventListener('keyup',(event)=>{//search yapılabilmesi için event eklenir.
    ui.clear();
    let text =  event.target.value; 
//search alanına girilen username ait profil bilgileri dizi içerisinde gelir.
    if(text!==''){
        profile.getProfile(text)// girilen isim gönderilir.
        .then(res=>{
            if(res.profile.length===0){
               ui.showAlert(text);
            }
            else{
                ui.showProfile(res.profile[0]);
                ui.showTodo(res.todo);
            }
    
        })
        .catch(err=>{
            ui.showAlert(text); 

        })
    }
          
});
