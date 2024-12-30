function generator(json){
    json = JSON.parse(json);
    if(!Array.isArray(json)) throw new Error('Parameter is not a Array.');
    let obj = {
        "title" : "",
        "author" : "",
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
        ],
        "jinx" : {},
        "all" : []
    };
    for(let item of json){
        if(item.id == '_meta'){
            obj.title = item.name;
            obj.author = item.author;
        }
        if(item.id in _characters){
            if(!("image" in item)){
                item = _characters[item.id];
            }
        }
        if(item.team == "a jinxed"){
            const [i, j] = item.name.split('&');
            if(!(i in obj.jinx)) obj.jinx[i] = {};
            if(!(j in obj.jinx[i])) obj.jinx[i][j] = item.ability;
        }
        if(item.team in obj.characters){
            obj.all.push(item);
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
    for(let i of obj.all){
        for(let j of obj.all){
            if(havejinx(i.name, j.name)){
                if(!(i.name in obj.jinx)) obj.jinx[i.name] = {};
                if(!(j.name in obj.jinx[i.name])) obj.jinx[i.name][j.name] = getjinx(i.name, j.name);
            }
        }
    }
    obj.firstnight.sort((a,b) => a.index - b.index);
    obj.othernight.sort((a,b) => a.index - b.index);
    return obj;
}

function havejinx(a, b){
    if(a in jinx) if(b in jinx[a]) return true;
    return false;
}

function getjinx(a, b){
    if(havejinx(a, b)) return jinx[a][b];
    return "";
}

function createCharacter(character, object){
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
    ability.innerHTML = character.ability;
    color(ability);
    description.appendChild(name);
    description.appendChild(ability);
    node.appendChild(icon);
    node.appendChild(description);
    
    const jinxes = object.jinx;
    const all = object.all;
    if(character.name in jinxes){
        for(let key in jinxes[character.name]){
            let jin = document.createElement("div");
            jin.classList.add("jinx");
            let jinicon = document.createElement("div");
            for(let i of all) if(i.name == key){
                jinicon.style.backgroundImage = `url(${i.image})`;
                break;
            }
            let jintext = document.createElement("span");
            jintext.textContent = `(相克规则：${jinxes[character.name][key]})`;
            jin.appendChild(jinicon);
            jin.appendChild(jintext);
            ability.appendChild(jin);
        }
    }
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
        "邪恶角色",
        "“是恶魔”",
        "负面能力",
        "小恶魔",
        "小怪宝",
        "狐媚娘",
        "被处决",
        "杀死",
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
        "落难少女",
        "有且只有",
        "外来者",
        "农夫",
        "疯子",
        "国王",
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

function setname(name, author = ""){
    if(name == "") name = document.title;
    if(name == "血染钟楼剧本图片生成") name = "自定义剧本";
    let text = name;
    if(author != "") text += `<span>剧本作者：${author}</span>`;
    document.getElementById("title").innerHTML = text;
    document.title = name;
}

function create(object){
    console.log(object);
    setname(object.title, object.author);
    for(let e of document.getElementsByClassName("left box")){
        e.innerHTML = "";
    }
    for(let e of document.getElementsByClassName("right box")){
        e.innerHTML = "";
    }
    let cnt = 0, left = 0, right = 0, sum = 0;
    cnt = object.characters["townsfolk"].length, left = Math.ceil(cnt / 2), right = cnt - left, sum += left;
    
    for(let i = 0;i < left;i++){
        document.getElementById("townsfolks").getElementsByClassName("left box")[0].appendChild(createCharacter(object.characters.townsfolk[i], object));
    }
    for(let i = left;i < cnt;i++){
        document.getElementById("townsfolks").getElementsByClassName("right box")[0].appendChild(createCharacter(object.characters.townsfolk[i], object));
    }
    document.getElementById('townsfolks').getElementsByClassName("left box")[0].style.marginLeft = (cnt == 1) * 25 + "%";
    if(cnt == 1) document.getElementById("townsfolks-right").style.height = "0px";
    else document.getElementById("townsfolks-right").style.height = left * 120 + "px";
    for(let k in object.characters){
        if(k == "townsfolk") continue;
        cnt = object.characters[k].length, left = Math.ceil(cnt / 2), right = cnt - left, sum += left;
        for(let i = 0;i < left;i++){
            document.getElementById(k + 's').getElementsByClassName("left box")[0].appendChild(createCharacter(object.characters[k][i], object));
        }
        for(let i = left;i < cnt;i++){
            document.getElementById(k + 's').getElementsByClassName("right box")[0].appendChild(createCharacter(object.characters[k][i], object));
        }

        document.getElementById(k + 's').getElementsByClassName("left box")[0].style.marginLeft = (cnt == 1) * 25 + "%";
        if(cnt == 1) document.getElementById(k + 's').getElementsByClassName("right box")[0].style.height = "0px";
        else document.getElementById(k + 's').getElementsByClassName("right box")[0].style.height = "auto";

    }

    document.getElementById("content").style.height = sum * 120 + 182.5 + "px";
    //document.getElementById("panel").style.height = (sum <= 6 ? 1080 : 1920) + "px";

    document.getElementById("outer-text").textContent = `外栏大小为 1500 * ${document.getElementById("panel").clientHeight}`;
    document.getElementById("inner-text").textContent = `内栏大小为 1280 * ${document.getElementById("characters").clientHeight}`;

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