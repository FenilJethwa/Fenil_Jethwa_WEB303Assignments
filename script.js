 $(document).ready(function () {
   
 class ContentItem{
    uniqueid;
    name;
    description;
    category;

constructor(uniqueid, name, description, category){
        this.uniqueid = uniqueid;
        this.name = name;
        this.description = description;
        this.category = category;
        }

updateContentItem(uniqueid, name, description, category)    
        {

        if  (this.uniqueid == uniqueid && name && description && category){
            this.uniqueid = uniqueid;
            this.name = name;
            this.description = description;
            this.category = category;
            }

        }
        
        toString()
        {
            return $('#content-item-list').append(`<div class="content-item-wrapper">
            <div id="content-item-${this.uniqueid}">
            <h2 class="name">${this.name}</h2>
            <p class="description">${this.description}</p>
            <div class="category">${this.category}</div>
            </div>
            </div>`);
        }
    }
    
    let content = [

    {
        "uniqueid": 0,
        "name": "Fenil Jethwa",
        "description": "Owner of H.N Auto Sales.Pvt.Ltd ",
        "category": "Owner"
    },

    {
        "uniqueid": 1,
        "name": "Hitesh Jethwa",
        "description": "MD of H.N Auto Sales.Pvt.Ltd",
        "category": "MD"
    },

    {
        "uniqueid": 2,
        "name": "Neel Jethwa",
        "description": "Manager H.N Auto Sales.Pvt.Ltd",
        "category": "Manager"
    },

    {
        "uniqueid": 3,
        "name": "Kartika Rao",
        "description": "Employee of H.N Auto Sales.Pvt.Ltd",
        "category": "Employee"
    },

    {
        "uniqueid": 4,
        "name": "Dhruti Patel",
        "description": "Designer of H.N Auto Sales.Pvt.Ltd",
        "category": "Designer"
    },

    {
        "uniqueid": 5,
        "name": "Raju Jethwa",
        "description": "Executive Officer of H.N Auto Sales.Pvt.Ltd",
        "category": "Designer"
    }


    ];

    $.each(content, function(key, val)
    {
      $('#content-item-list').append(`<div class="content-item-wrapper">
        <div id="content-item-${this.uniqueid}">
        <h2 class="name">${this.name}</h2>
        <p class="description">${this.description}</p>
        <div class="category">${this.category}</div>
            </div>
        </div>`);
    });

    $('.content-item-wrapper').css('width', '50%');
    $('.content-item-wrapper').css('margin', 'auto'); 
    $('.content-item-wrapper').css('border', 'solid 2px black');
    $('.content-item-wrapper').css('padding', '30px');
    $('.content-item-wrapper').css('marging-top', '20px');
    $('.content-item-wrapper').css('margin-bottom', '20px');
    $('.description').css('font-style','italic');

});


