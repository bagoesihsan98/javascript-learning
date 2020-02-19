var segitigaAtas = '';
var segitigaBawah = '';

for(var i = 0; i <= 5; i++)
{
    for(var j = 5; j >= i; j--)
    {
        segitigaAtas += '* ';
    }

    for(var j = 0; j < i; j++)
    {
        segitigaAtas += '  ';
    }

    for(var j = 0; j < i; j++)
    {
        segitigaAtas += '  ';
    }

    for(var j = 5; j >= i; j--)
    {
        segitigaAtas += '* ';
    }

    segitigaAtas += '\n';

}


for(var j = 0; j <= 5; j++)
{

    for(var k = 0; k <= j; k++)
    {
        segitigaBawah += '* ';
    }

    for(var k = 5; k > j; k--)
    {
        segitigaBawah += '  ';
    }

    for(var k = 5; k > j; k--)
    {
        segitigaBawah += '  ';
    }

    for(var k = 0; k <= j; k++)
    {
        segitigaBawah += '* ';
    }

    segitigaBawah += '\n';
}


console.log(segitigaAtas);
console.log(segitigaBawah);
