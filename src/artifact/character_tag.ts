
const character_wei:Map<string,Map<string,number>>=new Map<string,Map<string,number>>([
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
        ["elementalMastery", 0.75],
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
    ])],
    ["Alhaitham",new Map<string,number>([
        ["lifePercentage", 0],
        ["lifeStatic", 0],
        ["attackPercentage", 0.75],
        ["attackStatic", 0.75],
        ["defendPercentage", 0],
        ["defendStatic",0],
        ["critical", 1],
        ["criticalDamage", 1],
        ["elementalMastery", 1],
        ["recharge", 0]
    ])],
    ["YunJin",new Map<string,number>([
        ["lifePercentage", 0],
        ["lifeStatic", 0],
        ["attackPercentage", 0.75],
        ["attackStatic", 0.75],
        ["defendPercentage", 1],
        ["defendStatic",1],
        ["critical",0.5],
        ["criticalDamage", 0.5],
        ["elementalMastery", 0],
        ["recharge", 0.9]
    ])],
    ["Noelle",new Map<string,number>([
        ["lifePercentage", 0],
        ["lifeStatic", 0],
        ["attackPercentage", 0.5],
        ["attackStatic", 0.5],
        ["defendPercentage", 0.9],
        ["defendStatic",0.9],
        ["critical",1],
        ["criticalDamage", 1],
        ["elementalMastery", 0],
        ["recharge", 0.7]
    ])],
    ["Beidou",new Map<string,number>([
        ["lifePercentage", 0],
        ["lifeStatic", 0],
        ["attackPercentage", 0.75],
        ["attackStatic", 0.75],
        ["defendPercentage", 0],
        ["defendStatic",0],
        ["critical",1],
        ["criticalDamage", 1],
        ["elementalMastery", 0.75],
        ["recharge", 0.55]
    ])],
    ["Fischl",new Map<string,number>([
        ["lifePercentage", 0],
        ["lifeStatic", 0],
        ["attackPercentage", 0.75],
        ["attackStatic", 0.75],
        ["defendPercentage", 0],
        ["defendStatic",0],
        ["critical",1],
        ["criticalDamage", 1],
        ["elementalMastery", 0.75],
        ["recharge", 0]
    ])],
    ["Tighnari",new Map<string,number>([
        ["lifePercentage", 0],
        ["lifeStatic", 0],
        ["attackPercentage", 0.75],
        ["attackStatic", 0.75],
        ["defendPercentage", 0],
        ["defendStatic",0],
        ["critical",1],
        ["criticalDamage", 1],
        ["elementalMastery", 0.75],
        ["recharge", 0]
    ])],
    ["Nilou",new Map([
        ["lifePercentage", 1],
        ["lifeStatic", 1],
        ["attackPercentage",0],
        ["attackStatic", 0],
        ["defendPercentage", 0],
        ["defendStatic",0],
        ["critical",0],
        ["criticalDamage", 0],
        ["elementalMastery", 0.75],
        ["recharge", 0]
    ])],
    ["YaeMiko",new Map([
        ["lifePercentage", 0],
        ["lifeStatic", 0],
        ["attackPercentage",0.75],
        ["attackStatic", 0.75],
        ["defendPercentage", 0],
        ["defendStatic",0],
        ["critical",1],
        ["criticalDamage", 1],
        ["elementalMastery", 0.75],
        ["recharge", 0]
    ])],
    ["Xingqiu",new Map([
        ["lifePercentage", 0],
        ["lifeStatic", 0],
        ["attackPercentage",0.75],
        ["attackStatic", 0.75],
        ["defendPercentage", 0],
        ["defendStatic",0],
        ["critical",1],
        ["criticalDamage", 1],
        ["elementalMastery", 0],
        ["recharge", 0.55]
    ])],
    ["Xiangling",new Map([
        ["lifePercentage", 0],
        ["lifeStatic", 0],
        ["attackPercentage",0.75],
        ["attackStatic", 0.75],
        ["defendPercentage", 0],
        ["defendStatic",0],
        ["critical",1],
        ["criticalDamage", 1],
        ["elementalMastery", 0.75],
        ["recharge", 0.55]
    ])]
]);

