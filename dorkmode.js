const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];
storeItems.forEach(function(stock) {
    $('#stooore').append('<div id="objRow"><p class="inStock">' + 
    (stock.name) + ':</p> <p class="inStock">$' + (stock.price) + '</p> <p class="inStock">' + (stock.details) + '</p></div>')
  })

  let test = false
const button = document.getElementById('clickMe');
button.addEventListener('click', function() {
     test = !test
    if (test == true) {
        $('#contentContainer').addClass('darkMode')
        $('#clickMe').css("background-color", "grey")
        $('#objRow').css("color", "rgb(208, 212, 212)")
        $('.inStock').css("background-color", "black")
        $('.inStock').css("color", "white")
        $('#pro').css("color", "white")
    } else {
        $('#contentContainer').removeClass('darkMode')
        $('#clickMe').css("background-color", "rgb(208, 212, 212)")
        $('#objRow').css("color", "grey")
        $('.inStock').css("background-color", "grey")
        $('.inStock').css("color", "black")
        $('#pro').css("color", "black")
    }
})