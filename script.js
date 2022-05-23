//1 задание

function MaxStr()
{
    let str = document.getElementById("arr").value;
    let arr = str.split(" ");
    let maxStr = arr[0];
    console.log(maxStr);

    arr.forEach(element => {
        if(element.length > maxStr.length)
        maxStr=element;
    });

    document.getElementById("text1").innerHTML="Результат:" + maxStr;
}

//2 задание

function MaxChar()
{
    let str1 = document.getElementById("arr1").value;
    let arr1 = str1.split("");
    console.log(arr1);
    let maxCount=1;
    let maxchar;

    for(i=0; i <= arr1.length; i++)
    {
        count=1;
        for(j=0; j<= arr1.length; j++)
        {
            if(arr1[i]==arr1[j])
            {
                count++;
            }
        }
        if(count>=maxCount)
        {
            maxCount=count;
            maxchar=arr1[i];
            console.log(maxchar);
        }
    }

    document.getElementById("text2").innerHTML="Самый повторяющийся элемент: " + maxchar;
}

//3 задание

function MaxCharPrompt()
{
    let str1 = document.getElementById("arr1").value;
    let arr1 = str1.split("");
    console.log(arr1);
    let maxCount=1;
    let maxchar;
    let str="";
    let newchar = prompt("Введите заменяющий символ", '');

    for(i=0; i <= arr1.length; i++)
    {
        count=1;
        for(j=0; j<= arr1.length; j++)
        {
            if(arr1[i]==arr1[j])
            {
                count++;
            }
        }
        if(count>=maxCount)
        {
            maxCount=count;
            maxchar=arr1[i];
            console.log(maxchar);
        }
    }

    for(k=0;k < arr1.length; k++)
    {
        if(arr1[k]==maxchar)
        {
            arr1[k]= newchar;
        }
        str=str.concat(arr1[k]);
    }

    document.getElementById("text3").innerHTML="Новая строка: " + str + "";
}

//4 задание

function isAnagram()
{
    let str1 = document.getElementById("arr2").value;
    let arr = str1.split(" ");
    let arr1 = arr[0].split("");
    let arr2 = arr[1].split("");
    console.log(arr);
    console.log(arr1);
    console.log(arr2);
    let flag=true;
    let count = 0;

    if(arr1.length!=arr2.length)
    {
        flag = false;
    }
    arr1.sort();
    arr2.sort();
    for(i=0; i < arr1.length; i++)
        {
            if(arr1[i]==arr2[i])
                {
                    count++;
                }
        }
    if(count==arr1.length)
        {
            flag=true;
        }
    else
        {
            flag=false;
        }
    document.getElementById("text4").innerHTML="Результат: " + flag; 
}