const position_main_tag_character=new Map<string,Map<string,string[]>>([
    ["sand",new Map<string,string[]>([
        ["lifePercentage",["Hutao","Yelan",
"Layla","Nilou"]],
        ["attackPercentage",["Keqing","Beidou",
"Fischl","YaeMiko","Xiangling"]],
        ["defendPercentage",["YunJin","Noelle"]],
        ["elementalMastery",["Hutao","Nahida",
"Keqing","Alhaitham","Fischl","Tighnari","Xiangling"]],
        ["recharge",["Yelan","RaidenShogun",
"YunJin","Beidou","Xingqiu","Xiangling"]],
    ])],
    ["cup",new Map<string,string[]>([
        ["lifePercentage",["Layla","Nilou"]],
        ["attackPercentage",["Beidou"]],
        ["defendPercentage",["YunJin"]],
        ["elementalMastery",["Nahida"]],

        ["waterBonus",["Yelan","Xingqiu"]],
        ["dendroBonus",["Nahida","Alhaitham",
"Tighnari"]],
        ["fireBonus",["Hutao","Xiangling"]],
        ["thunderBonus",["Keqing","RaidenShogun",
"Beidou","Fischl","YaeMiko"]],
        ["windBonus",[]],
        ["iceBonus",[]],
        ["rockBonus",["Noelle"]],
        ["physicalBonus",[]]
    ])],
    ["head",new Map<string,string[]>([
        ["lifePercentage",["Layla","Nilou"]],
        ["attackPercentage",[]],
        ["defendStatic",["YunJin"]],
        ["elementalMastery",[]],

        ["critical",["Hutao","RaidenShogun",
"Yelan","Nahida","Keqing","RaidenShogun","Alhaitham",
"YunJin","Noelle","Beidou","Fischl","Tighnari",
"YaeMiko","Xingqiu","Xiangling"]],
        ["criticalDamage",["Hutao","RaidenShogun",
"Yelan","Nahida","Keqing","RaidenShogun","Alhaitham",
"Noelle","Beidou","Fischl","Tighnari",
"YaeMiko","Xingqiu","Xiangling"]],
        ["cureEffect",[]],
    ])]
]);

const character_aritact=new Map<string,string[]>([
    ["Hutao",["shimenawaReminiscence"]],
    ["Yelan",["emblemOfSeveredFate"]],
    ["Nahida",["DeepwoodMemories","GildedDreams",
"wandererTroupe","FlowerOfParadiseLost"]],
    ["Layla",["tenacityOfTheMillelith"]],
    ["Keqing",["thunderingFury"]],
    ["RaidenShogun",["emblemOfSeveredFate"]],
    ["Alhaitham",["GildedDreams","wandererTroupe",
"FlowerOfParadiseLost"]],
    ["YunJin",["huskOfOpulentDreams"]],
    ["Noelle",["huskOfOpulentDreams","gladiatorFinale"]],
    ["Beidou",["emblemOfSeveredFate"]],
    ["Fischl",["thunderingFury","gladiatorFinale",
"GildedDreams","thunderSmoother","wandererTroupe"]],
    ["Tighnari",["DeepwordMemories","GildedDreams",
"wandererTroupe"]],
    ["Nilou",["tenacityOfTheMillelith","VourukashasGlow"]],
    ["YaeMiko",["ThunderingFury","GildedDreams",
"gladiatorFinale","wandererTroupe","FlowerOfParadiseLost"]],
    ["Xingqiu",["emblemOfSeveredFate"]],
    ["Xiangling",["emblemOfSeveredFate"]]
])

export {character_wei,
    position_main_tag_character,
    character_aritact
}