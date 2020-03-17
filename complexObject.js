function hello(){
   var saleHistory = [
    {
        billNo:'125jkl',
        totalAmount:5250,
        customerName:'javed',
        items:[
            {
                foodId:1,
                qty:2,
                name:'burger'
            },
            {
                foodId:5,
                qty:6,
                name:'pizza'
            },
        ],
        printBill:function(){
            // document.write("foodID qty name <br/>")
            // document.write('-------------------<br/>')
            // for(let i = 0; i < this.items.length; i++){
            //     document.write(this.items[i].foodId + " " + this.items[i].qty + " " + this.items[i].name + "<br/>")
            // }
            // document.write('-------------------<br/>')
            // document.write("Total Amount " +this.totalAmount +"<br/>")
            return "javed";
        }
    },
    {
        billNo:'125jkl',
        totalAmount:5250,
        customerName:'javed',
        items:[
            {foodId:1,qty:2,name:'burger'},
            {foodId:5,qty:6,name:'pizza'},
        ]
    }
   ]

   document.write(saleHistory[0].printBill())
}
