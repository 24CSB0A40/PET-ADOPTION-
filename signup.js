
function validate()
{
let name=document.getElementById("name").value;
let mobile=document.getElementById("mobile").value;
let pass=document.getElementById("pass").value;
let email=document.getElementById("email").value;
let cpass=document.getElementById("cpass").value;
if(name=="")
{
    alert("enter name");
    return;
}
if(mobile.length!=10)
{
        alert("enter proper mobile number");
        return;
}
    let flag=0;
    
    for(let i=0;i<email.length;i++)
    {
        if(email[i]=='.')
        {
            flag++;
        }
        if(email[i]=='@')
        {
                flag++;
        }
    }
    if(flag<2)
    {
        alert("enter a proper email");
        return;
    }
    if(pass=="")
    {
        alert("enter password");
        return;
    }
    if(cpass=="")
        {
            alert("enter  confirm password");
            return;
        }
    if(cpass.length!=pass.length)
    {
        alert("password is not same as confirm password");
        return;
    }
    else
    {
for(let i=0;i<pass.length;i++)
{
    if(pass[i]!=cpass[i])
    {
        alert("password is not same as confirm password");
        return;
    }
}
    }


    alert("SUCCESSFULLY LOGINED ");
}