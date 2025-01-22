import {app,BrowserWindow, ipcMain} from "electron"
import path from "path"
import {character, get_character_list,get_character_artifact_ex_async} from "./artifact/character"
import {artifact, get_artifact_list,get_position_list,get_main_tag_list} from "./artifact/artifact"
import {open_yas} from "./artifact/yas"
//import {start_analyse} from "./artifact/character"

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minimizable:false,
    maximizable:false,
    resizable:false,
    autoHideMenuBar:true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile('./index.html');
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
  ipcMain.handle("get_character_list",get_character_list);
  ipcMain.handle("get_artifact_list",get_artifact_list);
  ipcMain.handle("get_position_list",get_position_list);
  ipcMain.handle("get_main_tag_list",get_main_tag_list);
  ipcMain.handle("get_character_artifact_ex_async",get_character_artifact_ex_async);
  ipcMain.handle("open_yas",open_yas);
  //ipcMain.handle("start_analyse",start_analyse);

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
