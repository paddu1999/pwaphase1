function getfile(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function() {
    if (xhr.readyState===4 && xhr .status=="200") {
      callback(xhr .responseText);
    }
  }
  xhr .send(null);
}
getfile("dynamic.json",function (text) {
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  career(data.career);
  Education(data.Education);
  techicalskills(data.techicalskills);
})



var main1=document .querySelector('.main1');
var left=document .querySelector('.left');
var right=document .querySelector('.right');
function profile(pro){

  var image=document.createElement('img');
  image.src=pro.img;
  left.appendChild(image);
  main1.appendChild(left);

var name=document.createElement('h2');
name.textContent=pro.name;
left.appendChild(name);
main1.appendChild(left);
var hr=document.createElement('hr');
left.append(hr);

var email=document.createElement('h2');
email.textContent=pro.email;
left.appendChild(email);
main1.appendChild(left);

}
 function career(c){
   var rh=document.createElement("h1");
   rh.textContent="Resume Builder";
   right.append(rh);
   var hh=document.createElement("hr");
   right.append(hh);
   var rh1=document.createElement("h2");
    rh1.textContent="career object";
   right.append(rh1);
   var info=document.createElement("h1");
   info.textContent=c.info;
   right.append(info);
 }

    function Education(edu) {
   var Education=document.createElement("h1");
   Education.textContent="Education details";
   right.append(Education);
   var hr=document.createElement('hr');
   right.append(hr);

   var table=document.createElement('table');
   let row='';
   row +="<tr>"+"<th>" +"s.no" +"</th>"+"<th>"+"degree" +"</th>"+"<th>"+"institue" +"</th>"+"<th>"+"per" +"</th>"+"</tr>";
     for  (i in edu){
        row +="<tr>"+"<td>" +edu[i].sno +"</td>"+"<td>"+edu[i].degree +"</td>"+
        "<td>"+edu[i].institue +"</td>"+
        "<td>"+edu[i].per +"</td>"+
        "</tr>";

     }
  table.innerHTML=row;
  right.appendChild(table);
  main1.appendChild(right);

 }
 function techicalskills(i) {
   var hh=document.createElement("h2");
    hh.textContent="technical skills" ;
    right.append(hh);
    var ul=document.createElement(ul);
    right.append(ul);
    for(i in l){
      var li=document.createElement("li");
      li.textContent=l[i].info;
      ul.append(li);
    }
 }
