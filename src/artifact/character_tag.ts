
const character_wei:Map<string,Map<string,number>>=new Map<string,Map<string,number>>([
    ["only_cc",new Map<string,number>([
        ["lifePercentage",0],
        ["lifeStatic",0],
        ["attackPercentage",0],
        ["attackStatic",0],
        ["defendPercentage",0],
        ["defendStatic",0],
        ["critical",1],
        ["criticalDamage",1],
        ["elementalMastery",0],
        ["recharge",0]
    ])],
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
    ])],
    ["Neuvillette",new Map([
        ["lifePercentage", 1],
        ["lifeStatic", 1],
        ["attackPercentage",0],
        ["attackStatic", 0],
        ["defendPercentage", 0],
        ["defendStatic",0],
        ["critical",1],
        ["criticalDamage", 1],
        ["elementalMastery", 0],
        ["recharge", 0.3]
    ])],
    ["Furina",new Map([
        ["lifePercentage", 1],
        ["lifeStatic", 1],
        ["attackPercentage",0],
        ["attackStatic", 0],
        ["defendPercentage", 0],
        ["defendStatic",0],
        ["critical",1],
        ["criticalDamage", 1],
        ["elementalMastery", 0],
        ["recharge", 0.3]
    ])],
    ["Navia",new Map([
        ["lifePercentage", 0],
        ["lifeStatic", 0],
        ["attackPercentage",0.7],
        ["attackStatic", 0.7],
        ["defendPercentage", 0],
        ["defendStatic",0],
        ["critical",1],
        ["criticalDamage", 1],
        ["elementalMastery", 0],
        ["recharge", 0.3]
    ])],
    ["Gaming",new Map([
        ["lifePercentage", 0],
        ["lifeStatic", 0],
        ["attackPercentage",0.75],
        ["attackStatic", 0.75],
        ["defendPercentage", 0],
        ["defendStatic",0],
        ["critical",1],
        ["criticalDamage", 1],
        ["elementalMastery", 0.75],
        ["recharge", 0.3]
    ])],
    ["Clorinde",new Map([
        ["lifePercentage", 0],
        ["lifeStatic", 0],
        ["attackPercentage",0.70],
        ["attackStatic", 0.70],
        ["defendPercentage", 0],
        ["defendStatic",0],
        ["critical",1],
        ["criticalDamage", 1],
        ["elementalMastery", 0.50],
        ["recharge", 0.30]
    ])],
    ["Clorinde",new Map([
        ["lifePercentage", 0],
        ["lifeStatic", 0],
        ["attackPercentage",0.70],
        ["attackStatic", 0.70],
        ["defendPercentage", 0],
        ["defendStatic",0],
        ["critical",1],
        ["criticalDamage", 1],
        ["elementalMastery", 0.50],
        ["recharge", 0.30]
    ])],
    ["Arlecchino",new Map([
        ["lifePercentage", 0],
        ["lifeStatic", 0],
        ["attackPercentage",0.70],
        ["attackStatic", 0.70],
        ["defendPercentage", 0],
        ["defendStatic",0],
        ["critical",1],
        ["criticalDamage", 1],
        ["elementalMastery", 0.50],
        ["recharge", 0]
    ])],
    ["Mavuika",new Map([
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
    ["Xilonen",new Map([
        ["lifePercentage", 0],
        ["lifeStatic", 0],
        ["attackPercentage",0],
        ["attackStatic", 0],
        ["defendPercentage", 1],
        ["defendStatic",1],
        ["critical",0.5],
        ["criticalDamage", 0.5],
        ["elementalMastery", 0],
        ["recharge", 0]
    ])],
    ["Escoffier", new Map([
            ["lifePercentage", 0],
            ["lifeStatic", 0],
            ["attackPercentage", 0.75],
            ["attackStatic", 0.75],
            ["defendPercentage", 0],
            ["defendStatic", 0],
            ["critical", 1],
            ["criticalDamage", 1],
            ["elementalMastery", 0],
            ["recharge", 0.3]
    ])],
    ["Skirk", new Map([
            ["lifePercentage", 0],
            ["lifeStatic", 0],
            ["attackPercentage", 0.75],
            ["attackStatic", 0.75],
            ["defendPercentage", 0],
            ["defendStatic", 0],
            ["critical", 1],
            ["criticalDamage", 1],
            ["elementalMastery", 0],
            ["recharge", 0]
    ])]
]);

const position_main_tag_character=new Map<string,Map<string,string[]>>([
    ["sand",new Map<string,string[]>([
        ["lifePercentage",["Hutao","Yelan",
            "Layla","Nilou","Neuvillette","Furina"]],

        ["attackPercentage",["Keqing","Beidou",
            "Fischl","YaeMiko","Xiangling","Navia","Escoffier","Skirk","Mavuika",
            "Gaming","Clorinde","Arlecchino"]],

        ["defendPercentage",["YunJin","Noelle","Xilonen"]],

        ["elementalMastery",["Hutao","Nahida",
            "Keqing","Alhaitham","Fischl","Tighnari","Xiangling",
            "Gaming"]],

        ["recharge",["Yelan","RaidenShogun",
            "YunJin","Beidou","Xingqiu","Xiangling","Escoffier","Xilonen"]],
    ])],
    ["cup",new Map<string,string[]>([
        ["lifePercentage",["Layla","Nilou","Neuvillette","Furina"]],

        ["attackPercentage",["Beidou","Skirk"]],

        ["defendPercentage",["YunJin","Xilonen"]],

        ["elementalMastery",["Nahida"]],

        ["waterBonus",["Yelan","Xingqiu","Neuvillette","Furina"]],

        ["dendroBonus",["Nahida","Alhaitham",
            "Tighnari"]],

        ["fireBonus",["Hutao","Xiangling","Mavuika","Gaming",
            "Arlecchino"]],

        ["thunderBonus",["Keqing","RaidenShogun",
            "Beidou","Fischl","YaeMiko","Clorinde"]],

        ["windBonus",[]],

        ["iceBonus",["Escoffier","Skirk"]],

        ["rockBonus",["Noelle","Navia"]],

        ["physicalBonus",[]]
    ])],
    ["head",new Map<string,string[]>([
        ["lifePercentage",["Layla","Nilou"]],

        ["attackPercentage",["Skirk"]],

        ["defendStatic",["YunJin","Xilonen"]],

        ["elementalMastery",[]],

        ["critical",["Hutao","RaidenShogun",
            "Yelan","Nahida","Keqing","Alhaitham",
            "YunJin","Noelle","Beidou","Fischl","Tighnari",
            "YaeMiko","Xingqiu","Xiangling","Neuvillette","Furina",
            "Navia","Escoffier","Skirk","Mavuika","Gaming","Clorinde",
            "Arlecchino"]],

        ["criticalDamage",["Hutao","RaidenShogun",
            "Yelan","Nahida","Keqing","Alhaitham",
            "Noelle","Beidou","Fischl","Tighnari",
            "YaeMiko","Xingqiu","Xiangling","Neuvillette","Furina",
            "Navia","Escoffier","Skirk","Mavuika","Gaming","Clorinde",
            "Arlecchino"
        ]],

        ["cureEffect",["Xilonen"]],
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
    ["Fischl",["GoldenTroupe"]],
    ["Tighnari",["DeepwordMemories","GildedDreams",
        "wandererTroupe"]],
    ["Nilou",["tenacityOfTheMillelith","VourukashasGlow"]],
    ["YaeMiko",["ThunderingFury","GildedDreams",
        "gladiatorFinale","wandererTroupe","FlowerOfParadiseLost"]],
    ["Xingqiu",["emblemOfSeveredFate"]],
    ["Xiangling",["emblemOfSeveredFate"]],
    ["Neuvillette",["MarechausseeHunter"]],
    ["Furina",["GoldenTroup"]],
    ["Navia",["NighttimeWhispersInTheEchoingWoods"]],
    ["Escoffier",["GoldenTroupe"]],
    ["Skirk",["MarechausseeHunter","FinaleOfTheDeepGalleries"]],
    ["Mavuika",["ObsidianCodex"]],
    ["Xilonen",["ScrollOfTheHeroOfCinderCity"]],
    ["Gaming",["MarechausseeHunter"]],
    ["Clorinde",["thunderingFury","FragmentOfHarmonicWhimsy"]],
    ["Arlecchino",["FragmentOfHarmonicWhimsy"]]
]);

const ex_count_ratio=[0.85,1.7,2.55,3.4,4.25];

export {character_wei,
    position_main_tag_character,
    character_aritact,
    ex_count_ratio
}