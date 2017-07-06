/**
 * Created by bindo on 7/5/17.
 */

import BasePage from  '../../common/base-page.js'
import elements from '../../elements/dockyard-elements.json'
import testData from '../../test-data/data.json'
import chai from 'chai';

let expect = chai.expect;
let should = chai.should();
let {delTypeBtn,scanQrBtn,tableNumBox,doneBtn,exitBtn,nextBtn,toGoDone,eatHereImg,toGoImg,timePicker,time1,selectTimer,selectTimer2}=elements.deliveryPage;
let tableNumEls=[tableNumBox,doneBtn];
//let pickInfo='';


export default class DeliveryPage extends BasePage {

    constructor(driver,visit = false,url) {
        super(driver,visit,url);
    }

    scanQrCode() {
        //click scan qrcode btn
        super.clickElement(scanQrBtn);
        //exit scan qrcode
        this.driver.sleep(2000);
        super.clickElement(exitBtn);
    }

    eatHere() {
        super.clickElement(eatHereImg);
        this.driver.sleep(2000);
        this.scanQrCode();
        this.driver.sleep(2000);
        //submit table number

        //let p=Promise.resolve();
        //p.then()
        //    .then();

        //this.driver.sleep(5000);
        //this.clickDone();
        //super.getElement(doneBtn).then(function(eles){
        //    eles[0].click();
        //});

        //this.driver.sleep(2000);
        //console.log("done");
        //super.submitData(tableNumEls,testData.tableNumber)

    }
    inputTableNum() {
        super.inputData(tableNumBox,testData.tableNumber);
        this.driver.sleep(2000);
    }

    clickDone() {
        super.clickElement(doneBtn);
    }

    pickUp() {
        super.clickElement(toGoImg);
        //choose pick up point
        super.clickElement(nextBtn);
        this.driver.sleep(2000);
    }
    choosePickTime(num=0) {

        let driver=this.driver;

        if (num===0) {
            return false;
        }
        else {
            super.getElements(timePicker).then(function(els){
                for(let i=1;i<=num;i++) {
                    els[i].click();
                    driver.sleep(2000);
                }

            });
        }
        //super.clickElement(time1);
        //this.driver.sleep(2000);
    }

    getPickTime() {
        let script="var els=document.getElementsByClassName" +
                    "('picker-opt picker-opt-selected');" +
                    "var txt=els[0].innerHTML;" +
                    "return txt";
        let pObj=Promise.resolve(this.driver.executeScript(script));
        return pObj.then(function(value){
            return value;
        });

    }

    clickTogoDone() {
        super.clickElement(toGoDone);
        this.driver.sleep(2000);
    }




















}

