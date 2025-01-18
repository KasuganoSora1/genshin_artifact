/*

    ----------------------------
    属性名称对应表              
    ----------------------------
    recharge                    充能
    lifeStatic                  小生命
    lifePercentage              大生命
    attackStatic                小攻击
    attackPercentage            大攻击
    critical                    暴击
    criticalDamage              暴伤
    defendStatic                小防御
    defendPercentage            大防御
    waterBonus                  水伤
    dendroBonus                 草伤
    fireBonus                   火伤
    thunderBonus                雷伤
    windBonus                   风伤
    iceBonus                    冰伤
    rockBonus                   岩伤
    physicalBonus               物伤
    elementalMastery            精通
    cureEffect                  治疗
*/
import fs from "fs";
import {RunResult, sqlite3} from "sqlite3"
import {Database} from "sqlite3"
import { AriaComponentOption, number } from "echarts";
import {position_main_tag_character,character_aritact,character_wei} from "./character_tag"
//import { character } from "./character";
function get_artifact_list(){
    return [
        "DeepwoodMemories",//            草套
        "thunderingFury",//              如雷套
        "emblemOfSeveredFate",//         绝缘套
        "shimenawaReminiscence",//       追忆套
        "tenacityOfTheMillelith",//      千岩套
        "gladiatorFinale",//             角斗士
        "GildedDreams",//                饰金之梦
        "thunderSmoother",//             平雷套
        "noblesseOblige",//              宗室
        "viridescentVenerer",//          风套
        "wandererTroupe",//              流浪大地
        "FlowerOfParadiseLost",//        乐园遗落之花
        "DesertPavilionChronicle",//     沙上楼阁
        "NymphsDream",//                 水仙之梦
        "paleFlame",//                   苍白之火
        "wandererTroupe",//              流浪大地
        "huskOfOpulentDreams",//         华馆梦醒
        "GoldenTroupe",//                黄金剧团
        "MarechausseeHunter",//          逐影猎人
        "SongOfDaysPast",//              昔日套
        "NighttimeWhispersInTheEchoingWoods"//回声套
    ]
}
function get_position_list(){
    return [
        "flower",
        "feather",
        "sand",
        "cup",
        "head"
    ]
}
function get_main_tag_list(event:any,position:any){
    let base_main=[
        "lifePercentage",
        "attackPercentage",
        "defendPercentage",
        "elementalMastery"
    ];
    switch(position){
        case "flower":
            return ["lifeStatic"];
            break;
        case "feather":
            return ["attackStatic"];
            break;
        case "sand":
            base_main.push("recharge");
            return base_main;
            break;
        case "cup":
            base_main.push("rockBonus");
            base_main.push("fireBonus");
            base_main.push("thunderBonus");
            base_main.push("physicalBonus");
            base_main.push("dendroBonus");
            base_main.push("waterBonus");
            base_main.push("windBonus");
            return base_main;
            break;
        case "head":
            base_main.push("critical");
            base_main.push("criticalDamage");
            base_main.push("cureEffect")
            return base_main;
            break;
        default:
            return [];
            break;
    }
}
const sub_tag_max: Map<string, number> = new Map([
    ["recharge", 0.0648],
    ["lifeStatic", 298.75],
    ["lifePercentage", 0.0583],
    ["attackStatic", 19.45],
    ["attackPercentage", 0.0584],
    ["critical", 0.0389],
    ["criticalDamage", 0.0777],
    ["defendStatic", 23.15],
    ["defendPercentage", 0.0729],
    ["elementalMastery",23.21]
]);

class artifact{

    star:number;
    level:number;
    artifact_name:string;
    position:string;
    main_tag:Map<string,number>;
    sub_tag:Map<string,number>;
    equip:string;

    constructor(star:number,level:number,artifact_name:string,position:string,main_tag:Map<string,number>,sub_tag:Map<string,number>,equip:string){
        this.star=star;
        this.level=level;
        this.artifact_name=artifact_name;
        this.position=position
        this.main_tag=main_tag;
        this.sub_tag=sub_tag;
        this.equip=equip;
    }

