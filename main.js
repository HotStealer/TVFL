const load = () => {
    axios.get('http://roodkristo.ikt.khk.ee/cockpit/api/collections/get/loomad')
        .then((response) => {
        console.log(response.data.entries);

    response.data.entries.forEach((element) => {
        let nimi = document.createElement('div');
    let n = document.createTextNode(element.nimi);
    nimi.appendChild(n);
    document.querySelector('.profinfo').appendChild(nimi);

    let liik = document.createElement('div');
    let l = document.createTextNode(element.liik);
    liik.appendChild(l);
    document.querySelector('.profinfo').appendChild(liik);

    let vanus = document.createElement('div');
    let v = document.createTextNode(element.vanus);
    vanus.appendChild(v);
    document.querySelector('.profinfo').appendChild(vanus);

    let varju = document.createElement('div');
    let va = document.createTextNode(element.varjupaigas_alates);
    varju.appendChild(va);
    document.querySelector('.profinfo').appendChild(varju);

    let ster = document.createElement('div');
    let s = document.createTextNode(element.ster_kastr);
    ster.appendChild(s);
    document.querySelector('.profinfo').appendChild(ster);

    let pilt = document.createElement('img');
    pilt.src= element.pilt.path;
    document.querySelector('.profiil').appendChild(pilt);
})

})
.catch((error) => {
        console.log(error);
})
};
window.onload = load;