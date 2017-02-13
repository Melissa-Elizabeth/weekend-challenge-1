$(document).ready(function(){
  //
  var employeeArray = [];

       $('.submitButton').click(function(){
           var firstName = $('#firstName').val();
           var lastName = $('#lastName').val();
           var idNumber = $('#idNumber').val();
           var jobTitle = $('#jobTitle').val();
           var annualSalary = $('#annualSalary').val();
           var markup = '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + idNumber + '</td><td>' + jobTitle + '</td><td>' + annualSalary + '</td><td>' + '<button class="deleteButton">Delete</button>' + '</td></tr>';
           $('table tbody').append(markup);


       var employee = {
         firstName: firstName,
         lastName: lastName,
         idNumber: idNumber,
         jobTitle: jobTitle,
         annualSalary: annualSalary
       };

       employeeArray.push(employee);
     $('#firstName').val('');
     $('#lastName').val('');
     $('#idNumber').val('');
     $('#jobTitle').val('');
     $('#annualSalary').val('');


   $('table tbody').on('click', '.deleteButton', function(){

   $(this).parents("tr").remove();


   });

  monthlySalary = function(){
   var sum = 0;
   for (var i = 0; i < employeeArray.length; i++) {
     sum += employeeArray[i].annualSalary;
   }

   $('#totalMonthly').append.parseInt('Total Monthly Expenditures $ ' + (sum/12));

 };

});
});
