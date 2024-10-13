function showAlert() {
    const result = confirm('Press OK or Cancel');
    if (result===true) {
        window.location.href="ok-page/ok.html"
    }else{
        window.location.href="cancel-page/cancel.html"
    }
}


// function showAlert() {
//     const result = confirm('if u know me then ok');
//     if (result===true) {
//         window.location.href="/home/pinki/code/practice/01_basics/index.html"
//     }else{alert("you have cancelled")}
        
        
//     }