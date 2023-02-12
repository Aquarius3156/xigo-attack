'use strict';

class Options {
    static player = [
        '1P',
        '2P',
    ];

    static style = [
        'XIゴ',
        'XI JUMBO',
        'XI[sai]',
        'XI JUMBO(LIFT)',
        'XI JUMBO(JUMP)',
    ];

    static mode = [
        'STANDARD',
        'LIMITED',
    ];

    static speed = [
        '★0',
        '★1',
        '★2',
        '★3',
        '★4',
        '★5',
        'SLOW',
        'FAST',
        '可変',
    ];

    static speedStepUp = [
        'STEP UP[a]',
        'STEP UP[b]',
        'STEP UP[c]',
        'STEP UP[d]',
        'STEP UP[e]',
        'STEP UP[f]',
        'STEP UP[g]',
        'STEP UP[h]',
        'STEP UP[i]',
    ];

    static eval = [
        '最大スコア[a]',
        '最小スコア[a]',
        '最大スコア[b]',
        '最小スコア[b]',
        '最大スコア[c]',
        '最小スコア[c]',
        '最大スコア[d]',
        '最小スコア[d]',
        '最大レベル',
        '最小レベル',
        '最長タイム',
        '最短タイム',
        '最大コンボ',
        '最小コンボ',
        '最多ダイス',
        '最少ダイス',
    ];

    static rule = [
        'LEVEL ONLY',
        'LEVEL BEFORE TIME',
        'LEVEL BEFORE COMBO',
        'LEVEL BEFORE DICE',
        'TIME ONLY',
        'TIME OR LEVEL',
        'TIME BEFORE COMBO',
        'SCORE ONLY',
        'SCORE AND LEVEL',
        'SCORE OR LEVEL',
        'SCORE BEFORE LEVEL',
        'SCORE OR TIME',
        'SCORE BEFORE TIME',
        'SCORE BEFORE COMBO',
        'SCORE BEFORE DICE',
        'COMBO ONLY',
        'COMBO AND LEVEL',
        'COMBO OR LEVEL',
        'COMBO BEFORE LEVEL',
        'COMBO OR TIME',
        'COMBO BEFORE TIME',
        'COMBO AND SCORE',
        'COMBO OR SCORE',
        'COMBO BEFORE SCORE',
        'COMBO BEFORE DICE',
        'DICE ONLY',
        'DICE AND LEVEL',
        'DICE OR TIME',
        'DICE BEFORE TIME',
        'DICE AND SCORE',
        'DICE OR SCORE',
        'DICE BEFORE SCORE',
        'DICE AND COMBO',
        'DICE BEFORE COMBO',
        'DELETE ONLY',
        'DELETE OR TIME',
        'DELETE BEFORE TIME',
        'DELETE AND SCORE',
        'DELETE AND COMBO',
        'DELETE BEFORE COMBO',
    ]

    static ruleClassic = [];

    static ruleNone = [
        '---',
    ];

    static ruleLevel = [
        'LEVEL 1',
        'LEVEL 2',
        'LEVEL 3',
        'LEVEL 4',
        'LEVEL 5',
        'LEVEL 6',
        'LEVEL 7',
        'LEVEL 8',
        'LEVEL 9',
        'LEVEL 10',
        'LEVEL 15',
        'LEVEL 20',
        'LEVEL 30',
        'LEVEL 40',
        'LEVEL 50',
        'LEVEL 99',
    ]

    static ruleTime = [
        '30 SEC',
        '1 MIN',
        '2 MIN',
        '3 MIN',
        '4 MIN',
        '5 MIN',
        '6 MIN',
        '7 MIN',
        '8 MIN',
        '9 MIN',
        '10 MIN',
        '15 MIN',
        '20 MIN',
        '30 MIN',
        '1 HOUR',
        '10 HOUR',
    ];

    static ruleScore = [
        'SCORE 1000',
        'SCORE 2000',
        'SCORE 5000',
        'SCORE 10000',
        'SCORE 20000',
        'SCORE 50000',
        'SCORE 100000',
        'SCORE 200000',
        'SCORE 500000',
        'SCORE 1000000',
        'SCORE 2000000',
        'SCORE 5000000',
        'SCORE 10000000',
        'SCORE 20000000',
        'SCORE 50000000',
        'SCORE 99999999',
    ];

