import { number } from "echarts";
import { artifact, sub_tag_max,read_aritact_file } from "./artifact";
import { sources } from "webpack";

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
}
let character_wei:Map<string,Map<string,number>>=new Map<string,Map<string,number>>([
    ["Hutao",new Map<string,number>([
        ["lifePercentage",0.8],
        ["lifeStatic",0.8],
        ["attackPercentage",0.5],
        ["attackStatic",0.5],
        ["defendPercentage",0],
        ["defendStatic",0],
        ["critical",1],
        ["criticalDamage",1],
        ["elementalMastery",0.75],
        ["recharge",0]
    ]
    )],
    ["Yelan", new Map<string, number>([
        ["lifePercentage", 0.8],
        ["lifeStatic", 0.8],
        ["attackPercentage", 0],
        ["attackStatic", 0],
        ["defendPercentage", 0],
        ["defendStatic",0],
        ["critical", 1],
        ["criticalDamage", 1],
        ["elementalMastery", 0],
        ["recharge", 0.55]
    ])],
    ["Nahida",new Map<string,number>([
        ["lifePercentage", 0],
        ["lifeStatic", 0],
        ["attackPercentage", 0.55],
        ["attackStatic", 0.55],
        ["defendPercentage", 0],
        ["defendStatic",0],
        ["critical", 1],
        ["criticalDamage", 1],
        ["elementalMastery", 1],
        ["recharge", 0]
    ])],
    ["Layla",new Map<string,number>([
        ["lifePercentage", 1],
        ["lifeStatic", 1],
        ["attackPercentage", 0],
        ["attackStatic", 0],
        ["defendPercentage", 0],
        ["defendStatic",0],
        ["critical", 1],
        ["criticalDamage", 1],
        ["elementalMastery", 0],
        ["recharge", 0.55]
    ])],
    ["Keqing",new Map<string,number>([
        ["lifePercentage", 0],
        ["lifeStatic", 0],
        ["attackPercentage", 0.75],
        ["attackStatic", 0.75],
        ["defendPercentage", 0],
        ["defendStatic",0],
        ["critical", 1],
        ["criticalDamage", 1],
        ["elementalMastery", 0],
        ["recharge", 0]
    ])],
    ["RaidenShogun",new Map<string,number>([
        ["lifePercentage", 0],
        ["lifeStatic", 0],
        ["attackPercentage", 0.75],
        ["attackStatic", 0.75],
        ["defendPercentage", 0],
        ["defendStatic",0],
        ["critical", 1],
        ["criticalDamage", 1],
        ["elementalMastery", 0],
        ["recharge", 0.75]
    ])]
]);
let sub_tag_weight:Map<string,number>=new Map<string,number>([
    ["critical", 2],
    ["criticalDamage", 1],
    ["elementalMastery", 0.33],
    ["recharge", 1.1979],
    ["attackPercentage", 1.33],
    ["lifePercentage", 1.33],
    ["defendPercentage", 1.06],
    ["attackStatic", 0.398*0.9],
    ["lifeStatic", 0.026*0.66],
    ["defendStatic", 0.335*0.66]
]);
function get_character_list():string[]{
    let re:string[]=[];
    character_wei.forEach((v,n)=>{
        re.push(n);
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
    arti_s.forEach((arti)=>{
        if(arti.artifact_name==arti_name && arti.position==posi_name) {
            for(let main_tag_name of arti.main_tag){
                if(main_tag_name[0]==main_name){
                    arti_selected.push(arti);
                }
            }
        }
    });
    let index=0;
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



export{character,character_wei,sub_tag_weight,get_character_list,get_character_artifact_ex_async}