jobs = document.getElementsByClassName("djl87 job_listings fbw9 browse_startups_table_row _a _jm")
i=0
a=0
document.addEventListener("keypress", press)
function press(){
  if(event.key==='m'){
    jobs[i].click()
  }
  else if (event.key==='.'){
    //open cover letter field
    jobs[i].children[1].children[0].children[0].children[0].children[1].children[0].children[1].children[1].children[0].click()
    //get name
    let name = $('textarea')[i].placeholder.split(" ")[4]
    //get company
    let company = $('textarea')[i].placeholder.split("  ")[0].split(" ").splice(6).join(" ").replace(".","")
    //coverletter text
    $('textarea')[i].value = `Hi ${name},
While earning my degree in applied physics I was employed as a project manager. It was my job to develop processes to transfer the manual process of prosthetic development into an automated one through precise scanning, modifying, and machining. After undertaking numerous challenges, and accomplishing extreme strides for the company, I decided after I earn my degree to explore new endeavors.
I’m an analyzer, a problem solver, and a thinker. I have a passion for numbers, an instinct for trends, and the diligence to keep my work perfect. I can’t wait to take on new challenges and hope I get a chance to at ${company}. Please reach out to me if you have any questions. Thank you so much for your time.
 
Sincerely,
David Korff`
   }
  else if (event.key==='Enter'){
    //send letter
    $('.g-button.blue.interested-with-note-button')[a].click()
        // jobs[i].children[1].children[0].children[0].children[0].children[1].children[0].children[3].children[2].click()
        i++
        jobs[i].style.background='#00FFFF'

  }
  else if(event.key===','){
    //reject company
    jobs[i].children[1].children[0].children[0].children[0].children[1].children[0].children[1].children[3].click()
    i++
    a++
    jobs[i].style.background='#00FFFF'

  }
}
