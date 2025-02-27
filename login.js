
document.querySelector("register").addEventListener("click", function (){
    const user= {
        name:document.querySelector("registerName").value,
        email:document.querySelector("registerEmail").value,
        password:document.querySelector("registerPassword").value,
    };
    fetch ("weather-forecast-backend-eta.vercel.app/users/newMember", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.strigify (user),
    }).then (response => response.json ())
    .then (data => {
        if (data.result) {
            window.location.assign("index.html");
        }
    });
});


    document.querySelector("connection").addEventListener("click", function (){
        const user= {
            email:document.querySelector("connectionEmail").value,
            password:document.querySelector("connectionPassword").value,
        };
        fetch ("weather-forecast-backend-eta.vercel.app/users/signin", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.strigify (user),
        }).then (response => response.json ())
        .then (data => {
            if (data.result) {
                window.location.assign("index.html");
            }
        });
    });