    static ruleCombo = [
        '1 COMBO',
        '2 COMBO',
        '10 COMBO[a]',
        '10 COMBO[b]',
        '20 COMBO',
        '30 COMBO',
        '50 COMBO[a]',
        '50 COMBO[b]',
        '100 COMBO[a]',
        '100 COMBO[b]',
        '200 COMBO[a]',
        '200 COMBO[b]',
        '500 COMBO[a]',
        '500 COMBO[b]',
        '999 COMBO[a]',
        '999 COMBO[b]',
    ];

    static ruleChain = [];

    static ruleDice = [
        'DICE 1',
        'DICE 10[a]',
        'DICE 10[b]',
        'DICE 20[a]',
        'DICE 20[b]',
        'DICE 30',
        'DICE 50[a]',
        'DICE 50[b]',
        'DICE 100[a]',
        'DICE 100[b]',
        'DICE 150',
        'DICE 200',
        'DICE 250',
        'DICE 300',
        'DICE 500',
        'DICE 999',
    ];

    static ruleDelete = [
        'DELETE ALL DICE',
    ];

    static interval = [
        '0(短)',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6(長)',
        '発生なし',
    ];

    static thresLow = [
        '15個',
        '23個',
        '31個',
        '39個',
    ];

    static thresHigh = [
        '26個',
        '32個',
        '38個',
        '44個',
    ];

    static wild = [
        '無',
        '1(少)',
        '2',
        '3(多)',
    ];

    static explosion = [
        '無',
        '1(少)',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7(多)',
    ];

    static duration = [
        '0(短)',
        '1',
        '2',
        '3(長)',
    ];

    static initial = [
        '6個',
        '10個',
        '23個',
        '47個',
    ];

    static level = [];

    static random = [];

    static ranking = [];
    
    static {
        for (let i = 1; i <= 256; ++i) {
            Options.level.push(i);
        }

        for (let i = 1; i <= 44; ++i) {
            Options.random.push('固定配置' + i);
        }
        Options.random.push('ランダム')

        for (let i = 0; i < 63; ++i) {
            Options.ranking.push(i);
        }
        Options.ranking.push('パス表示なし');

        for (const item of Options.rule) {
            Options.ruleClassic.push(item.replace('COMBO', 'CHAIN'));
        }

        for (const item of Options.ruleCombo) {
            Options.ruleChain.push(item.replace('COMBO', 'CHAIN'));
        }
    }
}

const kanas = [
    'あ', 'か', 'さ', 'た', 'な', 'は', 'ま', 'や', 'ら', 'わ',
    'い', 'き', 'し', 'ち', 'に', 'ひ', 'み', 'り',
    'う', 'く', 'す', 'つ', 'ぬ', 'ふ', 'む', 'ゆ', 'る',
    'え', 'け', 'せ', 'て', 'ね', 'へ', 'め', 'れ',
    'お', 'こ', 'そ', 'と', 'の', 'ほ', 'も', 'よ', 'ろ', 'ん',
];

class Condition {
    static fromValue(value) {}
    toValue() {}

    static fromCurrentState() {
        if (document.getElementById('box-mode').value == Options.mode[0]) {
            return StandardCondition.fromCurrentState();
        } else {
            return LimitedCondition.fromCurrentState();
        }
    }

    updateState() {}
}

class StandardCondition extends Condition {
    levelBegin = 0n;
    levelEnd = 0n;

    static list = [
        ['levelBegin', 'box-level-begin', 256n],
        ['levelEnd', 'box-level-end', 256n],
    ]

    static fromValue(value) {
        let ret = new StandardCondition;
        for (const [member, _, factor] of StandardCondition.list) {
            ret[member] = value % factor;
            value /= factor;
        }
        return ret;
    }

    toValue() {
        let value = 0n;
        let base = 1n;
        for (const [member, _, factor] of StandardCondition.list) {
            value += this[member] * base;
            base *= factor;
        }
        return value;
    }

    static fromCurrentState() {
        const cond = new StandardCondition;
        for (const [member, id, _] of StandardCondition.list) {
            const selected = document.getElementById(id).selectedIndex;
            cond[member] = selected === -1 ? 0n : BigInt(selected);
        }
        return cond;
    }

    updateState() {
        for (const [member, id, _] of StandardCondition.list) {
            const box = document.getElementById(id);
            changeComboboxSelection(box, Number(this[member]));
        }
    }
}

class LimitedCondition extends Condition {
    interval = 0n;
    thresLow = 0n;
    thresHigh = 0n;
    wild = 0n;
    explosion = 0n;
    duration = 0n;
    initial = 0n;

