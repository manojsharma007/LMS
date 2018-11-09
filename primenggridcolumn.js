

 describe('MUltiple Scenarios', function() {
    // Global variable
    var globelSearchText= element(by.css('.globelSearchText'));
   
    //beforeach -- > will be executed before it block
    beforeEach(function(){ 
      
        browser.get('http://localhost:4200/');
    });
      
        it('Enter the text in globel serach box ', function() {          
            
            var tabledata = element.all(by.xpath("/html/body/app-root/p-table/div/div[2]/table/tbody"));            
            var cells = tabledata.all(by.tagName('td'));  
            var cellTexts = cells.map(function (elm) {                
                elm.getText().then(function(aa){
                    console.log(aa);
                });                
            });

          });
          // count the page
          
          var elements = element.all(protractor.By.css('span a'));         
          elements.count().then(function(aa){
              console.log(aa);
          });

     // get attribute 
           elements.getAttribute('class').then(function (classes) {
                   console.log(classes);               
                  
                });
    
    
  });


