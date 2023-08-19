import { ipcMain } from "electron";
import { character } from "./artifact/character";

const { contextBridge,ipcRenderer } = require('electron')
contextBridge.exposeInMainWorld('data', {
    get_character_list:()=>ipcRenderer.invoke('get_character_list'),
    get_artifact_list:()=>ipcRenderer.invoke('get_artifact_list'),
    get_position_list:()=>ipcRenderer.invoke('get_position_list'),
    get_main_tag_list:(position:string)=>ipcRenderer.invoke('get_main_tag_list',position),
    get_character_artifact_ex:(char_name:string,arit_name:string,
        posi_name:string,main_name:string
        )=>ipcRenderer.invoke('get_character_artifact_ex_async',[char_name,arit_name,posi_name,main_name]),
    open_yas:()=>ipcRenderer.invoke('open_yas'),
    start_artifact_evalute:()=>ipcRenderer.invoke("start_artifact_evalute")
});