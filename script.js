function validate() {  
		
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var phone=document.getElementById('phone').value;
    var pass=document.getElementById('pass').value;
    var cpass=document.getElementById('cpass').value;

    
    if (name.length <= 4)
    {
        alert("Enter Your Full Name.\n");
        return false;
    }
    if (email.indexOf('@') == -1) 
    {
 		return "Email should be a valid address.\n";
    }
    if (email.charAt(email.length-4)!='.') 
    {
 		return "Email should be a valid address.\n";
    }

    if (pass.length <= 6) 
    {
        alert("Password should be strong.\n");
        return false;     
    }         
     if (pass!=cpass) 
     {
         alert(" confirm Passwords  and passworddo not match.\n");
         return false;
     }
    var phoneNum = phone.replace(/[^\d]/g, '');
    if(phoneNum.length!=10) 
        { 
            alert("Enter correct number.\n");
            return false;
        }

    if(document.getElementById('female').checked==false)
    {
        alert('only female candidates are allowed');
        return false;
    }
   

   

        



}


