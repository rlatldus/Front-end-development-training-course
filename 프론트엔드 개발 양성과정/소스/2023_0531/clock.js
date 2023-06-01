

setInterval(() => {
    const now = new Date();
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const degHours = hours*(360/12) + minutes*(360/12/60);
    const degMinutes = minutes*(360/60);
    const degseconds= seconds*(360/60);
    const elementH = document.querySelector("#lineHour");
    const elementM = document.querySelector("#lineMin");
    const elementS = document.querySelector("#lineSec");
    
    elementH.style.transform = `rotate(${degHours}deg)`
    elementM.style.transform = `rotate(${degMinutes}deg)`
    elementS.style.transform = `rotate(${degseconds}deg)`
    console.log(   elementH.style.transform, elementM.style.transform, elementS.style.transform  )

    
}, 1000);