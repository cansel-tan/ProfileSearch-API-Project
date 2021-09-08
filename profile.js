class Profile{
    constructor(){
        this.clientid='',
        this.clientSecret=''
    }

    async getProfile(username) {
        //metoda gönderilen username ile bir sorgulama yapılır.
        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
        //gelen bilgi json bilgiye çevrilir.
        const profile = await profileResponse.json();
        //kullanıcının userid ye göre todo bilgilerini sayfaya yazdırma
        const todoResponce= await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`);
        const todo=await todoResponce.json();
        //dışarıya return obje döndürülür.
        return{
            profile,
            todo
        }

    }
}