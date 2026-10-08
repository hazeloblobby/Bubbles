function findResult()
{
    let name = document.getElementById("name").value;

    let count = 0;

    for (let i = 0; i < name.length; i++)
    {
        if (name.charAt(i).toLowerCase() == 'a')
        {
            count++;
        }
    }

    let result;

    if (count == 0)
    {
        result = `You are a Baku
(Japanese dream-eating creature; sounds intimidating but has a weirdly goofy side)`;
    }
    else if (count == 1)
    {
        result = `You are a Kobold
(Mischievous little creature that causes trouble and won't shut up)`;
    }
    else if (count == 2)
    {
        result = `You are a Kitsune
(Charming, clever, charismatic, but also mischievous and unpredictable)`;
    }
    else if (count == 3)
    {
        result = `You are a Púca
(Shape-shifting Irish creature; literally unpredictable and strange)`;
    }
    else
    {
        result = `You are a Sphinx
(Extremely intelligent and riddly, but not exactly the easiest creature to socially interact with)`;
    }

    document.getElementById("resultTitle").innerHTML = "✦ YOUR RESULT ✦";

    document.getElementById("result").innerHTML = result;

    document.getElementById("resultBox").classList.remove("show");

    void document.getElementById("resultBox").offsetWidth;

    document.getElementById("resultBox").classList.add("show");
}