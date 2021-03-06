/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package fr.lip6.segmentations;

import java.util.ArrayList;
import org.openqa.selenium.remote.RemoteWebElement;

/**
 *
 * @author sanojaa
 */
public class Block {
    private String bid;
    //private String xpath;
    //private RemoteWebElement element;
    private Dimension rect;
    private int cover = 0;
    private double area = 0;
    private int ecover=0;
    private int tcount=0;
    
    public void parse(ArrayList arr) {
        this.bid = (String) arr.get(0);
        //this.xpath = (String) arr.get(1)arr.get(1);
        //this.element = (RemoteWebElement) arr.get(2);
        this.rect = new Dimension((ArrayList) arr.get(1));
        this.ecover = Integer.parseInt(arr.get(2).toString());
        this.tcount = Integer.parseInt(arr.get(3).toString());
        this.area = Double.parseDouble(arr.get(4).toString());
    }
    public String toRecord() {
        return(this.bid + "," + this.rect.x  + "," + this.rect.y  + "," + this.rect.w  + "," + this.rect.h  + "," + this.ecover + "," + this.tcount);
    }
}
