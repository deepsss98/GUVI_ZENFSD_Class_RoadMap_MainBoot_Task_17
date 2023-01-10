const div_count=document.createElement("div");
div_count.setAttribute("style","color: crimson; background-color: cadetblue; width:1000px;height:400px; font-size: 500%")
div_count.setAttribute("class","container-fluid d-flex align-items-center justify-content-center text-center")
div_count.innerText="10";

document.body.append(div_count);

setTimeout(() => {
    div_count.innerText="9";
    setTimeout(() => {
        div_count.innerText="8";
        setTimeout(() => {
            div_count.innerText="7";
            setTimeout(() => {
                div_count.innerText="6";
                setTimeout(() => {
                    div_count.innerText="5";
                    setTimeout(() => {
                        div_count.innerText="4";
                        setTimeout(() => {
                            div_count.innerText="3";
                            setTimeout(() => {
                                div_count.innerText="2";
                                setTimeout(() => {
                                    div_count.innerText="1";
                                    setTimeout(() => {
                                        div_count.innerText="Happy Independence Day";
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);