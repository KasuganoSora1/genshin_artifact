import {exec} from "child_process"
function open_yas(){
    exec(".\\data\\yas.exe --min-star=5 -o .\\data\\  ", (error) => {
    });
}
export {open_yas}