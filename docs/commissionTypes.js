/**
 * @typedef {{id:string,imgUrl:string,title:string,money:string,doCostInfo:boolean,small?:string}} CommissionType
 */

/**
 * @type {CommissionType[]}
 */
const commissionTypes = [
    {
        id: "stickers",
        title: "Stickers",
        money: "$20",
        imgUrl: "stickers.png",
        doCostInfo: true,
    },
    {
        id: "rendered-bust",
        title: "Rendered Bust",
        money: "$40",
        imgUrl: "renderedBust.jpg",
        doCostInfo: true,
    },
    {
        id: "meme",
        title: "Meme",
        money: "$15",
        imgUrl: "meme.png",
        doCostInfo: true,
    },
    {
        id: "rendered-full-with-background",
        title: "Rendered full with Background",
        money: "$50 - $80",
        imgUrl: "renderedFull.jpg",
        doCostInfo: true,
        small: "Render type/background based",
    },
    {
        id: "ref-sheet",
        title: "Ref sheet",
        money: "$40 - $80",
        imgUrl: "refsheet.jpg",
        doCostInfo: true,
        small: "Complexity based",
    },
    {
        id: "eye-render",
        title: "Eye render",
        money: "flat $30",
        imgUrl: "eye.png",
        doCostInfo: true,
        small: "Experimental",
    },
];
