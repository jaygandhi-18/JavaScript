# document  
==>  to select all document

# .getElementById  
# document.getElementById('title')  
==>  it give full element of that title Id

# .getElementByClassName  <br>document.getElementByClassName('heading')  
==>  it give full class of that heading class

# .getAttribute  <br>document.getAttribute('class')
==>  get name of id or class

# .setAttribute  <br>document.setAtrribute('class', 'newHeading')  
==>  set new or change existing id or class name "it allways overWrite" 

# const test = document.getElementById('title')  
==>  put title class in test

# test.style.{style name} = '{style value}'  
==>  give style to given test works as css


# test.textContent  
==>  shows all pag content

# test.innerHTML  
==>  shows all with tags means give all html value

# test.innerText  
==> shows pag viewable content

# document.querySelector('h1')  
==> give frist h1 not all  //  its works as css selector

//

# const green = document.querySelectorAll('p')
==> its look a like of array but noa an array some property from array

# green.style.color='green'
==> it not work 

# green[0].style.color='green'
==> it works it make only 0 means 1st function green

 # green.forEach(function (p) {
 #        p.style.color = 'purple'
 #    })
==> with forEach loop we can make all at once 

# const tempClass = document.getElementsByClassName('list')
# const myArr = Array.from('tempClass')
# myArr.forEach(function (hii) {
# hii.style.color='red'
# })

==> 1. class list to tempClass
==> 2. tempClass convert into Array and store into myArr
==> 3. set for each loop to make all class into red