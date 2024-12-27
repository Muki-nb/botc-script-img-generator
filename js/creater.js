function generator(json){
    json = JSON.parse(json);
    if(!Array.isArray(json)) throw new Error('Parameter is not a Array.');
    let obj = {
        "title" : "",
        "characters" : {
            "townsfolk" : [],
            "outsider" : [],
            "minion" : [],
            "demon" : [],
        },
        "firstnight" : [
            {"image" : "https://clocktower-wiki.gstonegames.com/images/thumb/5/5d/Dusk.png/75px-Dusk.png", "index" : 0},
            {"image" : "https://clocktower-wiki.gstonegames.com/images/thumb/8/85/Mi.png/75px-Mi.png", "index" : 2000},
            {"image" : "https://clocktower-wiki.gstonegames.com/images/thumb/1/18/Di.png/75px-Di.png", "index" : 3000}
        ],
        "othernight" : [
            {"image" : "https://clocktower-wiki.gstonegames.com/images/thumb/5/5d/Dusk.png/75px-Dusk.png", "index" : 0}
        ]
    };
    for(let item of json){
        if(item.id == '_meta'){
            obj.title = item.name;
        }
        if(item.id in _characters){
            if(!("image" in item)){
                item = _characters[item.id];
            }
        }
        if(item.team in obj.characters){
            obj.characters[item.team].push({
                "name" : item.name,
                "ability" : item.ability,
                "image" : item.image
            });
            if(item.firstNight > 0){
                obj.firstnight.push({
                    "image" : item.image,
                    "index" : item.firstNight
                })
            }
            if(item.otherNight > 0){
                obj.othernight.push({
                    "image" : item.image,
                    "index" : item.otherNight
                })
            }
        }
    }
    obj.firstnight.sort((a,b) => a.index - b.index);
    obj.othernight.sort((a,b) => a.index - b.index);
    return obj;
}

function createCharacter(character){
    let node = document.createElement("div");
    node.classList.add("character");
    let icon = document.createElement("div");
    icon.classList.add("icon");
    icon.style.backgroundImage = `url(${character.image})`;
    let description = document.createElement("div");
    description.classList.add("description");
    let name = document.createElement("p");
    name.classList.add("name");
    name.textContent = character.name;
    let ability = document.createElement("p");
    ability.classList.add("ability");
    ability.textContent = character.ability;
    color(ability);
    description.appendChild(name);
    description.appendChild(ability);
    node.appendChild(icon);
    node.appendChild(description);
    return node;
}

function color(node){
    let html = node.innerHTML;
    const red = [
        "死于处决",
        "恶魔角色",
        "爪牙角色",
        "邪恶玩家",
        "邪恶阵营",
        "“是恶魔”",
        "负面能力",
        "小恶魔",
        "小怪宝",
        "被处决",
        "死亡",
        "邪恶",
        "落败",
        "中毒",
        "爪牙",
        "恶魔",
        "处决",
        "错误",
        "自杀",
        "暴乱",
        "军团"
    ];
    const blue = [
        "外来者角色",
        "善良玩家",
        "善良阵营",
        "善良角色",
        "镇民角色",
        "恢复健康",
        "起死回生",
        "外来者",
        "农夫",
        "醉酒",
        "复活",
        "反刍",
        "镇民",
        "善良",
        "正确",
        "存活"
    ];
    const purple = [
        "非旅行者",
        "旅行者",
        "“疯狂”"
    ];
    for(let i of red){
        html = html.replaceAll(i, `<span style = 'color: #e02121;'>${i}</span>`);
    }
    for(let i of blue){
        html = html.replaceAll(i, `<span style = 'color: #385fdd;'>${i}</span>`);
    }
    for(let i of purple){
        html = html.replaceAll(i, `<span style = 'color:#dd38ca;'>${i}</span>`);
    }
    node.innerHTML = html;
}

function setname(name){
    document.getElementById("title").innerText = name;
    document.title = name;
}

function create(object){
    console.log(object);
    setname(object.title);
    for(let e of document.getElementsByClassName("left box")){
        e.innerHTML = "";
    }
    for(let e of document.getElementsByClassName("right box")){
        e.innerHTML = "";
    }
    for(let i = 0;i < 7;i++){
        document.getElementById("townsfolks").getElementsByClassName("left box")[0].appendChild(createCharacter(object.characters.townsfolk[i]));
    }
    for(let i = 7;i < 13;i++){
        document.getElementById("townsfolks").getElementsByClassName("right box")[0].appendChild(createCharacter(object.characters.townsfolk[i]));
    }
    for(let k in object.characters){
        if(k == "townsfolk") continue;
        for(let i = 0;i < 2;i++){
            document.getElementById(k + 's').getElementsByClassName("left box")[0].appendChild(createCharacter(object.characters[k][i]));
        }
        for(let i = 2;i < 4;i++){
            document.getElementById(k + 's').getElementsByClassName("right box")[0].appendChild(createCharacter(object.characters[k][i]));
        }
    }
    let firstnight = document.getElementById('firstnight');
    firstnight.innerHTML = `
        <p><h1 style = "line-height: 10px; text-align: center; margin-top: 120px;color: #fefefe;">首个</h1></p>
        <p><h1 style = "line-height: 20px; text-align: center; margin-top: 20px;color: #fefefe;">夜晚</h1></p>
    `;
    let othernight = document.getElementById('othernight');
    othernight.innerHTML = `
        <p><h1 style = "line-height: 10px; text-align: center; margin-top: 120px;color: #fefefe;">其他</h1></p>
        <p><h1 style = "line-height: 20px; text-align: center; margin-top: 20px;color: #fefefe;">夜晚</h1></p>
    `;
    for(let i of object.firstnight){
        let node = document.createElement('div');
        node.classList.add('nighticon');
        node.style.backgroundImage = `url(${i.image})`;
        firstnight.appendChild(node);
    }for(let i of object.othernight){
        let node = document.createElement('div');
        node.classList.add('nighticon');
        node.style.backgroundImage = `url(${i.image})`;
        othernight.appendChild(node);
    }
}

function generate(){
    create(generator(document.getElementById("jsonbox").value));
}