import {Onnx} from "onnxjs"
import {Sharp} from "sharp"
import win from "screenshot-desktop"
function start_analyse(){
    win({filename:"1.jpg"}).then((img)=>{
        console.log(img);
    });
}
export {start_analyse}