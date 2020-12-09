class food
{
    constructor()
    {
        this.foodStock = 0;
        this.lastFed;

        this.image = loadImage("images/milk.png")
    }

    updateFoodStock(foodstock)
    {
        this.foodStock = foodstock;
    }

    getFedTime(lastfed)
    {
        this.lastFed = lastfed;
    }

    deductFoodStock()
    {
        if(this.foodStock>0)
        {
            this.foodstock = this.foodStock-1;
        }
    }

    getFoodStock()
    {
        return this.foodstock;
    }

    display()
    {
        imageMode(CENTER);
        //image(this.image,720,220,70,70);

        var x;
        var y = 100;

        if(this.foodStock !== 0)
        {
            for(var i = 0; i < this.foodStock;i++)
            {
                if(i%10 === 0)
                {
                    x = 80;
                    y = y + 50;
                }
                image(this.image,x,y,50,50);
                x = x+30;
            }
        }
    }

    bedroom()
    {
        background(bedroomImg,550,550);
    }

    garden()
    {
        background(gardenImg,550,550);
    }

    washroom()
    {
        background(washroomImg,550,550);
    }

}