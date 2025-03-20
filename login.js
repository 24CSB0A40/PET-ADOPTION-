
function validate()
{
    let pass=document.getElementById("pass").value;
let email=document.getElementById("email").value;
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
    alert("SUCCESSFULLY LOGINED ");
}