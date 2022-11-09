changeBackground = (value) => {
    let doc = document.getElementById('reviewBackground').style.background
    switch (value) {
        case 0:
            doc = "linear-gradient(135deg, #e2a9e5 15%, #2b94e5 100%)"
            break
        case 1:
            doc = "linear-gradient(135deg, #e2a9e5 15%, #2b94e5 100%)"
            break
        case 2:
            doc = "linear-gradient(135deg, #e2a9e5 15%, #2b94e5 100%)"
            break
        case 99:
            console.log("here")
            doc = "rgb(20,37,65)"
            break


    }
    console.log(value)
    document.getElementById('reviewBackground').style.background = "linear-gradient(135deg, #e2a9e5 15%, #2b94e5 100%)"
}