import {exec} from "child_process"
function open_yas(){
    exec(".\\data\\yas.exe -o .\\data\\",(error)=>{
        if(error){
            console.log(error);
        }
    }
    );
}
export {open_yas}