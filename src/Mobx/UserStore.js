import { action, makeObservable, observable } from "mobx";

class UserStore{

    constructor(){
        makeObservable(this,{
            user:observable,
            setUser:action
        });
    }

    user={};

    setUser=(data)=>{this.user=data};

}

const userStore = new UserStore();

export default userStore;