const presentDate=new Date()
let months=['Jan','Feb',"Mar","Apr","May","Jun","jully","Aug","Sep","oct","Nov","dec"]
const pritDate=function(){
    console.log("today date is"+presentDate.toLocaleDateString());
}
const printMonth=function(){
    console.log("this month is"+months[presentDate.getMonth()]);
}
const getBatchInfo=function(){
    console.log("Technetium, W4D3, the topic for today is Nodejs module")
}
module.exports={printMonth,pritDate,getBatchInfo}