    static list = [
        ['interval', 'box-interval', 8n],
        ['thresLow', 'box-thres-low', 4n],
        ['thresHigh', 'box-thres-high', 4n],
        ['wild', 'box-wild', 4n],
        ['explosion', 'box-explosion', 8n],
        ['duration', 'box-duration', 4n],
        ['initial', 'box-initial', 4n],
    ];

    static fromValue(value) {
        let ret = new LimitedCondition;
        for (const [member, _, factor] of LimitedCondition.list) {
            ret[member] = value % factor;
            value /= factor;
        }
        return ret;
    }

    toValue() {
        let value = 0n;
        let base = 1n;
        for (const [member, _, factor] of LimitedCondition.list) {
            value += this[member] * base;
            base *= factor;
        }
        return value;
    }

    static fromCurrentState() {
        const cond = new LimitedCondition;
        for (const [member, id, _] of LimitedCondition.list) {
            const selected = document.getElementById(id).selectedIndex;
            cond[member] = selected === -1 ? 0n : BigInt(selected);
        }
        return cond;
    }

    updateState() {
        for (const [member, id, _] of LimitedCondition.list) {
            const box = document.getElementById(id);
            changeComboboxSelection(box, Number(this[member]));
        }
    }
};

class Info {
    player = 0n;
    speed = 0n;
    style = 0n;
    random = 0n;
    mode = 0n;
    cond = new Condition;
    rule = 0n;
    quantity1 = 0n;
    quantity2 = 0n;
    eval = 0n;
    ranking = 0n;

    static factorList = [
        ['player', 2n],
        ['speed', 9n],
        ['style', 5n],
        ['random', 45n],
        ['mode', 2n],
        ['cond', 65536n],
        ['rule', 40n],
        ['quantity1', undefined],
        ['quantity2', undefined],
        ['eval', 16n],
        ['ranking', 64n],
    ];

    static idList = [
        ['player', 'box-player'],
        ['style', 'box-style'],
        ['mode', 'box-mode'],
        ['speed', 'box-speed'],
        ['eval', 'box-eval'],
        ['rule', 'box-rule'],
        ['quantity1', undefined],
        ['quantity2', undefined],
        ['random', 'box-random'],
        ['ranking', 'box-ranking'],
        ['cond', undefined],
    ];

    static fromIndex(index) {
        let info = new Info;
        let ruleSplitted;
        for (let [member, factor] of Info.factorList) {
            switch (member) {
                case 'quantity1':
                    factor = ruleSplitted[0] === 'DELETE' ? 1n : 16n;
                    break;
                case 'quantity2':
                    factor = ruleSplitted.length === 2 ? 1n : 16n;
                    break;
            }

            const value = index % factor;
            if (member === 'cond') {
                if (info.mode == 0) {
                    info[member] = StandardCondition.fromValue(value);
                } else {
                    info[member] = LimitedCondition.fromValue(value);
                }
            } else {
                info[member] = value;
            }
            index /= factor;

            if (member === 'rule') {
                ruleSplitted = Options.rule[info.rule].split(' ');
            }
        }

        if (index > 0n) {
            throw new Error('定義されているパスワードの範囲外です');
        }
        return info;
    }

    toIndex() {
        let index = 0n;
        let base = 1n;

        const ruleSplitted = Options.rule[this.rule].split(' ');
        for (let [member, factor] of Info.factorList) {
            switch (member) {
                case 'quantity1':
                    factor = ruleSplitted[0] === 'DELETE' ? 1n : 16n;
                    break;
                case 'quantity2':
                    factor = ruleSplitted.length === 2 ? 1n : 16n;
                    break;
            }

            let value;
            if (member === 'cond') {
                value = this.cond.toValue();
            } else {
                value = this[member];
            }

            index += value * base;
            base *= factor;
        }
        return index;
    }

    static fromCurrentState() {
        const info = new Info;

        let inverted = false;

        for (let [member, id] of Info.idList) {
            switch (member) {
                case 'quantity1':
                    id = inverted ? 'box-rule-c' : 'box-rule-a';
                    break;
                case 'quantity2':
                    id = inverted ? 'box-rule-a' : 'box-rule-c';
                    break;
            }

            if (member === 'cond') {
                info[member] = Condition.fromCurrentState();
            } else {
                const selected = document.getElementById(id).selectedIndex;
                info[member] = selected == -1 ? 0n : BigInt(selected);
            }

            if (member === 'rule') {
                inverted = Info.quantitiesAreInverted(info[member]);
            }
        }
        return info;
    }

