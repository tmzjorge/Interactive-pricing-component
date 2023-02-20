let checkbox = document.getElementById('check')
let price = document.getElementById('price')
let discount = document.getElementById('discount')
let pageview = document.getElementById('pageview')
price.style.fontWeight = '800'
price.style.fontSize = '2em'
price.innerText = '$16.00'
price.style.color = 'black'
pageview.innerText = '100k'


function pricing(){
    let val = 0
    if(discount.value == 1) {
        checkbox.checked ? val= 6: val = 8
        price.innerText = `$${val}.00`
        pageview.innerText = '10K'
    }
    if(discount.value == 2) {
        checkbox.checked ? val= 9: val = 12
        price.innerText = `$${val}.00`
        pageview.innerText = '50K'
    }
    if(discount.value == 3) {
        checkbox.checked ? val= 12: val = 16
        price.innerText = `$${val}.00`
        pageview.innerText = '100K'
    }
    if(discount.value == 4) {
        checkbox.checked ? val= 18: val = 24
        price.innerText = `$${val}.00`
        pageview.innerText = '500K'
    }
    if(discount.value == 5) {
        checkbox.checked ? val= 27: val = 36
        price.innerText = `$${val}.00`
        pageview.innerText = "1M"
    }

}

checkbox.onchange = pricing
document.getElementById('discount').oninput = function (){
    let value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #a5f2ea 0%, #a5f2ea ' + value + '%, #ebf1fd ' + value + '%, #ebf1fd)'
    pricing()
}

