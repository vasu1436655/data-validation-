let students= [

    {name:"vasu",city:"hyderabad",age: 25,totalMarks:99},
    {name:"bhanu",city:"guntur",age: 24,totalMarks:98},
    {name:"kiran",city:"tenali",age: 27,totalMarks:97},
    {name:"aadi",city:"guntur east",age: 28,totalMarks:96},
    {name:"srinu",city:"palnadu",age: 29,totalMarks:95},
    {name:"pk",city:"uppal",age: 20,totalMarks:94},
    {name:"gopi",city:"hyderabad",age: 25,totalMarks:90},
    {name:"dasu",city:"secendrabad",age: 24,totalMarks:98},
    {name:"kinni",city:"goa",age: 27,totalMarks:97},
    {name:"gopi",city:"ooty",age: 28,totalMarks:96},
    {name:"sathish",city:"dcpl",age: 29,totalMarks:95},
    {name:"prasanth",city:"uppal",age: 20,totalMarks:99},
    {name:"lavanya",city:"hyderabad",age: 25,totalMarks:99},
    {name:"narayana",city:"patanchervu",age: 24,totalMarks:98},
    {name:"anil",city:"pdrl",age: 27,totalMarks:97},
    {name:"vasu",city:"guntur west",age: 28,totalMarks:96},
    {name:"gopi",city:"nijam",age: 29,totalMarks:95},
    {name:"raju",city:"nepal",age: 20,totalMarks:94},
    {name:"suri",city:"hyderabad",age: 25,totalMarks:90},
    {name:"loki",city:"delhi",age: 24,totalMarks:98},
    {name:"srikanth",city:"mumbai",age: 27,totalMarks:97},
    {name:"kinni",city:"guntur",age: 28,totalMarks:96},
    {name:"kiran",city:"dcpl",age: 29,totalMarks:95},
    {name:"ramanna",city:"uppal",age: 20,totalMarks:99},
    {name:"surendra",city:"hyderabad",age: 25,totalMarks:90},
    {name:"lav",city:"delhi",age: 24,totalMarks:95},
    {name:"srinidhi",city:"mumbai",age: 27,totalMarks:98},
    {name:"dasu",city:"guntur",age: 28,totalMarks:94},
    {name:"kiran",city:"dcpl",age: 29,totalMarks:92},
    {name:"raju",city:"uppal",age: 20,totalMarks:98},

]
let filterstudents=students
// create row and 5td and tds in tr and put tr in tbody

let nopages=Math.ceil(filterstudents.length/8)

let currentpg=1

//below butttons 
for(let i=1;i<=nopages;i++){
    let btn=document.createElement("button")
    btn.innerText=i

    btn.addEventListener("click",function(){
        currentpg=i
        paginate(currentpg)
    })

    document.getElementById("nums").appendChild(btn)
}

// buttons

document.getElementById("next")
.addEventListener("click",function(){

    if(currentpg<nopages){
        currentpg++
        paginate(currentpg)
    }
    
})
document.getElementById("prev")
.addEventListener("click",function(){

    if(currentpg>1){

        currentpg--
        paginate(currentpg)
    }
    
})
// end buttons
//search 
document.getElementById("search")
.addEventListener("keyup",function(){

  
    let val = document.getElementById("search").value
    // console.log(val)

    filterstudents=students.filter(function(students){
        return students.name.includes(val)
        
    })
    currentpg=1
    paginate(1)

})

//calculate start and end and data display
function paginate(pageno){
    let startindex=(currentpg-1)*8

let endindex=startindex+8

let paginatedata=filterstudents.slice(startindex,endindex)

//buttons below
document.getElementById("info").innerText=currentpg+" of "+nopages

document.getElementById("tbody").innerHTML=""

for (let i=0;i<paginatedata.length;i++)
{
    let row = document.createElement("tr")

let notd = document.createElement("td")
notd.innerText=startindex+i+1

let nametd = document.createElement("td")
nametd.innerText=paginatedata[i].name

let agetd = document.createElement("td")
agetd.innerText=paginatedata[i].age

let citytd = document.createElement("td")
citytd.innerText=paginatedata[i].city

let markstd = document.createElement("td")
markstd.innerText=paginatedata[i].totalMarks

row.append(notd,nametd,agetd,citytd,markstd)

document.getElementById("tbody").appendChild(row)
}

}
paginate(currentpg)