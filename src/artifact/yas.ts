import {exec} from "child_process"
function open_yas(){
    exec(".\\data\\yas.exe -o .\\data\\  --min-star=5", (error) => {
    });
}
export {open_yas}