const progress = document.querySelector('.barre');
const inputs = document.querySelectorAll('input');
const mdp = document.querySelector('#motDePasse');
const confirm = document.querySelector('#confirm');
function verifyMDP()
{
    if (mdp.value===confirm.value)
    {
        confirm.setCustomValidity("");
    }
    else
    {
        confirm.setCustomValidity("erreur");
    }
}
confirm.addEventListener('input', verifyMDP);
mdp.addEventListener('input', verifyMDP);
function update()
{
    let value=0;
    inputs.forEach((input)=>
    {
        if (input.checkValidity())
        {
            value+=1;
        }
    });
    progress.value=value;
}
inputs.forEach((input) => {
    input.addEventListener('input', update);
    input.addEventListener('blur', update); 
});

update();