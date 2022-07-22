var numeros = 100
var divisible = false;

for(var i=1; i <= 100; i++)
{
    divisible = false;
    if(i % 3 == 0)
    {
        document.write("FIZZ");
        divisible = true;
    }

    if(i % 5 == 0)
    {
        document.write("BUZZ");
        divisible = true;
    }

    // if(!divisible) // !divisible indica que NO ES DIVISIBLE
    if(i % 3 != 0 && i % 5 != 0)
    {
        document.write(i);
    }
    document.write("<br />");
}
