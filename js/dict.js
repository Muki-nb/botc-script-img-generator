const _characters = {
    "bureaucrat": {
        "id": "bureaucrat",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/bureaucrat.png",
        "edition": "custom",
        "name": "官员",
        "ability": "每个夜晚，你要选择除你以外的一名玩家：明天白天，他的投票算作三票。",
        "team": "traveler",
        "firstNight": 1,
        "otherNight": 1,
        "firstNightReminder": "唤醒官员。让官员指向任意一名玩家。用官员的“3票”提示标记那名被选中的玩家。让官员入睡。",
        "otherNightReminder": "唤醒官员。让官员指向任意一名玩家。用官员的“3票”提示标记那名被选中的玩家。让官员入睡。",
        "reminders": [
            "3票"
        ],
        "setup": false
    },
    "beggar": {
        "id": "beggar",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/beggar.png",
        "edition": "custom",
        "name": "乞丐",
        "ability": "你只能使用投票标记才能投票。死亡的玩家可以将他的投票标记给你，如果他这么做，你会得知他的阵营。你不会中毒和醉酒。",
        "team": "traveler",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "gunslinger": {
        "id": "gunslinger",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/gunslinger.png",
        "edition": "custom",
        "name": "枪手",
        "ability": "每个白天，当首次投票被统计后，你可以选择一名刚投过票的玩家：他死亡。",
        "team": "traveler",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "thief": {
        "id": "thief",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/thief.png",
        "edition": "custom",
        "name": "窃贼",
        "ability": "每个夜晚，你要选择除你以外的一名玩家：明天白天他的投票会被算作负数。",
        "team": "traveler",
        "firstNight": 1,
        "otherNight": 1,
        "firstNightReminder": "唤醒窃贼。让窃贼指向任意一名玩家。用窃贼的“负票”提示标记那名被选中的玩家。让窃贼入睡。",
        "otherNightReminder": "唤醒窃贼。让窃贼指向任意一名玩家。用窃贼的“负票”提示标记那名被选中的玩家。让窃贼入睡。",
        "reminders": [
            "负票"
        ],
        "setup": false
    },
    "scapegoat": {
        "id": "scapegoat",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/scapegoat.png",
        "edition": "custom",
        "name": "替罪羊",
        "ability": "如果你的阵营的一名玩家被处决，你可能会代替他被处决。",
        "team": "traveler",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "judge": {
        "id": "judge",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/judge.png",
        "edition": "custom",
        "name": "法官",
        "ability": "每局游戏限一次，如果其他玩家发起了提名，你可以选择让本次提名直接执行处决或让投票无效。",
        "team": "traveler",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [
            "失去能力"
        ],
        "setup": false
    },
    "matron": {
        "id": "matron",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/matron.png",
        "edition": "custom",
        "name": "女舍监",
        "ability": "每个白天，你可以选择至多三对玩家交换座位。玩家不能离开座位私聊。",
        "team": "traveler",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "voudon": {
        "id": "voudon",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/voudon.png",
        "edition": "custom",
        "name": "巫毒师",
        "ability": "只有你和死亡的玩家可以投票，且投票不需要使用投票标记。忽略票数需要过半的要求。",
        "team": "traveler",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "apprentice": {
        "id": "apprentice",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/apprentice.png",
        "edition": "custom",
        "name": "学徒",
        "ability": "在你的首个夜晚，如果你是善良的，你会获得一个镇民角色的能力；如果你是邪恶的，你会获得一个爪牙角色的能力。",
        "team": "traveler",
        "firstNight": 1,
        "otherNight": 1,
        "firstNightReminder": "在学徒加入游戏的首个夜晚，唤醒学徒。向学徒展示“你是”信息标记，然后展示一个镇民或爪牙的角色标记。在魔典上，将学徒的角色标记替换为刚刚展示的角色标记，并放置“是学徒”提示标记。这名玩家还是学徒，只是他拥有了该角色的能力。",
        "otherNightReminder": "在学徒加入游戏的首个夜晚，唤醒学徒。向学徒展示“你是”信息标记，然后展示一个镇民或爪牙的角色标记。在魔典上，将学徒的角色标记替换为刚刚展示的角色标记，并放置“是学徒”提示标记。这名玩家还是学徒，只是他拥有了该角色的能力。",
        "reminders": [
            "是学徒"
        ],
        "setup": false
    },
    "bishop": {
        "id": "bishop",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/bishop.png",
        "edition": "custom",
        "name": "主教",
        "ability": "只有说书人可以发起提名。每个白天说书人至少要提名一名你对立阵营的玩家。",
        "team": "traveler",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [
            "提名善良方",
            "提名邪恶方"
        ],
        "setup": false
    },
    "deviant": {
        "id": "deviant",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/deviant.png",
        "edition": "custom",
        "name": "怪咖",
        "ability": "如果你表现得很有趣，当天你不能被流放。",
        "team": "traveler",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "bone_collector": {
        "id": "bone_collector",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/bone_collector.png",
        "edition": "custom",
        "name": "集骨者",
        "ability": "每局游戏限一次，在夜晚时*，你可以选择一名死亡的玩家：他重新获得能力直到下个黄昏。",
        "team": "traveler",
        "firstNight": 0,
        "otherNight": 1,
        "firstNightReminder": "",
        "otherNightReminder": "每个夜晚，唤醒集骨者。集骨者要么摇头表示不使用能力，或者是指向任何一名已死亡的玩家。让集骨者重新入睡。",
        "reminders": [
            "重获能力",
            "失去能力"
        ],
        "setup": false
    },
    "barista": {
        "id": "barista",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/barista.png",
        "edition": "custom",
        "name": "咖啡师",
        "ability": "每个夜晚，直至下个黄昏，由说书人二选一：1）一名玩家解除并免受醉酒和中毒影响，且会得知正确信息；2）一名玩家的能力可以生效两次。该玩家会得知是哪个效果。",
        "team": "traveler",
        "firstNight": 1,
        "otherNight": 1,
        "firstNightReminder": "每个夜晚，移除先前的标记并在任一角色标记旁放置咖啡师的“清醒且健康”标记或“行动两次”提示。唤醒那个角色的玩家并向他展示“该角色的能力对你生效”信息标记，咖啡师标记和一根手指（代表他现在清醒且健康）或两根手指（代表他要行动两次）。让这名玩家入睡。",
        "otherNightReminder": "每个夜晚，移除先前的标记并在任一角色标记旁放置咖啡师的“清醒且健康”标记或“行动两次”提示。唤醒那个角色的玩家并向他展示“该角色的能力对你生效”信息标记，咖啡师标记和一根手指（代表他现在清醒且健康）或两根手指（代表他要行动两次）。让这名玩家入睡。",
        "reminders": [
            "清醒且健康",
            "行动两次",
            "？"
        ],
        "setup": false
    },
    "harlot": {
        "id": "harlot",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/harlot.png",
        "edition": "custom",
        "name": "流莺",
        "ability": "每个夜晚*，你要选择一名存活的玩家：如果他同意，你会得知他的角色，但是你们两个可能同时死亡。",
        "team": "traveler",
        "firstNight": 0,
        "otherNight": 1,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒流莺。让流莺指向任意一名玩家。让流莺重新入睡。唤醒被选中的玩家，对该玩家展示“该角色的能力对你生效”提示标记和流莺角色标记。该玩家需要通过点头表示是，摇头表示否。然后让该玩家重新入睡。",
        "reminders": [
            "死亡"
        ],
        "setup": false
    },
    "butcher": {
        "id": "butcher",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/butcher.png",
        "edition": "custom",
        "name": "屠夫",
        "ability": "每个白天，首次处决后，你可以再次发起提名。",
        "team": "traveler",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "gangster": {
        "id": "gangster",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/gangster.png",
        "edition": "custom",
        "name": "黑帮",
        "ability": "每个白天限一次，你可以杀死与你邻近的两名存活的玩家中的一名，但需要另一边那个存活的玩家同意。",
        "team": "traveler",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "jiaohuazi": {
        "id": "jiaohuazi",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/jiaohuazi.png",
        "edition": "custom",
        "name": "叫花子",
        "ability": "每个白天限一次，你可以公开选择一名其他玩家，让他选择一个非恶魔角色：你可能会获得这个角色的能力，直到下个黎明。",
        "team": "traveler",
        "firstNight": 1,
        "otherNight": 1,
        "firstNightReminder": "如果你决定不让叫花子获得这个角色的能力，无事发生。如果你决定让叫花子获得这个角色的能力，那么让他行动。如果该角色已在场，你可以自由决定是先唤醒原角色对应的玩家还是先唤醒叫花子玩家来进行行动。",
        "otherNightReminder": "如果你决定不让叫花子获得这个角色的能力，无事发生。如果你决定让叫花子获得这个角色的能力，那么让他行动。如果该角色已在场，你可以自由决定是先唤醒原角色对应的玩家还是先唤醒叫花子玩家来进行行动。",
        "reminders": [
            "乞讨",
            "是叫花子"
        ],
        "setup": false
    },
    "washerwoman": {
        "id": "washerwoman",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/washerwoman.png",
        "edition": "custom",
        "name": "洗衣妇",
        "ability": "在你的首个夜晚，你会得知两名玩家和一个镇民角色：这两名玩家之一是该角色。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3035,
        "otherNight": 0,
        "firstNightReminder": "唤醒洗衣妇，对她指向两名玩家，并展示一个镇民角色标记。这两名玩家其中之一是这个镇民。",
        "otherNightReminder": "",
        "reminders": [
            "镇民",
            "错误"
        ],
        "setup": false
    },
    "librarian": {
        "id": "librarian",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/librarian.png",
        "edition": "custom",
        "name": "图书管理员",
        "ability": "在你的首个夜晚，你会得知两名玩家和一个外来者角色：这两名玩家之一是该角色（或者你会得知没有外来者在场）。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3036,
        "otherNight": 0,
        "firstNightReminder": "唤醒图书管理员，对他指向两名玩家，并展示一个外来者角色标记。这两名玩家其中之一是这个外来者。",
        "otherNightReminder": "",
        "reminders": [
            "外来者",
            "错误"
        ],
        "setup": false
    },
    "investigator": {
        "id": "investigator",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/investigator.png",
        "edition": "custom",
        "name": "调查员",
        "ability": "在你的首个夜晚，你会得知两名玩家和一个爪牙角色：这两名玩家之一是该角色（或者你会得知没有爪牙在场）。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3037,
        "otherNight": 0,
        "firstNightReminder": "唤醒调查员，对他指向两名玩家，并展示一个爪牙角色标记。这两名玩家其中之一是这个爪牙。",
        "otherNightReminder": "",
        "reminders": [
            "爪牙",
            "错误"
        ],
        "setup": false
    },
    "chef": {
        "id": "chef",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/chef.png",
        "edition": "custom",
        "name": "厨师",
        "ability": "在你的首个夜晚，你会得知场上邻座的邪恶玩家有多少对。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3038,
        "otherNight": 0,
        "firstNightReminder": "唤醒厨师，对他用手势比划数字来告知他邻座邪恶玩家有几对。",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "empath": {
        "id": "empath",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/empath.png",
        "edition": "custom",
        "name": "共情者",
        "ability": "每个夜晚，你会得知与你邻近的两名存活的玩家中邪恶玩家的数量。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3039,
        "otherNight": 80,
        "firstNightReminder": "唤醒共情者，对他用手势比划数字来告知他与他邻近的存活玩家中有几人是邪恶玩家。",
        "otherNightReminder": "唤醒共情者，对他用手势比划数字来告知他与他邻近的存活玩家中有几人是邪恶玩家。",
        "reminders": [],
        "setup": false
    },
    "fortune_teller": {
        "id": "fortune_teller",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/fortune_teller.png",
        "edition": "custom",
        "name": "占卜师",
        "ability": "每个夜晚，你要选择两名玩家：你会得知他们之中是否有恶魔。会有一名善良玩家始终被你的能力当作恶魔。<i>（干扰项）</i>",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3040,
        "otherNight": 81,
        "firstNightReminder": "唤醒占卜师，让他选择两名玩家。以点头或摇头告知他是否选中了恶魔。",
        "otherNightReminder": "唤醒占卜师，让他选择两名玩家。以点头或摇头告知他是否选中了恶魔。",
        "reminders": [
            "干扰项"
        ],
        "setup": false
    },
    "undertaker": {
        "id": "undertaker",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/undertaker.png",
        "edition": "custom",
        "name": "送葬者",
        "ability": "每个夜晚*，你会得知今天白天死于处决的玩家的角色。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 83,
        "firstNightReminder": "",
        "otherNightReminder": "如果今天白天有玩家死于处决，唤醒送葬者，对他展示那名玩家的角色标记。",
        "reminders": [
            "死于今日"
        ],
        "setup": false
    },
    "monk": {
        "id": "monk",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/monk.png",
        "edition": "custom",
        "name": "僧侣",
        "ability": "每个夜晚*，你要选择除你以外的一名玩家：当晚恶魔的负面能力对他无效。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 14,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒僧侣，让他选择除自己以外的一名玩家，那名玩家今晚免受恶魔负面效果影响。",
        "reminders": [
            "保护"
        ],
        "setup": false
    },
    "ravenkeeper": {
        "id": "ravenkeeper",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/ravenkeeper.png",
        "edition": "custom",
        "name": "守鸦人",
        "ability": "如果你在夜晚死亡，你会被唤醒，然后你要选择一名玩家：你会得知他的角色。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 70,
        "firstNightReminder": "",
        "otherNightReminder": "如果守鸦人死于夜晚，唤醒守鸦人，让他选择一名玩家。对他展示这名玩家的角色标记。",
        "reminders": [],
        "setup": false
    },
    "virgin": {
        "id": "virgin",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/virgin.png",
        "edition": "custom",
        "name": "贞洁者",
        "ability": "当你首次被提名时，如果提名你的玩家是镇民，他立刻被处决。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [
            "失去能力"
        ],
        "setup": false
    },
    "slayer": {
        "id": "slayer",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/slayer.png",
        "edition": "custom",
        "name": "猎手",
        "ability": "每局游戏限一次，你可以在白天时公开选择一名玩家：如果他是恶魔，他死亡。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [
            "失去能力"
        ],
        "setup": false
    },
    "soldier": {
        "id": "soldier",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/soldier.png",
        "edition": "custom",
        "name": "士兵",
        "ability": "恶魔的负面能力对你无效。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "mayor": {
        "id": "mayor",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/mayor.png",
        "edition": "custom",
        "name": "镇长",
        "ability": "如果只有三名玩家存活且白天没有人被处决，你的阵营获胜。如果你在夜晚死亡，可能会有一名其他玩家代替你死亡。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "grandmother": {
        "id": "grandmother",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/grandmother.png",
        "edition": "custom",
        "name": "祖母",
        "ability": "在你的首个夜晚，你会得知一名善良玩家和他的角色。如果恶魔杀死了他，你也会死亡。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3043,
        "otherNight": 66,
        "firstNightReminder": "唤醒祖母，对她指向一名善良玩家，并展示该玩家的角色标记。",
        "otherNightReminder": "如果恶魔杀死了孙子，祖母死亡。",
        "reminders": [
            "孙子",
            "死亡"
        ],
        "setup": false
    },
    "sailor": {
        "id": "sailor",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/sailor.png",
        "edition": "custom",
        "name": "水手",
        "ability": "每个夜晚，你要选择一名存活的玩家：你或他之一会醉酒直到下个黄昏。你不会死亡。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3013,
        "otherNight": 5,
        "firstNightReminder": "唤醒水手，让他选择一名玩家。决定他俩其中谁因为水手能力醉酒。",
        "otherNightReminder": "唤醒水手，让他选择一名玩家。决定他俩其中谁因为水手能力醉酒。",
        "reminders": [
            "醉酒"
        ],
        "setup": false
    },
    "chambermaid": {
        "id": "chambermaid",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/chambermaid.png",
        "edition": "custom",
        "name": "侍女",
        "ability": "每个夜晚，你要选择除你以外的两名存活的玩家：你会得知他们中有几人在当晚因其自身能力而被唤醒。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3064,
        "otherNight": 100,
        "firstNightReminder": "唤醒侍女，让她选择两名除自己以外的存活玩家。用手势比划数字来告知她这些玩家中因自己能力而唤醒的玩家数量。",
        "otherNightReminder": "唤醒侍女，让她选择两名除自己以外的存活玩家。用手势比划数字来告知她这些玩家中因自己能力而唤醒的玩家数量。",
        "reminders": [],
        "setup": false
    },
    "exorcist": {
        "id": "exorcist",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/exorcist.png",
        "edition": "custom",
        "name": "驱魔人",
        "ability": "每个夜晚*，你要选择一名玩家（与上个夜晚不同）：如果你选中了恶魔，他会得知你的角色，但他当晚不会因其自身能力而被唤醒。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 29,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒驱魔人，让他选择一名与上一晚不同的玩家。如果他选中了恶魔，则在驱魔人入睡后通知该恶魔谁是驱魔人。",
        "reminders": [
            "被选择"
        ],
        "setup": false
    },
    "innkeeper": {
        "id": "innkeeper",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/innkeeper.png",
        "edition": "custom",
        "name": "旅店老板",
        "ability": "每个夜晚*，你要选择两名玩家：他们当晚不会死亡，但其中一人会醉酒到下个黄昏。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 10,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒旅店老板，让他选择两名玩家。这两名玩家今晚不死，同时需要决定他俩其中谁因为旅店老板能力醉酒。",
        "reminders": [
            "不会死亡",
            "醉酒"
        ],
        "setup": false
    },
    "gambler": {
        "id": "gambler",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/gambler.png",
        "edition": "custom",
        "name": "赌徒",
        "ability": "每个夜晚*，你要选择一名玩家并猜测该玩家的角色：如果你猜错了，你会死亡。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 12,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒赌徒，让他进行猜测。如果猜测错误，他死亡。",
        "reminders": [
            "死亡"
        ],
        "setup": false
    },
    "gossip": {
        "id": "gossip",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/gossip.png",
        "edition": "custom",
        "name": "造谣者",
        "ability": "每个白天，你可以公开发表一个声明。在当晚，如果该声明是正确的，会有一名玩家死亡。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 62,
        "firstNightReminder": "",
        "otherNightReminder": "如果造谣者今天白天的声明正确，一名玩家死亡。",
        "reminders": [
            "死亡"
        ],
        "setup": false
    },
    "courtier": {
        "id": "courtier",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/courtier.png",
        "edition": "custom",
        "name": "侍臣",
        "ability": "每局游戏限一次，在夜晚时，你可以选择一个角色：如果该角色在场，一个该角色从当晚开始醉酒三天三夜。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3020,
        "otherNight": 11,
        "firstNightReminder": "唤醒侍臣，他可以摇头不使用能力，或选择角色列表上的一个任意角色，该角色对应的玩家之一醉酒。",
        "otherNightReminder": "如果侍臣未曾使用能力，唤醒侍臣，他可以摇头不使用能力，或选择角色列表上的一个任意角色，该角色对应的玩家之一醉酒。",
        "reminders": [
            "醉酒1",
            "醉酒2",
            "醉酒3",
            "失去能力"
        ],
        "setup": false
    },
    "professor": {
        "id": "professor",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/professor.png",
        "edition": "custom",
        "name": "教授",
        "ability": "每局游戏限一次，在夜晚时*，你可以选择一名死亡的玩家：如果他是镇民，你会将他起死回生。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 76,
        "firstNightReminder": "",
        "otherNightReminder": "如果教授未曾使用能力且在城镇广场上有玩家死亡，唤醒教授，他可以摇头不使用能力，或选择一名已死亡的玩家。如果该玩家是镇民，该玩家被起死回生。",
        "reminders": [
            "复活",
            "失去能力"
        ],
        "setup": false
    },
    "minstrel": {
        "id": "minstrel",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/minstrel.png",
        "edition": "custom",
        "name": "吟游诗人",
        "ability": "当一名爪牙死于处决时，除了你和旅行者以外的所有其他玩家醉酒直到明天黄昏。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [
            "全员醉酒"
        ],
        "setup": false
    },
    "tea_lady": {
        "id": "tea_lady",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/tea_lady.png",
        "edition": "custom",
        "name": "茶艺师",
        "ability": "如果与你邻近的两名存活的玩家是善良的，他们不会死亡。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [
            "不会死亡"
        ],
        "setup": false
    },
    "pacifist": {
        "id": "pacifist",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/pacifist.png",
        "edition": "custom",
        "name": "和平主义者",
        "ability": "被处决的善良玩家可能不会死亡。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "fool": {
        "id": "fool",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/fool.png",
        "edition": "custom",
        "name": "弄臣",
        "ability": "当你首次将要死亡时，你不会死亡。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [
            "失去能力"
        ],
        "setup": false
    },
    "clockmaker": {
        "id": "clockmaker",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/clockmaker.png",
        "edition": "custom",
        "name": "钟表匠",
        "ability": "在你的首个夜晚，你会得知恶魔与爪牙之间最近的距离。（邻座的玩家距离为1）",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3044,
        "otherNight": 0,
        "firstNightReminder": "唤醒钟表匠，对他用手势比划数字来告知他恶魔与爪牙之间的最近距离。",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "dreamer": {
        "id": "dreamer",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/dreamer.png",
        "edition": "custom",
        "name": "筑梦师",
        "ability": "每个夜晚，你要选择除你及旅行者以外的一名玩家：你会得知一个善良角色和一个邪恶角色，该玩家是其中一个角色。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3045,
        "otherNight": 84,
        "firstNightReminder": "唤醒筑梦师，让他选择一名除自己以外的非旅行者玩家。对他展示一善一恶两个角色标记。",
        "otherNightReminder": "唤醒筑梦师，让他选择一名除自己以外的非旅行者玩家。对他展示一善一恶两个角色标记。",
        "reminders": [],
        "setup": false
    },
    "snake_charmer": {
        "id": "snake_charmer",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/snake_charmer.png",
        "edition": "custom",
        "name": "舞蛇人",
        "ability": "每个夜晚，你要选择一名存活的玩家：如果你选中了恶魔，你和他交换角色和阵营，然后他中毒。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3021,
        "otherNight": 13,
        "firstNightReminder": "唤醒舞蛇人，让他选择一名存活玩家。如果选中恶魔则执行角色和阵营的交换，并在舞蛇人入睡后通知旧恶魔角色变化。",
        "otherNightReminder": "唤醒舞蛇人，让他选择一名存活玩家。如果选中恶魔则执行角色和阵营的交换，并在舞蛇人入睡后通知旧恶魔角色变化。",
        "reminders": [
            "中毒"
        ],
        "setup": false
    },
    "mathematician": {
        "id": "mathematician",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/mathematician.png",
        "edition": "custom",
        "name": "数学家",
        "ability": "每个夜晚，你会得知有多少名玩家的能力因为其他角色的能力而未正常生效。（从上个黎明到你被唤醒时）",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3065,
        "otherNight": 101,
        "firstNightReminder": "唤醒数学家，用手势比划数字来告诉他今天有多少玩家的能力未正常生效。",
        "otherNightReminder": "唤醒数学家，用手势比划数字来告诉他今天有多少玩家的能力未正常生效。",
        "reminders": [
            "未正常生效"
        ],
        "setup": false
    },
    "flowergirl": {
        "id": "flowergirl",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/flowergirl.png",
        "edition": "custom",
        "name": "卖花女孩",
        "ability": "每个夜晚*，你会得知在今天白天时是否有恶魔投过票。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 85,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒卖花女孩，以点头或摇头告知她今天白天是否有恶魔参与投票。",
        "reminders": [
            "恶魔未投票",
            "恶魔已投票"
        ],
        "setup": false
    },
    "town_crier": {
        "id": "town_crier",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/town_crier.png",
        "edition": "custom",
        "name": "城镇公告员",
        "ability": "每个夜晚*，你会得知在今天白天时是否有爪牙发起过提名。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 86,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒城镇公告员，以点头或摇头告知他今天白天是否有爪牙发起提名。",
        "reminders": [
            "爪牙未提名",
            "爪牙已提名"
        ],
        "setup": false
    },
    "oracle": {
        "id": "oracle",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/oracle.png",
        "edition": "custom",
        "name": "神谕者",
        "ability": "每个夜晚*，你会得知有多少名死亡的玩家是邪恶的。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 87,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒神谕者，对他用手势比划数字来告知他当前死亡玩家中邪恶玩家的数量。",
        "reminders": [],
        "setup": false
    },
    "savant": {
        "id": "savant",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/savant.png",
        "edition": "custom",
        "name": "博学者",
        "ability": "每个白天，你可以私下询问说书人以得知两条信息：一个是正确的，一个是错误的。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "seamstress": {
        "id": "seamstress",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/seamstress.png",
        "edition": "custom",
        "name": "女裁缝",
        "ability": "每局游戏限一次，在夜晚时，你可以选择除你以外的两名玩家：你会得知他们是否为同一阵营。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3046,
        "otherNight": 88,
        "firstNightReminder": "唤醒女裁缝，她可以摇头不使用能力，或选择除自己以外的两名玩家。以点头或摇头告知她选择的玩家是否为同一阵营。",
        "otherNightReminder": "如果女裁缝未曾使用能力，唤醒女裁缝，她可以摇头不使用能力，或选择除自己以外的两名玩家。以点头或摇头告知她选择的玩家是否为同一阵营。",
        "reminders": [
            "失去能力"
        ],
        "setup": false
    },
    "philosopher": {
        "id": "philosopher",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/philosopher.png",
        "edition": "custom",
        "name": "哲学家",
        "ability": "每局游戏限一次，在夜晚时，你可以选择一个善良角色：你获得该角色的能力。如果这个角色在场，他醉酒。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3,
        "otherNight": 2,
        "firstNightReminder": "唤醒哲学家，他可以摇头不使用能力，或选择获得角色列表上的一个善良角色的能力。",
        "otherNightReminder": "如果哲学家未曾使用能力，唤醒哲学家，他可以摇头不使用能力，或选择获得角色列表上的一个善良角色的能力。",
        "reminders": [
            "醉酒"
        ],
        "remindersGlobal": [
            "是哲学家"
        ],
        "setup": false
    },
    "artist": {
        "id": "artist",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/artist.png",
        "edition": "custom",
        "name": "艺术家",
        "ability": "每局游戏限一次，在白天时，你可以私下询问说书人一个是非问题，你会得知该问题的答案。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [
            "失去能力"
        ],
        "setup": false
    },
    "juggler": {
        "id": "juggler",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/juggler.png",
        "edition": "custom",
        "name": "杂耍艺人",
        "ability": "在你的首个白天，你可以公开猜测任意玩家的角色最多五次。在当晚，你会得知猜测正确的角色数量。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 89,
        "firstNightReminder": "",
        "otherNightReminder": "如果杂耍艺人在今天白天使用了能力，唤醒杂耍艺人，对他用手势比划数字来告知他白天猜测正确的次数。",
        "reminders": [
            "猜测正确"
        ],
        "setup": false
    },
    "sage": {
        "id": "sage",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/sage.png",
        "edition": "custom",
        "name": "贤者",
        "ability": "如果恶魔杀死了你，在当晚你会被唤醒并得知两名玩家，其中一名是杀死你的那个恶魔。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 71,
        "firstNightReminder": "",
        "otherNightReminder": "如果贤者被恶魔杀死，唤醒贤者，对他指向两名玩家。其中之一是杀死贤者的恶魔。",
        "reminders": [],
        "setup": false
    },
    "amnesiac": {
        "id": "amnesiac",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/amnesiac.png",
        "edition": "custom",
        "name": "失忆者",
        "ability": "你不知道你的能力是什么。每个白天你可以找说书人猜测一次，你会得知你的猜测有多准确。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 1.5,
        "otherNight": 1.5,
        "firstNightReminder": "决定失忆者的能力，并根据具体能力决定是否需要唤醒失忆者、何时唤醒、唤醒后让他做出什么操作或得知什么信息。",
        "otherNightReminder": "根据失忆者的具体能力决定是否需要唤醒失忆者、何时唤醒、唤醒后让他做出什么操作或得知什么信息。",
        "reminders": [
            "？"
        ],
        "setup": false
    },
    "noble": {
        "id": "noble",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/noble.png",
        "edition": "custom",
        "name": "贵族",
        "ability": "在你的首个夜晚，你会得知三名玩家：其中有且只有一名玩家是邪恶的。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3049,
        "otherNight": 0,
        "firstNightReminder": "唤醒贵族，对他指向三名玩家。这三名玩家中有且仅有一名是邪恶玩家。",
        "otherNightReminder": "",
        "reminders": [
            "被得知"
        ],
        "setup": false
    },
    "bounty_hunter": {
        "id": "bounty_hunter",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/bounty_hunter.png",
        "edition": "custom",
        "name": "赏金猎人",
        "ability": "在你的首个夜晚，你会得知一名邪恶玩家。每当你得知的玩家死亡，你会在当晚得知另一名邪恶玩家。[会有一名镇民转变为邪恶阵营]",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3055,
        "otherNight": 94,
        "firstNightReminder": "（在进入首个夜晚时立即通知赏金猎人转变的那个镇民他的阵营发生了变化）唤醒赏金猎人，对他指向一名邪恶玩家。",
        "otherNightReminder": "如果赏金猎人之前得知的玩家死亡，唤醒赏金猎人，对他指向一名新的邪恶玩家。",
        "reminders": [
            "得知"
        ],
        "setup": true
    },
    "pixie": {
        "id": "pixie",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/pixie.png",
        "edition": "custom",
        "name": "小精灵",
        "ability": "在你的首个夜晚，你会得知一个在场的镇民角色。如果你“疯狂”地证明你是该角色，当他死亡时你获得该角色的能力。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3033,
        "otherNight": 0,
        "firstNightReminder": "唤醒小精灵，对他展示一个在场镇民角色标记。",
        "otherNightReminder": "",
        "reminders": [
            "疯狂",
            "获得能力"
        ],
        "setup": false
    },
    "general": {
        "id": "general",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/general.png",
        "edition": "custom",
        "name": "将军",
        "ability": "每个夜晚，你会得知说书人认为哪个阵营当前更有优势（善良/邪恶/均势）。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3063,
        "otherNight": 99,
        "firstNightReminder": "唤醒将军，对他用手势比划当前的优势阵营。",
        "otherNightReminder": "唤醒将军，对他用手势比划当前的优势阵营。",
        "reminders": [],
        "setup": false
    },
    "preacher": {
        "id": "preacher",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/preacher.png",
        "edition": "custom",
        "name": "传教士",
        "ability": "每个夜晚，你要选择一名玩家：如果选中了爪牙，他会得知被传教士选中。所有被你选中的爪牙失去能力。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3015,
        "otherNight": 7,
        "firstNightReminder": "唤醒传教士，让他选择一名玩家。如果他选中了爪牙，该爪牙失去能力。在传教士入睡后通知该爪牙被传教士选中。",
        "otherNightReminder": "唤醒传教士，让他选择一名玩家。如果他选中了爪牙，该爪牙失去能力。在传教士入睡后通知该爪牙被传教士选中。",
        "reminders": [
            "失去能力"
        ],
        "setup": false
    },
    "balloonist": {
        "id": "balloonist",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/balloonist.png",
        "edition": "custom",
        "name": "气球驾驶员",
        "ability": "每个夜晚，你会得知一名与上个夜晚得知的玩家角色类型不同的玩家。[+0~1外来者]",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3050,
        "otherNight": 90,
        "firstNightReminder": "唤醒气球驾驶员，对他指向一名玩家。",
        "otherNightReminder": "唤醒气球驾驶员，对他指向一名玩家，这名玩家与之前气球驾驶员上一个夜晚得知过的玩家属于不同的角色类型。",
        "reminders": [
            "得知"
        ],
        "setup": true
    },
    "cult_leader": {
        "id": "cult_leader",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/cult_leader.png",
        "edition": "custom",
        "name": "异教领袖",
        "ability": "每个夜晚，你会转变为与你邻近的一名存活的玩家的阵营。每个白天，你可以提议所有玩家加入你的教派，如果所有善良玩家同意加入，你的阵营获胜。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3057,
        "otherNight": 96,
        "firstNightReminder": "如果异教领袖的阵营发生了变化，将他唤醒并通知他最新阵营。",
        "otherNightReminder": "如果异教领袖的阵营发生了变化，将他唤醒并通知他最新阵营。",
        "reminders": [],
        "setup": false
    },
    "lycanthrope": {
        "id": "lycanthrope",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/lycanthrope.png",
        "edition": "custom",
        "name": "半兽人",
        "ability": "每个夜晚*，你要选择一名存活玩家：如果他是善良的，他死亡，并且当晚恶魔不会造成死亡。会有一名善良玩家始终被当作邪恶阵营。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 30,
        "otherNightReminder": "唤醒半兽人，让他选择一名玩家。如果该玩家是善良玩家，该玩家死亡，且当晚不会有其他玩家死亡。",
        "reminders": [
            "死亡"
        ],
        "setup": false
    },
    "nightwatchman": {
        "id": "nightwatchman",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/nightwatchman.png",
        "edition": "custom",
        "name": "守夜人",
        "ability": "每局游戏限一次，在夜晚时，你可以选择一名玩家：他会得知你是守夜人。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3056,
        "otherNight": 95,
        "firstNightReminder": "唤醒守夜人，他可以摇头不使用能力，或选择一名玩家。如果守夜人选择了玩家，则在守夜人入睡后通知那名玩家谁是守夜人。",
        "otherNightReminder": "如果守夜人未曾使用能力，唤醒守夜人，他可以摇头不使用能力，或选择一名玩家。如果守夜人选择了玩家，则在守夜人入睡后通知那名玩家谁是守夜人。",
        "reminders": [
            "失去能力"
        ],
        "setup": false
    },
    "engineer": {
        "id": "engineer",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/engineer.png",
        "edition": "custom",
        "name": "工程师",
        "ability": "每局游戏限一次，在夜晚时，你可以选择让恶魔变成你选择的恶魔角色，或让所有爪牙变成你选择的爪牙角色。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3014,
        "otherNight": 6,
        "firstNightReminder": "唤醒工程师，他可以摇头不使用能力，或选择角色列表上的恶魔或爪牙角色，来执行同角色类型的这些玩家的角色变化。",
        "otherNightReminder": "如果工程师未曾使用能力，唤醒工程师，他可以摇头不使用能力，或选择角色列表上的恶魔或爪牙角色，来执行同角色类型的这些玩家的角色变化。",
        "reminders": [
            "失去能力"
        ],
        "setup": false
    },
    "fisherman": {
        "id": "fisherman",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/fisherman.png",
        "edition": "custom",
        "name": "渔夫",
        "ability": "每局游戏限一次，在白天时，你可以让说书人给你一些能帮助你的阵营获胜的建议。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [
            "失去能力"
        ],
        "setup": false
    },
    "huntsman": {
        "id": "huntsman",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/huntsman.png",
        "edition": "custom",
        "name": "巡山人",
        "ability": "每局游戏限一次，在夜晚时，你可以选择一名存活的玩家：如果你选中了落难少女，她会变成一个不在场的镇民角色。[+落难少女]",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3034,
        "otherNight": 77,
        "firstNightReminder": "唤醒巡山人，他可以摇头不使用能力，或选择一名玩家。如果巡山人选中了落难少女，则在巡山人入睡后通知落难少女角色变化。",
        "otherNightReminder": "如果巡山人未曾使用能力，唤醒巡山人，他可以摇头不使用能力，或选择一名玩家。如果巡山人选中了落难少女，则在巡山人入睡后通知落难少女角色变化。",
        "reminders": [
            "失去能力"
        ],
        "setup": true
    },
    "alchemist": {
        "id": "alchemist",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/alchemist.png",
        "edition": "custom",
        "name": "炼金术士",
        "ability": "你拥有一个不在场的爪牙角色的能力。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3.3,
        "otherNight": 0,
        "firstNightReminder": "唤醒炼金术士，对他展示他获得的能力所对应的爪牙角色标记。",
        "remindersGlobal": [
            "是炼金术士"
        ],
        "setup": false
    },
    "farmer": {
        "id": "farmer",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/farmer.png",
        "edition": "custom",
        "name": "农夫",
        "ability": "如果你在夜晚死亡，一名存活的善良玩家会变成农夫。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 74,
        "firstNightReminder": "",
        "otherNightReminder": "如果农夫死于夜晚，唤醒一名存活的善良玩家告知他角色变化。",
        "reminders": [],
        "setup": false
    },
    "magician": {
        "id": "magician",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/magician.png",
        "edition": "custom",
        "name": "魔术师",
        "ability": "恶魔会以为你是爪牙。爪牙会以为你是恶魔。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3.6,
        "otherNight": 0,
        "firstNightReminder": "如果魔术师在场，则需要对爪牙信息环节和恶魔信息环节的相关内容进行调整。",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "king": {
        "id": "king",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/king.png",
        "edition": "custom",
        "name": "国王",
        "ability": "每个夜晚，如果死亡的玩家数量大于或等于存活的玩家数量，你会得知一个存活的角色。恶魔知道你是国王。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3009,
        "otherNight": 93,
        "firstNightReminder": "如果国王在场，对恶魔展示国王角色标记并指向国王玩家。",
        "otherNightReminder": "如果满足国王的唤醒条件，唤醒国王，对他展示一个存活的角色标记。",
        "reminders": [],
        "setup": false
    },
    "choirboy": {
        "id": "choirboy",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/choirboy.png",
        "edition": "custom",
        "name": "唱诗男孩",
        "ability": "如果恶魔杀死了国王，你会得知哪名玩家是恶魔。[+国王]",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 73,
        "firstNightReminder": "",
        "otherNightReminder": "如果恶魔杀死了国王，唤醒唱诗男孩，对他指向恶魔。",
        "reminders": [],
        "setup": true
    },
    "poppy_grower": {
        "id": "poppy_grower",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/poppy_grower.png",
        "edition": "custom",
        "name": "罂粟种植者",
        "ability": "爪牙和恶魔互相不认识。如果你死亡，当晚他们会互相认识。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3.4,
        "otherNight": 4,
        "firstNightReminder": "如果罂粟种植者在场，跳过今晚的爪牙信息和恶魔信息环节。",
        "otherNightReminder": "如果罂粟种植者死于白天，插入执行爪牙信息和恶魔信息（不包含恶魔伪装）流程。如果罂粟种植者死于夜晚，则在当前玩家行动结束后立即执行相关流程。",
        "reminders": [
            "唤醒邪恶"
        ],
        "setup": false
    },
    "atheist": {
        "id": "atheist",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/atheist.png",
        "edition": "custom",
        "name": "无神论者",
        "ability": "说书人可以打破游戏规则。如果说书人被处决，善良阵营获胜，即使你已死亡。[无邪恶角色在场]",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": true
    },
    "cannibal": {
        "id": "cannibal",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/cannibal.png",
        "edition": "custom",
        "name": "食人族",
        "ability": "你拥有上个死于处决的玩家的能力。如果该玩家属于邪恶阵营，你中毒直到下个善良玩家死于处决。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [
            "死于今日",
            "中毒"
        ],
        "setup": false
    },
    "knight": {
        "id": "knight",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/knight.png",
        "edition": "custom",
        "name": "骑士",
        "ability": "在你的首个夜晚，你会得知两名非恶魔玩家。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3048,
        "otherNight": 0,
        "firstNightReminder": "唤醒骑士，对他指向两名非恶魔玩家。",
        "otherNightReminder": "",
        "reminders": [
            "得知"
        ],
        "setup": false
    },
    "steward": {
        "id": "steward",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/steward.png",
        "edition": "custom",
        "name": "事务官",
        "ability": "在你的首个夜晚，你会得知一名善良玩家。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3047,
        "otherNight": 0,
        "firstNightReminder": "唤醒事务官，对他指向一名善良玩家。",
        "otherNightReminder": "",
        "reminders": [
            "得知"
        ],
        "setup": false
    },
    "high_priestess": {
        "id": "high_priestess",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/high_priestess.png",
        "edition": "custom",
        "name": "女祭司",
        "ability": "每个夜晚，你会得知一名说书人认为你最应该与其交流的玩家。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3060,
        "otherNight": 98,
        "firstNightReminder": "唤醒女祭司，对她指向一名玩家。",
        "otherNightReminder": "唤醒女祭司，对她指向一名玩家。",
        "reminders": [],
        "setup": false
    },
    "shugenja": {
        "id": "shugenja",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/shugenja.png",
        "edition": "custom",
        "name": "修行者",
        "ability": "在你的首个夜晚，你会得知距离最近的邪恶玩家位于你的顺时针还是逆时针方向。如果两侧的邪恶玩家与你距离相等，你得知的信息由说书人决定。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3061,
        "otherNight": 0,
        "firstNightReminder": "唤醒修行者，对他指向对应方向来告知他最近的邪恶玩家的方向。",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "village_idiot": {
        "id": "village_idiot",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/village_idiot.png",
        "edition": "custom",
        "name": "村夫",
        "ability": "每个夜晚，你要选择一名玩家：你会得知他的阵营。<br>[+0~2村夫，复数村夫中有一人醉酒]",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3054,
        "otherNight": 92,
        "firstNightReminder": "唤醒村夫，让他指向一名玩家，用手势告诉他那名玩家的阵营。",
        "otherNightReminder": "唤醒村夫，让他指向一名玩家，用手势告诉他那名玩家的阵营。",
        "reminders": [
            "醉酒"
        ],
        "setup": true
    },
    "banshee": {
        "id": "banshee",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/banshee.png",
        "edition": "custom",
        "name": "报丧女妖",
        "ability": "如果恶魔杀死了你，所有玩家都会得知此事。从现在开始，你每天可以发起两次提名，每次投票时可以投两票。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 75,
        "firstNightReminder": "如果恶魔杀死了报丧女妖，宣布“报丧女妖觉醒了”，并使用“具有能力”标记报丧女妖。",
        "reminders": [
            "具有能力"
        ],
        "setup": false
    },
    "alsaahir": {
        "id": "alsaahir",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/alsaahir.png",
        "edition": "custom",
        "name": "戏法师",
        "ability": "每个白天限一次，你可以公开猜测谁是爪牙，谁是恶魔。如果你猜对，善良阵营获胜。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "yinyangshi": {
        "id": "yinyangshi",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/yinyangshi.png",
        "edition": "custom",
        "name": "阴阳师",
        "ability": "在你的首个夜晚，你会得知两个善良角色和两个邪恶角色。其中有且只有两个角色在场。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3051,
        "otherNight": 0,
        "firstNightReminder": "唤醒阴阳师，对他展示两个善良角色和两个邪恶角色。",
        "reminders": [
            "在场",
            "不在场"
        ],
        "setup": false
    },
    "qintianjian": {
        "id": "qintianjian",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/qintianjian.png",
        "edition": "custom",
        "name": "钦天监",
        "ability": "在你的首个夜晚，你会得知离你最近的邪恶玩家位于你的哪一侧（左/右/相同）。如果与你邻近的玩家中有邪恶阵营，你会得知错误信息。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3062,
        "otherNight": 0,
        "firstNightReminder": "唤醒钦天监，对他指向对应方向来告知他最近的邪恶玩家的方向。",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "dianxiaoer": {
        "id": "dianxiaoer",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/dianxiaoer.png",
        "edition": "custom",
        "name": "店小二",
        "ability": "在你的首个夜晚，你会得知两名善良玩家。他们之中会有一人醉酒，即使你已死亡。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3053,
        "otherNight": 0,
        "firstNightReminder": "唤醒店小二，对他指向两名善良玩家。",
        "otherNightReminder": "",
        "reminders": [
            "熟客",
            "醉酒"
        ],
        "setup": false
    },
    "xionghaizi": {
        "id": "xionghaizi",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/xionghaizi.png",
        "edition": "custom",
        "name": "熊孩子",
        "ability": "每个夜晚，你要选择一个镇民角色：他们的能力会产生错误信息，直到下个黄昏。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3032,
        "otherNight": 17,
        "firstNightReminder": "唤醒熊孩子，让他选择角色列表上的一个镇民角色，该角色会产生错误信息。",
        "otherNightReminder": "唤醒熊孩子，让他选择角色列表上的一个镇民角色，该角色会产生错误信息。",
        "reminders": [
            "捣蛋"
        ],
        "setup": false
    },
    "langzhong": {
        "id": "langzhong",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/langzhong.png",
        "edition": "custom",
        "name": "郎中",
        "ability": "每个夜晚，你要选择除你以外的一名玩家：你会得知一个与他能力相关的词语。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3052,
        "otherNight": 91,
        "firstNightReminder": "唤醒郎中，让他指向除他以外的一名玩家。对郎中展示一个与该玩家能力相关的词语。",
        "otherNightReminder": "唤醒郎中，让他指向除他以外的一名玩家。对郎中展示一个与该玩家能力相关的词语。",
        "reminders": [],
        "setup": false
    },
    "dagengren": {
        "id": "dagengren",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/dagengren.png",
        "edition": "custom",
        "name": "打更人",
        "ability": "每个夜晚*，你要猜测今晚首个死亡的玩家与你的距离。如果你猜测正确，则除你以外的所有玩家今晚不会死亡，但你可能会死亡。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 15,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒打更人，让他进行猜测，并放置提示标记到对应玩家旁。",
        "reminders": [
            "警惕",
            "死亡"
        ],
        "setup": false
    },
    "jinyiwei": {
        "id": "jinyiwei",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/jinyiwei.png",
        "edition": "custom",
        "name": "锦衣卫",
        "ability": "每个夜晚*，你要选择一名玩家：如果他在下个黄昏前死亡，你代替他死亡。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 16,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒锦衣卫，让他选择一名玩家。他现在开始保护那名玩家。",
        "reminders": [
            "保护"
        ],
        "setup": false
    },
    "heshang": {
        "id": "heshang",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/heshang.png",
        "edition": "custom",
        "name": "和尚",
        "ability": "每个夜晚，当有邪恶玩家的能力首次选择或影响与你邻近的存活玩家时，改为此次能力不生效并持续至下个黎明，且你会得知你的能力被触发。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [
            "已生效"
        ],
        "setup": false
    },
    "geling": {
        "id": "geling",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/geling.png",
        "edition": "custom",
        "name": "歌伶",
        "ability": "每局游戏限一次，在白天时，你可以提议所有玩家观看你的演出，并从同意参加的玩家中选择你的观众。如果恶魔成为了观众，你会在当晚死亡。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 61,
        "firstNightReminder": "",
        "otherNightReminder": "如果歌伶今天白天使用了自己的能力且恶魔成为了观众，歌伶死亡。",
        "reminders": [
            "失去能力",
            "死亡"
        ],
        "setup": false
    },
    "bianlianshi": {
        "id": "bianlianshi",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/bianlianshi.png",
        "edition": "custom",
        "name": "变脸师",
        "ability": "每个白天，如果你“疯狂”地证明自己是一个善良角色（与之前不同），你可能会在当晚获得那个角色的能力，直到下个黄昏。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [
            "疯狂"
        ],
        "remindersGlobal": [],
        "setup": false
    },
    "banxian": {
        "id": "banxian",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/banxian.png",
        "edition": "custom",
        "name": "半仙",
        "ability": "任何在夜晚使用自身能力选择你的其他玩家，会改为选中另一名邪恶玩家作为替代。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "xizi": {
        "id": "xizi",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/xizi.png",
        "edition": "custom",
        "name": "戏子",
        "ability": "所有戏子互相认识。不论在场的戏子数量多少或存活与否，胜负结果会被对调。[所有善良玩家都是戏子]",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3012,
        "otherNight": 0,
        "firstNightReminder": "唤醒所有戏子并让他们互认。",
        "otherNightReminder": "",
        "reminders": [],
        "setup": true
    },
    "wudaozhe": {
        "id": "wudaozhe",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/wudaozhe.png",
        "edition": "custom",
        "name": "悟道者",
        "ability": "你以为你是一个外来者，但你实际上不是。如果有邪恶玩家的能力选择或影响了你，在该效果生效前你会变成一个不在场的镇民角色。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "remindersGlobal": [
            "是悟道者"
        ],
        "setup": true
    },
    "bingbi": {
        "id": "bingbi",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/bingbi.png",
        "edition": "custom",
        "name": "秉笔",
        "ability": "如果你在白天死亡，当晚你会得知一名善良玩家。如果你在夜晚死亡，当晚你会得知一名邪恶玩家。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 74.1,
        "firstNightReminder": "",
        "otherNightReminder": "在夜晚时，如果秉笔旁放置了“死于今日”提示标记，唤醒秉笔。对他指向一名善良玩家。让秉笔重新入睡。移除“死于今日”提示标记。如果秉笔在夜晚死亡，唤醒秉笔。对他指向一名邪恶玩家。让秉笔重新入睡。",
        "reminders": [
            "死于今日"
        ],
        "remindersGlobal": [],
        "setup": false
    },
    "chongfei": {
        "id": "chongfei",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/chongfei.png",
        "edition": "custom",
        "name": "宠妃",
        "ability": "每局游戏限一次，说书人会在关于你的事情上打破规则。随后，你会秘密得知说书人为此做了什么。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [
            "失去能力"
        ],
        "remindersGlobal": [],
        "setup": false
    },
    "daoke": {
        "id": "daoke",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/daoke.png",
        "edition": "custom",
        "name": "刀客",
        "ability": "在你的首个夜晚，你会得知一个在场的爪牙角色。每局游戏限一次，你可以在白天公开选择一名玩家：如果他是你得知的角色，他死亡。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3053.5,
        "otherNight": 0,
        "firstNightReminder": "在首个夜晚，唤醒刀客，对他展示标记了“得知”的爪牙角色标记。",
        "otherNightReminder": "",
        "reminders": [
            "得知",
            "失去能力"
        ],
        "remindersGlobal": [],
        "setup": false
    },
    "daoshi": {
        "id": "daoshi",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/daoshi.png",
        "edition": "custom",
        "name": "道士",
        "ability": "每个夜晚*，你要选择一名玩家：如果你选中了恶魔，你死亡，然后他醉酒直到下个黎明。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 30.1,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒道士，让其选择一名玩家。如果他选中了恶魔，在道士角色标记旁放置“死亡”提示标记，并且在恶魔角色标记旁放置“醉酒”提示标记。",
        "reminders": [
            "醉酒",
            "死亡"
        ],
        "remindersGlobal": [],
        "setup": false
    },
    "fangshi": {
        "id": "fangshi",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/fangshi.png",
        "edition": "custom",
        "name": "方士",
        "ability": "在你的首个夜晚，你要选择一个数字。在该数字对应的那一个夜晚，你会得知对应数量的在场角色。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3053.6,
        "otherNight": 96.5,
        "firstNightReminder": "唤醒方士，让他选一个数字。如果他选择了1，给他展示一个在场角色。",
        "otherNightReminder": "在游戏的对应天数唤醒方士，给他展示对应数量的在场角色。",
        "reminders": [
            "第一夜",
            "第二夜",
            "第三夜",
            "第四夜",
            "第五夜"
        ],
        "remindersGlobal": [],
        "setup": false
    },
    "fengshuishi": {
        "id": "fengshuishi",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/fengshuishi.png",
        "edition": "custom",
        "name": "风水师",
        "ability": "在你的首个夜晚，你会得知一名玩家的角色类型。每个夜晚*，你会从他的顺时针方向得知下一名非旅行者玩家的角色类型。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3053.7,
        "otherNight": 91.5,
        "firstNightReminder": "唤醒风水师，告知他“得知”标记旁的玩家角色类型，并将标记顺时针移动一名玩家。",
        "otherNightReminder": "唤醒风水师，告知他“得知”标记旁的玩家角色类型，并将标记顺时针移动一名玩家。",
        "reminders": [
            "得知"
        ],
        "remindersGlobal": [],
        "setup": false
    },
    "limao": {
        "id": "limao",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/limao.png",
        "edition": "custom",
        "name": "狸猫",
        "ability": "每个夜晚*，你要选择一名除你及旅行者以外的玩家：如果恶魔在今晚杀死了他，你和他交换角色，然后你醉酒。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 17.5,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒狸猫，让他选择一名玩家，将“太子”标记放在对应玩家角色标记旁。如果当晚恶魔杀死了“太子”，交换狸猫与“太子”的角色，并依次唤醒告知。在新的交换后的角色（原狸猫现太子）旁放置“醉酒”标记。",
        "reminders": [
            "太子",
            "醉酒"
        ],
        "remindersGlobal": [],
        "setup": false
    },
    "qianke": {
        "id": "qianke",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/qianke.png",
        "edition": "custom",
        "name": "掮客",
        "ability": "每个夜晚，你要选择两名存活玩家：如果他们阵营相同，今晚任何玩家使用自身能力选择他们之一作为目标时，改为选中另一名玩家。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3013.5,
        "otherNight": 5.5,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒掮客，让他选择两名存活玩家。如果这两个玩家阵营相同，在他俩的角色标记旁放置“交换目标”提示标记。",
        "reminders": [
            "交换目标"
        ],
        "remindersGlobal": [],
        "setup": false
    },
    "ranfangfangzhu": {
        "id": "ranfangfangsdthw4etq45",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/ranfangfangzhu.png",
        "edition": "custom",
        "name": "染坊坊主",
        "ability": "如果你在夜晚死亡，恶魔的能力变成“每个夜晚*，可能会有一名玩家死亡。”",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 75.5,
        "firstNightReminder": "",
        "otherNightReminder": "如果染坊坊主死于夜晚，唤醒恶魔并告知他能力发生转变。（华白注：此处运行方式存疑，不知道是否需要唤醒，期待山雨规则落实。）",
        "reminders": [
            "改变能力"
        ],
        "remindersGlobal": [],
        "setup": false
    },
    "shiguan": {
        "id": "shiguan",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/shiguan.png",
        "edition": "custom",
        "name": "史官",
        "ability": "每个夜晚*，如果今天白天有玩家死于处决，你会得知存活镇民的数量。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 93.5,
        "firstNightReminder": "",
        "otherNightReminder": "如果今天白天有玩家死于处决，唤醒史官，告知其在场存活镇民数量。",
        "reminders": [
            "死于处决"
        ],
        "remindersGlobal": [],
        "setup": false
    },
    "tixingguan": {
        "id": "tixingguan",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/tixingguan.png",
        "edition": "custom",
        "name": "提刑官",
        "ability": "在你首次提名玩家后，你会在当晚得知他的角色。外来者会被你的能力当作爪牙或恶魔角色。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 83.5,
        "firstNightReminder": "",
        "otherNightReminder": "在提刑官首次提名后的当晚，唤醒提刑官，告知被其提名的玩家的角色。",
        "reminders": [
            "提名"
        ],
        "remindersGlobal": [],
        "setup": false
    },
    "xuncha": {
        "id": "xuncha",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/xuncha.png",
        "edition": "custom",
        "name": "巡察",
        "ability": "每个夜晚*，你要选择除你以外的两个善良角色：如果他们都存活，他们当晚不会死亡。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 30.2,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒巡查，让他选择两个善良角色（镇民或外来者），如果他们都在场并存活（华白注：应该是需要在场的），他们两个今晚不会死亡。",
        "reminders": [
            "不会死亡"
        ],
        "remindersGlobal": [],
        "setup": false
    },
    "yanshi": {
        "id": "yanshi",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/yanshi.png",
        "edition": "custom",
        "name": "偃师",
        "ability": "如果你在夜晚死亡，你与一名存活爪牙玩家交换角色。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 75.4,
        "firstNightReminder": "",
        "otherNightReminder": "如果偃师死于夜晚，将偃师与一名存活爪牙玩家交换角色，然后分别唤醒告知角色发生变化。",
        "reminders": [
            ""
        ],
        "remindersGlobal": [],
        "setup": false
    },
    "yishi": {
        "id": "yishi",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/yishi.png",
        "edition": "custom",
        "name": "驿使",
        "ability": "每个白天，你可以公开声明一个角色。在当晚，你会得知该角色是否在场。如果你因此得知了否，你失去此能力。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 91.6,
        "firstNightReminder": "",
        "otherNightReminder": "如果驿使白天公开声明了一个角色，唤醒驿使：1.如果该角色在场，得知是；2.如果该角色不在场，得知否，并且驿使失去能力。",
        "reminders": [
            "在场",
            "失去能力"
        ],
        "remindersGlobal": [],
        "setup": false
    },
    "yinluren": {
        "id": "yinluren",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/yinluren.png",
        "edition": "custom",
        "name": "引路人",
        "ability": "每个夜晚，你要选择至多三名玩家：你会得知今晚是否有邪恶玩家的能力选择或影响了他们之中的玩家。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 3062.5,
        "otherNight": 98.5,
        "firstNightReminder": "唤醒引路人，让他选择至多三名玩家，告诉引路人今晚是否有邪恶玩家的能力选择或影响了他们之中的玩家。",
        "otherNightReminder": "唤醒引路人，让他选择至多三名玩家，告诉引路人今晚是否有邪恶玩家的能力选择或影响了他们之中的玩家。",
        "reminders": [
            ""
        ],
        "remindersGlobal": [],
        "setup": false
    },
    "yongjiang": {
        "id": "yongjiang",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/yongjiang.png",
        "edition": "custom",
        "name": "俑匠",
        "ability": "如果已死亡玩家中没有邪恶玩家，你只会死于处决。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [
            "只会死于处决"
        ],
        "remindersGlobal": [],
        "setup": false
    },
    "zhen": {
        "id": "zhen",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/zhen.png",
        "edition": "custom",
        "name": "鸩",
        "ability": "每局游戏限一次，在夜晚时*，你可以选择一个镇民角色：如果他在场，他醉酒并死亡。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 60.5,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒鸩，如果鸩使用能力，让鸩选择一个镇民角色：如果这个镇民角色在场，这个镇民角色先醉酒，再死亡。",
        "reminders": [
            "醉酒",
            "死亡"
        ],
        "remindersGlobal": [],
        "setup": false
    },
    "zhifu": {
        "id": "zhifu",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/zhifu.png",
        "edition": "custom",
        "name": "知府",
        "ability": "每个夜晚*，你会得知今天是否有非镇民且非旅行者的玩家死亡。",
        "team": "townsfolk",
        "sch_team": "镇民",
        "firstNight": 0,
        "otherNight": 91.7,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒知府，告诉他今天是否有非镇民且非旅行者的玩家死亡。",
        "reminders": [
            ""
        ],
        "remindersGlobal": [],
        "setup": false
    },
    "butler": {
        "id": "butler",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/butler.png",
        "edition": "custom",
        "name": "管家",
        "ability": "每个夜晚，你要选择除你以外的一名玩家：明天白天，只有他投票时你才能投票。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 3041,
        "otherNight": 82,
        "firstNightReminder": "唤醒管家，让他选择一名除自己以外的玩家，那名玩家成为他的主人。",
        "otherNightReminder": "唤醒管家，让他选择一名除自己以外的玩家，那名玩家成为他的主人。",
        "reminders": [
            "主人"
        ],
        "setup": false
    },
    "drunk": {
        "id": "drunk",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/drunk.png",
        "edition": "custom",
        "name": "酒鬼",
        "ability": "你不知道你是酒鬼。你以为你是一个镇民角色，但其实你不是。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "remindersGlobal": [
            "是酒鬼"
        ],
        "setup": true
    },
    "recluse": {
        "id": "recluse",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/recluse.png",
        "edition": "custom",
        "name": "陌客",
        "ability": "你可能会被当作邪恶阵营、爪牙角色或恶魔角色，即使你已死亡。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "saint": {
        "id": "saint",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/saint.png",
        "edition": "custom",
        "name": "圣徒",
        "ability": "如果你死于处决，你的阵营落败。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "tinker": {
        "id": "tinker",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/tinker.png",
        "edition": "custom",
        "name": "修补匠",
        "ability": "你随时可能死亡。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 0,
        "otherNight": 63,
        "firstNightReminder": "",
        "otherNightReminder": "在夜晚的任意时机，你都可以决定杀死修补匠。这里只是一个提示以免遗忘修补匠。",
        "reminders": [
            "死亡"
        ],
        "setup": false
    },
    "moonchild": {
        "id": "moonchild",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/moonchild.png",
        "edition": "custom",
        "name": "月之子",
        "ability": "当你得知你死亡时，你要公开选择一名存活的玩家。如果他是善良的，在当晚他会死亡。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 0,
        "otherNight": 64,
        "firstNightReminder": "",
        "otherNightReminder": "如果月之子在今天白天的时候使用自己的能力选择了一名善良玩家，那名玩家死亡。",
        "reminders": [
            "死亡"
        ],
        "setup": false
    },
    "goon": {
        "id": "goon",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/goon.png",
        "edition": "custom",
        "name": "莽夫",
        "ability": "每个夜晚，首个使用其自身能力选择了你的玩家会醉酒直到下个黄昏。你会转变为他的阵营。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [
            "醉酒"
        ],
        "setup": false
    },
    "lunatic": {
        "id": "lunatic",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/lunatic.png",
        "edition": "custom",
        "name": "疯子",
        "ability": "你以为你是一个恶魔，但其实你不是。恶魔知道你是疯子以及你在每个夜晚选择了哪些玩家。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 2005.3000000000002,
        "otherNight": 28,
        "firstNightReminder": "唤醒疯子并向他提供恶魔信息。如可能，则让疯子进行相应的恶魔行动。随后在恶魔信息环节对恶魔提供疯子的相关信息。",
        "otherNightReminder": "如果疯子以为的恶魔会在当晚行动，唤醒疯子，并让他以恶魔的方式行动。",
        "reminders": [
            "被选择"
        ],
        "remindersGlobal": [
            "是疯子"
        ],
        "setup": true
    },
    "mutant": {
        "id": "mutant",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/mutant.png",
        "edition": "custom",
        "name": "畸形秀演员",
        "ability": "如果你“疯狂”地证明自己是外来者，你可能被处决。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "sweetheart": {
        "id": "sweetheart",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/sweetheart.png",
        "edition": "custom",
        "name": "心上人",
        "ability": "当你死亡时，会有一名玩家开始醉酒。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 0,
        "otherNight": 68,
        "firstNightReminder": "",
        "otherNightReminder": "如果心上人死亡，一名玩家醉酒。",
        "reminders": [
            "醉酒"
        ],
        "setup": false
    },
    "barber": {
        "id": "barber",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/barber.png",
        "edition": "custom",
        "name": "理发师",
        "ability": "如果你死亡，在当晚恶魔可以选择两名玩家（不能选择其他恶魔）交换角色。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 0,
        "otherNight": 67,
        "firstNightReminder": "",
        "otherNightReminder": "如果理发师死于白天，唤醒恶魔让他决定是否使用理发师的能力。如果理发师死于夜晚，（如果让除攻击理发师以外的恶魔进行选择则需要等当前恶魔入睡后）让一名恶魔决定是否使用理发师的能力。",
        "reminders": [
            "今晚理发"
        ],
        "setup": false
    },
    "klutz": {
        "id": "klutz",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/klutz.png",
        "edition": "custom",
        "name": "呆瓜",
        "ability": "当你得知你死亡时，你要公开选择一名存活的玩家：如果他是邪恶的，你的阵营落败。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "snitch": {
        "id": "snitch",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/snitch.png",
        "edition": "custom",
        "name": "告密者",
        "ability": "爪牙会在其首个夜晚得知三个不在场的善良角色。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 2005,
        "otherNight": 0,
        "firstNightReminder": "如果告密者在场，对爪牙展示三个不在场的善良角色标记。",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "acrobat": {
        "id": "acrobat",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/acrobat.png",
        "edition": "custom",
        "name": "杂技演员",
        "ability": "每个夜晚*，如果与你邻近的存活善良玩家之一醉酒或中毒，你死亡。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 0,
        "otherNight": 60,
        "firstNightReminder": "",
        "otherNightReminder": "在夜晚的任意时机如果与杂技演员邻近的存活善良玩家醉酒中毒，杂技演员死亡。",
        "reminders": [
            "死亡"
        ],
        "setup": false
    },
    "puzzlemaster": {
        "id": "puzzlemaster",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/puzzlemaster.png",
        "edition": "custom",
        "name": "解谜大师",
        "ability": "一名玩家醉酒，即使你已死亡。每局游戏限一次，你可以猜测谁是那个醉酒的玩家，如果猜对了，你会得知谁是恶魔，但如果猜错了，你会得知错误的“谁是恶魔”信息。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [
            "醉酒",
            "已猜测"
        ],
        "setup": false
    },
    "heretic": {
        "id": "heretic",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/heretic.png",
        "edition": "custom",
        "name": "异端分子",
        "ability": "对调胜负结果，即使你已死亡。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "damsel": {
        "id": "damsel",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/damsel.png",
        "edition": "custom",
        "name": "落难少女",
        "ability": "所有爪牙都知道落难少女在场。每局游戏限一次，任意爪牙可以公开猜测你是落难少女，如果猜对，你的阵营落败。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 2005.1,
        "otherNight": 0,
        "firstNightReminder": "如果落难少女在场，对爪牙展示落难少女角色标记。",
        "otherNightReminder": "0",
        "reminders": [
            "已被猜测"
        ],
        "setup": false
    },
    "golem": {
        "id": "golem",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/golem.png",
        "edition": "custom",
        "name": "魔像",
        "ability": "每局游戏你只能发起提名一次。当你发起提名时，如果被你提名的玩家不是恶魔，他死亡。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [
            "无法提名"
        ],
        "setup": false
    },
    "politician": {
        "id": "politician",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/politician.png",
        "edition": "custom",
        "name": "政客",
        "ability": "如果你是对你的阵营落败负最大责任的人，你转变阵营并获胜，即使你已死亡。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "plague_doctor": {
        "id": "plague_doctor",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/plague_doctor.png",
        "edition": "custom",
        "name": "瘟疫医生",
        "ability": "如果你死亡，说书人会获得一个爪牙能力。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 0,
        "otherNight": 72,
        "firstNightReminder": "",
        "otherNightReminder": "如果瘟疫医生死亡，说书人获得一项爪牙能力。",
        "reminders": [
            "说书人能力"
        ],
        "setup": false
    },
    "hatter": {
        "id": "hatter",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/hatter.png",
        "edition": "custom",
        "name": "帽匠",
        "ability": "如果你死亡，当晚爪牙和恶魔玩家可以选择变成新的爪牙和恶魔角色。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 0,
        "otherNight": 3,
        "firstNightReminder": "",
        "otherNightReminder": "如果帽匠死于白天，（建议分别）唤醒恶魔和爪牙并让他们选择是否改变角色。如果帽匠死于夜晚，则在当前玩家行动结束后立即开始茶会。",
        "reminders": [
            "今晚茶会"
        ],
        "setup": false
    },
    "ogre": {
        "id": "ogre",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/ogre.png",
        "edition": "custom",
        "name": "食人魔",
        "ability": "在你的首个夜晚，你要选择除你以外的一名玩家：你转变为他的阵营，即使你已醉酒或中毒，但你不知道你转变后的阵营。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 3059,
        "otherNight": 0,
        "firstNightReminder": "唤醒食人魔，让他选择一名玩家。如果他选择了邪恶玩家，将他的角色标记在魔典中倒置以表示他转变为邪恶阵营。",
        "otherNightReminder": "",
        "reminders": [
            "挚友"
        ],
        "setup": false
    },
    "zealot": {
        "id": "zealot",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/zealot.png",
        "edition": "custom",
        "name": "狂热者",
        "ability": "如果有大于等于五名玩家存活，你必须在所有提名中投票。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "shaxing": {
        "id": "shaxing",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/shaxing.png",
        "edition": "custom",
        "name": "煞星",
        "ability": "如果你死亡，当晚与你邻近的存活玩家之一可能会死亡。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 0,
        "otherNight": 65,
        "firstNightReminder": "",
        "otherNightReminder": "如果煞星死亡，决定是否让一名与他邻近的存活玩家死亡。",
        "reminders": [
            "死亡"
        ],
        "setup": false
    },
    "nichen": {
        "id": "nichen",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/nichen.png",
        "edition": "custom",
        "name": "逆臣",
        "ability": "在你的首个夜晚，你要选择除你以外的一名玩家：如果他先死于处决，你会在当晚转变为邪恶；如果你先死于处决，他会在当晚转变为邪恶。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 3042,
        "otherNight": 25,
        "firstNightReminder": "唤醒逆臣，让他选择一名除自己以外的玩家，那名玩家现在与他不共戴天。",
        "otherNightReminder": "如果逆臣或他的目标玩家，这两人之一死于处决，唤醒另一名玩家并通知他阵营变化。",
        "reminders": [
            "不共戴天"
        ],
        "setup": false
    },
    "shusheng": {
        "id": "shusheng",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/shusheng.png",
        "edition": "custom",
        "name": "书生",
        "ability": "恶魔知道你在场。每局游戏限一次，恶魔可以拜访说书人并猜测谁是书生。如果恶魔猜测正确，即使你已死亡，当晚该恶魔可以选择一名玩家：他死亡。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 3011,
        "otherNight": 51,
        "firstNightReminder": "如果书生在场，对恶魔展示书生角色标记。",
        "otherNightReminder": "如果恶魔猜中了书生，让恶魔选择一名玩家，该玩家死亡。",
        "reminders": [
            "已猜测",
            "死亡"
        ],
        "setup": false
    },
    "shijie": {
        "id": "shijie",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/shijie.png",
        "edition": "custom",
        "name": "使节",
        "ability": "每个夜晚限一次，一名玩家在使用自身能力选择邪恶玩家时会改为选中你，即使你已死亡。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [
            "已触发"
        ],
        "setup": false
    },
    "jiubao": {
        "id": "jiubao",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/jiubao.png",
        "edition": "custom",
        "name": "酒保",
        "ability": "与你邻近的善良玩家之一醉酒，即使你已死亡。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [
            "醉酒"
        ],
        "remindersGlobal": [],
        "setup": false
    },
    "rulianshi": {
        "id": "rulianshi",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/rulianshi.png",
        "edition": "custom",
        "name": "入殓师",
        "ability": "如果你提名了恶魔且他死于这次处决，你会变成邪恶的恶魔。当剩余存活玩家小于等于四人时（旅行者除外），你失去能力。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 0,
        "otherNight": 27.5,
        "firstNightReminder": "",
        "otherNightReminder": "如果入殓师白天提名了恶魔且恶魔死于这次处决，唤醒入殓师，告知他变成新的邪恶的恶魔。",
        "reminders": [
            "入殓"
        ],
        "remindersGlobal": [],
        "setup": false
    },
    "shutong": {
        "id": "shutong",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/shutong.png",
        "edition": "custom",
        "name": "书童",
        "ability": "在你的首个夜晚，你要选择除你以外的一名玩家：除首个夜晚以外，当他被邪恶玩家的能力选择或影响时，你会在当晚死亡。",
        "team": "outsider",
        "sch_team": "外来者",
        "firstNight": 3034.5,
        "otherNight": 60.5,
        "firstNightReminder": "唤醒书童，让他选择一名玩家。",
        "otherNightReminder": "如果被书童选择的玩家被邪恶玩家的能力选择或影响时，书童会在当晚死亡。",
        "reminders": [
            "选择",
            "死亡"
        ],
        "remindersGlobal": [],
        "setup": false
    },
    "poisoner": {
        "id": "poisoner",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/poisoner.png",
        "edition": "custom",
        "name": "投毒者",
        "ability": "每个夜晚，你要选择一名玩家：他在当晚和明天白天中毒。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 3018,
        "otherNight": 9,
        "firstNightReminder": "唤醒投毒者，让他选择一名玩家，那名玩家中毒。",
        "otherNightReminder": "唤醒投毒者，让他选择一名玩家，那名玩家中毒。",
        "reminders": [
            "中毒"
        ],
        "setup": false
    },
    "spy": {
        "id": "spy",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/spy.png",
        "edition": "custom",
        "name": "间谍",
        "ability": "每个夜晚，你能查看魔典。你可能会被当作善良阵营、镇民角色或外来者角色，即使你已死亡。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 3058,
        "otherNight": 97,
        "firstNightReminder": "唤醒间谍，让他查看魔典。",
        "otherNightReminder": "唤醒间谍，让他查看魔典。",
        "reminders": [],
        "setup": false
    },
    "scarlet_woman": {
        "id": "scarlet_woman",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/scarlet_woman.png",
        "edition": "custom",
        "name": "红唇女郎",
        "ability": "如果大于等于五名玩家存活时（旅行者不计算在内）恶魔死亡，你变成那个恶魔。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 0,
        "otherNight": 26,
        "otherNightReminder": "如果红唇女郎的能力曾被触发，唤醒她并告知她变成了哪个恶魔角色。",
        "reminders": [
            "是恶魔"
        ]
    },
    "baron": {
        "id": "baron",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/baron.png",
        "edition": "custom",
        "name": "男爵",
        "ability": "会有额外的外来者在场。[+2 外来者]",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": true
    },
    "godfather": {
        "id": "godfather",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/godfather.png",
        "edition": "custom",
        "name": "教父",
        "ability": "在你的首个夜晚，你会得知有哪些外来者角色在场。如果有外来者在白天死亡，你会在当晚被唤醒并且你要选择一名玩家：他死亡。[-1或+1外来者]",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 3021,
        "otherNight": 53,
        "firstNightReminder": "唤醒教父，对他展示外来者角色标记，告诉他有哪些外来者在场。",
        "otherNightReminder": "如果今天白天有外来者死亡，唤醒教父，让他攻击一名玩家。",
        "reminders": [
            "死于今日",
            "死亡"
        ],
        "setup": true
    },
    "devils_advocate": {
        "id": "devils_advocate",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/devils_advocate.png",
        "edition": "custom",
        "name": "魔鬼代言人",
        "ability": "每个夜晚，你要选择一名存活的玩家（与上个夜晚不同）：如果明天白天他被处决，他不会死亡。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 3022,
        "otherNight": 18,
        "firstNightReminder": "唤醒魔鬼代言人，让他选择一名玩家，那名玩家处决不死。",
        "otherNightReminder": "唤醒魔鬼代言人，让他选择一名与上一晚不同的玩家，那名玩家处决不死。",
        "reminders": [
            "处决不死"
        ],
        "setup": false
    },
    "assassin": {
        "id": "assassin",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/assassin.png",
        "edition": "custom",
        "name": "刺客",
        "ability": "每局游戏限一次，在夜晚时*，你可以选择一名玩家：他死亡，即使因为任何原因让他不会死亡。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 0,
        "otherNight": 52,
        "firstNightReminder": "",
        "otherNightReminder": "如果刺客未曾使用能力，唤醒刺客，他可以摇头不使用能力，或选择攻击一名玩家。",
        "reminders": [
            "死亡",
            "失去能力"
        ],
        "setup": false
    },
    "mastermind": {
        "id": "mastermind",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/mastermind.png",
        "edition": "custom",
        "name": "主谋",
        "ability": "如果恶魔因为死于处决而因此导致游戏结束时，再额外进行一个夜晚和一个白天。在那个白天如果有玩家被处决，他的阵营落败。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "evil_twin": {
        "id": "evil_twin",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/evil_twin.png",
        "edition": "custom",
        "name": "镜像双子",
        "ability": "你与一名对立阵营的玩家互相知道对方是什么角色。如果其中善良玩家被处决，邪恶阵营获胜。如果你们都存活，善良阵营无法获胜。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 3023,
        "otherNight": 0,
        "firstNightReminder": "分别独自唤醒镜像双子和对立双子，告知他们由于镜像双子能力而得知的信息。",
        "otherNightReminder": "",
        "reminders": [
            "对立双子"
        ],
        "setup": false
    },
    "witch": {
        "id": "witch",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/witch.png",
        "edition": "custom",
        "name": "女巫",
        "ability": "每个夜晚，你要选择一名玩家：如果他明天白天发起提名，他死亡。如果只有三名存活的玩家，你失去此能力。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 3024,
        "otherNight": 19,
        "firstNightReminder": "唤醒女巫，让她选择一名玩家，那名玩家被诅咒。",
        "otherNightReminder": "唤醒女巫，让她选择一名玩家，那名玩家被诅咒。",
        "reminders": [
            "被诅咒"
        ],
        "setup": false
    },
    "cerenovus": {
        "id": "cerenovus",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/cerenovus.png",
        "edition": "custom",
        "name": "洗脑师",
        "ability": "每个夜晚，你要选择一名玩家和一个善良角色。他明天白天和夜晚需要“疯狂”地证明自己是这个角色，不然他可能被处决。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 3025,
        "otherNight": 20,
        "firstNightReminder": "唤醒洗脑师，让他选择一名玩家和角色列表上的一个善良角色，那名玩家明天需要“疯狂”证明自己是那个角色。在洗脑师入睡后通知那名玩家被洗脑。",
        "otherNightReminder": "唤醒洗脑师，让他选择一名玩家和角色列表上的一个善良角色，那名玩家明天需要“疯狂”证明自己是那个角色。在洗脑师入睡后通知那名玩家被洗脑。",
        "reminders": [
            "疯狂"
        ],
        "setup": false
    },
    "pit-hag": {
        "id": "pit-hag",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/pit-hag.png",
        "edition": "custom",
        "name": "麻脸巫婆",
        "ability": "每个夜晚*，你要选择一名玩家和一个角色，如果该角色不在场，他变成该角色。如果因此创造了一个恶魔，当晚的死亡由说书人决定。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 0,
        "otherNight": 8,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒麻脸巫婆，让她选择一名玩家和角色列表上的一个角色。如果该角色不在场，则在麻脸巫婆入睡后通知该玩家角色变化。根据实际情况，可以将相关通知合并，例如玩家变成了恶魔，则在恶魔行动时一并唤醒，通知角色变化并让他执行相应行动。",
        "reminders": [],
        "setup": false
    },
    "widow": {
        "id": "widow",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/widow.png",
        "edition": "custom",
        "name": "寡妇",
        "ability": "在你的首个夜晚，你能查看魔典并选择一名玩家：他中毒。随后，始终会有一名善良玩家知道寡妇在场。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 3019,
        "otherNight": 0,
        "firstNightReminder": "唤醒寡妇，让她查看魔典。在她查看完毕后让她选择一名玩家，那名玩家中毒。随后如果寡妇未醉酒中毒，唤醒一名善良玩家，对他展示寡妇角色标记。",
        "reminders": [
            "中毒"
        ],
        "remindersGlobal": [
            "被知晓"
        ]
    },
    "fearmonger": {
        "id": "fearmonger",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/fearmonger.png",
        "edition": "custom",
        "name": "恐惧之灵",
        "ability": "每个夜晚，你要选择一名玩家：如果你提名他且他被处决，他的阵营落败。当你首次选择或更换目标时，所有玩家都会得知你选择了新的玩家。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 3026,
        "otherNight": 21,
        "firstNightReminder": "唤醒恐惧之灵，让他选择一名玩家，随后通知所有玩家恐惧之灵选择了一名玩家。",
        "otherNightReminder": "唤醒恐惧之灵，让他选择一名玩家，随后如果恐惧之灵的目标发生了变更，通知所有玩家恐惧之灵选择了一名玩家。",
        "reminders": [
            "恐惧"
        ],
        "setup": false
    },
    "psychopath": {
        "id": "psychopath",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/psychopath.png",
        "edition": "custom",
        "name": "精神病患者",
        "ability": "每个白天，在提名开始前，你可以公开选择一名玩家：他死亡。如果你被处决，提名你的玩家需要和你猜拳，只有你输了你才会死亡。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "goblin": {
        "id": "goblin",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/goblin.png",
        "edition": "custom",
        "name": "哥布林",
        "ability": "如果你在被提名后公开声明自己是哥布林且在那个白天被处决，你的阵营获胜。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [
            "已宣称"
        ],
        "setup": false
    },
    "mezepheles": {
        "id": "mezepheles",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/mezepheles.png",
        "edition": "custom",
        "name": "灵言师",
        "ability": "在你的首个夜晚，你会得知一个关键词。首个说出该关键词的善良玩家会在当晚转变为邪恶阵营。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 3028,
        "otherNight": 23,
        "firstNightReminder": "唤醒灵言师，对他展示他的关键词。",
        "otherNightReminder": "如果首次有善良玩家说出了灵言师的关键词，唤醒该玩家并通知他阵营变化。",
        "reminders": [
            "转为邪恶",
            "失去能力"
        ]
    },
    "marionette": {
        "id": "marionette",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/marionette.png",
        "edition": "custom",
        "name": "提线木偶",
        "ability": "你以为你是一个善良角色，但其实你不是。恶魔会知道你是提线木偶。[提线木偶会与恶魔邻座]",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 3010,
        "otherNight": 0,
        "firstNightReminder": "如果提线木偶在场，对恶魔展示提线木偶角色标记并指向提线木偶玩家。",
        "remindersGlobal": [
            "是提线木偶"
        ],
        "setup": true
    },
    "boomdandy": {
        "id": "boomdandy",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/boomdandy.png",
        "edition": "custom",
        "name": "炸弹人",
        "ability": "如果你被处决，除三名玩家以外的其他所有玩家均会死亡。倒数十声后，被最多玩家手指指着的玩家死亡。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "organ_grinder": {
        "id": "organ_grinder",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/organ_grinder.png",
        "edition": "custom",
        "name": "街头风琴手",
        "ability": "所有玩家在投票时闭眼，且票数会秘密统计。每个夜晚，你要选择自己是否醉酒，直到下个黄昏。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 0,
        "otherNight": 0,
        "reminders": [
            "即将被处决"
        ]
    },
    "vizier": {
        "id": "vizier",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/vizier.png",
        "edition": "custom",
        "name": "维齐尔",
        "ability": "所有玩家都知道你是维齐尔。你在白天时不会死亡。如果一次提名中有善良玩家投票，你可以让被提名者立即被处决。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 3075,
        "otherNight": 0,
        "firstNightReminder": "如果维齐尔在场，告知所有人谁是维齐尔。"
    },
    "harpy": {
        "id": "harpy",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/harpy.png",
        "edition": "custom",
        "name": "鹰身女妖",
        "ability": "每个夜晚，你要选择两名玩家：明天第一名玩家需要“疯狂”地证明第二名玩家是邪恶的，否则他们之中可能会有人死亡。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 3027,
        "otherNight": 22,
        "firstNightReminder": "唤醒鹰身女妖，让她选择两名玩家，第一名玩家明天需要“疯狂”证明第二名玩家邪恶。在鹰身女妖入睡后通知第一名玩家被鹰身女妖选中。",
        "otherNightReminder": "唤醒鹰身女妖，让她选择两名玩家，第一名玩家明天需要“疯狂”证明第二名玩家邪恶。在鹰身女妖入睡后通知第一名玩家被鹰身女妖选中。",
        "reminders": [
            "疯狂",
            "第二名"
        ],
        "setup": false
    },
    "summoner": {
        "id": "summoner",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/summoner.png",
        "edition": "custom",
        "name": "召唤师",
        "ability": "在首个夜晚，你会得知三个伪装。在第三个夜晚，你要选择一名玩家：他变成由你选择的邪恶恶魔。[无恶魔在场]",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 2005.1999999999998,
        "otherNight": 27,
        "firstNightReminder": "唤醒召唤师，对他展示三个不在场的善良角色标记。",
        "otherNightReminder": "如果这是游戏中的第三个夜晚，唤醒召唤师，让他选择一名玩家和一个恶魔角色，那名玩家变成由他选择的邪恶恶魔。",
        "reminders": [
            "第一晚",
            "第二晚",
            "第三晚"
        ],
        "setup": true
    },
    "boffin": {
        "id": "boffin",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/boffin.png",
        "edition": "custom",
        "name": "科学怪人",
        "ability": "恶魔拥有一个不在场的善良角色的能力，即使他醉酒或中毒。你和他都知道他获得了什么能力。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 1.45,
        "otherNight": 0,
        "firstNightReminder": "（分别或同时）唤醒科学怪人和恶魔，通知他们恶魔因为科学怪人而获得的善良角色的能力。",
        "otherNightReminder": "",
        "reminders": [],
        "setup": true
    },
    "xaan": {
        "id": "poisoner",
        "image": "https://clocktower-wiki.gstonegames.com/images/thumb/b/b9/Xaan.png/300px-Xaan.png",
        "edition": "custom",
        "name": "限",
        "ability": "在等同初始外来者数量的夜晚，所有镇民玩家中毒直到下个黄昏。[任意数量外来者]",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 3017.5,
        "otherNight": 8.5,
        "setup": true
    },
    "humeiniang": {
        "id": "humeiniang",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/humeiniang.png",
        "edition": "custom",
        "name": "狐媚娘",
        "ability": "在你的首个夜晚，你要选择一名玩家：他会知道狐媚娘在场。如果你死于处决，当晚他转变为邪恶阵营。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 3029,
        "otherNight": 24,
        "firstNightReminder": "唤醒狐媚娘，让她选择一名玩家。在狐媚娘入睡后通知那名玩家狐媚娘在场。",
        "otherNightReminder": "如果狐媚娘死于处决，唤醒她选择的玩家并通知他阵营变化。",
        "reminders": [
            "被魅惑"
        ]
    },
    "yangguren": {
        "id": "yangguren",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/yangguren.png",
        "edition": "custom",
        "name": "养蛊人",
        "ability": "在你存活时提名你的玩家会在当晚死亡，即使你已死亡。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 0,
        "otherNight": 54,
        "otherNightReminder": "今天白天提名了存活的养蛊人的玩家死亡。",
        "reminders": [
            "蛊"
        ]
    },
    "jinweijun": {
        "id": "jinweijun",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/jinweijun.png",
        "edition": "custom",
        "name": "禁卫军",
        "ability": "“疯狂”地想要死亡的玩家可能会立即被处决。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "reminders": []
    },
    "jinweijun2": {
        "id": "jinweijun",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/jinweijun.png",
        "edition": "custom",
        "name": "禁卫军",
        "ability": "在你的首个夜晚，你要选择存活或死亡。“疯狂”地想要这样做的玩家可能会立即被处决。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 3023.5,
        "otherNight": 0,
        "firstNightReminder": "",
        "reminders": []
    },
    "ganshiren": {
        "id": "ganshiren",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/ganshiren.png",
        "edition": "custom",
        "name": "赶尸人",
        "ability": "与你邻近的两名镇民玩家会在其首次死亡时被当作仍然存活。[-1外来者]",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 0,
        "otherNight": 0,
        "reminders": [
            "活尸"
        ],
        "setup": true
    },
    "gudiao": {
        "id": "gudiao",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/gudiao.png",
        "edition": "custom",
        "name": "蛊雕",
        "ability": "每个夜晚，你要选择左或右：你得知该方向上的下一名存活善良玩家的角色，他中毒且其他善良玩家以为他是邪恶的蛊雕，直到下个黄昏。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 3019.5,
        "otherNight": 9.5,
        "firstNightReminder": "唤醒蛊雕，让他选择左或者右，他得知该方向上的下一名存活善良玩家的角色，这个善良玩家中毒且其他善良玩家以为他是邪恶的蛊雕，直到下个黄昏。",
        "otherNightReminder": "唤醒蛊雕，让他选择左或者右，他得知该方向上的下一名存活善良玩家的角色，这个善良玩家中毒且其他善良玩家以为他是邪恶的蛊雕，直到下个黄昏。",
        "reminders": [
            "中毒"
        ],
        "setup": false
    },
    "huapi": {
        "id": "huapi",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/huapi.png",
        "edition": "custom",
        "name": "画皮",
        "ability": "在你的首个夜晚，你要选择一名存活玩家：他死亡但会被当作存活。当他下一次死亡时，他重生，随后你重获能力。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 3017.3,
        "otherNight": 54.5,
        "firstNightReminder": "唤醒画皮，让画皮选择一名存活玩家，那名存活玩家变成活尸。",
        "otherNightReminder": "如果首夜被画皮变成活尸的玩家死亡，他重生，然后画皮重获能力。唤醒画皮，让画皮选择一名存活玩家，那名存活玩家变成活尸。",
        "reminders": [
            "活尸",
            "失去能力"
        ],
        "setup": false
    },
    "mengpo": {
        "id": "mengpo",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/mengpo.png",
        "edition": "custom",
        "name": "孟婆",
        "ability": "每个夜晚*，你要选择一名玩家：如果他存活，那么他要选择让自己失去能力，或死亡并保留能力直到下个黄昏。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 0,
        "otherNight": 54.6,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒孟婆，让孟婆选择一名玩家。让被孟婆选择的玩家做出生或死的选择。",
        "reminders": [
            "存活并失去能力",
            "死亡并保留能力"
        ],
        "setup": false
    },
    "niangjiushi": {
        "id": "niangjiushi",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/niangjiushi.png",
        "edition": "custom",
        "name": "酿酒师",
        "ability": "每个夜晚，你要选择一个镇民角色：当他下一次通过自身能力获取信息时，改为得知你给出的信息。",
        "team": "minion",
        "sch_team": "爪牙",
        "firstNight": 3019.6,
        "otherNight": 9.6,
        "firstNightReminder": "唤醒酿酒师，让其选择一个镇民角色并给出一个符合该角色信息格式的信息，当他下一次通过自身能力获取信息时，改为得知酿酒师给出的信息。",
        "otherNightReminder": "唤醒酿酒师，让其选择一个镇民角色并给出一个符合该角色信息格式的信息，当他下一次通过自身能力获取信息时，改为得知酿酒师给出的信息。",
        "reminders": [
            "微醺"
        ],
        "setup": false
    },
    "imp": {
        "id": "imp",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/imp.png",
        "edition": "custom",
        "name": "小恶魔",
        "ability": "每个夜晚*，你要选择一名玩家：他死亡。如果你以这种方式自杀，一名爪牙会变成小恶魔。",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 0,
        "otherNight": 31,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒小恶魔，让他攻击一名玩家。如果他成功自杀，则在他入睡后通知一名爪牙角色变化。",
        "reminders": [
            "死亡"
        ],
        "setup": false
    },
    "zombuul": {
        "id": "zombuul",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/zombuul.png",
        "edition": "custom",
        "name": "僵怖",
        "ability": "每个夜晚*，如果今天白天没有人死亡，你会被唤醒并要选择一名玩家：他死亡。当你首次死亡后，你仍存活，但会被当作死亡。",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 0,
        "otherNight": 32,
        "firstNightReminder": "",
        "otherNightReminder": "如果白天无人死亡，唤醒僵怖，让他攻击一名玩家。",
        "reminders": [
            "死于今日",
            "死亡"
        ],
        "setup": false
    },
    "pukka": {
        "id": "pukka",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/pukka.png",
        "edition": "custom",
        "name": "普卡",
        "ability": "每个夜晚，你要选择一名玩家：他中毒。<br>上个因你的能力中毒的玩家会死亡并恢复健康。",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 3030,
        "otherNight": 33,
        "firstNightReminder": "唤醒普卡，让他选择一名玩家，那名玩家中毒。",
        "otherNightReminder": "唤醒普卡，让他选择一名玩家，该玩家中毒。上一个被普卡中毒的玩家死亡。",
        "reminders": [
            "中毒",
            "死亡"
        ],
        "setup": false
    },
    "shabaloth": {
        "id": "shabaloth",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/shabaloth.png",
        "edition": "custom",
        "name": "沙巴洛斯",
        "ability": "每个夜晚*，你要选择两名玩家：他们死亡。<br>你上个夜晚选择过且当前死亡的玩家之一可能会被你反刍。",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 0,
        "otherNight": 34,
        "firstNightReminder": "",
        "otherNightReminder": "决定上一夜被沙巴洛斯选择的玩家是否被反刍。然后唤醒沙巴洛斯，让他攻击两名玩家。",
        "reminders": [
            "死亡",
            "复活"
        ],
        "setup": false
    },
    "po": {
        "id": "po",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/po.png",
        "edition": "custom",
        "name": "珀",
        "ability": "每个夜晚*，你可以选择一名玩家：他死亡。如果你上次选择时没有选择任何玩家，当晚你要选择三名玩家：他们死亡。",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 0,
        "otherNight": 35,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒珀，他可以攻击一名玩家或不进行攻击，如果他上一次选择了不进行攻击，则此次必须攻击三名玩家。",
        "reminders": [
            "攻击三次",
            "死亡"
        ],
        "setup": false
    },
    "fang_gu": {
        "id": "fang_gu",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/fang_gu.png",
        "edition": "custom",
        "name": "方古",
        "ability": "每个夜晚*，你要选择一名玩家：他死亡。被该能力杀死的外来者变成邪恶的方古且你代替他死亡，但每局游戏仅能成功转化一次。[+1外来者]",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 0,
        "otherNight": 36,
        "otherNightReminder": "唤醒方古，让他攻击一名玩家。如果该玩家是外来者并成功转化，则方古死亡，在他入睡后通知那名外来者角色变化。",
        "reminders": [
            "死亡",
            "限一次"
        ],
        "setup": true
    },
    "vigormortis": {
        "id": "vigormortis",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/vigormortis.png",
        "edition": "custom",
        "name": "亡骨魔",
        "ability": "每个夜晚*，你要选择一名玩家：他死亡。被你杀死的爪牙保留他的能力，且与他邻近的两名镇民之一中毒。[-1外来者]",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 0,
        "otherNight": 40,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒亡骨魔，让他攻击一名玩家。",
        "reminders": [
            "死亡",
            "保留能力",
            "中毒"
        ],
        "setup": true
    },
    "no_dashii": {
        "id": "no_dashii",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/no_dashii.png",
        "edition": "custom",
        "name": "诺-达鲺",
        "ability": "每个夜晚*，你要选择一名玩家：他死亡。<br>与你邻近的两名镇民中毒。",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 0,
        "otherNight": 37,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒诺-达鲺，让他攻击一名玩家。",
        "reminders": [
            "死亡",
            "中毒"
        ],
        "setup": false
    },
    "vortox": {
        "id": "vortox",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/vortox.png",
        "edition": "custom",
        "name": "涡流",
        "ability": "每个夜晚*，你要选择一名玩家：他死亡。<br>镇民玩家的能力都会产生错误信息。<br>如果白天没人被处决，邪恶阵营获胜。",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 0,
        "otherNight": 38,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒涡流，让他攻击一名玩家。",
        "reminders": [
            "死亡"
        ],
        "setup": false
    },
    "lil_monsta": {
        "id": "lil_monsta",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/lil_monsta.png",
        "edition": "custom",
        "name": "小怪宝",
        "ability": "每个夜晚，所有爪牙要秘密决定由哪名玩家来照看小怪宝并且“是恶魔”。每个夜晚*，可能会有一名玩家死亡。[+1爪牙]",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 3016,
        "otherNight": 44,
        "firstNightReminder": "唤醒所有爪牙选择由谁照看小怪宝。",
        "otherNightReminder": "唤醒所有爪牙选择由谁照看小怪宝。随后，决定今晚谁会因为小怪宝能力死亡。",
        "reminders": [],
        "remindersGlobal": [
            "是恶魔",
            "死亡"
        ],
        "setup": true
    },
    "lleech": {
        "id": "lleech",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/lleech.png",
        "edition": "custom",
        "name": "痢蛭",
        "ability": "每个夜晚*，你要选择一名玩家：他死亡。在你的首个夜晚，你要选择一名存活的玩家：他中毒，只有当他处于死亡状态时你才会立即死亡。",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 3017,
        "otherNight": 43,
        "firstNightReminder": "唤醒痢蛭，让他选择一名玩家以寄生。",
        "otherNightReminder": "唤醒痢蛭，让他攻击一名玩家。",
        "reminders": [
            "中毒",
            "死亡"
        ],
        "setup": false
    },
    "al-hadikhia": {
        "id": "al-hadikhia",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/al-hadikhia.png",
        "edition": "custom",
        "name": "哈迪寂亚",
        "ability": "每个夜晚*，你要选择三名玩家（所有玩家会得知你选了谁）：他们分别秘密决定自己的生死，然后如果他们都存活则都死亡。",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 0,
        "otherNight": 42,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒哈迪寂亚，让他选择三名玩家。执行哈迪寂亚的能力流程（参考哈迪寂亚的百科页面）。",
        "reminders": [
            "1",
            "2",
            "3",
            "选择生",
            "选择死"
        ],
        "setup": false
    },
    "legion": {
        "id": "legion",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/legion.png",
        "edition": "custom",
        "name": "军团",
        "ability": "每个夜晚*，可能有一名玩家死亡。如果一项提名只有邪恶玩家投票，投票无效。你也会被当作是爪牙。[半数以上玩家为军团]",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 0,
        "otherNight": 39,
        "firstNightReminder": "",
        "otherNightReminder": "决定今晚谁会因为军团能力死亡。",
        "reminders": [
            "即将被处决",
            "死亡"
        ],
        "setup": true
    },
    "leviathan": {
        "id": "leviathan",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/leviathan.png",
        "edition": "custom",
        "name": "利维坦",
        "ability": "如果多于一名善良玩家被处决，邪恶阵营获胜。<br>所有玩家都知道利维坦在场。<br>在第五个白天结束时，邪恶阵营获胜。",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 3070,
        "otherNight": 120,
        "firstNightReminder": "如果利维坦在场，告知所有人利维坦在场，现在是第一个白天。",
        "otherNightReminder": "如果利维坦在场，告知所有人利维坦在场，现在是第几个白天。（如果玩家一致同意，则无需在已经知晓利维坦在场的前提下在其他夜晚执行此项操作。）",
        "reminders": [
            "第一天",
            "第二天",
            "第三天",
            "第四天",
            "第五天",
            "善良被处决"
        ],
        "setup": false
    },
    "riot": {
        "id": "riot",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/riot.png",
        "edition": "custom",
        "name": "暴乱",
        "ability": "在第三个白天，所有爪牙会变成暴乱，当天被提名的玩家会立即死亡且必须再次提名一名存活的玩家。",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 0,
        "otherNight": 0,
        "firstNightReminder": "",
        "otherNightReminder": "",
        "reminders": [],
        "setup": false
    },
    "ojo": {
        "id": "ojo",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/ojo.png",
        "edition": "custom",
        "name": "奥赫",
        "ability": "每个夜晚*，你要选择一个角色：他死亡。如果该角色不在场，则由说书人来决定谁会被你杀死。",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 0,
        "otherNight": 41,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒奥赫，让他选择角色列表上的一个角色。该角色对应的玩家死亡，如果该角色不在场，替奥赫决定今晚谁会因为奥赫能力死亡。",
        "reminders": [
            "死亡"
        ],
        "setup": false
    },
    "kazali": {
        "id": "kazali",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/kazali.png",
        "edition": "custom",
        "name": "卡扎力",
        "ability": "每个夜晚*，你要选择一名玩家：他死亡。<br>[由你决定谁是什么爪牙，-或+任意数量外来者]",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 3.5,
        "otherNight": 46,
        "firstNightReminder": "唤醒卡扎力，让他选择玩家变成邪恶爪牙。",
        "otherNightReminder": "唤醒卡扎力，让他攻击一名玩家。",
        "reminders": [
            "死亡"
        ],
        "setup": true
    },
    "yaggababble": {
        "id": "yaggababble",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/yaggababble.png",
        "edition": "custom",
        "name": "牙噶巴卜",
        "ability": "在你的首个夜晚，你会得知一段秘密短语。<br>每次你在白天公开说出这段短语，当天便可能会有一名玩家在这之后死亡。",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 3031,
        "otherNight": 45,
        "firstNightReminder": "唤醒牙噶巴卜，对他展示他的秘密短语。",
        "otherNightReminder": "根据已放置的提示标记数量，选择最多等同于该数量的玩家死亡。该夜晚行动只是一个提示，死亡的造成时机可以是白天，也可以是夜晚的任何时候。",
        "reminders": [
            "死亡"
        ],
        "setup": false
    },
    "lord_of_typhon": {
        "id": "lord_of_typhon",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/lord_of_typhon.png",
        "edition": "custom",
        "name": "堤丰之首",
        "ability": "每个夜晚*，你要选择一名玩家：他死亡。<br>[邪恶玩家全部邻座，你位于正中，+1爪牙，-或+任意数量外来者]",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 1.4,
        "otherNight": 38.5,
        "firstNightReminder": "将位于堤丰之首两侧的对应数量的玩家变成邪恶的爪牙，并分别唤醒他们通知他们的角色和阵营变化。",
        "otherNightReminder": "唤醒堤丰之首，让他攻击一名玩家。",
        "reminders": [
            "死亡"
        ],
        "setup": true
    },
    "hundun": {
        "id": "hundun",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/hundun.png",
        "edition": "custom",
        "name": "混沌",
        "ability": "每个夜晚*，你要选择一名玩家：他死亡。<br>如果你以这种方式杀死了一名与你邻近的镇民玩家，除旅行者外的所有善良玩家会中毒直到下个黄昏。",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 0,
        "otherNight": 47,
        "firstNightReminder": "0",
        "otherNightReminder": "唤醒混沌，让他攻击一名玩家。如果他杀死了自己邻近的镇民，所有善良玩家中毒。",
        "reminders": [
            "死亡",
            "善良中毒"
        ],
        "setup": false
    },
    "qiongqi": {
        "id": "qiongqi",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/qiongqi.png",
        "edition": "custom",
        "name": "穷奇",
        "ability": "每个夜晚*，你要选择一名玩家：他死亡。<br>如果今天白天有外来者死亡，当晚改为你要选择一名玩家：他死亡，但被当作仍然存活，随后会有一名其他玩家死亡。[+1外来者]",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 0,
        "otherNight": 48,
        "firstNightReminder": "0",
        "otherNightReminder": "唤醒穷奇，让他攻击一名玩家。如果今天白天有外来者死亡，他攻击并杀死的玩家成为活尸，随后决定今晚谁会因为穷奇能力死亡。",
        "reminders": [
            "死于今日",
            "死亡",
            "活尸"
        ],
        "setup": true
    },
    "taowu": {
        "id": "taowu",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/taowu.png",
        "edition": "custom",
        "name": "梼杌",
        "ability": "每个夜晚*，你要选择一名玩家：他死亡。当你将要死亡时，改为一名存活且具有能力的爪牙失去能力。你不会得知恶魔信息。",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 2005.5,
        "otherNight": 50,
        "firstNightReminder": "如果梼杌在场，跳过他的恶魔信息环节。",
        "otherNightReminder": "唤醒梼杌，让他攻击一名玩家。",
        "reminders": [
            "死亡",
            "失去能力"
        ],
        "setup": false
    },
    "taotie": {
        "id": "taotie",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/taotie.png",
        "edition": "custom",
        "name": "饕餮",
        "ability": "每个夜晚*，你要选择任意数量的非旅行者玩家或一名旅行者玩家：如果他们的角色类型均不相同，他们死亡。[+1外来者]",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 0,
        "otherNight": 49,
        "firstNightReminder": "0",
        "otherNightReminder": "唤醒饕餮，让他选择任意数量的非旅行者玩家或一名旅行者玩家。如果这些玩家角色类型不同，他们死亡。",
        "reminders": [
            "死亡"
        ],
        "setup": true
    },
    "baojun": {
        "id": "baojun",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/baojun.png",
        "edition": "custom",
        "name": "暴君",
        "ability": "每个夜晚*，你可以选择至多两名玩家：他们死亡。你选择的玩家数量不能与上个夜晚死亡的玩家数量相同（超过二人时算作二人）。",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 0,
        "otherNight": 50.2,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒暴君，让他攻击至多两名玩家。但是暴君选择的玩家数量不能与上个夜晚死亡的玩家数量相同。",
        "reminders": [
            "死亡"
        ],
        "setup": false
    },
    "dianyuzhang": {
        "id": "dianyuzhang",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/dianyuzhang.png",
        "edition": "custom",
        "name": "典狱长",
        "ability": "每个夜晚，你要选择至多三名玩家：如果明天白天他们之一死于处决，上次被你选择的其他玩家会在当晚死亡。否则，当晚他们之中会有一名玩家死亡。",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 3031.5,
        "otherNight": 50.1,
        "firstNightReminder": "唤醒典狱长，让他选择至多三名玩家。",
        "otherNightReminder": "唤醒典狱长，让他选择至多三名玩家。如果上个夜晚选择的玩家之中有人死于处决，上个夜晚选择的其余玩家均死亡，否则其中之一死亡。",
        "reminders": [
            "囚禁",
            "死亡"
        ],
        "setup": false
    },
    "guhuoniao": {
        "id": "guhuoniaoiasod0pap2u490rjqawpf9ru389",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/guhuoniao.png",
        "edition": "custom",
        "name": "姑获鸟",
        "ability": "每个夜晚*，你要选择一名玩家：他死亡。你可能会拥有上一个死于处决的爪牙的能力。",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 0,
        "otherNight": 50.3,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒姑获鸟，让他攻击一名玩家。",
        "reminders": [
            "死亡",
            "获得能力"
        ],
        "setup": false
    },
    "jianning": {
        "id": "jianning",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/jianning.png",
        "edition": "custom",
        "name": "奸佞",
        "ability": "每个夜晚*，你要选择一名玩家：他死亡。如果你今天白天没有投票，今晚你可以行动两次。",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 0,
        "otherNight": 50.4,
        "firstNightReminder": "",
        "otherNightReminder": "唤醒奸佞，让他攻击一名玩家。如果他白天没投票，可以攻击两次。",
        "reminders": [
            "死亡",
            "行动两次"
        ],
        "setup": false
    },
    "yanluo": {
        "id": "yanluo",
        "image": "https://oss.gstonegames.com/data_file/clocktower/web/icons/yanluo.png",
        "edition": "custom",
        "name": "阎罗",
        "ability": "在你的首个夜晚，你能查看魔典并选择一名玩家：他在第三个夜晚死亡，即使因为任何原因让他不会死亡。每个夜晚，你要选择一名玩家：上个夜晚被你选择的玩家死亡。",
        "team": "demon",
        "sch_team": "恶魔",
        "firstNight": 3058.1,
        "otherNight": 50.5,
        "firstNightReminder": "唤醒阎罗，让他查看魔典。让阎罗选择一名玩家，将“三更将死”标记放置该玩家角色标记旁。之后再让阎罗选择一名玩家，将“即将死亡”标记放置该玩家角色标记旁。",
        "otherNightReminder": "唤醒阎罗，让他选择一名玩家，将“即将死亡”标记放置该玩家角色标记旁，并将上一个夜晚的“即将死亡”标记替换为“死亡”标记。如果这是游戏的第三个夜晚，将“三更将死”标记的玩家判死，即使因为任何原因让他不会死亡。",
        "reminders": [
            "三更将死",
            "即将死亡",
            "死亡"
        ],
        "setup": false
    }
}