    updateState() {
        const inverted = Info.quantitiesAreInverted(this.rule);
        for (let [member, id] of Info.idList) {
            switch (member) {
                case 'quantity1':
                    id = inverted ? 'box-rule-c' : 'box-rule-a';
                    break;
                case 'quantity2':
                    id = inverted ? 'box-rule-a' : 'box-rule-c';
                    break;
            }

            if (member === 'cond') {
                this[member].updateState();
            } else {
                const box = document.getElementById(id);
                changeComboboxSelection(box, Number(this[member]));
            }
        }
    }

    static quantitiesAreInverted(rule) {
        const order = [
            'LEVEL',
            'TIME',
            'SCORE',
            'COMBO',
            'CHAIN',
            'DICE',
        ];

        const splitted = Options.rule[rule].split(' ');
        if (splitted.length === 2) return false;
        if (splitted[0] === 'DELETE') return false;
        return order.indexOf(splitted[0]) > order.indexOf(splitted[2]);
    }
}

class Password {
    index = 0n;

    constructor(index) {
        this.index = BigInt(index);
    }

    static fromId(id) {
        const checkDigitBits = 8n;
        let ret = new Password(id >> checkDigitBits);
        if (ret.toId() !== id) {
            throw new Error('パスワードが正当ではありません');
        }
        return ret;
    }

    toId() {
        const bitsPerBytes = 8n;
        const bytes = 7n;
        const bits = bitsPerBytes * bytes;
        const crcBits = 32n;

        let dividend = 0n;
        for (let i = 0n; i < bytes; ++i) {
            dividend <<= bitsPerBytes;
            dividend |= (this.index >> (bitsPerBytes * i)) % (1n << bitsPerBytes);
        }
        dividend <<= crcBits;

        const divisor = 0x104c11db7n;
        for (let i = bits - 1n; i >= 0n; --i) {
            if (dividend & (1n << (i + crcBits))) {
                dividend ^= divisor << i;
            }
        }

        const checkDigitBits = 8n;
        const magic = 0xa6n;
        return ((this.index << checkDigitBits) | (dividend % (1n << checkDigitBits))) ^ magic;
    }

    static fromStr(str) {
        const numKanas = BigInt(kanas.length);

        let id = 0n;
        let base = 1n;
        for (const kana of str) {
            id += BigInt(kanas.indexOf(kana)) * base;
            base *= numKanas;
        }
        return Password.fromId(id);
    }

    toStr() {
        let id = this.toId();

        const length = 11n;
        const numKanas = BigInt(kanas.length);

        let str = [];
        for (let i = 0; i < length; ++i) {
            str.push(kanas[id % numKanas]);
            id /= numKanas;
        }
        return str;
    }

    static fromCurrentState() {
        const isValid = function () {
            const a = document.getElementById('password-a').value;
            const b = document.getElementById('password-b').value;
            const c = document.getElementById('password-c').value;
            if (a.length != 4) return false;
            if (b.length != 3) return false;
            if (c.length != 4) return false;
            for (const letter of (a + b + c).split('')) {
                if (!kanas.includes(letter)) return false;
            }
            return true;
        }

        if (!isValid()) {
            throw new Error('パスワードの形式が無効です');
        }

        const str = ['password-a', 'password-b', 'password-c'].map(
            id => document.getElementById(id).value
        ).join('').split('');

        return this.fromStr(str);
    }

    updateState() {
        const str = this.toStr();
        const borders = [0, 4, 7, 11];
        const ids = ['password-a', 'password-b', 'password-c'];

        for (let i = 0; i < borders.length - 1; ++i) {
            const text = str.slice(borders[i], borders[i + 1]);
            const input = document.getElementById(ids[i]);
            input.value = text.join('');
        }
    }
}

function changeComboboxSelection(box, index) {
    box.selectedIndex = index;
    box.dispatchEvent(new Event('changeOnProgram'));
}

function setOptions(box, options) {
    if (box.assignedOptions === options) return;
    box.assignedOptions = options;

    while (box.length > 0) {
        box.remove(0);
    }

    for (const option of box.assignedOptions) {
        const element = document.createElement('option');
        element.text = option;
        box.appendChild(element);
    }

    changeComboboxSelection(box, 0);
}

