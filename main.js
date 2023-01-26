let myLeads=[]
const enoutEl=document.getElementById("input-el")
const inbutButton=document.getElementById("input-btn")
const deleteButton=document.getElementById("delete-btn")
const ulEL=document.getElementById("ul-el")



const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))

const tabBtn=document.getElementById("tab-btn")


if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}


tabBtn.addEventListener("click",function(){
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads", JSON.stringify(myLeads))
            render(myLeads)
     })  
})


inbutButton.addEventListener("click", function(){
    myLeads.push(enoutEl.value)
    enoutEl.value=""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    }        
)
function render(leads){
let listitems=""
for(let i=0;i<leads.length;i++){
    listitems+="<li><a href='"+ leads[i]+"' target='_blank'>" + leads[i] + "</a></li>"
    
}

ulEL.innerHTML=listitems
}


deleteButton.addEventListener("dblclick", function(){
    localStorage.clear()
    render(myLeads)
    myLeads=[]
})
