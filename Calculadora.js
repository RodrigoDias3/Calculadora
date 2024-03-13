function insert(num)
{   
    var data = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = data + num;
}

function clean()
{
    document.getElementById('result').innerHTML = "";
}

function erase()
{
    var data = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = data.substring(0,data.length-1);
}

function calculate()
{
    var data = document.getElementById('result').innerHTML;
    if (data) 
    {
        document.getElementById('result').innerHTML = eval(data);
    }
    else
    {
        document.getElementById('result').innerHTML = "**********";
    }
}
