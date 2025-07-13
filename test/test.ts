import "../src/artifact/artifact"
import { artifact,read_aritact_file } from "../src/artifact/artifact"
import {character } from "../src/artifact/character"
import {character_aritact,
    character_wei,
    position_main_tag_character
} from "../src/artifact/character_tag"
let c=new character("Hutao");
let a=new artifact(5,
    3,
    "emblemOfSeveredFate",
    "head",
    new Map([["critical",4780]]),
    new Map([
        ["attackStatic",19],
        ["lifePercentage",0.222],
        ["criticalDamage",0.148],
        ["recharge",0.052]
    ]),
    "Beidou");
let b=new artifact(5,
    3,
    "emblemOfSeveredFate",
    "flower",
    new Map([["lifeStatic",4780]]),
    new Map([
        ["critical",0.058],
        ["criticalDamage",0.179],
        ["lifePercentage",0.099]
    ]),
    "Beidou");
let d=new artifact(5,
    0,
    "GildedDreams",
    "flower",
    new Map([["lifeStatic",717]]),
    new Map([
        ["defendStatic", 16],
        ["recharge",0.065],
        ["defendPercentage",0.058]
    ]),
    "Beidou");
/*
let d=new artifact(5,
    0,
    "wanderersTroupe",
    "sand",
    new Map([["lifePercentage",0.07]])
for(let i=0;i<21;i++){
    a.level=i;
    console.log("当前等级:"+a.level+" 可以加几次:"+a.getaddtimes());
}
console.log(c.get_score_now(a));
console.log(c.get_score_now(b));
b.get_perhaps();
*/


let arts=read_aritact_file();
let index=0;
/*
c.get_Ex_sync(arts[521]).then((res)=>{
    console.log(res.toString());}
);
*/
/*
function fn(index){
    if(arts[index].sub_tag.size==4){
        fn(index+1);
        return;
    }
    let t1=0;
    let t2=0;
    let t3=0;
    t1=Date.now();
    console.log("new:"+c.get_Ex1(arts[index]).toString());
    t2=Date.now();
    c.get_Ex_sync(arts[index]).then((res)=>{
        t3=Date.now();
        console.log("old:"+res.toString());
        console.log("time new:"+(t2-t1).toString()+"ms; time old:"+(t3-t2).toString()+"ms;\n\n");
        fn(index+1);
    }); 
}
fn(0);*/
let char_list=[...character_wei.keys()];
char_list.forEach((char)=>{
    if(!character_aritact.has(char)){
        console.log(char+"未设置圣遗物");
    }
});
console.log("------------------");
char_list.forEach((char)=>{
    for(let [k,v] of position_main_tag_character){
        let count=0;
        for(let [k1,v1] of v){ //v names
            if(v1.includes(char)){
                count++;
            }
        }
        if(count==0){
            console.log(char+"在"+k+"位置未设置圣遗物");
        }
    }
});