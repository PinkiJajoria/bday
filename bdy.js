function showAlert() {
    const result = confirm('Press OK or Cancel');
    if (result===true) {
        window.location.href="/home/pinki/code/practice/bdy/ok-page/ok.html"
    }else{
        window.location.href="/home/pinki/code/practice/bdy/cancel-page/cancel.html"
    }
}


// function showAlert() {
//     const result = confirm('if u know me then ok');
//     if (result===true) {
//         window.location.href="/home/pinki/code/practice/01_basics/index.html"
//     }else{alert("you have cancelled")}
        
        
//     }