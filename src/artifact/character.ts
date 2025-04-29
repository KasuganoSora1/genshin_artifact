import { artifact, sub_tag_max,read_aritact_file } from "./artifact";
import {character_aritact, character_wei,position_main_tag_character} from "./character_tag"
import fs from "fs"
/*
更新圣遗物算法，数学算法上有了一点突破,不知道速度有没有提升
tips:多项式定理
1.确定加到了几个词条上:C41 C42 C43 C44 
2.上述中每种情形，每个词条加几次:C40 (5)
                   C41 (1,4|2,3|3,2|4,1)
                   C42 (1,1,3|1,2,2|1,3,1|2,1,2|2,2,1|3,1,1)
                   C43 (1,1,1,2|1,1,2,1|1,2,1,1|2,1,1,1)  
3.其中每个加法，有几种增加的情形；example: 1,4 C511 2,3 C523 1,1,1,2 C51112
4.每种加法可以加成多少数字，多项式定理t=(0.7,0.8,0.9,1.0)
                                t1={7:1,8:1,9:1,10:1}
                                t2={14:1,15:2,16:3,17:4,18:3,19:2,20:1}
                                t3={21:1,22:3,23:6,24:10,25:12,26:12,27:10,28:6,29:3,30:1}
                                t4={28:1,29:4,30:10,31:20,32:31,33:40,34:44,35:40,36:31,37:20,
                                    38:10,39:4,40:1}
                                t5={35:1,36:5,37:15,38:35,39:65,40:101,41:135,42:155,43:155,
                                    44:135,45:101,46:65,47:35,48:15,49:5,50:1}
5.先通过条件概率算出当都+1时各种加成方法的概率,然后通过再算出每种加法不全是+1时的期望
6.各个参数可以独立运算期望
###计算流程
1.原有的分数先加起来
2.确定现在的还可以加几次
3.假设都+1 获得perhaps 和 perhaps 的 count
4.计算每种perhap不全是+1时候期望
5.得到结果
*/
class character{
    character_name:string="";
    constructor(character_name:string){
        this.character_name=character_name;
    }
    get_all_score(art:artifact,call_back:(data:Map<number,number>)=>void){//one number is score
                                                   //two number is count
        //

        let score_count:Map<number,number>=new Map<number,number>();
        art.getperhaps((perhaps)=>{
            for(let perhap_count of perhaps){
                let perhap=perhap_count[0];
                let count=perhap_count[1];
                if(perhap.has("any")){
                    let score:number=0;
                    let any_value=(perhap.get("any") as number);
                    perhap.delete("any");
                    for(let tag_name_tag_max of sub_tag_max){
                        let tag_name=tag_name_tag_max[0];
                        let tag_max=tag_name_tag_max[1];
                        if(perhap.has(tag_name)){
                            continue;
                        }else{
                            perhap.set(tag_name,any_value);
                            let score:number=this.get_one_perhap_score(perhap,art);
                            if(score_count.has(score)){
                                score_count.set(score,(score_count.get(score) as number)+count);
                            } else {
                                score_count.set(score, count);
                            }
                            perhap.delete(tag_name);
                        }
                    }
                } else {
                    let score:number=this.get_one_perhap_score(perhap,art);
                    if (score_count.has(score)) {
                        score_count.set(score,(score_count.get(score) as number)+count);
                    }else{
                        score_count.set(score, count);
                    }
                }
            }
            call_back(score_count);
        });
    }
    get_one_perhap_score(perhap:Map<string,number>,art:artifact):number{
        let score=0;
        let char_wei:Map<string,number>=(character_wei.get(this.character_name) as Map<string,number>);
        for(let p of perhap){
            let tag_name=p[0];//tag_name
            let tag_value=p[1];//tag_value
            //if percentage
            //0.7*max*100*c_wei*t_wei
            let t_wei:number=sub_tag_weight.get(tag_name) as number;
            let c_wei:number=char_wei.get(tag_name) as number;
            let t_max:number;
            if (tag_name.endsWith("Percentage") || tag_name=="recharge"
            || tag_name=="critical" || tag_name=="criticalDamage") {
                t_max = (sub_tag_max.get(tag_name) as number) * 100;
            } else {
                t_max = sub_tag_max.get(tag_name) as number;
            }
            score=score+tag_value*t_max*t_wei*c_wei;
        }
        if(art.main_tag.has("critical") || art.main_tag.has("criticalDamage")){
            score=score+10;
        }
        score=Math.round(score);
        return score;
    }
    get_Ex(art:artifact,call_back:(data:number)=>void){
        let total_count=0;
        let P=0;
        this.get_all_score(art,(score_count_maps)=>{
            score_count_maps.forEach((count,score)=>{
                P=P+score*count
                total_count=total_count+count;
            });
            call_back(P/total_count);
        });
    }
    get_Ex_sync(art:artifact){
        return new Promise((resolve,reject)=>{
            this.get_Ex(art,(Ex:number)=>{
                resolve(Ex);
            })
        });
    }
    is_need_main_tag(art:artifact):boolean{

        let position=art.position;
        let main_tag_name:string="";

        for(let main_tag of art.sub_tag){
            main_tag_name=main_tag[0];
        }

        let tag_character=position_main_tag_character.get(position);
        if(tag_character!=undefined){
            let character_list=tag_character.get(this.character_name);
            if(character_list!=undefined){
                if(character_list.indexOf(this.character_name)==-1){
                    return true;
                }
            }
        }
        return false;
    }
    get_need_sub_count(art:artifact):number{
        let tag_name_wei=character_wei.get(this.character_name) as Map<string,number>;
        let count=0;
        if(tag_name_wei!=undefined){
            for (let tag_name_value of art.sub_tag) {
                if (tag_name_wei.has(tag_name_value[0]) && tag_name_wei.get(tag_name_value[0])!=0) {
                    count++;
                }
            }
        }
        return count;
    }
    is_need_artifact(art:artifact):boolean{
        let need_art_list=character_aritact.get(this.character_name);
        if(need_art_list!=undefined){
            if(need_art_list.indexOf(art.artifact_name)!=-1){
                return true;
            }
        }
        return false;
    }
}
const character_en_cn=new Map<string,string>([
    ["Hutao","胡桃"],
    ["Yelan","夜兰"],
    ["Nahida","纳西达"],
    ["Layla","莱伊拉"],
    ["Keqing","刻晴"],
    ["RaidenShogun","雷电将军"],
    ["Alhaitham","艾尔海森"],
    ["YunJin","云锦"],
    ["Noelle","诺艾尔"],
    ["Beidou","北斗"],
    ["Fischl","菲谢尔"],
    ["Tighnari","提纳里"],
    ["Nilou","妮露"],
    ["YaeMiko","八重神子"],
    ["Xingqiu","行秋"],
    ["Xiangling","香菱"],
    ["Neuvillette","那维莱特"],
    ["Furina","芙宁娜"],
    ["Navia","纳维亚"],
    ["Gaming","嘉明"],
    ["Clorinde","柯洛琳的"],
    ["Arlecchino","阿蕾奇诺"],
    ["Mavuika","玛薇卡"],
    ["Xilonen","希诺宁"]
]);
const sub_tag_weight:Map<string,number>=new Map<string,number>([
    ["critical", 2],
    ["criticalDamage", 1],
    ["elementalMastery", 0.33],
    ["recharge", 1.1979],
    ["attackPercentage", 1.33],
    ["lifePercentage", 1.33],
    ["defendPercentage", 1.06],
    ["attackStatic", 0.398*0.5],
    ["lifeStatic", 0.026*0.66],
    ["defendStatic", 0.335*0.66]
]);
function get_character_list():Object{
    let re={};
    character_wei.forEach((v,n)=>{
        if(character_en_cn.has(n)){
            re[n]=character_en_cn.get(n);
        }else{
            re[n]=n;
        };
    });
    return re;
};
async function get_character_artifact_ex_async(event:any,args:any[]){

    let char_name=args[0] as string;
    let arti_name=args[1] as string;
    let posi_name=args[2] as string;
    let main_name=args[3] as string;
    let arti_selected:artifact[]=[];
    let arti_ex:Map<artifact,number>=new Map();

    let char=new character(char_name);
    let arti_s=read_aritact_file();
    arti_s.forEach((arti) => {
        if (arti.artifact_name == arti_name && arti.position == posi_name) {
            for (let main_tag_name of arti.main_tag) {
                if (main_tag_name[0] == main_name) {
                    arti_selected.push(arti);
                }
            }
        }
    });
    let index = 0;
    let length=arti_selected.length;
    for(let arti of arti_selected){
        let ex=await char.get_Ex_sync(arti) as number;
        let x_name="";
        x_name=x_name+index.toString();
        x_name = x_name + "-lv" + arti.level.toString();
        arti_ex.set(arti, ex);
        index++;
        /*
        for(let s_tag of arti.sub_tag){
            x_name=x_name+s_tag[0]+":";
            x_name=x_name+s_tag[1].toString()+" ";
        }
        arti_ex.set(x_name, ex);
        index++;
        */
    }
    return arti_ex;
}
function get_artifact_string(arti:artifact):string{

    let position=arti.position;
    let main_tag=arti.main_tag;
    let sub_tag =arti.sub_tag;
    let result_str="";

    for(let main_tag_name_value of main_tag){

        let main_tag_name=main_tag_name_value[0];
        let main_tag_value=main_tag_name_value[1];

        result_str=result_str+`${arti.artifact_name} main_tag:${main_tag_name_value[0]}:${main_tag_name_value[1]} sub_tag:`;

        for(let sub_tag_name_value of sub_tag){
            let sub_tag_name =sub_tag_name_value[0];
            let sub_tag_value=sub_tag_name_value[1];
            result_str=result_str+`${sub_tag_name}:${sub_tag_value} `;
        }
    }
    return result_str;
}
/*
function get_artifact_evalute(art:artifact){
    let art_name=art.artifact_name;
    let position=art.position;
    let re_str="";
    let arti_str=get_artifact_string(art)+"\n";
    re_str=re_str+arti_str;
    for(let char_art of character_aritact){
        let char_name=char_art[0];
        let art_list=char_art[1];
        if(art.position=="flower" || art.position=="feather"){
            let char=new character(char_name);
            if (char.get_need_sub_count(art) != 0) {
                re_str = re_str + `副词条中${char.character_name}所需要的为${char.get_need_sub_count(art)}条。`;
                if(char.is_need_artifact(art)){
                    re_str=re_str+`而且套装正确\n`;
                }else{
                    re_str=re_str+`可惜套装不正确\n`
                }
            }
        } else {
            let char_name = char_art[0];
            let art_list = char_art[1];
            let char = new character(char_name);
            if(char.is_need_artifact(art)){
                re_str=re_str+`该主词条为${char.character_name}所需要的\n`+
                              `副词条中有用的词条为${char.get_need_sub_count(art)},`;
                if(char.is_need_artifact(art)){
                    re_str=re_str+`而且套装正确\n`;
                }else{
                    re_str=re_str+`可惜套装不正确\n`
                }
            }
        }
    }
    return re_str;
}*/
/*
function start_analyse(){
    let artis:artifact[]=read_aritact_file();
    let result_str="";
    for(let arti of artis){
        let one_str=get_artifact_evalute(arti);
        result_str=result_str+one_str;
    }
    fs.writeFile("./data/analyse_all.txt",result_str,error=>{
    });
}*/

export{character,
    sub_tag_weight,
    get_character_list,
    get_character_artifact_ex_async
    //,start_artifact_evalute
}
