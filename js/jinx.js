const jinx = {
    "侍女": {
        "数学家": "侍女会得知数学家是否醒来，即使她是在数学家之前醒来。"
    },
    "食人族": {
        "管家": "如果食人族获得了管家的能力，他会得知这一信息。",
        "杂耍艺人": "如果杂耍艺人在自己的首个白天猜测后在当天死于处决，当晚食人族会替杂耍艺人得知对应的信息。",
        "罂粟种植者": "如果食人族获得了罂粟种植者的能力，当他获得下一个能力时，爪牙和恶魔也会互相认识。"
    },
    "瘟疫医生": {
        "男爵": "如果说书人获得了男爵的能力，至多两名玩家会变成不在场的外来者。",
        "炸弹人": "如果瘟疫医生死于处决且说书人会因此获得炸弹人的能力，那么炸弹人的能力会立即被触发。",
        "镜像双子": "说书人无法在瘟疫医生死亡时获得镜像双子的能力。",
        "提线木偶": "如果在瘟疫医生死亡时说书人获得了提线木偶的能力，且与恶魔邻座的存活玩家中有镇民或外来者，其中一名玩家会变成邪恶的提线木偶。如果此时场上的邪恶玩家数量比初始设置时的数量超出一名或更多，改为无事发生。",
        "恐惧之灵": "如果瘟疫医生死亡且说书人会因此获得恐惧之灵的能力，改为一名存活的爪牙玩家获得此能力，且他会得知此事。",
        "哥布林": "如果瘟疫医生死亡且说书人会因此获得哥布林的能力，改为一名存活的爪牙玩家获得此能力，且他会得知此事。",
        "红唇女郎": "如果瘟疫医生死亡且说书人会因此获得红唇女郎的能力，改为一名存活的爪牙玩家获得此能力，且他会得知此事。",
        "间谍": "如果瘟疫医生死亡且说书人会因此获得间谍的能力，改为一名存活的爪牙玩家获得此能力，且他会得知此事。",
        "赶尸人": "如果瘟疫医生死亡且说书人会因此获得赶尸人的能力，改为一名存活的爪牙玩家获得此能力，且他会得知此事。",
        "养蛊人": "如果瘟疫医生死亡且说书人会因此获得养蛊人的能力，改为一名存活的爪牙玩家获得此能力，且他会得知此事。",
        "狐魅娘": "如果瘟疫医生死亡且说书人会因此获得狐魅娘的能力，改为一名存活的爪牙玩家获得此能力，且他会得知此事。"
    },
    "麻脸巫婆": {
        "异端分子": "麻脸巫婆无法创造异端分子。",
        "落难少女": "如果麻脸巫婆创造了落难少女，改为由说书人来决定哪一名玩家变成落难少女。",
        "政客": "被麻脸巫婆创造的邪恶政客无法因为自身能力转变为善良阵营。",
        "村夫": "如果村夫在场数量不足3人，麻脸巫婆可以创造新的村夫。如果她这么做，村夫的醉酒效果可能会更换目标。",
        "异教领袖": "被麻脸巫婆创造的邪恶异教领袖无法因为自身能力转变为善良阵营。",
        "莽夫": "被麻脸巫婆创造的邪恶莽夫无法因为自身能力转变为善良阵营。",
        "半兽人": "本建议相克暂时被移除。"
    },
    "洗脑师": {
        "哥布林": "洗脑师可以选择将玩家洗脑成哥布林。"
    },
    "间谍": {
        "魔术师": "当间谍查看魔典时，魔术师和恶魔的角色标记会被说书人移除。",
        "罂粟种植者": "如果罂粟种植者在场，直到其死亡前间谍无法查看魔典。",
        "落难少女": "如果间谍正在场或曾经在场，落难少女中毒。",
        "异端分子": "异端分子会被间谍当作一个不在场的外来者，异端分子会知道是哪个外来者。"
    },
    "寡妇": {
        "魔术师": "当寡妇查看魔典时，魔术师和恶魔的标记会被说书人移除。",
        "罂粟种植者": "如果罂粟种植者在场，直到其死亡前寡妇无法查看魔典。寡妇会在罂粟种植者死后的首个夜晚触发自身的能力。",
        "落难少女": "如果寡妇正在场或曾经在场，落难少女中毒。",
        "异端分子": "异端分子会被寡妇当作一个不在场的外来者，异端分子会知道是哪个外来者。"
    },
    "教父": {
        "异端分子": "异端分子会被教父当作一个不在场的外来者，异端分子会知道是哪个外来者。"
    },
    "提线木偶": {
        "告密者": "提线木偶不会得知三个不在场的角色，如果提线木偶与告密者均在场，改为由恶魔额外得知三个不在场角色。",
        "小怪宝": "提线木偶会与一名爪牙玩家邻座，而不是恶魔。提线木偶不会被唤醒来决定是否照看小怪宝，也不会在照看小怪宝时得知自己是提线木偶。",
        "罂粟种植者": "当罂粟种植者死亡后，恶魔会知道谁是提线木偶，但提线木偶什么都不会知道。",
        "气球驾驶员": "如果提线木偶抽到了气球驾驶员，也可能会+1外来者",
        "落难少女": "提线木偶不会得知落难少女在场。",
        "巡山人": "如果提线木偶抽到了巡山人，也会增加落难少女。"
    },
    "男爵": {
        "异端分子": "如果异端分子在剧本中，男爵的效果可能会只增加一个而非两个外来者。（全追慎用）"
    },
    "街头风琴手": {
        "管家": "如果街头风琴手使得玩家需要闭眼投票，管家可以自由举手投票，但只在他的主人投票时他的票才会被统计。"
    },
    "维齐尔": {
        "调查员": "如果调查员的能力使其得知了维齐尔，则说书人不会告知所有人维齐尔在场。",
        "传教士": "如果维齐尔失去能力，他会得知这一信息。如果传教士在剧本列表中，且维齐尔在具有能力时被处决，他的阵营获胜。",
        "侍臣": "如果维齐尔失去能力，他会得知这一信息。如果侍臣在剧本列表中，且维齐尔在具有能力时被处决，他的阵营获胜。",
        "炼金术士": "本相克暂时被移除",
        "魔术师": "如果维齐尔和魔术师都在场，恶魔不会得知谁是爪牙。",
        "恐惧之灵": "在恐惧之灵因为自己的能力被唤醒时，维齐尔会一同被唤醒。他会得知恐惧之灵选择了哪名玩家，并且无法使用自己的能力让那名玩家立即被处决。",
        "政客": "维齐尔的能力可能会将政客当作邪恶阵营。"
    },
    "召唤师": {
        "炼金术士": "如果炼金术士获得了召唤师的能力，游戏会以初始有恶魔在场进行。炼金术士召唤师选择的玩家会变成恶魔但不会改变阵营。",
        "钟表匠": "如果召唤师在场，在创造恶魔之后钟表匠才会得知信息。",
        "罂粟种植者": "如果召唤师创造恶魔时罂粟种植者存活，由召唤师来选择创造哪种恶魔，由说书人来决定哪名玩家发生转变。",
        "提线木偶": "在初始设置时，提线木偶会与召唤师邻座。召唤师会得知谁是提线木偶。",
        "侍臣": "如果召唤师因为侍臣的能力在第三个夜晚醉酒，由召唤师来选择创造哪种恶魔，由说书人来决定哪名玩家发生转变。",
        "僵怖": "如果召唤师将一名已死亡的玩家变成了僵怖，该玩家会变成“已经死过一次”的僵怖。",
        "普卡": "召唤师可以选择在第二个夜晚将一名玩家变成普卡。",
        "工程师": "如果工程师的能力使得召唤师在使用自己的能力前离场，召唤师会在此前立即使用自己的能力。",
        "传教士": "如果召唤师在第三个夜晚或之前被传教士选中，由召唤师来选择创造哪种恶魔，由说书人来决定哪名玩家发生转变。",
        "麻脸巫婆": "召唤师无法创造已经在场的恶魔。如果召唤师创造了一名不在场的恶魔，当晚的死亡由说书人决定。",
        "帽匠": "召唤师无法创造已经在场的恶魔。如果召唤师创造了一个不在场的恶魔，当晚的死亡由说书人决定。",
        "卡扎力": "召唤师无法创造已经在场的恶魔。如果召唤师创造了一个不在场的恶魔，当晚的死亡由说书人决定。"
    },
    "利维坦": {
        "士兵": "如果利维坦在场，士兵免疫所有邪恶阵营的负面效果。",
        "僧侣": "如果利维坦在场，僧侣保护的玩家免疫所有邪恶阵营的负面效果。",
        "旅店老板": "如果利维坦在场，旅店老板保护的玩家免疫所有邪恶阵营的负面效果。",
        "守鸦人": "每个夜晚*，利维坦要选择一名存活的善良玩家（与之前的每个夜晚不同）：如果守鸦人被选择，他的能力生效但不会死亡。",
        "贤者": "每个夜晚*，利维坦要选择一名存活的善良玩家（与之前的每个夜晚不同）：如果贤者被选择，他的能力生效但不会死亡。",
        "报丧女妖": "每个夜晚*，利维坦要选择一名存活的善良玩家（与之前的每个夜晚不同）：如果报丧女妖被选择，他死亡并能力生效。",
        "农夫": "每个夜晚*，利维坦要选择一名存活的善良玩家（与之前的每个夜晚不同）：如果农夫被选择，他的能力生效但不会死亡。",
        "镇长": "如果利维坦在场，镇长存活且第五天没有处决发生，则善良阵营获胜。",
        "麻脸巫婆": "在第五个白天之后，麻脸巫婆无法创造利维坦。",
        "帽匠": "如果帽匠在第五个白天或之后死亡，恶魔不能选择变成利维坦。",
        "祖母": "如果利维坦在场，孙子死于处决，邪恶阵营获胜。",
        "驱魔人": "如果驱魔人存活并且成功选中过利维坦，即使有多于一名善良玩家被处决，邪恶阵营也不会获胜。",
        "国王": "如果利维坦在场，当至少一名玩家死亡时，国王每晚就会得知一个存活的角色。",
        "和尚": "如果利维坦发起的提名中被处决的玩家是与和尚邻近的存活玩家，那么那名玩家不会死亡，并且当晚和尚得知他的能力被触发。（如常在和尚旁放置“已生效”提示标记，因为黎明时才会移除此标记，因此当晚和尚无法再触发他的能力。）"
    },
    "哈迪寂亚": {
        "红唇女郎": "如果出现两名存活的哈迪寂亚，则红唇女郎变成的哈迪寂亚会变回红唇女郎。",
        "主谋": "如果哈迪寂亚死于处决，且主谋存活，当晚哈迪寂亚要选择三名善良玩家：如果他们都选择存活，邪恶阵营获胜。否则，善良阵营获胜。"
    },
    "小怪宝": {
        "罂粟种植者": "如果罂粟种植者在场，爪牙们不会同时醒来选择照看小怪宝。他们会依次单独被唤醒，直到其中一人选择照看小怪宝。",
        "魔术师": "每个夜晚，由魔术师来选择一个爪牙角色：如果他和小怪宝均存活，由他来照看小怪宝。",
        "红唇女郎": "如果在五名及以上的玩家存活时照看小怪宝的玩家死亡，当晚红唇女郎必须要照看小怪宝。",
        "街头风琴手": "街头风琴手与小怪宝的相克规则暂时被移除",
        "维齐尔": "照看小怪宝的维齐尔能够死于处决。",
        "帽匠": "如果恶魔选择了小怪宝，则还需要选择一个爪牙角色，他变成这个爪牙且当晚照看小怪宝。"
    },
    "军团": {
        "工程师": "军团和工程师不能在初始时同时在场。如果工程师创造了军团，那么包括所有邪恶玩家在内的绝大多数玩家都会变成邪恶的军团。",
        "传教士": "如果传教士选中了军团，军团仍然保留能力，但传教士可能会得知自己选中了军团。",
        "吟游诗人": "如果军团死于处决，所有军团保留能力，但吟游诗人可能会在当晚得知今天白天死于处决的玩家是军团。",
        "帽匠": "如果帽匠死亡时军团在场，则无事发生。如果帽匠死亡时一名邪恶玩家选择变成军团，当前所有邪恶玩家都会一同变成军团。",
        "召唤师": "如果召唤师创造了军团，包括所有邪恶玩家在内的绝大多数玩家都会变成邪恶的军团。"
    },
    "方古": {
        "红唇女郎": "如果方古成功转化了外来者并因此死去，红唇女郎不会变成方古。"
    },
    "暴乱": {
        "镇长": "镇长可以停止提名。如果他这样做了，并且场上只有一名暴乱存活，善良阵营获胜；否则，邪恶阵营获胜。",
        "僧侣": "如果暴乱在场，僧侣保护的玩家免疫所有邪恶阵营的负面效果。",
        "农夫": "每个夜晚*，暴乱要选择一名存活的善良玩家（与之前的每个夜晚不同）：如果农夫被选择，他的能力生效但不会死亡。",
        "旅店老板": "如果暴乱在场，旅店老板保护的玩家免疫所有邪恶阵营的负面效果。",
        "贤者": "每个夜晚*，暴乱要选择一名存活的善良玩家（与之前的每个夜晚不同）：如果贤者被选择，他的能力生效但不会死亡。",
        "守鸦人": "每个夜晚*，暴乱要选择一名存活的善良玩家（与之前的每个夜晚不同）：如果守鸦人被选择，他的能力生效但不会死亡。",
        "报丧女妖": "每个夜晚*，暴乱要选择一名存活的善良玩家（与之前的每个夜晚不同）：如果报丧女妖被选择，他死亡并能力生效。",
        "士兵": "如果暴乱在场，士兵免疫所有邪恶阵营的负面效果。",
        "祖母": "如果暴乱在场，孙子在白天死亡，祖母会一同死亡。",
        "国王": "如果暴乱在场，当至少一名玩家死亡时，国王每晚就会得知一个存活的角色。",
        "驱魔人": "如果驱魔人在第三个夜晚选中了暴乱，爪牙不会变成暴乱。",
    },
    "痢蛭": {
        "主谋": "如果主谋存活且痢蛭的宿主死于处决，痢蛭存活但失去能力。",
        "猎手": "如果猎手选择了痢蛭的宿主，则宿主会死亡。",
        "异端分子": "如果痢蛭选择异端分子作为宿主，痢蛭死亡时异端分子仍会中毒。"
    },
    "卡扎力": {
        "赏金猎人": "在卡扎力行动完毕后，如果赏金猎人仍然在场，才会创造邪恶镇民。",
        "莽夫": "卡扎力可以把莽夫转变成邪恶的爪牙。",
        "提线木偶": "如果卡扎力选择创造提线木偶，他只能选择将自己的邻座玩家变成提线木偶。",
        "唱诗男孩": "如果唱诗男孩在场，卡扎力在选择国王后无法将他变成爪牙。",
        "巡山人": "如果卡扎力将落难少女变成了爪牙，并且巡山人在场，一名善良的玩家会变成落难少女。",
        "士兵": "卡扎力可以把士兵转变成邪恶的爪牙。",
        "半仙": "卡扎力可以把半仙转变成邪恶的爪牙。",
        "和尚": "卡扎力可以把与和尚邻近的玩家转变成邪恶的爪牙。"
    },
    "牙噶巴卜": {
        "驱魔人": "如果驱魔人选中了牙噶巴卜，那么牙噶巴卜的能力在当晚无法造成死亡。"
    },
    "涡流": {
        "报丧女妖": "如果恶魔杀死报丧女妖时涡流在场，玩家仍然会得知正确信息。"
    },
    "理发师": {
        "异教领袖": "通过理发师交换的邪恶异教领袖无法因为自身能力转变为善良阵营。",
        "莽夫": "通过理发师交换的邪恶莽夫无法因为自身能力转变为善良阵营。",
        "政客": "通过理发师交换的邪恶政客无法因为自身能力转变为善良阵营。",
        "落难少女": "如果恶魔选择交换落难少女的角色，参与角色交换的另一名玩家改为由说书人来决定。"
    },
    "戏子（改）": {
        "间谍": "互为克星的角色在同一时间里只能有其中一个角色在场。",
        "镜像双子": "互为克星的角色在同一时间里只能有其中一个角色在场。",
        "寡妇": "互为克星的角色在同一时间里只能有其中一个角色在场。",
        "召唤师": "互为克星的角色在同一时间里只能有其中一个角色在场。",
        "暴乱": "互为克星的角色在同一时间里只能有其中一个角色在场。",
        "军团": "在戏子（改）存在于剧本中时，军团可以在游戏中任意时候向说书人示意自己“想要死亡”。说书人会在夜晚一同唤醒所有军团，并询问他们是否要一同死亡。",
        "利维坦": "在戏子（改）存在于剧本中时，利维坦可以在游戏中任意时候向说书人示意自己“想要死亡”。说书人会在当晚杀死这名玩家。",
        "小怪宝": "在戏子（改）存在于剧本中时，照看小怪宝的玩家可以在游戏中任意时候向说书人示意自己“想要死亡”。说书人会在当晚将小怪宝从游戏中移除。",
        "普卡": "在戏子（改）存在于剧本中时，普卡可以在游戏中任意时候向说书人示意自己“想要死亡”。说书人会在当晚杀死这名玩家。",
        "哥布林": "戏子（改）无法反转由哥布林的能力产生的胜负结果。",
        "恐惧之灵": "戏子（改）无法反转由恐惧之灵的能力产生的胜负结果。",
        "麻脸巫婆": "麻脸巫婆无法创造戏子（改），麻脸巫婆创造的邪恶玩家无法获得戏子（改）的能力。",
        "科学怪人": "科学怪人无法使恶魔获得戏子（改）的能力。",
        "无神论者": "无神论者在剧本中时，处决说书人导致的胜负结果不会被反转，无神论者不会因为戏子（改）的能力醉酒。",
        "疯子": "疯子不会因为戏子（改）能力参与互认，也不会因为戏子（改）的能力醉酒。",
        "国王": "国王不会因为戏子（改）的能力醉酒。",
        "告密者": "告密者不会因为戏子（改）的能力醉酒。",
        "落难少女": "落难少女不会因为戏子（改）的能力醉酒。",
        "书生": "书生不会因为戏子（改）的能力醉酒。"
    },
    "悟道者": {
        "村夫": "如果村夫在场数量不足3人，悟道者可以变成新的村夫。如果因此使得村夫的在场数量超过1人，会有一名村夫醉酒。"
    },
    "异端分子": {
        "狐魅娘": "互为克星的角色在同一时间里只能有其中一个角色在场。"
    },
    "梼杌": {
        "红唇女郎": "红唇女郎在梼杌的能力判断中被当作“不具有能力”。",
        "镜像双子": "镜像双子在梼杌的能力判断中被当作“不具有能力”。",
        "主谋": "主谋在梼杌的能力判断中被当作“不具有能力”。",
        "街头风琴手": "当梼杌被处决时，如果街头风琴手具有能力，说书人会宣布“无人被处决”。",
        "提线木偶": "梼杌不会得知谁是提线木偶。在梼杌使得提线木偶失去能力后，梼杌会得知对应的那一名提线木偶是谁，但提线木偶会仍然以为自己是一个善良角色。",
        "帽匠": "如果梼杌变成了其他角色，因为梼杌而失去能力的爪牙会立即死亡。",
        "麻脸巫婆": "如果梼杌变成了其他角色，因为梼杌而失去能力的爪牙会立即死亡。",
        "工程师": "如果梼杌变成了其他角色，因为梼杌而失去能力的爪牙会立即死亡。",
        "舞蛇人": "如果梼杌变成了其他角色，因为梼杌而失去能力的爪牙会立即死亡。",
        "理发师": "如果梼杌变成了其他角色，因为梼杌而失去能力的爪牙会立即死亡。"
    },
    "食人魔": {
        "陌客": "如果陌客被食人魔当作邪恶阵营，食人魔会得知自己转变为邪恶。",
        "熬药巫婆": "被麻脸巫婆创造的邪恶食人魔无法因为自身能力转变为善良阵营。",
        "间谍": "间谍必定被食人魔当作邪恶阵营。"
    },
    "哲学家": {
        "赏金猎人": "如果哲学家获得了赏金猎人的能力，可能会有一名镇民玩家转变为邪恶。"
    },
    "戏法师": {
        "维齐尔": "如果维齐尔在场，戏法师在进行猜测时还需要猜测恶魔的具体角色。"
    },
    "狂热者": {
        "食人族": "如果食人族获得了狂热者的能力，他会得知这一信息。",
        "维齐尔": "维齐尔的能力可能会将狂热者当作邪恶阵营。",
        "军团": "军团的能力可能会将狂热者当作邪恶阵营。",
        "暴乱": "狂热者在被提名后必须立马发起提名，即使自己已死亡。"
    },
    "堤丰之首": {
        "召唤师": "如果召唤师创造了堤丰之首，则堤丰之首必须与一名爪牙相邻，且堤丰之首另一侧的玩家变成一个不在场的邪恶爪牙。"
    },
    "科学怪人": {
        "村夫": "如果村夫在场数量不足3人，科学怪人可以让恶魔拥有村夫的能力。",
        "异教领袖": "如果恶魔拥有异教领袖的能力，他无法因为该能力转变为善良阵营。",
        "莽夫": "如果恶魔拥有莽夫的能力，他无法因为该能力转变为善良阵营。",
        "异端分子": "恶魔无法拥有异端分子的能力。",
        "食人魔": "恶魔无法拥有食人魔的能力。",
        "政客": "恶魔无法拥有政客的能力。",
        "酒鬼": "如果恶魔拥有酒鬼的能力，改为由科学怪人选择一名玩家：如果他是镇民，他醉酒。"
    },
    "炼金术士": {
        "科学怪人": "如果炼金术士拥有科学怪人的能力，炼金术士不会得知恶魔因此获得了哪个角色的能力。",
        "间谍": "如果炼金术士获得了间谍的能力，他无法查看魔典，并且间谍不能被当作善良阵营、镇民角色或外来者角色。",
        "寡妇": "如果炼金术士获得了寡妇的能力，他无法查看魔典。"
    },
    "引路人": {
        "侍女": "侍女会得知引路人是否醒来，即使她是在引路人之前醒来。",
        "数学家": "引路人会得知数学家是否被影响，即使他是在数学家之前醒来。"
    },
    "入殓师": {
        "红唇女郎": "入殓师提名并处决了恶魔并成功变成邪恶恶魔时，红唇女郎不会变成恶魔。",
        "哈迪寂亚": "如果出现两名存活的哈迪寂亚，则入殓师变成的哈迪寂亚会变回入殓师，但阵营保持邪恶。",
        "小怪宝": "如果在五名及以上的玩家存活时，入殓师提名并处决了照看小怪宝的玩家，入殓师会变为邪恶的该角色，当晚原入殓师玩家必须要照看小怪宝。",
        "痢蛭": "如果在大于等于五名玩家存活时，入殓师提名并处决了宿主且他死于这次处决，原本的痢蛭会在当晚死亡，入殓师变为邪恶的痢蛭且当晚无法攻击。"
    }
};