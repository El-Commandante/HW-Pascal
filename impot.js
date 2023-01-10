var salary = ""; 
var salary = prompt ("please enter your salary");
if(salary<25000){
    taxes = salary*0.1
};
if(salary<50000){
    taxes = 2500 + (salary-25000)*0.2
};
if(salary<100000){
    taxes = 7500 + (salary-50000)*0.3
};
if(salary<150000){
    taxes = 22500 + (salary-100000)*0.4
};
if(salary>150000){
    taxes = 42500 + (salary-150000)*0.5
};



var mess = "your taxes are"+ taxes
alert (mess);