function setFixedOptions() {
    const list = [
        ['box-player', Options.player],
        ['box-style', Options.style],
        ['box-mode', Options.mode],
        ['box-eval', Options.eval],
        ['box-rule', Options.rule],
        ['box-random', Options.random],
        ['box-ranking', Options.ranking],
        ['box-level-begin', Options.level],
        ['box-level-end', Options.level],
        ['box-interval', Options.interval],
        ['box-thres-low', Options.thresLow],
        ['box-thres-high', Options.thresHigh],
        ['box-wild', Options.wild],
        ['box-explosion', Options.explosion],
        ['box-duration', Options.duration],
        ['box-initial', Options.initial],
    ];

    for (const [id, options] of list) {
        setOptions(document.getElementById(id), options);
    }
}

function changeLog(string) {
    const log = document.getElementById('log');
    log.textContent = string;
}

function updatePassword() {
    const info = Info.fromCurrentState();
    const pass = new Password(info.toIndex());
    pass.updateState();
    changeLog('パスワード No. ' + pass.index);
}

function updateComboboxes() {
    try {
        const pass = Password.fromCurrentState();
        const info = Info.fromIndex(pass.index);
        info.updateState();
        changeLog('パスワード No. ' + pass.index);
    } catch (error) {
        changeLog('（' + error.message + '）');
    }
}

function onStyleChanged() {
    const boxStyle = document.getElementById('box-style');
    const boxRule = document.getElementById('box-rule');

    if (boxStyle.value == Options.style[0]) {
        setOptions(boxRule, Options.rule);
    } else {
        setOptions(boxRule, Options.ruleClassic);
    }
}

function onStyleOrModeChanged() {
    const boxStyle = document.getElementById('box-style');
    const boxMode = document.getElementById('box-mode');
    const boxSpeed = document.getElementById('box-speed');
    if (boxStyle.value == Options.style[0] && boxMode.value == Options.mode[0]) {
        setOptions(boxSpeed, Options.speedStepUp);
    } else {
        setOptions(boxSpeed, Options.speed);
    }
}

function onRuleChanged() {
    const boxRule = document.getElementById('box-rule');
    const boxRuleA = document.getElementById('box-rule-a');
    const labelRuleB = document.getElementById('label-rule-b');
    const boxRuleC = document.getElementById('box-rule-c');
    
    const splitted = boxRule.value.split(' ');
    const list = {
        'LEVEL': Options.ruleLevel,
        'TIME': Options.ruleTime,
        'SCORE': Options.ruleScore,
        'COMBO': Options.ruleCombo,
        'CHAIN': Options.ruleChain,
        'DICE': Options.ruleDice,
        'DELETE': Options.ruleDelete,
    };
    
    if (splitted.length >= 1) {
        setOptions(boxRuleA, splitted.length >= 1 ? list[splitted[0]] : Options.ruleNone);
    } else {
        setOptions(boxRuleA, Options.ruleNone);
    }
    
    if (splitted.length >= 2) {
        labelRuleB.textContent = splitted[1];
    }
    
    if (splitted.length >= 3) {
        setOptions(boxRuleC, list[splitted[2]]);
    } else {
        setOptions(boxRuleC, Options.ruleNone);
    }
}

function addEventListenerToElements() {
    const addEventListenerToTextBoxes = function() {
        const ids = [
            'password-a',
            'password-b',
            'password-c',
        ];

        for (let id of ids) {
            const box = document.getElementById(id);
            box.addEventListener('change', updateComboboxes);
        }
    }

    const addEventListenerToComboBoxes = function() {
        const specialIds = [
            ['box-style', onStyleChanged],
            ['box-style', onStyleOrModeChanged],
            ['box-mode', onStyleOrModeChanged],
            ['box-rule', onRuleChanged],
        ];

        for (const [id, func] of specialIds) {
            const box = document.getElementById(id);
            box.addEventListener('change', func);
            box.addEventListener('changeOnProgram', func);
        }

        const ids = [
            'box-player',
            'box-style',
            'box-mode',
            'box-speed',
            'box-eval',
            'box-rule',
            'box-rule-a',
            'box-rule-c',
            'box-random',
            'box-ranking',
            'box-level-begin',
            'box-level-end',
            'box-interval',
            'box-thres-low',
            'box-thres-high',
            'box-wild',
            'box-explosion',
            'box-duration',
            'box-initial',
        ];

        for (let id of ids) {
            const box = document.getElementById(id);
            box.addEventListener('change', updatePassword);
        }
    }

    addEventListenerToComboBoxes();
    addEventListenerToTextBoxes();
}

function init() {
    addEventListenerToElements();
    setFixedOptions();
    updatePassword();
}

init();