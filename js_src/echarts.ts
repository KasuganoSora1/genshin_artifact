import * as echarts from 'echarts/core';
import {TooltipComponent,GridComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
window.onload=init;
function init(){
  init_character_list();
  init_artifact_list();
  init_chart();
  init_position();
  init_main_tag();
  init_open_yas();
  init_analyse();
}
function init_artifact_list(){
  (window as any).data.get_artifact_list().then((artifact_list:Object) => {
    let character_selector = document.getElementById("artifact");
    for(let artifact_en in artifact_list){
      let character_dom = document.createElement("option");
      character_dom.setAttribute("id", artifact_en);
      character_dom.setAttribute("value", artifact_en);
      character_dom.innerText=artifact_list[artifact_en];
      (character_selector as HTMLElement).appendChild(character_dom);
    }
    let character_dom = document.createElement("option");
    character_dom.setAttribute("id","all");
    character_dom.setAttribute("value","all");
    character_dom.innerText="全部";
    character_selector?.appendChild(character_dom);
    /*
    character_list.forEach((v: string) => {
      let character_dom = document.createElement("option");
      character_dom.setAttribute("id", v);
      character_dom.setAttribute("value", v);
      character_dom.innerText=v;
      (character_selector as HTMLElement).appendChild(character_dom);
    });*/
  });
}
function init_position() {
  let position_list = (window as any).data.get_position_list().then((positions: string[]) => {
    let position_selector = document.getElementById("position");
    positions.forEach((position: string) => {
      let position_option = document.createElement("option");
      position_option.setAttribute("id", position);
      position_option.setAttribute("value", position);
      position_option.innerText=position;
      (position_selector as HTMLElement).appendChild(position_option);
    })
  });
}
function init_main_tag(){
  let position_dom=document.getElementById("position") as HTMLSelectElement;
  let main_tag_dom=document.getElementById("main_tag") as HTMLSelectElement;
  set_first_selector(main_tag_dom);
  position_dom.onchange=function(){
    let position=position_dom.options[position_dom.selectedIndex].value;
    clear_selector(main_tag_dom);
    (window as any).data.get_main_tag_list(position).then((main_tag_list:string[])=>{
      main_tag_list.forEach((main_tag)=>{
        let main_tag_option=document.createElement("option");
        main_tag_option.setAttribute("id",main_tag);
        main_tag_option.setAttribute("value",main_tag);
        main_tag_option.innerText=main_tag;
        main_tag_dom.appendChild(main_tag_option);
      });
    });
  }
}
function clear_selector(selector:HTMLSelectElement){
  selector.innerHTML="";
}
function set_first_selector(selector:HTMLSelectElement){
        let main_tag_option=document.createElement("option");
        main_tag_option.setAttribute("id","lifeStatic");
        main_tag_option.setAttribute("value","lifeStatic");
        main_tag_option.innerText="lifeStatic";
        selector.appendChild(main_tag_option);
}
function init_character_list() {
  (window as any).data.get_character_list().then((character_list: string[]) => {
    let character_selector = document.getElementById("character");
    for(let character_en in character_list){
      let character_dom = document.createElement("option");
      character_dom.setAttribute("id", character_en);
      character_dom.setAttribute("value", character_en);
      character_dom.innerText = character_list[character_en];
      (character_selector as HTMLElement).appendChild(character_dom);
    }
    /*character_list.forEach((v: string) => {
      let character_dom = document.createElement("option");
      character_dom.setAttribute("id", v);
      character_dom.setAttribute("value", v);
      character_dom.innerText = v;
      (character_selector as HTMLElement).appendChild(character_dom);
    });*/
  });
}
function init_chart() {

  echarts.use([GridComponent, BarChart, CanvasRenderer,TooltipComponent]);
  let button_dom=document.getElementById("submit") as HTMLButtonElement;
  button_dom.onclick = function () {
    let character_dom=document.getElementById("character") as HTMLSelectElement;
    let artifact_dom=document.getElementById("artifact") as HTMLSelectElement;
    let position_dom=document.getElementById("position") as HTMLSelectElement;
    let main_tag_dom=document.getElementById("main_tag") as HTMLSelectElement;

    let character_name=character_dom.options[character_dom.selectedIndex].value;
    let artifact_name=artifact_dom.options[artifact_dom.selectedIndex].value;
    let position_name=position_dom.options[position_dom.selectedIndex].value;
    let main_tag_name=main_tag_dom.options[main_tag_dom.selectedIndex].value;

    (window as any).data.get_character_artifact_ex(character_name, artifact_name, position_name, main_tag_name).then((artifact_Ex_map:Map<any,number>) => {
      
      let artifacts:any[] = [];
      let values: any[] = [];
      let names:string[]=[];
      let index=1;
      let para_txts:string[]=[];
      for (let artifact_value of artifact_Ex_map) {
        artifacts.push(artifact_value[0]);//artifact
        names.push(index.toString()+"-lv"+artifact_value[0].level.toString());
        if(artifact_value[0].sub_tag.size==3){
          values.push({
            value:artifact_value[1],
            itemStyle:{
              color: '#a90000'
            }
          });
        }else{
          values.push(artifact_value[1]);
        }
        let para_txt:string="";
        para_txt=para_txt+`<p>${index}-lv${artifact_value[0].level}</p>`;
        for(let tag_name_tag_value of artifact_value[0].sub_tag){
          para_txt=para_txt+`<p>${tag_name_tag_value[0]}:${tag_name_tag_value[1].toFixed(2)}</p>`;
        }
        para_txt=para_txt+`<p>equiqment:${artifact_value[0].equip}</p>`;
        para_txt=para_txt+`<p>score:${artifact_value[1].toFixed(0)}</p>`;
        para_txts.push(para_txt);
        index++; 
      }

      var chartDom = document.getElementById('echart_main');
      var myChart = echarts.init(chartDom);
      var option;
      myChart.clear();

      option = {
        tooltip:{
          trigger:"axis",
          axisPointer:{
            type:"shadow"
          },
          formatter:(data:any[])=>{
            let index=data[0].dataIndex;
            return para_txts[index];
          }
        },
        xAxis: {
          type: 'category',
          data:names,
          axisLabel:{
            rotate:60
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: values,
            type: 'bar'
          }
        ]
      };
      option && myChart.setOption(option);

    });

  }
}
function init_open_yas(){
  let open_yas_dom=document.getElementById("open_yas") as HTMLElement;
  open_yas_dom.onclick=()=>{
    (window as any).data.open_yas();
  }
}
function init_analyse(){
  let analyse_all_dom=document.getElementById("analyse_all") as HTMLElement;
  analyse_all_dom.onclick = ()=>{
    analyse_all_dom.style.opacity="0.5";
    analyse_all_dom.style.pointerEvents="none";
    (window as any).data.start_analyse();
    analyse_all_dom.style.opacity="1.0";
    analyse_all_dom.style.pointerEvents="auto";
  }
}



