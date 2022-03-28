/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    // =================== CINEMA ===================
    WA.room.onEnterLayer('zones/cinema1').subscribe(() => {
        const url = WA.state["cinema1"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema1Popup", "description", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema2').subscribe(() => {
        const url = WA.state["cinema2"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema2Popup", "description", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema2').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema3').subscribe(() => {
        const url = WA.state["cinema3"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema3Popup", "description", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema3').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema4').subscribe(() => {
        const url = WA.state["cinema4"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema4Popup", "description", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema4').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema5').subscribe(() => {
        const url = WA.state["cinema5"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema5Popup", "description", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema5').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema6').subscribe(() => {
        const url = WA.state["cinema6"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema6Popup", "description", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema7').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema7').subscribe(() => {
        const url = WA.state["cinema7"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema7Popup", "description", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema7').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema8').subscribe(() => {
        const url = WA.state["cinema8"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema8Popup", "description", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema8').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema9').subscribe(() => {
        const url = WA.state["cinema9"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema9Popup", "description", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema9').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema10').subscribe(() => {
        const url = WA.state["cinema10"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema10Popup", "description", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema10').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema11').subscribe(() => {
        const url = WA.state["cinema11"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema11Popup", "description", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema11').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema12').subscribe(() => {
        const url = WA.state["cinema12"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema12Popup", "description", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema12').subscribe(closePopup)

    // =================== MARKET ===================
    WA.room.onEnterLayer('zones/market1').subscribe(() => {
        const url = WA.state["market1"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market1Popup", "description", [{label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/market1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market2').subscribe(() => {
        const url = WA.state["market2"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market2Popup", "description", [{label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/market2').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market3').subscribe(() => {
        const url = WA.state["market3"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market3Popup", "description", [{label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/market3').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market4').subscribe(() => {
        const url = WA.state["market4"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market4Popup", "description", [{label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/market4').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market5').subscribe(() => {
        const url = WA.state["market5"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market5Popup", "description", [{label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/market5').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market6').subscribe(() => {
        const url = WA.state["market6"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market6Popup", "description", [{label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/market7').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market7').subscribe(() => {
        const url = WA.state["market7"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market7Popup", "description", [{label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/market7').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market8').subscribe(() => {
        const url = WA.state["market8"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market8Popup", "description", [{label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/market8').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market9').subscribe(() => {
        const url = WA.state["market9"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market9Popup", "description", [{label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/market9').subscribe(closePopup)

    // =================== TAVERN ===================
    WA.room.onEnterLayer('drinkZone').subscribe(() => {
        const urlMojito = "https://www.750g.com/mojito-r99211.htm"
        const urlMartini = "https://www.ateliersetsaveurs.com/les-recettes/cocktails/detail/981/green-martini"

        //@ts-ignore
        currentPopup = WA.ui.openPopup("drinkZonePopup", "Qu'est-ce que je vous sert ?", [
            {label: 'Red Mojito', className: 'primary', callback: () => openWebsite(urlMojito)},
            {label: 'Green Martini', className: 'primary', callback: () => openWebsite(urlMartini)},
        ]);
    })
    WA.room.onLeaveLayer('drinkZone').subscribe(closePopup)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));
    
}).catch(e => console.error(e));

function openWebsite(url: string){
    WA.nav.openCoWebSite(url)
    closePopup()
}

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