    //typedef Map<Map<string,number>,number> sub_tag
    getperhaps(call_back:(data:Map<Map<string,number>,number>)=>void){
        let level_x=Math.round(this.level/4)+1;//0 4 8 12 16 20
        let tag1_x: number = 0;
        let tag2_x: number = 0;
        let tag3_x: number = 0;
        let tag4_x: number = 0;
        let tag1_name = "";
        let tag2_name = "";
        let tag3_name = "";
        let tag4_name = "";
        let index = 1;
        let re=new Map<Map<string,number>,number>();
        if (level_x == 6) {
            this.sub_tag.forEach((tag_value:number,tag_name:string)=>{
                let x:string= (tag_value / (sub_tag_max.get(tag_name) as number)).toFixed(1);
                let tagx_x: number = Number(x);
                switch (index) {
                    case 1:
                        tag1_x = tagx_x;
                        tag1_name=tag_name;
                        break;
                    case 2:
                        tag2_x = tagx_x;
                        tag2_name=tag_name;
                        break;
                    case 3:
                        tag3_x = tagx_x;
                        tag3_name=tag_name;
                        break;
                    case 4:
                        tag4_x = tagx_x;
                        tag4_name=tag_name;
                        break;
                    default:
                        break;
                }
                index=index+1;
            });
            let one_map:Map<string,number>=new Map<string,number>();
            one_map.set(tag1_name,tag1_x);
            one_map.set(tag2_name,tag2_x);
            one_map.set(tag3_name,tag3_x);
            one_map.set(tag4_name,tag4_x);
            re.set(one_map, 1);
            call_back(re);
        } else {

            this.sub_tag.forEach((tag_value: number, tag_name: string) => {

                let x: string = (tag_value / (sub_tag_max.get(tag_name) as number)).toFixed(1);
                let tagx_x: number = Number(x);
                switch (index) {
                    case 1:
                        tag1_x = tagx_x;
                        tag1_name=tag_name;
                        break;
                    case 2:
                        tag2_x = tagx_x;
                        tag2_name=tag_name;
                        break;
                    case 3:
                        tag3_x = tagx_x;
                        tag3_name=tag_name;
                        break;
                    case 4:
                        tag4_x = tagx_x;
                        tag4_name=tag_name;
                        break;
                    default:
                        break;
                }
                index = index + 1;
            });
            let sql_str="";
            if (tag4_x == 0) {
                tag4_name="any";
                sql_str = `select * from l${level_x} where tag1=${tag1_x} and tag2=${tag2_x} and tag3=${tag3_x} and tag4 is null`;
            }else{
                sql_str = `select * from l${level_x} where tag1=${tag1_x} and tag2=${tag2_x} and tag3=${tag3_x} and tag4=${tag4_x}`;
            }
            let db = new Database("./data/data.db", (error) => {
                if (!error) {
                    db.all(sql_str, (e, r) => {
                        if(r.length==0){
                            call_back(new Map<Map<string,number>,number>());
                            return;
                        }
                        let id=(r[0] as any).id;
                        sql_str=`select * from l${level_x}tol6 where father_id${level_x}=${id}`;
                        db.all(sql_str,(e,r)=>{
                            if(!e){
                                for (let i = 0; i < r.length; i++) {
                                    let one_map=new Map<string,number>([
                                        [tag1_name,(r[i] as any).tag1],
                                        [tag2_name,(r[i] as any).tag2],
                                        [tag3_name,(r[i] as any).tag3],
                                        [tag4_name,(r[i] as any).tag4],
                                    ]);
                                    re.set(one_map, (r[i] as any).count==undefined?1:(r[i] as any).count);
                                }
                                call_back(re);
                            }
                        })
                    });
                }
            });
        }
        
    }
}
function read_aritact_file():artifact[]{
    let artifacts:artifact[]=[];
    let artifact_str=fs.readFileSync("./data/mona.json");
    let artifact_jsons=JSON.parse(artifact_str.toString());
    for(let position in artifact_jsons){
        let arts=artifact_jsons[position];
        if(position=="version"){
            continue;
        }
        (arts as any[]).forEach((art)=>{
            if((art["star"] as number)<5){
                return;
            }
            artifacts.push(new artifact(
                (art["star"] as number),//star
                (art["level"] as number),//level
                (art["setName"] as string),//name
                (art["position"] as string),
                new Map<string,number>([
                    [(art["mainTag"]["name"] as string),(art["mainTag"]["value"] as number)],
                ]),//main_tag
                art["normalTags"].length==4 ?
                new Map<string,number>([ //sub_tag
                    [(art["normalTags"][0]["name"] as string),(art["normalTags"][0]["value"] as number)],
                    [(art["normalTags"][1]["name"] as string),(art["normalTags"][1]["value"] as number)],
                    [(art["normalTags"][2]["name"] as string),(art["normalTags"][2]["value"] as number)],
                    [(art["normalTags"][3]["name"] as string),(art["normalTags"][3]["value"] as number)],
                ]):
                new Map<string,number>([ //sub_tag
                    [(art["normalTags"][0]["name"] as string),(art["normalTags"][0]["value"] as number)],
                    [(art["normalTags"][1]["name"] as string),(art["normalTags"][1]["value"] as number)],
                    [(art["normalTags"][2]["name"] as string),(art["normalTags"][2]["value"] as number)],
                ]),
                art["equip"]
            ));
        });
    }
    return artifacts;
}
/*
function get_artifact_string(arti:artifact):string{

    let position=arti.position;
    let main_tag=arti.main_tag;
    let sub_tag =arti.sub_tag;
    let result_str="";

    for(let main_tag_name_value of main_tag){

        let main_tag_name=main_tag_name_value[0];
        let main_tag_value=main_tag_name_value[1];

        result_str=result_str+`main_tag:${arti.artifact_name}+${main_tag_name_value[0]}:${main_tag_name_value[1]} sub_tag:`;

        for(let sub_tag_name_value of sub_tag){
            let sub_tag_name =sub_tag_name_value[0];
            let sub_tag_value=sub_tag_name_value[1];
            result_str=result_str+`${sub_tag_name}:${sub_tag_value} `;
        }
    }
    return result_str;
}
function get_useful_character(arti:artifact):string[]{
    let position=arti.position;
    let main_tag=arti.main_tag;
    let main_tag_name:string;
    for(let main_tag_value of main_tag){
        main_tag_name=main_tag_value[0];
    }
    let result:string[]=[];
    let main_tag_character=position_main_tag_character.get(position);
    let char_list=main_tag_character.get(main_tag_name);
    return char_list;
}
function get_userful_subtag_count(char:string,arti:artifact){

}
function analyse_one_character(arti:artifact,char:string):string{
    let arti_str=get_artifact_string(arti);
    let result_str=arti_str;
    return result_str;
}
function start_analyse():string{
    let artis:artifact[]=read_aritact_file();
    let result_str="";
    for(let arti of artis){
        if(arti.star!=5){
            continue;
        }
        let position=arti.position;
        let main_tag=arti.main_tag;
        let sub_tag=arti.sub_tag;
        let sub_tag_name_list=[];

        for(let main_tag_name_value of main_tag){
            result_str=result_str+`${arti.artifact_name}+${main_tag_name_value[0]}:${main_tag_name_value[1]}`;
                for(let sub_tag_name_value of sub_tag){
                    let sub_tag_name =sub_tag_name_value[0];
                    let sub_tag_value=sub_tag_name_value[1];
                    sub_tag_name_list.push(sub_tag_name);
                    result_str=result_str+`
${sub_tag_name}:${sub_tag_value}\n
`;
                }

            let main_tag_character=position_main_tag_character.get(position);
            let character_names=main_tag_character.get(main_tag_name_value[0]);
            for(let character_name of character_names){
                result_str="对于"+character_name+"主词条适用,";
                //判断副词条有几条适用
                let sub_tag_name_value=character_wei.get(character_name);
                for(let sub_tag_name of sub_tag_name_list){
                    let char_wei_sub_tag=character_wei.get(character_name);
                    if(char_wei_sub_tag.has(sub_tag_name)){

                    }
                }
            }
        }
    }
    return result_str;
}*/
export {artifact,get_artifact_list,read_aritact_file,sub_tag_max,
get_position_list,get_main_tag_list}
