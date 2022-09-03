async function random(){
    let id = Math.floor(Math.random() * 100) + 1;

    const api_url = `https://api.adviceslip.com/advice/${id}`;
    const response = await fetch(api_url);
    const data = await response.json();


    let advice_id = data.slip["id"];
    let advice = data.slip["advice"];

    document.getElementById("advice-tag").innerHTML = advice_id;
    document.getElementById("advice-quote").innerHTML = `"${advice}"`;
}