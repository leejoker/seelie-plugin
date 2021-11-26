/*
 * @Date: 2021-03-14 14:16:30
 * @LastEditors: leejoker
 * @Author: lisonge
 * @LastEditTime: 2021-11-25 13:47:41
 */
export default {
    minAlignSpace: 4,
    header: {
        author: 'leejoker',
        name: ['seelie-plugin', ['zh', '原神规划助手扩展Opal']],
        description: ['description', ['zh', '基于KeyPJ的原神规划助手扩展开发']],
        namespace: 'https://github.com/leejoker/seelie-plugin',
        icon: 'https://seelie.inmagi.com/img/icons/favicon-32x32.png',
        version: '1.0.0',
        include: ['https://seelie.inmagi.com/*'],
        grant: ['unsafeWindow', 'GM_setValue', 'GM_download', 'GM_xmlhttpRequest', 'GM_openInTab', 'GM_getResourceText'],
        externals: [
            ['copyright', '2021, KeyPJ https://github.com/leejoker'],
            ['license', 'MIT'],
            ['contributionURL', 'https://github.com/leejoker/seelie-plugin'],
        ],
        require: ['https://cdn.jsdelivr.net/npm/core-js-bundle@3.9.1/index.js'],
        connect: 'api-takumi.mihoyo.com',
        resource: [
            { name: "character", url: "https://cdn.jsdelivr.net/gh/KeyPJ/seelieEx@main/src/data/character.json" },
            { name: "weapon", url: "https://cdn.jsdelivr.net/gh/KeyPJ/seelieEx@main/src/data/weapon.json" },
        ],
        "run-at": "document-end",
        homepage: "https://github.com/leejoker",
        homepageURL: "https://github.com/leejoker/seelie-",
    },
    devServer: {
        proxyUserJsFileName: 'dev-server-proxy.user.js',
    },
}