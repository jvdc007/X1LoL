function createRounds(){
    return [
        round1(),
        round2(),
        round3(),
        round4(),
        round5(),
        round6(),
        //round7(),
        //round8(),
        //round9()
    ]
}

function round1(){
    return [
        {
            id: 1,
            class: 'Suporte',
            player1: 'Killleer',
            champ1: 'Thresh',
            bans1: ['Kayle', 'Neeko', 'Zyra'],
            player2: 'STG Yoqks',
            champ2: 'Senna',
            bans2: ['Ashe', 'Heimerdinger', 'Zilean'],
            winner: 2,
            form: 1,
            free: 2
        },{
            id: 2,
            class: 'Assassino',
            player1: 'STG Yoqks',
            champ1: 'Fizz',
            bans1: ['Ekko', 'LeBlanc', 'Tryndamere'],
            player2: 'Killleer',
            champ2: 'Teemo',
            bans2: ['Malzahar', 'Qiyana', 'Vayne'],
            winner: 1,
            form: 1,
            free: 0
        },{
            id: 3,
            class: 'Lutador',
            player1: 'Ernest',
            champ1: 'Ekko',
            bans1: ['Jax', 'Urgot', 'Vi'],
            player2: 'Iponema',
            champ2: 'Xin Zhao',
            bans2: ['Riven', 'Sett', 'Wukong'],
            winner: 1,
            form: 1,
            free: 0
        },{
            id: 4,
            class: 'Assassino',
            player1: 'Iponema',
            champ1: 'Rengar',
            bans1: ['Malzahar', 'Qiyana', 'Sylas'],
            player2: 'Ernest',
            champ2: 'Fiora',
            bans2: ['Pantheon', 'Quinn', 'Vayne'],
            winner: 2,
            form: 1,
            free: 0
        },{
            id: 5,
            class: 'Suporte',
            player1: 'Kuter',
            champ1: 'Taliyah',
            bans1: ['Pyke', 'Zilean', 'Zoe'],
            player2: 'Camelo Solitário',
            champ2: 'Senna',
            bans2: ['Ashe', 'Morgana', 'Zyra'],
            winner: 1,
            form: 1,
            free: 0
        },{
            id: 6,
            class: 'Lutador',
            player1: 'Camelo Solitário',
            champ1: 'Sett',
            bans1: ['Lee Sin', 'Mordekaiser', 'Ryze'],
            player2: 'Kuter',
            champ2: 'Yasuo',
            bans2: ['Darius', 'Nasus', 'Wukong'],
            winner: 1,
            form: 1,
            free: 2
        },{
            id: 7,
            class: 'Suporte',
            player1: 'Panquequin',
            champ1: 'Zilean',
            bans1: ['Anivia', 'Pyke', 'Zyra'],
            player2: 'Kerm of Helm',
            champ2: 'Senna',
            bans2: ['Heimerdinger', 'Morgana', 'Sona'],
            winner: 1,
            form: 1,
            free: 2
        },{
            id: 8,
            class: 'Lutador',
            player1: 'Kerm of Helm',
            champ1: 'Skarner',
            bans1: ['Garen', 'Master Yi', 'Riven'],
            player2: 'Panquequin',
            champ2: 'Shyvana',
            bans2: ['Blitzcrank', 'Illaoi', 'Sett'],
            winner: 1,
            form: 1,
            free: 0
        },{
            id: 9,
            class: 'Suporte',
            player1: 'Xorope',
            champ1: 'Anivia',
            bans1: ['Alistar', 'Ashe', 'Soraka'],
            player2: 'nb porém LINDO',
            champ2: 'Karma',
            bans2: ['Orianna', 'Syndra', 'Zoe'],
            winner: 1,
            form: 1,
            free: 0
        },{
            id: 10,
            class: 'Atirador',
            player1: 'nb porém LINDO',
            champ1: 'Xayah',
            bans1: ['Caitlyn', 'Corki', 'Kalista'],
            player2: 'Xorope',
            champ2: 'Jhin',
            bans2: ['Jayce', 'Vayne', 'Teemo'],
            winner: 2,
            form: 1,
            free: 0
        }
    ]
}
function round2(){
    return [
        {
            id: 1,
            class: 'Lutador',
            player1: 'Camelo Solitário',
            champ1: 'Malphite',
            bans1: ['Darius', 'Mordekaiser', 'Renekton'],
            player2: 'STG Yoqks',
            champ2: 'Sett',
            bans2: ['Dr. Mundo', 'Ornn', 'Tryndamere'],
            winner: 2,
            form: 1,
            free: 0
        },{
            id: 2,
            class: 'Assassino',
            player1: 'STG Yoqks',
            champ1: 'Nocturne',
            bans1: ['Pyke', 'Tristana', 'Tryndamere'],
            player2: 'Camelo Solitário',
            champ2: 'Master Yi',
            bans2: ['Fizz', 'Shaco', 'Teemo'],
            winner: 1,
            form: 1,
            free: 1
        },{
            id: 3,
            class: 'Tanque',
            player1: 'Iponema',
            champ1: 'Maokai',
            bans1: ['Olaf', 'Sett', 'Wukong'],
            player2: 'nb porém LINDO',
            champ2: 'Sion',
            bans2: ['Aatrox', 'Illaoi', 'Skarner'],
            winner: 2,
            form: 2,
            free: 2
        },{
            id: 4,
            class: 'Lutador',
            player1: 'nb porém LINDO',
            champ1: 'Pantheon',
            bans1: ['Aatrox', 'Illaoi', 'Sett'],
            player2: 'Iponema',
            champ2: 'Darius',
            bans2: ['Renekton', 'Riven', 'Urgot'],
            winner: 2,
            form: 2,
            free: 0
        },{
            id: 5,
            class: 'Suporte',
            player1: 'Ernest',
            champ1: 'Karma',
            bans1: ['Heimerdinger', 'Sona', 'Syndra'],
            player2: 'Panquequin',
            champ2: 'Lux',
            bans2: ['Braum', 'Morgana', 'Pyke'],
            winner: 2,
            form: 2,
            free: 1
        },{
            id: 6,
            class: 'Assassino',
            player1: 'Panquequin',
            champ1: 'Evelynn',
            bans1: ['Jax', 'Irelia', 'Sylas'],
            player2: 'Ernest',
            champ2: 'Ekko',
            bans2: ['Fiora', 'Quinn', 'Vayne'],
            winner: 2,
            form: 1,
            free: 0
        },{
            id: 7,
            class: 'Assassino',
            player1: 'Kerm of Helm',
            champ1: 'Nocturne',
            bans1: ['Fiora', 'Riven', 'Yasuo'],
            player2: 'Killleer',
            champ2: 'Nocturne',
            bans2: ['Fizz', 'Tryndamere', 'Vayne'],
            winner: 1,
            form: 1,
            free: 3
        },{
            id: 8,
            class: 'Mago',
            player1: 'Killleer',
            champ1: 'Anivia',
            bans1: ['Katarina', 'LeBlanc', 'Lissandra'],
            player2: 'Kerm of Helm',
            champ2: 'Maokai',
            bans2: ['Annie', 'Heimerdinger', 'Lux'],
            winner: 2,
            form: 3,
            free: 0
        },{
            id: 9,
            class: 'Atirador',
            player1: 'Xorope',
            champ1: "Kog'Maw",
            bans1: ['Jayce', 'Kalista', 'Vayne'],
            player2: 'Kuter',
            champ2: 'Miss Fortune',
            bans2: ['Aphelios', 'Lucian', 'Teemo'],
            winner: 2,
            form: 3,
            free: 2
        },{
            id: 10,
            class: 'Suporte',
            player1: 'Kuter',
            champ1: 'Orianna',
            bans1: ['Syndra', 'Zilean', 'Zyra'],
            player2: 'Xorope',
            champ2: 'Orianna',
            bans2: ['Alistar', 'Heimerdinger', 'Kayle'],
            winner: 1,
            form: 1,
            free: 0
        }
    ]
}
function round3(){
    return [
        {
            id: 1,
            class: 'Suporte',
            player1: 'STG Yoqks',
            champ1: 'Janna',
            bans1: ['Ashe', 'Pyke', 'Zilean'],
            player2: 'Panquequin',
            champ2: 'Syndra',
            bans2: ['Braum', 'Fiddlesticks', 'Orianna'],
            winner: 2,
            form: 1,
            free: 2
        },{
            id: 2,
            class: 'Atirador',
            player1: 'Panquequin',
            champ1: 'Twitch',
            bans1: ['Draven', "Kog'Maw", 'Lucian'],
            player2: 'STG Yoqks',
            champ2: 'Xayah',
            bans2: ['Caitlyn', 'Ezreal', 'Tristana'],
            winner: 1,
            form: 1,
            free: 2
        },{
            id: 3,
            class: 'Mago',
            player1: 'Xorope',
            champ1: 'Orianna',
            bans1: ['Karthus', 'Ryze', 'Swain'],
            player2: 'Killleer',
            champ2: "Cho'Gath",
            bans2: ['Lissandra', 'Sylas', 'Zyra'],
            winner: 1,
            form: 1,
            free: 1
        },{
            id: 4,
            class: 'Lutador',
            player1: 'Killleer',
            champ1: 'Shyvana',
            bans1: ['Sett', 'Tryndamere', 'Yasuo'],
            player2: 'Xorope',
            champ2: 'Kayle',
            bans2: ['Jayce', 'Mordekaiser', 'Swain'],
            winner: 1,
            form: 1,
            free: 0
        },{
            id: 5,
            class: 'Mago',
            player1: 'Iponema',
            champ1: 'Orianna',
            bans1: ['Heimerdinger', 'LeBlanc', 'Sylas'],
            player2: 'Kuter',
            champ2: 'Orianna',
            bans2: ['Veigar', 'Zilean', 'Zoe'],
            winner: 2,
            form: 1,
            free: 2
        },{
            id: 6,
            class: 'Assassino',
            player1: 'Kuter',
            champ1: 'Tristana',
            bans1: ['Rengar', 'Teemo', 'Tryndamere'],
            player2: 'Iponema',
            champ2: 'Tristana',
            bans2: ['Ahri', 'Qiyana', 'Zed'],
            winner: 2,
            form: 1,
            free: 0
        },{
            id: 7,
            class: 'Suporte',
            player1: 'Ernest',
            champ1: 'Syndra',
            bans1: ['Senna', 'Zilean', 'Zyra'],
            player2: 'nb porém LINDO',
            champ2: 'Fiddlesticks',
            bans2: ['Alistar', 'Orianna', 'Zoe'],
            winner: 1,
            form: 1,
            free: 1
        },{
            id: 8,
            class: 'Tanque',
            player1: 'nb porém LINDO',
            champ1: 'Urgot',
            bans1: ['Aatrox', 'Illaoi', 'Malphite'],
            player2: 'Ernest',
            champ2: 'Shen',
            bans2: ['Gnar', 'Sion', 'Trundle'],
            winner: 2,
            form: 1,
            free: 0
        },{
            id: 9,
            class: 'Assassino',
            player1: 'Camelo Solitário',
            champ1: 'Tristana',
            bans1: ['LeBlanc', 'Teemo', 'Tryndamere'],
            player2: 'Kerm of Helm',
            champ2: 'Fizz',
            bans2: ['Master Yi', 'Riven', 'Yasuo'],
            winner: 2,
            form: 1,
            free: 2
        },{
            id: 10,
            class: 'Suporte',
            player1: 'Kerm of Helm',
            champ1: 'Nami',
            bans1: ['Heimerdinger', 'Morgana', 'Pyke'],
            player2: 'Camelo Solitário',
            champ2: 'Syndra',
            bans2: ['Tahm Kench', 'Zilean', 'Zyra'],
            winner: 2,
            form: 1,
            free: 2
        }
    ]
}
function round4(){
    return [
        {
            id: 1,
            class: 'Atirador',
            player1: 'STG Yoqks',
            champ1: 'Varus',
            bans1: ['Caitlyn', 'Tristana', 'Miss Fortune'],
            player2: 'Xorope',
            champ2: 'Sivir',
            bans2: ['Quinn', 'Teemo', 'Jayce'],
            winner: 1,
            form: 1,
            free: 0
        },{
            id: 2,
            class: 'Tanque',
            player1: 'Xorope',
            champ1: 'Sion',
            bans1: ['Urgot', 'Gnar', 'Tahm Kench'],
            player2: 'STG Yoqks',
            champ2: 'Shen',
            bans2: ['Dr. Mundo', 'Camille', 'Sett'],
            winner: 2,
            form: 1,
            free: 2
        },
        {
            id: 3,
            class: 'Tanque',
            player1: 'Kuter',
            champ1: 'Malphite',
            bans1: ['Darius', 'Illaoi', 'Sett'],
            player2: 'Panquequin',
            champ2: 'Shen',
            bans2: ['Braum', 'Camille', 'Yorick'],
            winner: 1,
            form: 1,
            free: 2
        },{
            id: 4,
            class: 'Assassino',
            player1: 'Panquequin',
            champ1: 'Lee Sin',
            bans1: ['Kassadin', 'Shaco', 'Zed'],
            player2: 'Kuter',
            champ2: 'LeBlanc',
            bans2: ['Pyke', 'Teemo', 'Tryndamere'],
            winner: 2,
            form: 1,
            free: 0
        },
        {
            id: 5,
            class: 'Mago',
            player1: 'Ernest',
            champ1: "Cho'Gath",
            bans1: ['Syndra', 'Diana', 'Heimerdinger'],
            player2: 'Kerm of Helm',
            champ2: 'Nami',
            bans2: ['LeBlanc', 'Katarina', 'Ezreal'],
            winner: 1,
            form: 1,
            free: 0
        },{
            id: 6,
            class: 'Lutador',
            player1: 'Kerm of Helm',
            champ1: 'Tryndamere',
            bans1: ['Rumble', 'Ekko', 'Yasuo'],
            player2: 'Ernest',
            champ2: 'Trundle',
            bans2: ['Sett', 'Kled', 'Fizz'],
            winner: 2,
            form: 1,
            free: 2
        },
        {
            id: 7,
            class: 'Lutador',
            player1: 'Camelo Solitário',
            champ1: 'Trundle',
            bans1: ['Jayce', 'Gnar', 'Ornn'],
            player2: 'Iponema',
            champ2: 'Trundle',
            bans2: ['Tryndamere', 'Wukong', 'Olaf'],
            winner: 2,
            form: 3,
            free: 3
        },{
            id: 8,
            class: 'Mago',
            player1: 'Iponema',
            champ1: 'Rumble',
            bans1: ['Zilean', 'Ziggs', 'Syndra'],
            player2: 'Camelo Solitário',
            champ2: 'Evelynn',
            bans2: ['Veigar', 'Heimerdinger', 'Karthus'],
            winner: 2,
            form: 1,
            free: 0
        },
        {
            id: 9,
            class: 'Atirador',
            player1: 'nb porém LINDO',
            champ1: 'Tristana',
            bans1: ['Corki', 'Jinx', 'Varus'],
            player2: 'Killleer',
            champ2: 'Jayce',
            bans2: ['Teemo', 'Miss Fortune', 'Kindred'],
            winner: 2,
            form: 1,
            free: 0
        },{
            id: 10,
            class: 'Suporte',
            player1: 'Killleer',
            champ1: 'Fiddlesticks',
            bans1: ['Kayle', 'Zyra', 'Taliyah'],
            player2: 'nb porém LINDO',
            champ2: 'Zilean',
            bans2: ['Syndra', 'Orianna', 'Pyke'],
            winner: 2,
            form: 1,
            free: 2
        }
    ]
}
function round5(){
    return [
        {
            id: 1,
            class: 'Suporte',
            player1: 'Iponema',
            champ1: 'Kayle',
            bans1: ['Syndra', 'Morgana', 'Tahm Kench'],
            player2: 'Panquequin',
            champ2: 'Kayle',
            bans2: ['Anivia', 'Braum', 'Ashe'],
            winner: 1,
            form: 1,
            free: 3
        },{
            id: 2,
            class: 'Mago',
            player1: 'Panquequin',
            champ1: 'Viktor',
            bans1: ['Anivia', 'LeBlanc', "Kog'Maw"],
            player2: 'Iponema',
            champ2: 'Jhin',
            bans2: ['Veigar', 'Ziggs', 'Syndra'],
            winner: 1,
            form: 1,
            free: 0
        }
        ,{
            id: 3,
            class: 'Tanque',
            player1: 'Xorope',
            champ1: 'Trundle',
            bans1: ['Urgot', 'Alistar', 'Sion'],
            player2: 'Kerm of Helm',
            champ2: "Cho'Gath",
            bans2: ['Singed', 'Nasus', 'Illaoi'],
            winner: 1,
            form: 1,
            free: 0
        },{
            id: 4,
            class: 'Suporte',
            player1: 'Kerm of Helm',
            champ1: 'Orianna',
            bans1: ['Morgana', 'Pyke', 'Nami'],
            player2: 'Xorope',
            champ2: 'Rakan',
            bans2: ['Alistar', 'Heimerdinger', 'Zoe'],
            winner: 2,
            form: 1,
            free: 0
        }
        ,{
            id: 5,
            class: 'Assassino',
            player1: 'Killleer',
            champ1: 'Sylas',
            bans1: ['Katarina', 'Ahri', 'Zed'],
            player2: 'Kuter',
            champ2: 'Pyke',
            bans2: ['Evelynn', 'Tryndamere', 'Twitch'],
            winner: 1,
            form: 3,
            free: 2
        },{
            id: 6,
            class: 'Atirador',
            player1: 'Kuter',
            champ1: 'Jayce',
            bans1: ['Kalista', 'Draven', 'Quinn'],
            player2: 'Killleer',
            champ2: 'Graves',
            bans2: ['Teemo', 'Kindred', 'Senna'],
            winner: 2,
            form: 1,
            free: 0
        }
        ,{
            id: 7,
            class: 'Assassino',
            player1: 'nb porém LINDO',
            champ1: 'Riven',
            bans1: ['Yasuo', 'Zed', 'LeBlanc'],
            player2: 'Camelo Solitário',
            champ2: 'Jax',
            bans2: ['Malzahar', 'Pantheon', 'Fizz'],
            winner: 2,
            form: 1,
            free: 0
        },{
            id: 8,
            class: 'Atirador',
            player1: 'Camelo Solitário',
            champ1: 'Jayce',
            bans1: ['Tristana', 'Ashe', 'Teemo'],
            player2: 'nb porém LINDO',
            champ2: 'Miss Fortune',
            bans2: ['Vayne', 'Senna', 'Aphelios'],
            winner: 1,
            form: 1,
            free: 0
        },
        {
            id: 9,
            class: 'Tanque',
            player1: 'STG Yoqks',
            champ1: 'Ornn',
            bans1: ['Darius', 'Trundle', "Cho'Gath"],
            player2: 'Ernest',
            champ2: 'Gnar',
            bans2: ['Sett', 'Urgot', 'Kled'],
            winner: 2,
            form: 1,
            free: 2
        },{
            id: 10,
            class: 'Lutador',
            player1: 'Ernest',
            champ1: 'Qiyana',
            bans1: ['Fiora', 'Kled', 'Darius'],
            player2: 'STG Yoqks',
            champ2: 'Wukong',
            bans2: ['Tryndamere', 'Trundle', 'Rumble'],
            winner: 2,
            form: 1,
            free: 0
        }
    ]
}
function round6(){
    return [
        {
            id: 1,
            class: 'Atirador',
            player1: 'Camelo Solitário',
            champ1: 'Sivir',
            bans1: ['Kalista', 'Teemo', 'Jayce'],
            player2: 'Xorope',
            champ2: 'Caitlyn',
            bans2: ['Varus', "Kog'Maw", 'Aphelios'],
            winner: 2,
            form: 1,
            free: 1
        },{
            id: 2,
            class: 'Mago',
            player1: 'Xorope',
            champ1: 'Ahri',
            bans1: ['Lissandra', 'Vladimir', 'Swain'],
            player2: 'Camelo Solitário',
            champ2: 'Cassiopeia',
            bans2: ['Sylas', 'Zyra', 'Kassadin'],
            winner: 2,
            form: 1,
            free: 0
        },
        {
            id: 3,
            class: 'Tanque',
            player1: 'STG Yoqks',
            champ1: 'Urgot',
            bans1: ['Trundle', 'Renekton', 'Wukong'],
            player2: 'Iponema',
            champ2: 'Maokai',
            bans2: ['Braum', 'Illaoi', 'Ornn'],
            winner: 1,
            form: 1,
            free: 2
        },{
            id: 4,
            class: 'Lutador',
            player1: 'Iponema',
            champ1: 'Aatrox',
            bans1: ['Trundle', 'Sett', 'Ornn'],
            player2: 'STG Yoqks',
            champ2: 'Mordekaiser',
            bans2: ['Rumble', 'Ekko', 'Tryndamere'],
            winner: 1,
            form: 1,
            free: 2
        },
        {
            id: 5,
            class: 'Atirador',
            player1: 'Killleer',
            champ1: 'Sivir',
            bans1: ['Ezreal', 'Ashe', 'Senna'],
            player2: 'Ernest',
            champ2: 'Teemo',
            bans2: ['Caitlyn', 'Kindred', 'Tristana'],
            winner: 2,
            form: 1,
            free: 1
        },{
            id: 6,
            class: 'Suporte',
            player1: 'Ernest',
            champ1: 'Morgana',
            bans1: ['Syndra', 'Heimerdinger', 'Zilean'],
            player2: 'Killleer',
            champ2: 'Anivia',
            bans2: ['Zyra', 'Taliyah', 'Senna'],
            winner: 1,
            form: 1,
            free: 0
        },
        {
            id: 7,
            class: 'Lutador',
            player1: 'Kuter',
            champ1: '',
            bans1: [],
            player2: 'Kerm of Helm',
            champ2: '',
            bans2: [],
            winner: 0,
            form: 0,
            free: 0
        },{
            id: 8,
            class: 'Mago',
            player1: 'Kerm of Helm',
            champ1: '',
            bans1: [],
            player2: 'Kuter',
            champ2: '',
            bans2: [],
            winner: 0,
            form: 0,
            free: 0
        },
        {
            id: 9,
            class: 'Assassino',
            player1: 'nb porém LINDO',
            champ1: '',
            bans1: [],
            player2: 'Panquiquin',
            champ2: '',
            bans2: [],
            winner: 0,
            form: 0,
            free: 0
        },{
            id: 10,
            class: 'Mago',
            player1: 'Panquiquin',
            champ1: '',
            bans1: [],
            player2: 'nb porém LINDO',
            champ2: '',
            bans2: [],
            winner: 0,
            form: 0,
            free: 0
        }
    ]
}