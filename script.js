function longestString (str)
{
    str=str.split(" ");
    let max=0;
    for(let i=0;i<str.length;i++)
    {
        if(max<str[i].length)
        {
            max=str[i].length;
        }
    }
    console.log(max);
    
}


function largestOfFour(arr)
{
    let maxNum;
    let maxNumArrays = [];
    for(let i=0;i<arr.length;i++)
    {
        maxNum=arr[i][0];
        for(let j=0;j<arr[i].length;j++)
        {
            if(maxNum<arr[i][j])
            {
                maxNum=arr[i][j];
            }
        }
       maxNumArrays= maxNumArrays.concat(maxNum);
    }
   return maxNumArrays;
}

function confirmEnding(str,target)
{
    let copyArr=str.slice(-target.length);
    let checkConfirmEnding = copyArr===target?true:false;
    console.log(checkConfirmEnding);
}


function repeatAString(str, num)
{
    let repeatedString ="";
    for(let i=0;i<num;i++)
    {
        repeatedString+=str;
    }
    console.log(repeatedString);
}

function truncateAString(str,length)
{
    let truncatedString = str.slice(0,length);
    if(length>=str.length)
    {
        truncatedString=truncatedString;
    }
    else
    {
        truncatedString+="...";
    }
    console.log(truncatedString);
}

function findElement(arr,func)
{
    let num;
    for(let i=0;i<arr.length;i++)
    {
        let check=func(arr[i]);
        if(check==true)
        {
        num=arr[i];
        break;
        }
    }
    console.log(num);
}


function booWho(bool)
{
    return (bool === true || bool===false)?true:false;
}

function titleCase(str)
{
    str=str.split(" ");
    let returnString =[];
    for(let i=0;i<str.length;i++)
    {
        let firstChar = str[i].charAt(0).toUpperCase();
        let string = firstChar+str[i].slice(1,).toLowerCase();
        returnString=returnString.concat(string);
    }

    returnString=returnString.join(" ");
    return returnString;
}

function frankenSplice(arr1,arr2,n)
{
    localArray=arr2.slice(0);
    for(let i=arr1.length-1;i>=0;i--)
    {
        localArray.splice(n,0,arr1[i]);
    }
    console.log(localArray);
}

function falsyBouncer(arr)
{
    let falsyValues= [false,null,0,"",NaN,undefined];
    let index;
    for(let i=0;i<falsyValues.length;i++)
    {
        if(arr.includes(falsyValues[i]))
        {
            let indexOfFalsyValue = arr.indexOf(falsyValues[i]);
            arr.splice(indexOfFalsyValue,1);
        }
        
    }
    if(arr.includes(NaN))
        {
            for(let i=0;i<arr.length;i++)
            {
                if(isNaN(arr[i]))
                {
                    arr.splice(i,1);
                }
            }
        }
        return arr;
    }

function getIndexToIns(arr,num)
{
    let index=0, isPlaced=false;
    let temp=0;
    for(let i=0;i<arr.length;i++)
    {
      for(let j=0;j<arr.length;j++)
      {
          if(arr[i]<arr[j])
          {
              temp=arr[i];
              arr[i]=arr[j];
              arr[j]=temp;
          }
      }
    }
    console.log(arr);
    for(let i=0;i<arr.length;i++)
    {
        if(num<=arr[i])
        {
            index=i;
            isPlaced=true;
            break;
        }
    }
    if(isPlaced===false)
    {
        index=arr.length;
    }
    return index;
}

function mutation(arr)
{
    let isSameWord = false;
    for(let i=0;i<arr[1].length;i++)
    {
        for(let j=0;j<arr[0].length;j++)
        {
            if(arr[1][i].toLowerCase()===arr[0][j].toLowerCase())
            {
                isSameWord=true;
                break;
            }
            else
            {
                isSameWord=false;
            }
        }
        if(isSameWord===false)
        {   
            return false;
        }
    }

    return true;
}

function chunkArrayInGroups(arr,size)
{
    let nextSize=size;
    let chunkArry=[];
    for(let i=0;i<arr.length;)
    {
        chunkArry.push(arr.slice(i,nextSize));
        i=i+size;
        nextSize=nextSize+size;
    }
    console.log(chunkArry);
}