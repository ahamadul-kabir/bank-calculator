function validateForm() 
        {
                var email = document.getElementById('Uname');

                var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                var gmailformat = /@gmail\.com$/;
                var passwordformat = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

                var p = document.getElementById('pass').value;

                // if (mailformat.test(email.value)  &&  p.length <= 8){

                //     window.location.href='bank.html';
                    

                // }
                 if (email == "" || email == null)
                {
                   alert ("User Name must be filled out");
                    return false;
                }
                else if (!mailformat.test(email.value)) 
                {
                    alert('Please provide a valid email address');
                    return false;
                }
                else if (!gmailformat.test(email.value)) 
                {
                    alert('Please provide a valid gmail address');
                    return false;
                }
                else if (!passwordformat.test(p)) 
                {
                    alert('Please provide a valid Password --- The password length must be  equal to 8 --- The password must contain one or more uppercase characters  --- The password must contain one or more lowercase characters  --- The password must contain one or more numeric values  --- The password must contain one or more special characters');
                    return false;
                }
                else if(p.length > 8 )
                {  
                    alert("Password must be at least 8 characters long.");  
                    return false;  
                }  
        }



        // handle deposit button event 


        document.getElementById('DepositBtn').addEventListener('click',function() {


            //get value form deposit input 

            const depositinput = document.getElementById('DepositInput');
            const newdepositamount = depositinput.value;
            


            // show deposit amount 

            const depositmoney = document.getElementById('depositAmount');
            const currentDepositAmount = depositmoney.innerText;

            const newDepositTotalAmount = parseFloat(currentDepositAmount)  + parseFloat(newdepositamount);
            depositmoney.innerText = newDepositTotalAmount;



            // show balance total  amount 

            const balanceamount = document.getElementById('totalbalance');
            const oldBalance = balanceamount.innerText;

            const newTotalAmount = parseFloat(oldBalance) + newDepositTotalAmount;
            balanceamount.innerText = newTotalAmount;


            // deposit input clear 
            depositinput.value = ""; 
  
        });

        document.getElementById('WithdrawBtn').addEventListener('click',function () {



            //get value form Withdraw input 


            const Withdrawinput = document.getElementById('WithdrawInput');
            const newWithdrawAmount = Withdrawinput.value;




             // show Withdraw amount 


            const WithdrawMoney = document.getElementById('WithdrawAmount');
            const currentWithdrawAmount = WithdrawMoney.innerText;

            const newWithdrawiTotalAmount = parseFloat(currentWithdrawAmount) + parseFloat(newWithdrawAmount);
            WithdrawMoney.innerText = newWithdrawiTotalAmount;



             // show balance total  amount 

            const balanceamount = document.getElementById('totalbalance');
            const oldBalance = balanceamount.innerText;

            const newTotalAmount = parseFloat(oldBalance) - newWithdrawiTotalAmount;
            balanceamount.innerText = newTotalAmount;



            //  Withdraw input clear 
            Withdrawinput.value = ""; 
            
        });
